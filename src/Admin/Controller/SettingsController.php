<?php

namespace Admin\Controller;

use Admin\Form\SettingsForm;
use Shared\Entity\Settings;
use Shared\Repository\SettingsRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SettingsController extends AbstractController
{
    /**
     * @Route("/admin/settings", name="adm_settings")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        $this->settings();
        $group = $request->get('group', 'site');
        $listHtml = $this->processList($request, $group);

        return $this->render('AdminBundle::settings/index.html.php', [
            'listHtml' => $listHtml->getContent(),
        ]);
    }

    /**
     * @param Request $request
     * @param $group
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function processList(Request $request, $group)
    {
        $em = $this->getDoctrine();

        /** @var SettingsRepository $settingsRepository */
        $settingsRepository = $em->getRepository(Settings::class);
        $settings = $settingsRepository->getByGroup($group);

        return $this->render('AdminBundle::settings/partial/list.html.php', [
            'settings' => $settings,
        ]);
    }

    /**
     * @Route("/admin/setting/{key}/change", name="adm_settings_change")
     */
    public function change(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var SettingsRepository $postRepo */
        $postRepo = $em->getRepository(Settings::class);

        /** @var Settings[] */
        $settings = $postRepo->findBy(['key' =>$request->get('key')]);
        $setting = reset($settings);

        /** @var Form $form */
        $form = $this->createForm(SettingsForm::class, $setting, [
            'action' => $this->generateUrl('adm_settings_change', ['key' => $setting->getKey()]),
            'method' => 'POST',
        ]);

        $form->handleRequest($request);
        $formError = false;

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                try {
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($form->getData());
                    $em->flush();

                    $this->addFlash('info', 'Cool, setting changed!');
                    return $this->redirectToRoute('adm_settings');
                } catch (\Exception $e) {
                    $this->addFlash('error', $e->getMessage());
                    return $this->redirectToRoute('adm_settings_change', ['key' => $setting->getKey()]);
                }
            } else {
                $formError = $form->getErrors();
            }
        }

        return $this->render('AdminBundle::settings/change.html.php', [
            'form' => $form,
            'formError' => $formError,
            'setting' => $setting,
        ]);
    }
}
