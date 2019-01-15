<?php

namespace Admin\Service;

use Admin\Exception\Exception;
use Admin\Exception\FileUploadException;
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
    public function upload(UploadedFile $file, $directory = null)
    {
        $this->setPath($directory);
        $fileName = $this->getFileName($file);
        $path = $this->getPath();
        $targetDirectory = $this->getTargetDirectory().DIRECTORY_SEPARATOR.$path;

        try {
            $file->move($targetDirectory, $fileName);
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


}