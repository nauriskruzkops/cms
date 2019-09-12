<?php

namespace Admin\Service;

use Admin\Entity\Translation;
use Admin\Exception\Exception;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Admin\Entity\Settings;
use Admin\Repository\SettingsRepository;
use Doctrine\ORM\Query\Expr\Join;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\ParameterBag;

class SettingService
{
    const RETURN_OBJECT = 'object';
    const RETURN_ARRAY = 'array';

    /** @var EntityManager  */
    protected $em;

    /** @var array */
    protected static $cache;

    /** @var array */
    protected static $translationCache;

    /** @var ParameterBag */
    private $parameters;

    /**
     * SettingService constructor.
     * @param EntityManagerInterface $doctrine
     * @param $parameters
     */
    public function __construct(EntityManagerInterface $doctrine, ParameterBagInterface $parameters)
    {
        $this->em = $doctrine;
        $this->parameters = $parameters;
    }

    /**
     * @param $key
     *
     * @return Settings
     */
    public function valueAsObject($key)
    {
        /** @var SettingsRepository $repository */
        $repository = $this->em->getRepository(Settings::class);

        /** @var Settings $setting */
        $setting = $repository->findOneBy(['key' => $key]);

        return $setting;
    }

    /**
     * @param $key
     *
     * @param null $defaultValue
     * @param null $locale
     * @return string
     */
    public function value($key, $defaultValue = null, $locale = null)
    {
        $translations = $this->getAllSettingsTranslation();
        if (($setting = $this->valueAsObject($key))) {
            if ($locale) {
                if (key_exists($key, $translations)) {
                    return $translations[$key][$locale] ?? $setting->getValue();
                }
            }
            return $setting->getValue();
        }

        return $defaultValue;
    }

    /**
     * @param $key
     * @return array
     */
    public function values($key)
    {
        $return = null;
        if (($setting = $this->valueAsObject($key))) {
            $values = $setting->getValues();
            if (!$values->isEmpty()) {
                foreach ($values as $value) {
                    $return[$value->getKey()] = $value->getValue();
                }
            }
        }

        return $return;
    }

    /**
     * @return array
     */
    public function getChoiceLocales()
    {
        $languages = $this->values('languages');
        return array_flip($languages);
    }

    /**
     * @return array
     */
    public function getChoiceMenuPositions()
    {
        $languages = $this->values('manu_positions');
        return array_flip($languages);
    }

    /**
     * Theme config
     *
     * @return array
     * @throws Exception
     */
    public function theme()
    {
        $theme = $this->value('site_theme', 'default');
        try {
            return require sprintf('%s/../../Resources/views/%s/themeConfig.php', __DIR__,  $theme);
        } catch (\Exception $e) {
            throw new Exception(
                sprintf('Theme (%s) config was not found under %s',
                    $theme,
                    'src/Resources/views'
                )
            );
        }
    }

    /**
     * @return array
     */
    private function getAllSettingsTranslation()
    {
        if (!self::$translationCache) {
            $qb = $this->em->createQueryBuilder();
            $qb->select('t.key, t.locale, t.value')
                ->from(Settings::class, 's')
                ->join(Translation::class, 't', Join::WITH, 't.key = s.key')
                ->where($qb->expr()->eq('s.translatable', ':translatable'))
                ->andWhere($qb->expr()->eq('t.group', ':group'))
                //
                ->setParameter('translatable', true)
                ->setParameter('group', 'settings')
            ;

            $query = $qb->getQuery();
            $query->useQueryCache(true);
            $query->useResultCache((1 * 60));
            $results = $query->getArrayResult();
            $translations = [];
            foreach ($results as $result) {
                $translations[$result['key']][$result['locale']] = $result['value'];
            }
            self::$translationCache = $translations;
        }

        return self::$translationCache;
    }

    /**
     * @return ParameterBag
     */
    public function parameters()
    {
        return $this->parameters;
    }
}