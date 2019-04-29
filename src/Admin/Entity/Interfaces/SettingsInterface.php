<?php

namespace Admin\Entity\Interfaces;

use Admin\Entity\ProductSettings;

interface SettingsInterface {

    const TYPE_STRING = 'string';
    const TYPE_TEXT = 'text';
    const TYPE_INT = 'int';
    const TYPE_DATETIME = 'datetime';
    const TYPE_FILE = 'file';
    const TYPES = [
        self::TYPE_STRING,
        self::TYPE_TEXT,
        self::TYPE_INT,
        self::TYPE_DATETIME,
        self::TYPE_FILE
    ];

    /**
     * @return $this
     */
    public function getId();

    /**
     * @return $this
     */
    public function getObject();

    /**
     * @param object $object
     * @return ProductSettings
     */
    public function setObject($object);

    /**
     * @return $this
     */
    public function getCode();

    /**
     * @param mixed $code
     * @return ProductSettings
     */
    public function setCode($code);

    /**
     * @return $this
     */
    public function getType();

    /**
     * @param mixed $type
     * @return ProductSettings
     */
    public function setType($type);

    /**
     * @return $this
     */
    public function getValue();

    /**
     * @param mixed $value
     * @return ProductSettings
     */
    public function setValue($value);

    /**
     * @return $this
     */
    public function getValueText();

    /**
     * @param mixed $valueText
     * @return ProductSettings
     */
    public function setValueText($valueText);
}