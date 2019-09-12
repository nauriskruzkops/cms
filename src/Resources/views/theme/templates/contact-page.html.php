<?php

use Admin\Entity\Page;
use App\Helpers\PageHelper;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page $page
 * @var PageHelper $pageHelper
 */

$locale = $app->getRequest()->getLocale();
?>
<section class="contact-section page-block">
    <div class="auto-container">
        <div class="clearfix">
            <div class="form-column col-md-12 col-sm-12 col-xs-12">
                <h3 class="inner-column"><strong><span style="color: #34495e;">Atstājiet mums ziņu.</span></strong></h3>
                <h5 class="inner-column"><span style="color: #34495e;">Ja neizdodas sazināties ar kādu no mūsu darbiniekiem, atstājiet lūdzu ziņu, mēs atbildēsim.</span></h5>
                <div class="inner-column">&nbsp;</div>
                <div class="inner-column">
                    <div class="default-form contact-form">
                        <form id="contact-form" action="<?= $view['router']->path('message_sent', ['_locale' => $locale])?>" method="post">
                            <span style="display: none;"><input name="form_src_1" type="text" value="IGYUGWDQDBIBNDW" /></span>
                            <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                <input id="firstname" name="firstname" required="required" type="text" placeholder="* Jūsu vārds" data-msg="Ievadiet lūdzu Jūsu vārdu" />
                            </div>
                            <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                <input name="email" type="email" placeholder="* Jūsu e-pasts" data-msg="Norādiet lūdzu e-pastu" />
                            </div>
                            <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                <input name="phone" type="text" placeholder="* Kontakttālrunis" data-msg="Ievadiet lūdzu kontakttālruni" />
                            </div>
                            <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                <input name="subject" type="text" placeholder="Temats" />
                            </div>
                            <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                <textarea name="message" placeholder="Īss situācijas apraksts" data-msg="Īss situācijas apraksts"></textarea>
                                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                    <p class="small">* Lai mēs ar Jums varētu sazināties epastu vai tālruni jānorāda obligāti!</p>
                                    <span style="color: #34495e;">
                                        <button class="theme-btn btn-style-one" type="submit">Nosūtīt</button>
                                    </span>
                                </div>
                                <span style="display: none;"><input name="form_src_2" type="text" value="" /></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>