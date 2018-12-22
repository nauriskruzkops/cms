$(function () {

    if ($('.form-control-editor').length) {
        var tinymceConfig = {
            selector: '.form-control-editor',
            height: 500,
            menubar: false,
            inline: true,
            inline_styles: false,
            plugins: [
                'advlist autolink lists link image imagetools charmap print preview anchor textcolor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code help wordcount'
            ],
            toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code',
            content_css: [
                //'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                //'//stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            ],
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'clean'
        };

        tinymce.init(tinymceConfig);
    }
});