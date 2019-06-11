<?php

namespace Admin\Entity\Traits;

use Admin\Entity\Product;
use Admin\Entity\ProductSettings;
use Admin\Exception\ProductSettingsException;
use Doctrine\Common\Collections\ArrayCollection;

trait Setting {

    /**
     * @var ArrayCollection|ProductSettings[]
     *
     * @ORM\OneToMany(targetEntity="\Admin\Entity\ProductSettings", mappedBy="Product", cascade={"persist","remove"})
     */
    private $settings;


    /**
     * @return ArrayCollection|ProductSettings[]
     */
    public function getSettings()
    {
        return $this->settings;
    }

    /**
     * @param $code
     * @param null $default
     * @return \DateTime|string
     * @throws ProductSettingsException
     */
    public function getSetting($code, $default = null)
    {
        /** @var ProductSettings[]|ArrayCollection $settings */
        $settings = $this->settings->filter(function (ProductSettings $ProductSettings) use ($code) {
            if ($ProductSettings->getCode() === $code) {
                return $ProductSettings;
            }
        });

        if ($settings && !$settings->isEmpty()) {
            /** @var ProductSettings $setting */
            $setting = $settings->first();
            if ($setting->getType() == ProductSettings::TYPE_DATETIME) {
                try {
                    return new \DateTime($setting->getValue());
                } catch (\Exception $e) {
                    throw new ProductSettingsException('Unknown datetime format');
                }
            }
            return $setting->getValue();
        }

        return $default;
    }

    /**
     * @param ArrayCollection|ProductSettings[] $settings
     * @return Product
     */
    public function addSettings(ProductSettings $settings)
    {
        if (!$this->settings->contains($settings)) {
            $settings->setObject($this);
            $this->settings->add($settings);
        }

        return $this;
    }

    /**
     * @param ArrayCollection|ProductSettings[] $settings
     * @return Product
     */
    public function setSettings($settings)
    {
        foreach ($settings as $setting) {
            $this->addSettings($setting);
        }
        return $this;
    }

    /**
     * @param ProductSettings $settings
     * @return Product
     */
    public function removeSetting(ProductSettings $settings)
    {
        if ($this->settings->contains($settings)) {
            $this->settings->removeElement($settings);
        }
        return $this;
    }

    /**
     * @param ArrayCollection|ProductSettings[] $settings
     * @return Product
     */
    public function removeSettings($settings)
    {
        foreach ($settings as $setting) {
            $this->removeSetting($setting);
        }

        return $this;
    }
}