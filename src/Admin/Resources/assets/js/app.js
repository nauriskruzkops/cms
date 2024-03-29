
require('../scss/app.scss');

const $ = require('jquery');
global.$ = global.jQuery = $;

require('popper.js');
require('bootstrap');
require('bootstrap-datepicker');
//require('moment');

$(document).ready(function () {
    if ($("#SysNotifyMessages").length) {
        setTimeout(function () {
            $(".alert", $("#SysNotifyMessages")).removeClass('show').addClass('hide');
        }, 6000 );
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    var globalAjaxModal = $('#globalAjaxModal');
    globalAjaxModal.on('show.bs.modal', function (e) {
        var globalAjaxModalUrl = $(e.relatedTarget).attr('href');
        $(this)
            .addClass('modal-scrollfix')
            .find('.modal-content')
            .html('loading...')
            .load(globalAjaxModalUrl, function () {
                globalAjaxModal.removeClass('modal-scrollfix').modal('handleUpdate');
                var globalAjaxModalForm = $("form", globalAjaxModal);
                if (globalAjaxModalForm.length) {
                    $(globalAjaxModalForm, globalAjaxModal).submit(function (e) {
                        $.ajax({
                            type: "POST",
                            url: $(globalAjaxModalForm).attr('action'),
                            data: $(globalAjaxModalForm).serialize(),
                            success: function (data) {
                                globalAjaxModal.modal('hide');
                            }
                        });
                        e.preventDefault();
                    })
                }
            });
    });

});
