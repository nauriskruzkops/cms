<?php

namespace Admin\Model;

use Shared\Entity\Page;

class PageDefaultTemplate
{
    public function getTemplate(Page $page)
    {
        return $this->findByPageType($page);
    }

    private function findByPageType(Page $page)
    {
        if ($page->getTemplate() == Page::TEMPL_TEXT) {
            return '
                <section class="page-block">
                    <div class="auto-container">
                        <div class="container inner-container">
                            Page text here ... 
                        </div>
                    </div>
                </section>
            ';
        }
    }
}