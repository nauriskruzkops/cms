<?php

namespace Admin\Entity;

use Admin\Exception\PageSettingsException;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @Gedmo\Tree(type="nested")
 * @ORM\Entity(repositoryClass="Admin\Repository\PageRepository")
 * @ORM\Table(name="pages")
 */
class Page {

    use Traits\Traceability;
    use Traits\PageNested {
        Traits\PageNested::__construct as private __pnConstruct;
    }

    const TEMPL_ROOT = 'root';
    const TEMPL_LANDING = 'landing';
    const TEMPL_TEXT = 'text';
    const TEMPL_GALLERY = 'gallery';
    const TEMPL_PRODUCTS = 'product';
    const TEMPL_CUSTOM = 'custom';

    const TEMPLATES = [
      self::TEMPL_ROOT,
      self::TEMPL_LANDING,
      self::TEMPL_TEXT,
      self::TEMPL_GALLERY,
      self::TEMPL_PRODUCTS,
      self::TEMPL_CUSTOM,
    ];

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $title;

    /**
     * @Gedmo\Slug(fields={"title"}, unique=false)
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $template;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $content;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $locale;

    /**
     * @var ArrayCollection|PageSettings[]
     *
     * @ORM\OneToMany(targetEntity="\Admin\Entity\PageSettings", mappedBy="page", cascade={"persist","remove"})
     */
    private $settings;

    /**
     * @var ArrayCollection|PageBlocks[]
     *
     * @ORM\OneToMany(targetEntity="\Admin\Entity\PageBlocks", mappedBy="page", cascade={"persist","remove"})
     * @ORM\OrderBy({"sort" = "ASC"})
     */
    private $blocks;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $public;

    /**
     * Page constructor.
     */
    public function __construct()
    {
        $this->settings = new ArrayCollection();
        $this->blocks = new ArrayCollection();
        $this->public = false;
    }

    /**
     * @return Page
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return Page
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->getId().'#'.$this->getTitle();
    }

    /**
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     * @return Page
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return Page
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return string
     */
    public function getLocale()
    {
        return $this->locale;
    }

    /**
     * @param string $locale
     * @return Page
     */
    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }

    /**
     * @return ArrayCollection|PageSettings[]
     */
    public function getSettings()
    {
        return $this->settings;
    }

    /**
     * @param $code
     * @param null $default
     * @return \DateTime|string
     * @throws PageSettingsException
     */
    public function getSetting($code, $default = null)
    {
        /** @var PageSettings[]|ArrayCollection $settings */
        $settings = $this->settings->filter(function (PageSettings $pageSettings) use ($code) {
            if ($pageSettings->getCode() === $code) {
                return $pageSettings;
            }
        });

        if ($settings && !$settings->isEmpty()) {
            /** @var PageSettings $setting */
            $setting = $settings->first();
            if ($setting->getType() == PageSettings::TYPE_DATETIME) {
                try {
                    return new \DateTime($setting->getValue());
                } catch (\Exception $e) {
                    throw new PageSettingsException('Unknown datetime format');
                }
            }
            return $setting->getValue();
        }

        return $default;
    }

    /**
     * @param ArrayCollection|PageSettings[] $settings
     * @return Page
     */
    public function addSettings(PageSettings $settings)
    {
        if (!$this->settings->contains($settings)) {
            $settings->setPage($this);
            $this->settings->add($settings);
        }

        return $this;
    }

    /**
     * @param ArrayCollection|PageSettings[] $settings
     * @return Page
     */
    public function setSettings($settings)
    {
        foreach ($settings as $setting) {
            $this->addSettings($setting);
        }
        return $this;
    }

    /**
     * @param PageSettings $settings
     * @return Page
     */
    public function removeSetting(PageSettings $settings)
    {
        if ($this->settings->contains($settings)) {
            $this->settings->removeElement($settings);
        }
        return $this;
    }

    /**
     * @param ArrayCollection|PageSettings[] $settings
     * @return Page
     */
    public function removeSettings($settings)
    {
        foreach ($settings as $setting) {
            $this->removeSetting($setting);
        }

        return $this;
    }

    /**
     * @return ArrayCollection|PageBlocks[]
     */
    public function getBlocks()
    {
        return $this->blocks;
    }

    /**
     * @param ArrayCollection|PageBlocks[] $settings
     * @return Page
     */
    public function addBlocks(PageBlocks $block)
    {
        if (!$this->blocks->contains($block)) {
            $block->setPage($this);
            $this->blocks->add($block);
        }

        return $this;
    }

    /**
     * @param ArrayCollection|PageBlocks[] $blocks
     * @return Page
     */
    public function setBlocks($blocks)
    {
        $this->blocks = new ArrayCollection();
        foreach ($blocks as $block) {
            $this->addBlocks($block);
        }

        return $this;
    }

    /**
     * @param ArrayCollection|PageBlocks[] $block
     * @return Page
     */
    public function removeBlock($block)
    {
        if ($this->blocks->contains($block)) {
            $this->blocks->removeElement($block);
        }

        return $this;
    }

    /**
     * @param ArrayCollection|PageBlocks[] $blocks
     * @return Page
     */
    public function removeBlocks($blocks)
    {
        foreach ($blocks as $block) {
            $this->removeBlock($block);
        }
        $this->blocks = new ArrayCollection();

        return $this;
    }

    /**
     * @return string
     */
    public function getTemplate()
    {
        return $this->template;
    }

    /**
     * @param string $template
     * @return Page
     */
    public function setTemplate($template)
    {
        $this->template = $template;

        return $this;
    }

    /**
     * @return bool
     */
    public function isPublic()
    {
        return $this->public;
    }

    /**
     * @param bool $public
     * @return Page
     */
    public function setPublic($public)
    {
        $this->public = $public;

        return $this;
    }

}