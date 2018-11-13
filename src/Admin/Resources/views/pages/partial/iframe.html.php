<?php
/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 */
$view->extend('AdminBundle::layout/page-iframe.html.php');
?>
<script type="text/javascript">

    tinymce.init({
        selector: '#inline_edit_content',
        height: 500,
        menubar: false,
        inline: true,
        inline_styles : false,
        plugins: [
            'advlist autolink lists link image imagetools charmap print preview anchor textcolor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code help wordcount'
        ],
        toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code',
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            '//getbootstrap.com/docs/4.1/examples/carousel/carousel.css',
        ],
        image_title: true,
        automatic_uploads: true,
        file_picker_types: 'image',
        file_picker_callback: function(cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.onchange = function() {
                var file = this.files[0];
                var reader = new FileReader();
                reader.onload = function () {
                    var id = 'blobid' + (new Date()).getTime();
                    var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                    var base64 = reader.result.split(',')[1];
                    var blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);
                    cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
            };
            input.click();
        },
        images_upload_credentials: true,
        images_upload_handler: function (blobInfo, success, failure) {
            var xhr, formData;
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', '<?= $view['router']->path('adm_upload_from_post') ?>');
            xhr.onload = function() {
                var json;
                if (xhr.status !== 200) {
                    failure('HTTP Error: ' + xhr.status);
                    return;
                }
                json = JSON.parse(xhr.responseText);
                if (!json || typeof json.location !== 'string') {
                    failure('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                success(json.location);
            };
            formData = new FormData();

            if( typeof(blobInfo.blob().name) !== undefined ) {
                fileName = blobInfo.blob().name;
            } else {
                fileName = blobInfo.filename();
            }
            formData.append('file', blobInfo.blob(), fileName);
            xhr.send(formData);
        },
        powerpaste_word_import: 'clean',
        powerpaste_html_import: 'clean',
        link_list: function(success) {
            var linkItems = [];
            $.getJSON('<?= $view['router']->path('adm_menu_sitemap_json') ?>', function( data ){
                success(data);
            });
        }
    });

</script>

<div id="inline_edit_content">
    <?= $content ?>
</div>
