<?php

namespace Admin\Controller\Cms;

use Admin\Exception\FileUploadException;
use Admin\Service\FileUploader;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UploadController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/admin/upload/from/post", name="adm_upload_from_post")
     * @param Request $request
     * @param FileUploader $fileUploader
     * @return Response
     */
    public function fromPost(Request $request, FileUploader $fileUploader)
    {
        /** @var \Symfony\Component\HttpFoundation\FileBag $files */
        $files = $request->files;

        foreach ($files as $file) {
            try {
                $fileName = $fileUploader->upload($file);
                $status = 'ok';
                $message = '';
                $location = $this->getParameter('upload_public_path').$fileName;
            } catch (FileUploadException $e) {
                $status = 'error';
                $message = $e->getMessage();
                $location = null;
            }
        }

        return new JsonResponse([
            'status' => $status,
            'message' => $message,
            'location' => $location
        ]);
    }
}