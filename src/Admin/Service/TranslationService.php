<?php

namespace Admin\Service;

use Admin\Entity\Translation;
use Admin\Repository\TranslationRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Admin\Entity\Category;

class TranslationService
{
    /** @var EntityManager  */
    protected $em;

    /** @var array */
    protected static $cache;

    /** @var array  */
    protected $translations = [];

    /**
     * SettingService constructor.
     * @param EntityManager|null $doctrine
     */
    public function __construct(EntityManagerInterface $doctrine = null)
    {
        $this->em = $doctrine;
        $this->getAllTranslations();
    }

    /**
     * @param $key
     * @param $locale
     * @param $group
     * @return mixed|null
     */
    public function getTranslation($key, $locale, $group)
    {
        $key = trim($key);
        $locale = (string)$locale;
        if (array_key_exists($group, $this->translations)) {
            $find = implode(':', [$locale, $key]);
            if (array_key_exists($find, $this->translations[$group])) {
                return $this->translations[$group][$find] ?? $key;
            }
        }

        $this->insertTranslation($key, $locale, $group);

        return $key;
    }

    /**
     * @return Category[]|array
     */
    public function getAllTranslations()
    {
        if (empty($this->translations)) {
            $translations = [];
            /** @var TranslationRepository $repository */
            $repository = $this->em->getRepository(Translation::class);

            /** @var Translation[] $data */
            $data = $repository->findAll();
            foreach ($data as $translation) {
                $translations
                [$translation->getGroup()]
                [implode(':', [$translation->getLocale(), $translation->getKey()])] = $translation->getValue();
            }

            $this->translations = $translations;
        }

        return $this->translations;
    }

    /**
     * @param $key
     * @param $locale
     * @param $group
     * @return Translation
     */
    public function insertTranslation($key, $locale, $group)
    {
        try {
            $translation = new Translation();
            $translation->setKey($key);
            $translation->setLocale((string)$locale);
            $translation->setGroup($group);

            $this->em->persist($translation);
            $this->em->flush();

            $this->translations
                [$group]
                    [implode(':', [(string)$locale, $key])] = $key;

        } catch (\Exception $e) {
            var_dump($e->getMessage());
        }

        return $translation;
    }
}