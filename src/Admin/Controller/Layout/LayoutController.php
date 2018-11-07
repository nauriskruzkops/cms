<?php

namespace Admin\Controller\Layout;

use Symfony\Component\Routing\Annotation\Route;

class LayoutController extends \Admin\Controller\AbstractController
{
    public function menu()
    {
        return $this->render('AdminBundle::layout/menu.html.php', [

        ]);
    }

    public function header()
    {
        return $this->render('AdminBundle::layout/header.html.php', [

        ]);
    }

    public function breadcrumb()
    {
        return $this->render('AdminBundle::layout/breadcrumb.html.php', [

        ]);
    }

    public function footer()
    {
        return $this->render('AdminBundle::layout/footer.html.php', [

        ]);
    }



}
