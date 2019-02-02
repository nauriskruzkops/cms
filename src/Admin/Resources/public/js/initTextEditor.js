$(function () {
    var tinymceConfig = {};

    if ($('.form-control-editor').length) {
        tinymceConfig = {
            selector: '.form-control-editor',
            height: 600,
            menubar: false,
            inline: true,
            inline_styles : false,
            relative_urls : false,
            remove_script_host : true,
            plugins: [
                'advlist autolink lists link image imagetools charmap print preview anchor textcolor fullpage',
                'searchreplace visualblocks code fullscreen pagebreak',
                'insertdatetime media table contextmenu paste code help wordcount template'
            ],
            toolbar: 'insert | undo redo | styleselect template | bold italic forecolor backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat pagebreak | code visualblocks preview',
            content_css: [
                //'/assets/theme/default/vendor/bootstrap/css/bootstrap.min.css',
                //'/assets/theme/default/css/bootstrap-overwrite.css',
                //'/assets/theme/default/css/theme-base.css',
                //'/assets/theme/default/css/tools.css',
                "/assets/theme/theme/css/bootstrap.css?v1",
                "/assets/theme/theme/plugins/revolution/css/settings.css?v1",
                "/assets/theme/theme/plugins/revolution/css/layers.css?v1",
                "/assets/theme/theme/plugins/revolution/css/navigation.css?v1",
                "/assets/theme/theme/css/style.css?v1",
                "/assets/theme/theme/css/style-overwrite.css?v1",
                "/assets/theme/theme/css/responsive.css?v1",

            ],
            table_default_attributes: {
                border: '0'
            },
            pagebreak_split_block: true,
            plugin_preview_width: 1000,
            link_class_list: [
                {title: 'Simple link', value: ''},
                {title: 'Button link', value: 'btn btn-default'},
                {title: 'Button link', value: 'btn btn-primary'},
                {title: 'Button link', value: 'theme-btn btn-style-one'},
                {title: 'Button link', value: 'theme-btn btn-style-two'},
                {title: 'Button link', value: 'theme-btn btn-style-three'},
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
                xhr.open('POST', '/admin/upload/from/post');
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
                $.getJSON('/admin/menu/sitemap/json', function( data ){
                    success(data);
                });
            },
            style_formats: [
                {title: 'Headers', items: [
                        {title: 'Header 1', format: 'h1'},
                        {title: 'Header 2', format: 'h2'},
                        {title: 'Header 3', format: 'h3'},
                        {title: 'Header 4', format: 'h4'},
                        {title: 'Header 5', format: 'h5'},
                        {title: 'Header 6', format: 'h6'}
                    ]},
                {title: 'Inline', items: [
                        {title: 'Bold', icon: 'bold', format: 'bold'},
                        {title: 'Italic', icon: 'italic', format: 'italic'},
                        {title: 'Underline', icon: 'underline', format: 'underline'},
                        {title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough'},
                        {title: 'Superscript', icon: 'superscript', format: 'superscript'},
                        {title: 'Subscript', icon: 'subscript', format: 'subscript'},
                        {title: 'Code', icon: 'code', format: 'code'}
                    ]},
                {title: 'Blocks', items: [
                        {title: 'Paragraph', format: 'p'},
                        {title: 'Blockquote', format: 'blockquote'},
                        {title: 'Div', format: 'div'},
                        {title: 'Pre', format: 'pre'},
                    ]},
                {title: 'Alignment', items: [
                        {title: 'Left', icon: 'alignleft', format: 'alignleft'},
                        {title: 'Center', icon: 'aligncenter', format: 'aligncenter'},
                        {title: 'Right', icon: 'alignright', format: 'alignright'},
                        {title: 'Justify', icon: 'alignjustify', format: 'alignjustify'},
                        {
                            title: 'Image left',
                            selector: 'img', icon: 'alignleft',
                            styles: {'float': 'left', 'margin': '0 10px 0 10px'}
                        },
                        {
                            title: 'Image right',
                            selector: 'img', icon: 'alignright',
                            styles: {'float': 'right', 'margin': '0 0 10px 10px'}
                        }
                    ]}
            ],
            templates: '/admin/post/templates'
        };

        tinymce.init(tinymceConfig);
    }
});

