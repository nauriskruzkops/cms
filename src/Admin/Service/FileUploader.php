<?php

namespace Admin\Service;

use Admin\Exception\FileUploadException;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{
    /** @var string  */
    private $targetDirectory;

    /**
     * FileUploader constructor.
     * @param $targetDirectory
     */
    public function __construct(string $targetDirectory)
    {
        $this->targetDirectory = $targetDirectory;
    }

    /**
     * @param UploadedFile $file
     * @return string
     * @throws FileUploadException
     */
    public function upload(UploadedFile $file)
    {
        $fileName = md5(uniqid()).'.'.$file->guessExtension();

        try {
            $file->move($this->getTargetDirectory(), $fileName);
        } catch (FileException $e) {
            throw new FileUploadException($e->getMessage(), $e->getCode());
        }

        return $fileName;
    }

    /**
     * @return string
     */
    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }

}