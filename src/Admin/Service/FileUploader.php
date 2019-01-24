<?php

namespace Admin\Service;

use Admin\Exception\Exception;
use Admin\Exception\FileUploadException;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{
    /** @var string  */
    private $targetDirectory;

    /** @var string */
    private $path;

    /** @var string */
    private $filename;

    /** @var StorageService  */
    private $storageService;

    /** @var object */
    private $reference;

    /**
     * FileUploader constructor.
     * @param string $targetDirectory
     * @param StorageService $storageService
     */
    public function __construct(string $targetDirectory, StorageService $storageService)
    {
        $this->targetDirectory = $targetDirectory;
        $this->storageService = $storageService;
    }

    /**
     * @param UploadedFile $file
     * @param null $directory
     * @return string
     * @throws FileUploadException
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function upload(UploadedFile $file, $directory = null)
    {
        $this->setPath($directory);
        $fileName = $this->getFileName($file);
        $path = $this->getPath();
        $targetDirectory = $this->getTargetDirectory().DIRECTORY_SEPARATOR.$path;

        try {
            $file->move($targetDirectory, $fileName);
            $fullFilePath = $this->getFullFilePath();

            $this->storageService->register($fullFilePath, $this->getReference());

            return $this->getFullFilePath();
        } catch (FileException|Exception $e) {
            throw new FileUploadException($e->getMessage(), $e->getCode());
        }
    }

    /**
     * @param UploadedFile $file
     * @return string
     */
    private function getFileName(UploadedFile $file)
    {
        $this->filename = md5(uniqid()).'.'.$file->guessExtension();

        return $this->filename;
    }

    /**
     * @return string
     */
    public function getPath():? string
    {
        return $this->path;
    }

    /**
     * @param string $path
     * @return FileUploader
     */
    public function setPath(?string $path): FileUploader
    {
        if (!empty($path)) {
            $this->path = trim($path , DIRECTORY_SEPARATOR);
            $this->path .= DIRECTORY_SEPARATOR;
        }

        return $this;
    }

    /**
     * @return string
     * @throws Exception
     */
    public function getFullFilePath()
    {
        if (!$this->filename) {
            throw new Exception('File name was empty');
        }
        return $this->path . $this->filename;
    }

    /**
     * @return string
     */
    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }

    /**
     * @return object
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * @param object $reference
     * @return FileUploader
     */
    public function setReference($reference): FileUploader
    {
        $this->reference = $reference;

        return $this;
    }

}