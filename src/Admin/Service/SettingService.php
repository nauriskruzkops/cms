<?php

namespace Admin\Service;

use Doctrine\ORM\EntityManager;
use Shared\Entity\Settings;
use Shared\Repository\SettingsRepository;

class SettingService
{
    const RETURN_OBJECT = 'object';
    const RETURN_ARRAY = 'array';

    /** @var EntityManager  */
    protected $em;

    /** @var array */
    protected static $cache;

    /**
     * SettingService constructor.
     * @param EntityManager|null $doctrine
     */
    public function __construct(EntityManager $doctrine = null)
    {
        $this->em = $doctrine;
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
     * @return string
     */
    public function value($key, $defaultValue = null)
    {
        if (($setting = $this->valueAsObject($key))) {
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


}