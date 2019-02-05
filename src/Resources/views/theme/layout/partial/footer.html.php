<?php
/**
 * @var \Shared\Entity\MenuItems[] $mainMenuItems
 * @var \App\Helpers\MenuHelper $menuHelper
 * @var \Shared\Entity\Menu $footerMenu1
 * @var \Shared\Entity\Menu $footerMenu2
 */

$menuHelper = $view['menu'];
$mainMenu = $view['menu']->getMainTopMenu();
$mainMenuItems = $mainMenu['items'] ?? [];

?>

<footer class="main-footer">
    <div class="auto-container">
        <?php /*
        <div class="upper-box">
            <ul class="list-style-one clearfix">
                <li><span class="icon flaticon-pin"></span><?= $this->escape($view['settings']->value('address_primary')) ?></li>
                <li><span class="icon flaticon-envelope-1"></span>Epasts : <br><?= $this->escape($view['settings']->value('primary_email')) ?></li>
                <li><span class="icon flaticon-technology-2"></span>Tālrunis : <br><?= $this->escape($view['settings']->value('primary_phone')) ?></li>
            </ul>
        </div>
         */?>
        <div class="widgets-section">
            <div class="row clearfix">
                <div class="big-column col-md-6 col-sm-12 col-xs-12">
                    <div class="row clearfix">
                        <div class="footer-column col-md-7 col-sm-6 col-xs-12">
                            <div class="footer-widget logo-widget">
                                <div class="logo">
                                    <a href="/">
                                        <img src="/assets/images/logo-white.png" alt="<?= $this->escape($view['settings']->value('site_title')) ?>">
                                    </a>
                                </div>
                                <div class="text"><?= $this->escape($view['settings']->value('site_description')) ?></div>
                            </div>
                        </div>
                        <?php if (($footerMenu1 = $menuHelper->getMenu('FOOTER_MENU_1'))) :?>

                            <div class="footer-column col-md-5 col-sm-6 col-xs-12">
                                <div class="footer-widget links-widget">
                                    <h2><?= $this->escape($footerMenu1->getTitle())?></h2>
                                    <div class="widget-content">
                                        <ul class="list">
                                            <?php foreach ($footerMenu1->getItems()->filter(function ($item) { return $item->isEnabled(); }) as $fMenuItem) :?>
                                                <li><a href="<?= $this->escape($fMenuItem->getSlug())?>"><?= $this->escape($fMenuItem->getTitle())?></a></li>
                                            <?php endforeach;?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <?php endif;?>
                    </div>
                </div>

                <div class="big-column col-md-6 col-sm-12 col-xs-12">
                    <div class="row clearfix">

                        <?php if (($footerMenu2 = $menuHelper->getMenu('FOOTER_MENU_2'))) :?>
                            <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                                <div class="footer-widget links-widget">
                                    <h2><?= $this->escape($footerMenu2->getTitle())?></h2>
                                    <div class="widget-content">
                                        <ul class="list">
                                            <?php foreach ($footerMenu2->getItems()->filter(function ($item) { return $item->getEnabled(); }) as $fMenuItem) :?>
                                                <li><a href="<?= $this->escape($fMenuItem->getSlug())?>"><?= $this->escape($fMenuItem->getTitle())?></a></li>
                                            <?php endforeach;?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <?php endif;?>


                            <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                                <ul class="social-icon-two">
                                    <?php if(!empty($view['settings']->value('social_facebook'))) :?>
                                        <li><a href="<?= $this->escape($view['settings']->value('social_facebook'))?>"><span class="fa fa-facebook"></span></a></li>
                                    <?php endif;?>
                                    <?php if(!empty($view['settings']->value('social_twitter'))) :?>
                                        <li><a href="<?= $this->escape($view['settings']->value('social_twitter'))?>"><span class="fa fa-twitter"></span></a></li>
                                    <?php endif;?>
                                    <?php if(!empty($view['settings']->value('social_instagram'))) :?>
                                        <li><a href="<?= $this->escape($view['settings']->value('social_instagram'))?>"><span class="fa fa-instagram"></span></a></li>
                                    <?php endif;?>
                                    <?php if(!empty($view['settings']->value('social_youtube'))) :?>
                                        <li><a href="<?= $this->escape($view['settings']->value('social_youtube'))?>"><span class="fa fa-youtube"></span></a></li>
                                    <?php endif;?>
                                </ul>
                                <?php if (false) :?>
                                    <div class="footer-widget newsletter-widget">
                                        <h2>Newsletter</h2>
                                        <div class="widget-content">
                                            <div class="text">Get our offers & News in your inbox</div>
                                            <div class="emailed-form">
                                                <form method="post" action="/">
                                                    <div class="form-group">
                                                        <input type="email" name="email" value="" placeholder="Email address" required>
                                                        <button type="submit" class="theme-btn btn-style-one">Subscribe now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif;?>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="auto-container">
            <div class="row clearfix">
                <div class="column col-md-6 col-sm-12 col-xs-12">
                    <div class="small">Copyright &copy; Crocolab.lv / Vitbuve SIA  <?= date('Y')?>. All rights reserved. </div>
                </div>
            </div>
        </div>
    </div>
</footer>