<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Human resource management system">
    <meta name="author" content="nauris.kruzkops@gmail.com">
    <title>Crocolab CMS (Content Managament System)</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">

    <link href="<?= $view['assets']->getUrl('css/tools.css', 'admin') ?>" rel="stylesheet">
    <link href="<?= $view['assets']->getUrl('vendor/font-awesome/css/font-awesome.min.css', 'admin') ?>" rel="stylesheet" type="text/css">
    <link href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" rel="stylesheet" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="<?= $view['assets']->getUrl('css/theme-base.css', 'admin') ?>" rel="stylesheet">
    <link href="<?= $view['assets']->getUrl('css/bootstrap-overwrite.css', 'admin') ?>" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
    <script src="<?= $view['assets']->getUrl('vendor/ckeditor/ckeditor.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/ckeditor/adapters/jquery.js', 'admin') ?>"></script>

</head>
<body class="fixed-nav">
    <div id="wrapper">
        <?php $view['slots']->output('_content') ?>
    </div>


    <script src="<?= $view['assets']->getUrl('vendor/moment.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/bootstrap-datepicker/bootstrap-datetimepicker.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('js/main.js', 'admin') ?>"></script>
</body>
</html>


