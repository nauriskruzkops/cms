require('../scss/app.scss');

const $ = require('jquery');


var selectItems = [];
var selectedAction = false;

$(function () {

    var StorageContainer = $('#storage');
    if ($(StorageContainer).length) {
        $('[data-action=start-select]', StorageContainer).click(function () {
            var self = this;
            if (selectedAction) {
                selectedAction = false;
                $(self).html('Select');
            } else {
                selectedAction = true;
                $(self).html('Stop selection');
            }
        });

        $('[data-target=storage-item]', StorageContainer).click(function () {
            var self = this;
            var image = $('img', self);

            if (selectedAction) {
                hidePreviewImage();
                if (selectItems.indexOf(($(image).attr('data-id'))) >= 0) {
                    $(self).removeClass('selected');
                    delete selectItems[selectItems.indexOf(($(image).attr('data-id')))];
                } else {
                    $(self).addClass('selected');
                    selectItems.push($(image).attr('data-id'));
                }
                selectChanged();
            } else {
                showPreviewImage(self);
            }
        });

        $('[data-action=unselect-all]', StorageContainer).click(function () {
            var self = this;
            $('[data-target=storage-item].selected', StorageContainer).removeClass('selected');
            selectItems = [];
            selectChanged();
        });

        $('[data-target=storage-item]', StorageContainer).click(function () {
            var self = this;
            if (selectedAction === false && selectItems.length === 0) {

            }
        });
    }
});

function showPreviewImage(object) {
    hidePreviewImage();
    var img = $('img', object);

    var ShowImagePreview = $('<div class="image-preview">');
    var ShowImage = $('<img>');
        ShowImage.attr('src', $(img).attr('src'));

    $(ShowImage).appendTo(ShowImagePreview);
    $(ShowImagePreview).appendTo($('#storage .storage-image'));

    var a = function() {
        var bonus = $('#mainTopNav').height() + 20;
        var b = $(window).scrollTop();
        var d = $("#scroller-anchor").offset().top - bonus;
        if (b > d) {
            ShowImagePreview.css({position:"fixed", top: ""+bonus+"px"});
        } else {
            ShowImagePreview.css({position:"relative", top:""})
        }
    };
    $(window).scroll(a);a();

}

function hidePreviewImage() {
    $('#storage .storage-image .image-preview').remove();
    $('#storage .storage-image .image-options').remove();
}

function selectChanged() {
    var filtered = selectItems.filter(function (el) {
        return el != null;
    });
    selectItems = filtered;
    console.log(selectItems);
    $('[data-target=total-selected]').html(selectItems.length);
}
