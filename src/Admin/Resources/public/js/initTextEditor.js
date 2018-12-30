$(function () {
    var tinymceConfig = {};

    if ($('.form-control-editor').length) {
        tinymceConfig = {
            selector: '.form-control-editor',
            height: 600,
            menubar: false,
            inline: true,
            inline_styles : false,
            plugins: [
                'advlist autolink lists link image imagetools charmap print preview anchor textcolor fullpage',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code help wordcount template'
            ],
            toolbar: 'insert | undo redo |  formatselect styleselect template | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code visualblocks',
            content_css: [
                '/assets/vendor/bootstrap/css/bootstrap.min.css',
                '/assets/css/bootstrap-overwrite.css',
                '/assets/css/theme-base.css',
                '/assets/css/tools.css',
            ],
            table_default_attributes: {
                border: '0'
            },
            link_class_list: [
                {title: 'Simple link', value: ''},
                {title: 'Button link', value: 'btn btn-sm btn-link'},
                {title: 'Button Small', value: 'btn btn-sm btn-default'},
                {title: 'Button Normal', value: 'btnbtn-default'},
                {title: 'Button Big', value: 'btn btn-lg btn-default'},
                {title: 'Button Small', value: 'btn btn-sm btn-primary'},
                {title: 'Button Normal', value: 'btn btn-primary'},
                {title: 'Button Big', value: 'btn btn-lg btn-primary'},
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
                {title: 'Bold text', inline: 'b'},
                {title: 'Text grey', inline: 'span', classes: 'text-black-50'},
                {title: 'Text white', inline: 'span', classes: 'text-white-50'},
                {title: 'Text warning', inline: 'span', classes: 'text-warning'},
                {title: 'Text danger', inline: 'span', classes: 'text-danger'},

                {title: 'Paragraph grey', block: 'p', classes: 'text-muted'},
                {title: 'Paragraph', block: 'p', classes: 'text-white-50'},

                {title: 'Block grey', block: 'div', classes: 'text-muted'},
                {title: 'Block white', block: 'div', classes: 'text-white-50'},

                {title: 'Table init', selector: 'table', classes: 'table'},
                {title: 'Table dark', selector: 'table', classes: 'table-dark'},
                {title: 'Table hover', selector: 'table', classes: 'table-hover'},
                {title: 'Table striped', selector: '', classes: 'table-striped'},
                {title: 'Table borders', selector: '', classes: 'table-bordered'},
                {title: 'Table without borders', selector: 'table', classes: 'table-borderless'},
                {
                    title: 'Image move left',
                    selector: 'img',
                    styles: {'float': 'left', 'margin': '0 10px 0 10px'}
                },
                {
                    title: 'Image move right',
                    selector: 'img',
                    styles: {'float': 'right', 'margin': '0 0 10px 10px'}
                }
            ],
            templates: [
                {title: 'Row with single columns', description: 'Row with single columns', content: '' +
                        '<div class="clearfix"></div>\n' +
                        '<div class="row">\n' +
                        '    <div class="col"><p class="lead">text</p></div>\n' +
                        '</div>'
                },
                {title: 'Row with two columns', description: 'Row with two columns', content: '' +
                        '<div class="clearfix"></div>\n' +
                        '<div class="row">\n' +
                        '    <div class="col-6"><h2>1</h2><p class="lead">text</p></div>\n' +
                        '    <div class="col-6"><h2>2</h2><p class="lead">text</p></div>\n' +
                        '</div>'
                },
                {title: 'Row with three columns', description: 'Row with three columns', content: '' +
                        '<div class="clearfix"></div>\n' +
                        '<div class="row">\n' +
                        '    <div class="col-4"><h2>1</h2><p class="lead">text</p></div>\n' +
                        '    <div class="col-4"><h2>2</h2><p class="lead">text</p></div>\n' +
                        '    <div class="col-4"><h2>3</h2><p class="lead">text</p></div>\n' +
                        '</div>'
                },
                {title: 'Line featurette-divider', description: 'Line featurette-divider', content: '' +
                        '<hr class="featurette-divider" /></div>'
                },
            ]
        };

        tinymce.init(tinymceConfig);
    }
});

