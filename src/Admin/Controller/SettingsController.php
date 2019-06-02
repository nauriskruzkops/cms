<?php

namespace Admin\Controller;

use Admin\Entity\Translation;
use Admin\Form\SettingsForm;
use Admin\Entity\Settings;
use Admin\Repository\SettingsRepository;
use Admin\Service\TranslationService;
use Exception;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SettingsController extends AbstractController
{
    /**
     * @Route("/settings", name="adm_settings")
     * @param Request $request
     * @return Response
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
     * @return Response
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
     * @Route("/setting/{key}/change", name="adm_settings_change")
     * @param Request $request
     * @param TranslationService $translationService
     * @return RedirectResponse|Response
     */
    public function change(Request $request, TranslationService $translationService)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var SettingsRepository $postRepo */
        $postRepo = $em->getRepository(Settings::class);

        /** @var Settings[] */
        $settings = $postRepo->findBy(['key' =>$request->get('key')]);
        /** @var Settings $setting */
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
                    $setting = $form->getData();
                    $em->persist($setting);
                    $em->flush();

                    if ($setting->getTranslatable()) {
                        $data = $request->request->all();
                        $translationService->changeTranslation(
                            Translation::GROUP_SETTINGS,
                            $setting->getKey(),
                            $data['settings_form']['translation']
                        );
                    }

                    $this->addFlash('info', 'Cool, setting changed!');

                    if ($request->get('btn_save_exit', 1) === 1) {
                        return $this->redirectToRoute('adm_settings_change', ['group' => $setting->getGroup(), 'key' => $setting->getKey()]);
                    } else {
                        return $this->redirectToRoute('adm_settings', ['group' => $setting->getGroup()]);
                    }

                } catch (Exception $e) {
                    $this->addFlash('error', $e->getMessage());

                    return $this->redirectToRoute('adm_settings_change', ['key' => $setting->getKey()]);
                }
            } else {
                $formError = $form->getErrors();
                $this->addFlash('error', $formError->current()->getMessage());

                return $this->redirectToRoute('adm_settings_change', ['key' => $setting->getKey()]);
            }
        }

        return $this->render('AdminBundle::settings/change.html.php', [
            'form' => $form,
            'formError' => $formError,
            'setting' => $setting,
        ]);
    }
}
