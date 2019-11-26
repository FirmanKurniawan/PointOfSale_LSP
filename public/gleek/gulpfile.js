const gulp = require('gulp');
const prettify = require('gulp-html-prettify');
const cssbeautify = require('gulp-cssbeautify');
const beautify = require('gulp-beautify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');
const gulpSequence = require('gulp-sequence');
const runSequence = require('run-sequence');


// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];
  
  ///////////////////
  //tasks for global
  //////////////////

// make plugin ready to use
gulp.task('plugin', function() {
    // Jquery
    gulp.src('./node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery/'));

    // Bootstrap
    gulp.src('node_modules/bootstrap/scss/*.scss').pipe(gulp.dest('./gleek/assets/plugins/bootstrap/scss/'));
    gulp.src('node_modules/bootstrap/scss/mixins/*.scss').pipe(gulp.dest('./gleek/assets/plugins/bootstrap/scss/mixins/'));
    gulp.src('node_modules/bootstrap/scss/utilities/*.scss').pipe(gulp.dest('./gleek/assets/plugins/bootstrap/scss/utilities/'));
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap/js/'));

    // Bootstrap rtl
    gulp.src('node_modules/bootstrap-v4-rtl/scss/*.scss').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-v4-rtl/scss/'));
    gulp.src('node_modules/bootstrap-v4-rtl/scss/mixins/*.scss').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-v4-rtl/scss/mixins/'));
    gulp.src('node_modules/bootstrap-v4-rtl/scss/utilities/*.scss').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-v4-rtl/scss/utilities/'));

    //AmCharts
    gulp.src('node_modules/amcharts3/amcharts/amcharts.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/'));
    gulp.src('node_modules/amcharts3/amcharts/pie.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/'));
    gulp.src('node_modules/amstock3/amcharts/amstock.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/'));
    gulp.src('node_modules/amstock3/amcharts/serial.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/'));
    gulp.src('node_modules/ammap3/ammap/ammap.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/'));
    gulp.src('node_modules/ammap3/ammap/maps/js/worldLow.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/'));
    gulp.src('node_modules/amstock3/amcharts/plugins/dataloader/dataloader.min.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/plugins/'));
    gulp.src('node_modules/amstock3/amcharts/plugins/export/export.min.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/plugins/'));
    gulp.src('node_modules/amstock3/amcharts/plugins/export/libs/fabric.js/fabric.min.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/plugins/export/libs/fabric.js/'));
    gulp.src('node_modules/amstock3/amcharts/plugins/export/libs/FileSaver.js/FileSaver.min.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/plugins/export/libs/FileSaver.js/'));
    gulp.src('node_modules/amstock3/amcharts/plugins/export/libs/jszip/jszip.min.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/plugins/export/libs/jszip/'));
    gulp.src('node_modules/amstock3/amcharts/plugins/export/libs/pdfmake/pdfmake.min.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/plugins/export/libs/pdfmake/'));
    gulp.src('node_modules/amstock3/amcharts/plugins/export/libs/pdfmake/vfs_fonts.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/plugins/export/libs/pdfmake/'));
    gulp.src('node_modules/amstock3/amcharts/plugins/export/libs/xlsx/xlsx.min.js').pipe(gulp.dest('./gleek/assets/plugins/amcharts/plugins/export/libs/xlsx/'));

    gulp.src('node_modules/amstock3/amcharts/images/*.gif').pipe(gulp.dest('./gleek/assets/plugins/amcharts/images/'));
    gulp.src('node_modules/amstock3/amcharts/images/*.svg').pipe(gulp.dest('./gleek/assets/plugins/amcharts/images/'));
    gulp.src('node_modules/amstock3/amcharts/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/amcharts/images/'));


    // Animate.css
    gulp.src('node_modules/animate.css/animate.min.css').pipe(gulp.dest('./gleek/assets/plugins/animate/'));

    // Bootstrap Date Picker
    gulp.src('node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-datepicker/dist/css/'));
    gulp.src('node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-datepicker/dist/js/'));

    // Bootstrap Date Range Picker
    gulp.src('node_modules/bootstrap-daterangepicker/daterangepicker.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-daterangepicker/'));
    gulp.src('node_modules/bootstrap-daterangepicker/daterangepicker.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-daterangepicker/'));

    // Bootstrap Material Date Time Picker
    gulp.src('node_modules/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-material-datetimepicker/css/'));

    gulp.src('node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-material-datetimepicker/js/'));

    // Bootstrap Tag Input
    gulp.src('node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-tagsinput/css/'));
    gulp.src('node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-tagsinput/js/'));

    // Bootstrap Touchpin
    gulp.src('node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-touchspin/css/'));
    gulp.src('node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-touchspin/js/'));

    // Jquery Mask Plugin
    gulp.src('node_modules/jquery-mask-plugin/dist/jquery.mask.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-mask-plugin/'));

    // C3.js
    gulp.src('node_modules/c3/c3.min.css').pipe(gulp.dest('./gleek/assets/plugins/c3/css/'));
    gulp.src('node_modules/c3/c3.min.js').pipe(gulp.dest('./gleek/assets/plugins/c3/js/'));

    // D3.js
    gulp.src('node_modules/d3/dist/d3.min.js').pipe(gulp.dest('./gleek/assets/plugins/d3/'));

    // D3v3.js
    gulp.src('node_modules/d3v3/index.js').pipe(gulp.dest('./gleek/assets/plugins/d3v3/'));

    // PG Calender
    gulp.src('node_modules/pg-calendar/dist/css/pignose.calendar.min.css').pipe(gulp.dest('./gleek/assets/plugins/pg-calendar/css/'));
    gulp.src('node_modules/pg-calendar/dist/js/pignose.calendar.min.js').pipe(gulp.dest('./gleek/assets/plugins/pg-calendar/js/'));
    gulp.src('node_modules/pg-calendar/dist/fonts/*.eot').pipe(gulp.dest('./gleek/assets/plugins/pg-calendar/fonts/'));
    gulp.src('node_modules/pg-calendar/dist/fonts/*.svg').pipe(gulp.dest('./gleek/assets/plugins/pg-calendar/fonts/'));
    gulp.src('node_modules/pg-calendar/dist/fonts/*.ttf').pipe(gulp.dest('./gleek/assets/plugins/pg-calendar/fonts/'));
    gulp.src('node_modules/pg-calendar/dist/fonts/*.woff').pipe(gulp.dest('./gleek/assets/plugins/pg-calendar/fonts/'));

    // Chartist
    gulp.src('node_modules/chartist/dist/chartist.min.css').pipe(gulp.dest('./gleek/assets/plugins/chartist/css/'));
    gulp.src('node_modules/chartist/dist/chartist.min.js').pipe(gulp.dest('./gleek/assets/plugins/chartist/js/'));
    gulp.src('node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css').pipe(gulp.dest('./gleek/assets/plugins/chartist-plugin-tooltips/css/'));
    gulp.src('node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js').pipe(gulp.dest('./gleek/assets/plugins/chartist-plugin-tooltips/js/'));

    // Chart.js
    gulp.src('node_modules/chart.js/dist/Chart.bundle.min.js').pipe(gulp.dest('./gleek/assets/plugins/chart.js/'));
    
    //chartjs plugins datalabels
    gulp.src('node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.min.js').pipe(gulp.dest('./gleek/assets/plugins/chartjs-plugin-datalabels/'));

    //chartjs plugins streaming
    gulp.src('node_modules/chartjs-plugin-streaming/dist/chartjs-plugin-streaming.min.js').pipe(gulp.dest('./gleek/assets/plugins/chartjs-plugin-streaming/'));

    // Clockpicker
    gulp.src('node_modules/clockpicker/dist/bootstrap-clockpicker.min.css').pipe(gulp.dest('./gleek/assets/plugins/clockpicker/css/'));
    gulp.src('node_modules/clockpicker/dist/bootstrap-clockpicker.min.js').pipe(gulp.dest('./gleek/assets/plugins/clockpicker/js/'));

    // Jquery Slimscroll
    gulp.src('node_modules/jquery-slimscroll/jquery.slimscroll.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-slimscroll/'));

    // MetisMenu
    gulp.src('node_modules/metismenu/dist/metisMenu.min.css').pipe(gulp.dest('./gleek/assets/plugins/metismenu/css/'));
    gulp.src('node_modules/metismenu/dist/metisMenu.min.js').pipe(gulp.dest('./gleek/assets/plugins/metismenu/js/'));

    // DataMaps
    gulp.src('node_modules/datamaps/dist/*.min.js').pipe(gulp.dest('./gleek/assets/plugins/datamaps/'));

    // Topojson
    gulp.src('node_modules/topojson/dist/topojson.min.js').pipe(gulp.dest('./gleek/assets/plugins/topojson/'));

    // Dropzone
    gulp.src('node_modules/dropzone/dist/min/dropzone.min.css').pipe(gulp.dest('./gleek/assets/plugins/dropzone/css/'));
    gulp.src('node_modules/dropzone/dist/min/dropzone.min.js').pipe(gulp.dest('./gleek/assets/plugins/dropzone/js/'));

    // Echarts
    gulp.src('node_modules/echarts/dist/echarts.min.js').pipe(gulp.dest('./gleek/assets/plugins/echarts/'));

    // easy-pie-chart
    gulp.src('node_modules/easy-pie-chart/dist/jquery.easypiechart.min.js').pipe(gulp.dest('./gleek/assets/plugins/easy-pie-chart/'));

    // Flot
    gulp.src('node_modules/flot/jquery.flot.js').pipe(gulp.dest('./gleek/assets/plugins/flot/'));
    gulp.src('node_modules/flot/jquery.flot.pie.js').pipe(gulp.dest('./gleek/assets/plugins/flot/'));
    gulp.src('node_modules/flot/jquery.flot.resize.js').pipe(gulp.dest('./gleek/assets/plugins/flot/'));

    // Flot Spline
    gulp.src('node_modules/flot-spline/js/jquery.flot.spline.min.js').pipe(gulp.dest('./gleek/assets/plugins/flot-spline/'));

    // Full Calendar
    gulp.src('node_modules/fullcalendar/dist/fullcalendar.min.css').pipe(gulp.dest('./gleek/assets/plugins/fullcalendar/css/'));
    gulp.src('node_modules/fullcalendar/dist/fullcalendar.min.js').pipe(gulp.dest('./gleek/assets/plugins/fullcalendar/js/'));

    // HighChart
    gulp.src('node_modules/highcharts/highcharts.js').pipe(gulp.dest('./gleek/assets/plugins/highcharts/'));
    gulp.src('node_modules/highcharts/highcharts-more.js').pipe(gulp.dest('./gleek/assets/plugins/highcharts/'));
    gulp.src('node_modules/highcharts/modules/exporting.js').pipe(gulp.dest('./gleek/assets/plugins/highcharts/modules/'));

    // iCheck
    // gulp.src('node_modules/icheck/skins/all.css').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/'));
    // gulp.src('node_modules/icheck/skins/flat/*.css').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/flat/'));
    // gulp.src('node_modules/icheck/skins/flat/*.png').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/flat/'));
    // gulp.src('node_modules/icheck/skins/futurico/*.css').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/futurico/'));
    // gulp.src('node_modules/icheck/skins/futurico/*.png').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/futurico/'));
    // gulp.src('node_modules/icheck/skins/line/*.css').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/line/'));
    // gulp.src('node_modules/icheck/skins/line/*.png').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/line/'));
    // gulp.src('node_modules/icheck/skins/minimal/*.css').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/minimal/'));
    // gulp.src('node_modules/icheck/skins/minimal/*.png').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/minimal/'));
    // gulp.src('node_modules/icheck/skins/polaris/*.css').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/polaris/'));
    // gulp.src('node_modules/icheck/skins/polaris/*.png').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/polaris/'));
    // gulp.src('node_modules/icheck/skins/square/*.css').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/square/'));
    // gulp.src('node_modules/icheck/skins/square/*.png').pipe(gulp.dest('./gleek/assets/plugins/icheck/skins/square/'));
    // gulp.src('node_modules/icheck/icheck.min.js').pipe(gulp.dest('./gleek/assets/plugins/icheck/'));

    // Jquery-asColorPicker
    gulp.src('node_modules/jquery-asColorPicker/dist/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/jquery-asColorPicker/images/'));
    gulp.src('node_modules/jquery-asColorPicker/dist/css/asColorPicker.min.css').pipe(gulp.dest('./gleek/assets/plugins/jquery-asColorPicker/css/'));
    gulp.src('node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-asColorPicker/js/'));
    gulp.src('node_modules/jquery-asColor/dist/jquery-asColor.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-asColor/'));
    gulp.src('node_modules/jquery-asGradient/dist/jquery-asGradient.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-asGradient/'));

    // Jquery-ui
    gulp.src('node_modules/jqueryui/jquery-ui.min.css').pipe(gulp.dest('./gleek/assets/plugins/jqueryui/css/'));
    gulp.src('node_modules/jqueryui/jquery-ui.min.js').pipe(gulp.dest('./gleek/assets/plugins/jqueryui/js/'));

    // Justgage
    gulp.src('node_modules/justgage/justgage.js').pipe(gulp.dest('./gleek/assets/plugins/justgage/'));

    // Raphael
    gulp.src('node_modules/raphael/raphael.min.js').pipe(gulp.dest('./gleek/assets/plugins/raphael/'));

    // Jquery-knob
    gulp.src('node_modules/jquery-knob/dist/jquery.knob.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-knob/'));

    // moment
    gulp.src('node_modules/moment/min/moment.min.js').pipe(gulp.dest('./gleek/assets/plugins/moment/'));

    // Morris
    gulp.src('node_modules/morris.js/morris.min.js').pipe(gulp.dest('./gleek/assets/plugins/morris/'));

    // Nestable
    gulp.src('node_modules/nestable2/dist/jquery.nestable.min.css').pipe(gulp.dest('./gleek/assets/plugins/nestable2/css/'));
    gulp.src('node_modules/nestable2/dist/jquery.nestable.min.js').pipe(gulp.dest('./gleek/assets/plugins/nestable2/js/'));

    // Peity
    gulp.src('node_modules/peity/jquery.peity.min.js').pipe(gulp.dest('./gleek/assets/plugins/peity/'));

    // Rickshaw
    gulp.src('node_modules/rickshaw/rickshaw.min.css').pipe(gulp.dest('./gleek/assets/plugins/rickshaw/css/'));
    gulp.src('node_modules/rickshaw/rickshaw.min.js').pipe(gulp.dest('./gleek/assets/plugins/rickshaw/js/'));
    gulp.src('node_modules/rickshaw/vendor/d3.layout.min.js').pipe(gulp.dest('./gleek/assets/plugins/rickshaw/vendor/'));
    gulp.src('node_modules/rickshaw/vendor/d3.min.js').pipe(gulp.dest('./gleek/assets/plugins/rickshaw/vendor/'));

    // Select2
    gulp.src('node_modules/select2/dist/css/select2.min.css').pipe(gulp.dest('./gleek/assets/plugins/select2/css/'));
    gulp.src('node_modules/select2/dist/js/select2.full.min.js').pipe(gulp.dest('./gleek/assets/plugins/select2/js/'));

    // Sparkline
    gulp.src('node_modules/jquery-sparkline/jquery.sparkline.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-sparkline/'));

    // Summernote
    gulp.src('node_modules/summernote/dist/summernote.css').pipe(gulp.dest('./gleek/assets/plugins/summernote/'));
    gulp.src('node_modules/summernote/dist/summernote.min.js').pipe(gulp.dest('./gleek/assets/plugins/summernote/js/'));
    gulp.src('node_modules/summernote/dist/font/summernote.eot').pipe(gulp.dest('./gleek/assets/plugins/summernote/font/'));
    gulp.src('node_modules/summernote/dist/font/summernote.ttf').pipe(gulp.dest('./gleek/assets/plugins/summernote/font/'));
    gulp.src('node_modules/summernote/dist/font/summernote.woff').pipe(gulp.dest('./gleek/assets/plugins/summernote/font/'));

    // Switchery
    gulp.src('node_modules/innoto-switchery/dist/switchery.min.css').pipe(gulp.dest('./gleek/assets/plugins/innoto-switchery/dist/'));
    gulp.src('node_modules/innoto-switchery/dist/switchery.min.js').pipe(gulp.dest('./gleek/assets/plugins/innoto-switchery/dist/'));

    // Timepickers
    gulp.src('node_modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-timepicker/css/'));
    gulp.src('node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-timepicker/js/'));

    // Toastr
    gulp.src('node_modules/toastr/build/toastr.min.css').pipe(gulp.dest('./gleek/assets/plugins/toastr/css/'));
    gulp.src('node_modules/toastr/build/toastr.min.js').pipe(gulp.dest('./gleek/assets/plugins/toastr/js/'));

    // Typehead
    gulp.src('node_modules/jquery-typeahead/dist/jquery.typeahead.min.css').pipe(gulp.dest('./gleek/assets/plugins/jquery-typeahead/css/'));
    gulp.src('node_modules/jquery-typeahead/dist/jquery.typeahead.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-typeahead/js/'));

    // Validation
    gulp.src('node_modules/jquery-validation/dist/jquery.validate.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-validation/'));

    // Jqvmap
    gulp.src('node_modules/jqvmap/dist/jqvmap.min.css').pipe(gulp.dest('./gleek/assets/plugins/jqvmap/css/'));
    gulp.src('node_modules/jqvmap/dist/jquery.vmap.min.js').pipe(gulp.dest('./gleek/assets/plugins/jqvmap/js/'));
    gulp.src('node_modules/jqvmap/dist/maps/jquery.vmap.world.js').pipe(gulp.dest('./gleek/assets/plugins/jqvmap/js/'));
    gulp.src('node_modules/jqvmap/dist/maps/jquery.vmap.usa.js').pipe(gulp.dest('./gleek/assets/plugins/jqvmap/js/'));
    gulp.src('node_modules/jqvmap/dist/maps/continents/jquery.vmap.australia.js').pipe(gulp.dest('./gleek/assets/plugins/jqvmap/js/'));
    gulp.src('node_modules/jqvmap/dist/maps/').pipe(gulp.dest('./gleek/assets/plugins/jqvmap/js/'));

    // Waypoints
    gulp.src('node_modules/waypoints/lib/jquery.waypoints.min.js').pipe(gulp.dest('./gleek/assets/plugins/waypoints/'));

    // Simple Weather
    gulp.src('node_modules/simpleweather/jquery.simpleWeather.js').pipe(gulp.dest('./gleek/assets/plugins/simpleweather/'));

    // Progress Circle
    gulp.src('node_modules/jquery-circle-progress/dist/circle-progress.min.js').pipe(gulp.dest('./gleek/assets/plugins/circle-progress/'));

    // Wysihtml
    // gulp.src('node_modules/wysihtml/dist/minified/wysihtml.min.js').pipe(gulp.dest('./gleek/assets/plugins/wysihtml/dist/'));

    // Bootstrap Wysihtml
    // gulp.src('node_modules/bootstrap3-wysihtml5-npm/dist/bootstrap3-wysihtml5.min.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap3-wysihtml5-npm/dist/css/'));
    // gulp.src('node_modules/bootstrap3-wysihtml5-npm/dist/bootstrap3-wysihtml5.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap3-wysihtml5-npm/dist/js/'));

    // x-Editable
    gulp.src('node_modules/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css').pipe(gulp.dest('./gleek/assets/plugins/x-editable/dist/bootstrap3-editable/css/'));
    gulp.src('node_modules/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min.js').pipe(gulp.dest('./gleek/assets/plugins/x-editable/dist/bootstrap3-editable/js/'));
    gulp.src('node_modules/x-editable/dist/bootstrap3-editable/img/*.gif').pipe(gulp.dest('./gleek/assets/plugins/x-editable/dist/bootstrap3-editable/img/'));
    gulp.src('node_modules/x-editable/dist/bootstrap3-editable/img/*.png').pipe(gulp.dest('./gleek/assets/plugins/x-editable/dist/bootstrap3-editable/img/'));

    // Webticker
    gulp.src('node_modules/webticker/jquery.webticker.min.js').pipe(gulp.dest('./gleek/assets/plugins/webticker/'));

    // Datatables
    gulp.src('node_modules/datatables/media/js/jquery.dataTables.min.js').pipe(gulp.dest('./gleek/assets/plugins/datatables/js/'));
    gulp.src('node_modules/datatables/media/css/jquery.dataTables.min.css').pipe(gulp.dest('./gleek/assets/plugins/datatables/css/'));
    gulp.src('node_modules/datatables/media/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/datatables/images/'));
    gulp.src('node_modules/datatables/media/images/*.ico').pipe(gulp.dest('./gleek/assets/plugins/datatables/images/'));

    // gulp.src('node_modules/datatables.net/js/jquery.dataTables.min.js').pipe(gulp.dest('./gleek/assets/plugins/datatables.net/'));
    // gulp.src('node_modules/datatables.net/js/jquery.dataTables.min.js').pipe(gulp.dest('./gleek/assets/plugins/datatables.net/'));
    //datatables BS
    gulp.src('node_modules/datatables.net-bs4/js/dataTables.bootstrap4.min.js').pipe(gulp.dest('./gleek/assets/plugins/datatables.net-bs4/js/'));
    gulp.src('node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css').pipe(gulp.dest('./gleek/assets/plugins/datatables.net-bs4/css/'));

    // Gmaps
    gulp.src('node_modules/gmaps/gmaps.min.js').pipe(gulp.dest('./gleek/assets/plugins/gmaps/'));

    // Vectormap
    // gulp.src('node_modules/vectormap-js/mapsuite-vectormap.css').pipe(gulp.dest('./gleek/assets/plugins/vectormap-js/css/'));
    // gulp.src('node_modules/vectormap-js/mapsuite-vectormap.js').pipe(gulp.dest('./gleek/assets/plugins/vectormap-js/js/'));

    // owl-carousel
    gulp.src('node_modules/owl.carousel/dist/assets/owl.carousel.min.css').pipe(gulp.dest('./gleek/assets/plugins/owl.carousel/dist/css/'));
    gulp.src('node_modules/owl.carousel/dist/assets/owl.theme.default.min.css').pipe(gulp.dest('./gleek/assets/plugins/owl.carousel/dist/css/'));
    gulp.src('node_modules/owl.carousel/dist/owl.carousel.min.js').pipe(gulp.dest('./gleek/assets/plugins/owl.carousel/dist/js/'));

    // sweet alert
    gulp.src('node_modules/sweetalert2/dist/sweetalert2.min.css').pipe(gulp.dest('./gleek/assets/plugins/sweetalert2/dist/'));
    gulp.src('node_modules/sweetalert2/dist/sweetalert2.min.js').pipe(gulp.dest('./gleek/assets/plugins/sweetalert2/dist/'));

    // jvectormap 
    // gulp.src('node_modules/jvectormap/jquery-jvectormap.css').pipe(gulp.dest('./gleek/assets/plugins/jvectormap/dist/'));
    // gulp.src('node_modules/jvectormap/jquery-jvectormap.min.js').pipe(gulp.dest('./gleek/assets/plugins/jvectormap/dist/'));

    // gaugeJS
    gulp.src('node_modules/gaugeJS/dist/gauge.min.js').pipe(gulp.dest('./gleek/assets/plugins/gaugeJS/dist/'));

    // bootstrap select
    gulp.src('node_modules/bootstrap-select/dist/css/bootstrap-select.min.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-select/dist/css/'));
    gulp.src('node_modules/bootstrap-select/dist/js/bootstrap-select.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-select/dist/js/'));

    // smart wizard
    gulp.src('node_modules/smartwizard/dist/css/smart_wizard.min.css').pipe(gulp.dest('./gleek/assets/plugins/smartwizard/dist/css/'));
    gulp.src('node_modules/smartwizard/dist/css/smart_wizard_theme_circles.min.css').pipe(gulp.dest('./gleek/assets/plugins/smartwizard/dist/css/'));
    gulp.src('node_modules/smartwizard/dist/js/jquery.smartWizard.min.js').pipe(gulp.dest('./gleek/assets/plugins/smartwizard/dist/js/'));

    // js grid
    gulp.src('node_modules/jsgrid/dist/jsgrid.min.css').pipe(gulp.dest('./gleek/assets/plugins/jsgrid/css/'));
    gulp.src('node_modules/jsgrid/dist/jsgrid-theme.min.css').pipe(gulp.dest('./gleek/assets/plugins/jsgrid/css/'));
    gulp.src('node_modules/jsgrid/dist/jsgrid.min.js').pipe(gulp.dest('./gleek/assets/plugins/jsgrid/js/'));

    // bootgrid table
    gulp.src('node_modules/jquery-bootgrid/dist/jquery.bootgrid.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-bootgrid/dist/'));
    gulp.src('node_modules/jquery-bootgrid/dist/jquery.bootgrid.min.css').pipe(gulp.dest('./gleek/assets/plugins/jquery-bootgrid/dist/'));

    //foo table
    gulp.src('node_modules/footable/dist/footable.min.js').pipe(gulp.dest('./gleek/assets/plugins/footable/dist/'));
    gulp.src('node_modules/footable/css/footable.core.min.css').pipe(gulp.dest('./gleek/assets/plugins/footable/css/'));
    // gulp.src('node_modules/footable/css/footable.core.css').pipe(gulp.dest('./gleek/assets/plugins/footable/css/'));

    //jquery steps
    gulp.src('node_modules/jquery-steps/build/jquery.steps.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-steps/build/'));
    gulp.src('node_modules/jquery-steps/demo/css/jquery.steps.css').pipe(gulp.dest('./gleek/assets/plugins/jquery-steps/css/'));

    // quill editor
    gulp.src('node_modules/quill/dist/quill.core.css').pipe(gulp.dest('./gleek/assets/plugins/quill/css/'));
    gulp.src('node_modules/quill/dist/quill.snow.css').pipe(gulp.dest('./gleek/assets/plugins/quill/css/'));
    gulp.src('node_modules/quill/dist/quill.js').pipe(gulp.dest('./gleek/assets/plugins/quill/js/'));

    // pickadate.js
    gulp.src('node_modules/pickadate/lib/compressed/picker.js').pipe(gulp.dest('./gleek/assets/plugins/pickadate/'));
    gulp.src('node_modules/pickadate/lib/compressed/picker.date.js').pipe(gulp.dest('./gleek/assets/plugins/pickadate/'));
    gulp.src('node_modules/pickadate/lib/compressed/picker.time.js').pipe(gulp.dest('./gleek/assets/plugins/pickadate/'));
    gulp.src('node_modules/pickadate/lib/compressed/themes/*.css').pipe(gulp.dest('./gleek/assets/plugins/pickadate/themes/'));
    gulp.src('node_modules/pickadate/lib/compressed/translations/*.js').pipe(gulp.dest('./gleek/assets/plugins/pickadate/translations/'));

    // ck-editor
    gulp.src('node_modules/ckeditor/ckeditor.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/'));
    gulp.src('node_modules/ckeditor/config.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/'));
    gulp.src('node_modules/ckeditor/styles.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/'));
    gulp.src('node_modules/ckeditor/contents.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/'));
    gulp.src('node_modules/ckeditor/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/lang/'));
    gulp.src('node_modules/ckeditor/skins/moono-lisa/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/skins/moono-lisa/'));
    gulp.src('node_modules/ckeditor/skins/moono-lisa/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/skins/moono-lisa/'));
    gulp.src('node_modules/ckeditor/skins/moono-lisa/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/skins/moono-lisa/images/'));
    gulp.src('node_modules/ckeditor/skins/moono-lisa/images/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/skins/moono-lisa/images/hidpi/'));
    //ck editor plugins
    // 00. ck-editor plugin - global
    gulp.src('node_modules/ckeditor/plugins/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/'));
    // 01. ck-editor plugin - a11yhelp
    gulp.src('node_modules/ckeditor/plugins/a11yhelp/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/a11yhelp/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/a11yhelp/dialogs/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/'));
    // 02. ck-editor plugin - about
    gulp.src('node_modules/ckeditor/plugins/about/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/about/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/about/dialogs/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/about/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/about/dialogs/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/about/dialogs/hidpi/'));
    // 03. ck-editor plugin - adobeair
    gulp.src('node_modules/ckeditor/plugins/adobeair/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/adobeair/'));
    // 04. ck-editor plugin - ajax
    gulp.src('node_modules/ckeditor/plugins/ajax/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/ajax/'));
    // 05. ck-editor plugin - autocomplete
    gulp.src('node_modules/ckeditor/plugins/autocomplete/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/autocomplete/'));
    gulp.src('node_modules/ckeditor/plugins/autocomplete/skins/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/autocomplete/skins/'));
    // 06. ck-editor plugin - autoembed
    gulp.src('node_modules/ckeditor/plugins/autoembed/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/autoembed/'));
    gulp.src('node_modules/ckeditor/plugins/autoembed/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/autoembed/lang/'));
    // 07. ck-editor plugin - autogrow
    gulp.src('node_modules/ckeditor/plugins/autogrow/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/autogrow/'));
    // 08. ck-editor plugin - autolink
    gulp.src('node_modules/ckeditor/plugins/autolink/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/autolink/'));
    // 09. ck-editor plugin - balloonpanel
    gulp.src('node_modules/ckeditor/plugins/balloonpanel/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/balloonpanel/'));
    gulp.src('node_modules/ckeditor/plugins/balloonpanel/skins/moono-lisa/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/balloonpanel/skins/moono-lisa/'));
    gulp.src('node_modules/ckeditor/plugins/balloonpanel/skins/moono-lisa/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/balloonpanel/skins/moono-lisa/images/'));
    gulp.src('node_modules/ckeditor/plugins/balloonpanel/skins/moono-lisa/images/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/balloonpanel/skins/moono-lisa/images/hidpi/'));
    // 10. ck-editor plugin - balloontoolbar
    gulp.src('node_modules/ckeditor/plugins/balloontoolbar/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/balloontoolbar/'));
    gulp.src('node_modules/ckeditor/plugins/balloontoolbar/skins/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/balloontoolbar/skins/'));
    gulp.src('node_modules/ckeditor/plugins/balloontoolbar/skins/moono-lisa/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/balloontoolbar/skins/moono-lisa/'));
    // 11. ck-editor plugin - bbcode
    gulp.src('node_modules/ckeditor/plugins/bbcode/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/bbcode/'));
    // 12. ck-editor plugin - bidi
    gulp.src('node_modules/ckeditor/plugins/bidi/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/bidi/'));
    gulp.src('node_modules/ckeditor/plugins/bidi/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/bidi/lang/'));
    gulp.src('node_modules/ckeditor/plugins/bidi/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/bidi/icons/'));
    gulp.src('node_modules/ckeditor/plugins/bidi/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/bidi/icons/hidpi/'));
    // 13. ck-editor plugin - clipboard
    gulp.src('node_modules/ckeditor/plugins/clipboard/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/clipboard/dialogs/'));
    // 14. ck-editor plugin - cloudservices
    gulp.src('node_modules/ckeditor/plugins/cloudservices/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/cloudservices/'));
    //15. ck-editor plugin - codesnippet
    gulp.src('node_modules/ckeditor/plugins/codesnippet/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/'));
    gulp.src('node_modules/ckeditor/plugins/codesnippet/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/codesnippet/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/icons/'));
    gulp.src('node_modules/ckeditor/plugins/codesnippet/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/codesnippet/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/lang/'));
    gulp.src('node_modules/ckeditor/plugins/codesnippet/lib/highlight/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/lib/highlight/'));
    gulp.src('node_modules/ckeditor/plugins/codesnippet/lib/highlight/styles/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/lib/highlight/styles/'));
    gulp.src('node_modules/ckeditor/plugins/codesnippet/lib/highlight/styles/*.jpg').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/lib/highlight/styles/'));
    gulp.src('node_modules/ckeditor/plugins/codesnippet/lib/highlight/styles/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippet/lib/highlight/styles/'));
    //16. ck-editor plugin - codesnippetgeshi
    gulp.src('node_modules/ckeditor/plugins/codesnippetgeshi/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/codesnippetgeshi/'));
    //17. ck-editor plugin - colorbutton
    gulp.src('node_modules/ckeditor/plugins/colorbutton/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/colorbutton/'));
    gulp.src('node_modules/ckeditor/plugins/colorbutton/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/colorbutton/lang/'));
    gulp.src('node_modules/ckeditor/plugins/colorbutton/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/colorbutton/icons/'));
    gulp.src('node_modules/ckeditor/plugins/colorbutton/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/colorbutton/icons/hidpi/'));
    //18. ck-editor plugin - colordialog
    gulp.src('node_modules/ckeditor/plugins/colordialog/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/colordialog/'));
    gulp.src('node_modules/ckeditor/plugins/colordialog/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/colordialog/lang/'));
    gulp.src('node_modules/ckeditor/plugins/colordialog/dialogs/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/colordialog/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/colordialog/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/colordialog/dialogs/'));
    //19. ck-editor plugin - copyformatting
    gulp.src('node_modules/ckeditor/plugins/copyformatting/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/copyformatting/'));
    gulp.src('node_modules/ckeditor/plugins/copyformatting/cursors/*.svg').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/copyformatting/cursors/'));
    gulp.src('node_modules/ckeditor/plugins/copyformatting/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/copyformatting/icons/'));
    gulp.src('node_modules/ckeditor/plugins/copyformatting/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/copyformatting/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/copyformatting/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/copyformatting/lang/'));
    gulp.src('node_modules/ckeditor/plugins/copyformatting/styles/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/copyformatting/styles/'));
    //20. ck-editor plugin - devtools
    gulp.src('node_modules/ckeditor/plugins/devtools/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/devtools/'));
    gulp.src('node_modules/ckeditor/plugins/devtools/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/devtools/lang/'));
    //21. ck-editor plugin - dialog
    gulp.src('node_modules/ckeditor/plugins/dialog/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/dialog/'));
    //22. ck-editor plugin - dialogadvtab
    gulp.src('node_modules/ckeditor/plugins/dialogadvtab/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/dialogadvtab/'));
    //23. ck-editor plugin - div
    gulp.src('node_modules/ckeditor/plugins/div/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/div/'));
    gulp.src('node_modules/ckeditor/plugins/div/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/div/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/div/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/div/icons/'));
    gulp.src('node_modules/ckeditor/plugins/div/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/div/lang/'));
    //24. ck-editor plugin - divarea
    gulp.src('node_modules/ckeditor/plugins/divarea/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/divarea/'));
    //25. ck-editor plugin - dialogs
    gulp.src('node_modules/ckeditor/plugins/docprops/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/docprops/'));
    gulp.src('node_modules/ckeditor/plugins/docprops/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/docprops/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/docprops/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/docprops/icons/'));
    gulp.src('node_modules/ckeditor/plugins/docprops/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/docprops/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/docprops/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/docprops/icons/hidpi/'));
    //26. ck-editor plugin - easyimage
    gulp.src('node_modules/ckeditor/plugins/easyimage/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/easyimage/'));
    gulp.src('node_modules/ckeditor/plugins/easyimage/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/easyimage/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/easyimage/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/easyimage/icons/'));
    gulp.src('node_modules/ckeditor/plugins/easyimage/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/easyimage/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/easyimage/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/easyimage/lang/'));
    gulp.src('node_modules/ckeditor/plugins/easyimage/styles/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/easyimage/styles/'));
    //27. ck-editor plugin - embed
    gulp.src('node_modules/ckeditor/plugins/embed/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embed/'));
    gulp.src('node_modules/ckeditor/plugins/embed/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embed/icons/'));
    gulp.src('node_modules/ckeditor/plugins/embed/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embed/icons/hidpi/'));
    //28. ck-editor plugin - embedbase
    gulp.src('node_modules/ckeditor/plugins/embedbase/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embedbase/'));
    gulp.src('node_modules/ckeditor/plugins/embedbase/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embedbase/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/embedbase/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embedbase/lang/'));
    //29. ck-editor plugin - embedsemantic
    gulp.src('node_modules/ckeditor/plugins/embedsemantic/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embedsemantic/'));
    gulp.src('node_modules/ckeditor/plugins/embedsemantic/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embedsemantic/icons/'));
    gulp.src('node_modules/ckeditor/plugins/embedsemantic/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/embedsemantic/icons/hidpi/'));
    //30. ck-editor plugin - emoji
    gulp.src('node_modules/ckeditor/plugins/emoji/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/emoji/'));
    gulp.src('node_modules/ckeditor/plugins/emoji/*.json').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/emoji/'));
    gulp.src('node_modules/ckeditor/plugins/emoji/skins/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/emoji/skins/'));
    //31. ck-editor plugin - find
    gulp.src('node_modules/ckeditor/plugins/find/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/find/'));
    gulp.src('node_modules/ckeditor/plugins/find/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/find/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/find/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/find/icons/'));
    gulp.src('node_modules/ckeditor/plugins/find/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/find/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/find/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/find/lang/'));
    //32. ck-editor plugin - flash
    gulp.src('node_modules/ckeditor/plugins/flash/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/flash/'));
    gulp.src('node_modules/ckeditor/plugins/flash/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/flash/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/flash/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/flash/icons/'));
    gulp.src('node_modules/ckeditor/plugins/flash/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/flash/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/flash/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/flash/images/'));
    gulp.src('node_modules/ckeditor/plugins/flash/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/flash/lang/'));
    //33. ck-editor plugin - font
    gulp.src('node_modules/ckeditor/plugins/font/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/font/'));
    gulp.src('node_modules/ckeditor/plugins/font/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/font/lang/'));
    //34. ck-editor plugin - forms
    gulp.src('node_modules/ckeditor/plugins/forms/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/forms/'));
    gulp.src('node_modules/ckeditor/plugins/forms/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/forms/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/forms/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/forms/icons/'));
    gulp.src('node_modules/ckeditor/plugins/forms/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/forms/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/forms/images/*.gif').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/forms/images/'));
    gulp.src('node_modules/ckeditor/plugins/forms/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/forms/lang/'));
    //35. ck-editor plugin - iframe
    gulp.src('node_modules/ckeditor/plugins/iframe/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/iframe/'));
    gulp.src('node_modules/ckeditor/plugins/iframe/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/iframe/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/iframe/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/iframe/icons/'));
    gulp.src('node_modules/ckeditor/plugins/iframe/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/iframe/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/iframe/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/iframe/images/'));
    gulp.src('node_modules/ckeditor/plugins/iframe/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/iframe/lang/'));
    //36. ck-editor plugin - iframedialog
    gulp.src('node_modules/ckeditor/plugins/iframedialog/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/iframedialog/'));
    //37. ck-editor plugin - image
    gulp.src('node_modules/ckeditor/plugins/image/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/image/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/image/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/image/images/'));
    //38. ck-editor plugin - image2
    gulp.src('node_modules/ckeditor/plugins/image2/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/image2/'));
    gulp.src('node_modules/ckeditor/plugins/image2/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/image2/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/image2/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/image2/icons/'));
    gulp.src('node_modules/ckeditor/plugins/image2/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/image2/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/image2/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/image2/lang/'));
    //39. ck-editor plugin - imagebase
    gulp.src('node_modules/ckeditor/plugins/imagebase/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/imagebase/'));
    gulp.src('node_modules/ckeditor/plugins/imagebase/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/imagebase/lang/'));
    gulp.src('node_modules/ckeditor/plugins/imagebase/styles/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/imagebase/styles/'));
    //40. ck-editor plugin - indentblock
    gulp.src('node_modules/ckeditor/plugins/indentblock/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/indentblock/'));
    //41. ck-editor plugin - justify
    gulp.src('node_modules/ckeditor/plugins/justify/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/justify/'));
    gulp.src('node_modules/ckeditor/plugins/justify/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/justify/icons/'));
    gulp.src('node_modules/ckeditor/plugins/justify/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/justify/icons/hidpi/'));
    //42. ck-editor plugin - justify
    gulp.src('node_modules/ckeditor/plugins/language/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/language/'));
    gulp.src('node_modules/ckeditor/plugins/language/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/language/icons/'));
    gulp.src('node_modules/ckeditor/plugins/language/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/language/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/language/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/language/lang/'));
    //43. ck-editor plugin - link
    gulp.src('node_modules/ckeditor/plugins/link/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/link/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/link/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/link/images/'));
    gulp.src('node_modules/ckeditor/plugins/link/images/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/link/images/hidpi/'));
    //44. ck-editor plugin - liststyle
    gulp.src('node_modules/ckeditor/plugins/liststyle/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/liststyle/'));
    gulp.src('node_modules/ckeditor/plugins/liststyle/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/liststyle/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/liststyle/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/liststyle/lang/'));
    //45. ck-editor plugin - images
    gulp.src('node_modules/ckeditor/plugins/magicline/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/magicline/images/'));
    gulp.src('node_modules/ckeditor/plugins/magicline/images/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/magicline/images/hidpi/'));
    //46. ck-editor plugin - mathjax
    gulp.src('node_modules/ckeditor/plugins/mathjax/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/mathjax/'));
    gulp.src('node_modules/ckeditor/plugins/mathjax/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/mathjax/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/mathjax/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/mathjax/icons/'));
    gulp.src('node_modules/ckeditor/plugins/mathjax/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/mathjax/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/mathjax/images/*.gif').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/mathjax/images/'));
    gulp.src('node_modules/ckeditor/plugins/mathjax/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/mathjax/lang/'));
    //47. ck-editor plugin - mentions
    gulp.src('node_modules/ckeditor/plugins/mentions/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/mentions/'));
    //48. ck-editor plugin - newpage
    gulp.src('node_modules/ckeditor/plugins/newpage/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/newpage/'));
    gulp.src('node_modules/ckeditor/plugins/newpage/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/newpage/icons/'));
    gulp.src('node_modules/ckeditor/plugins/newpage/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/newpage/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/newpage/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/newpage/lang/'));
    //49. ck-editor plugin - pagebreak
    gulp.src('node_modules/ckeditor/plugins/pagebreak/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/pagebreak/'));
    gulp.src('node_modules/ckeditor/plugins/pagebreak/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/pagebreak/icons/'));
    gulp.src('node_modules/ckeditor/plugins/pagebreak/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/pagebreak/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/pagebreak/images/*.gif').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/pagebreak/images/'));
    gulp.src('node_modules/ckeditor/plugins/pagebreak/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/pagebreak/lang/'));
    //50. ck-editor plugin - panelbutton
    gulp.src('node_modules/ckeditor/plugins/panelbutton/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/panelbutton/'));
    //51. ck-editor plugin - pastefromword
    gulp.src('node_modules/ckeditor/plugins/pastefromword/filter/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/pastefromword/filter/'));
    //52. ck-editor plugin - placeholder
    gulp.src('node_modules/ckeditor/plugins/placeholder/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/placeholder/'));
    gulp.src('node_modules/ckeditor/plugins/placeholder/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/placeholder/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/placeholder/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/placeholder/icons/'));
    gulp.src('node_modules/ckeditor/plugins/placeholder/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/placeholder/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/placeholder/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/placeholder/lang/'));
    //53. ck-editor plugin - preview
    gulp.src('node_modules/ckeditor/plugins/preview/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/preview/'));
    gulp.src('node_modules/ckeditor/plugins/preview/*.html').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/preview/'));
    gulp.src('node_modules/ckeditor/plugins/preview/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/preview/icons/'));
    gulp.src('node_modules/ckeditor/plugins/preview/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/preview/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/preview/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/preview/lang/'));
    //54. ck-editor plugin - print
    gulp.src('node_modules/ckeditor/plugins/print/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/print/'));
    gulp.src('node_modules/ckeditor/plugins/print/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/print/icons/'));
    gulp.src('node_modules/ckeditor/plugins/print/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/print/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/print/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/print/lang/'));
    //55. ck-editor plugin - save
    gulp.src('node_modules/ckeditor/plugins/save/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/save/'));
    gulp.src('node_modules/ckeditor/plugins/save/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/save/icons/'));
    gulp.src('node_modules/ckeditor/plugins/save/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/save/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/save/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/save/lang/'));
    //56. ck-editor plugin - scayt
    gulp.src('node_modules/ckeditor/plugins/scayt/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/scayt/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/scayt/dialogs/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/scayt/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/scayt/skins/moono-lisa/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/scayt/skins/moono-lisa/'));
    //57. ck-editor plugin - selectall
    gulp.src('node_modules/ckeditor/plugins/selectall/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/selectall/'));
    gulp.src('node_modules/ckeditor/plugins/selectall/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/selectall/icons/'));
    gulp.src('node_modules/ckeditor/plugins/selectall/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/selectall/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/selectall/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/selectall/lang/'));
    //58. ck-editor plugin - sharedspace
    gulp.src('node_modules/ckeditor/plugins/sharedspace/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/sharedspace/'));
    //59. ck-editor plugin - showblocks
    gulp.src('node_modules/ckeditor/plugins/showblocks/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/showblocks/'));
    gulp.src('node_modules/ckeditor/plugins/showblocks/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/showblocks/icons/'));
    gulp.src('node_modules/ckeditor/plugins/showblocks/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/showblocks/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/showblocks/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/showblocks/images/'));
    gulp.src('node_modules/ckeditor/plugins/showblocks/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/showblocks/lang/'));
    //60. ck-editor plugin - smiley
    gulp.src('node_modules/ckeditor/plugins/smiley/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/smiley/'));
    gulp.src('node_modules/ckeditor/plugins/smiley/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/smiley/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/smiley/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/smiley/icons/'));
    gulp.src('node_modules/ckeditor/plugins/smiley/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/smiley/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/smiley/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/smiley/images/'));
    gulp.src('node_modules/ckeditor/plugins/smiley/images/*.gif').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/smiley/images/'));
    gulp.src('node_modules/ckeditor/plugins/smiley/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/smiley/lang/'));
    //61. ck-editor plugin - sourcedialog
    gulp.src('node_modules/ckeditor/plugins/sourcedialog/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/sourcedialog/'));
    gulp.src('node_modules/ckeditor/plugins/sourcedialog/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/sourcedialog/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/sourcedialog/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/sourcedialog/icons/'));
    gulp.src('node_modules/ckeditor/plugins/sourcedialog/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/sourcedialog/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/sourcedialog/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/sourcedialog/lang/'));
    //62. ck-editor plugin - specialchar
    gulp.src('node_modules/ckeditor/plugins/specialchar/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/specialchar/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/specialchar/dialogs/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/specialchar/dialogs/lang/'));
    //63. ck-editor plugin - stylesheetparser
    gulp.src('node_modules/ckeditor/plugins/stylesheetparser/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/stylesheetparser/'));
    //64. ck-editor plugin - table
    gulp.src('node_modules/ckeditor/plugins/table/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/table/dialogs/'));
    //65. ck-editor plugin - tableresize
    gulp.src('node_modules/ckeditor/plugins/tableresize/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/tableresize/'));
    //66. ck-editor plugin - tableselection
    gulp.src('node_modules/ckeditor/plugins/tableselection/styles/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/tableselection/styles/'));
    //67. ck-editor plugin - tabletools
    gulp.src('node_modules/ckeditor/plugins/tabletools/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/tabletools/dialogs/'));
    //68. ck-editor plugin - templates
    gulp.src('node_modules/ckeditor/plugins/templates/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/templates/'));
    gulp.src('node_modules/ckeditor/plugins/templates/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/templates/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/templates/dialogs/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/templates/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/templates/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/templates/icons/'));
    gulp.src('node_modules/ckeditor/plugins/templates/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/templates/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/templates/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/templates/lang/'));
    gulp.src('node_modules/ckeditor/plugins/templates/templates/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/templates/templates/'));
    gulp.src('node_modules/ckeditor/plugins/templates/templates/images/*.gif').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/templates/templates/images/'));
    //69. ck-editor plugin - textmatch
    gulp.src('node_modules/ckeditor/plugins/textmatch/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/textmatch/'));
    //70. ck-editor plugin - textwatcher
    gulp.src('node_modules/ckeditor/plugins/textwatcher/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/textwatcher/'));
    //71. ck-editor plugin - uicolor
    gulp.src('node_modules/ckeditor/plugins/uicolor/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/uicolor/'));
    gulp.src('node_modules/ckeditor/plugins/uicolor/dialogs/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/uicolor/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/uicolor/dialogs/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/uicolor/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/uicolor/icons/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/uicolor/icons/'));
    gulp.src('node_modules/ckeditor/plugins/uicolor/icons/hidpi/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/uicolor/icons/hidpi/'));
    gulp.src('node_modules/ckeditor/plugins/uicolor/lang/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/uicolor/lang/'));
    //72. ck-editor plugin - uploadfile
    gulp.src('node_modules/ckeditor/plugins/uploadfile/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/uploadfile/'));
    //73. ck-editor plugin - widget
    gulp.src('node_modules/ckeditor/plugins/widget/images/*.png').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/widget/images/'));
    //74. ck-editor plugin - wsc
    gulp.src('node_modules/ckeditor/plugins/wsc/dialogs/wsc.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/wsc/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/wsc/dialogs/wsc.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/wsc/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/wsc/dialogs/wsc_ie.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/wsc/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/wsc/dialogs/*.html').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/wsc/dialogs/'));
    gulp.src('node_modules/ckeditor/plugins/wsc/skins/moono-lisa/*.css').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/wsc/skins/moono-lisa/'));
    //75. ck-editor plugin - xml
    gulp.src('node_modules/ckeditor/plugins/xml/*.js').pipe(gulp.dest('./gleek/assets/plugins/ckeditor/plugins/xml/'));
    

    //Tinymice editor
    gulp.src('node_modules/tinymce/tinymce.min.js').pipe(gulp.dest('./gleek/assets/plugins/tinymce/'));
    //Tinymice themes
    gulp.src('node_modules/tinymce/themes/inlite/*.js').pipe(gulp.dest('./gleek/assets/plugins/tinymce/themes/inlite/'));
    gulp.src('node_modules/tinymce/themes/mobile/*.js').pipe(gulp.dest('./gleek/assets/plugins/tinymce/themes/mobile/'));
    gulp.src('node_modules/tinymce/themes/modern/*.js').pipe(gulp.dest('./gleek/assets/plugins/tinymce/themes/modern/'));
    gulp.src('node_modules/tinymce/skins/lightgray/*.css').pipe(gulp.dest('./gleek/assets/plugins/tinymce/skins/lightgray/'));
    //Tinymice fonts
    gulp.src('node_modules/tinymce/skins/lightgray/fonts/*.woff').pipe(gulp.dest('./gleek/assets/plugins/tinymce/skins/lightgray/fonts/'));
    gulp.src('node_modules/tinymce/skins/lightgray/fonts/*.eot').pipe(gulp.dest('./gleek/assets/plugins/tinymce/skins/lightgray/fonts/'));
    gulp.src('node_modules/tinymce/skins/lightgray/fonts/*.ttf').pipe(gulp.dest('./gleek/assets/plugins/tinymce/skins/lightgray/fonts/'));
    gulp.src('node_modules/tinymce/skins/lightgray/fonts/*.svg').pipe(gulp.dest('./gleek/assets/plugins/tinymce/skins/lightgray/fonts/'));
    //Tinymice images
    gulp.src('node_modules/tinymce/skins/lightgray/img/*.gif').pipe(gulp.dest('./gleek/assets/plugins/tinymce/skins/lightgray/img/'));
    //Tinymice plugins
    // gulp.src('node_modules/tinymce/plugins/').pipe(gulp.dest('./gleek/assets/plugins/tinymce/skins/lightgray/img/'));

    //Typehead.js
    gulp.src('node_modules/typeahead.js/dist/bloodhound.min.js').pipe(gulp.dest('./gleek/assets/plugins/typeahead.js/dist/'));
    gulp.src('node_modules/typeahead.js/dist/typeahead.bundle.min.js').pipe(gulp.dest('./gleek/assets/plugins/typeahead.js/dist/'));
    gulp.src('node_modules/typeahead.js/dist/typeahead.jquery.min.js').pipe(gulp.dest('./gleek/assets/plugins/typeahead.js/dist/'));
    //Typehead
    gulp.src('node_modules/typeahead/typeahead.js').pipe(gulp.dest('./gleek/assets/plugins/typeahead/'));
    gulp.src('node_modules/typeahead/style.css').pipe(gulp.dest('./gleek/assets/plugins/typeahead/'));

    //Dropify
    gulp.src('node_modules/dropify/dist/css/*.min.css').pipe(gulp.dest('./gleek/assets/plugins/dropify/dist/css/'));
    gulp.src('node_modules/dropify/dist/fonts/*.eot').pipe(gulp.dest('./gleek/assets/plugins/dropify/dist/fonts/'));
    gulp.src('node_modules/dropify/dist/fonts/*.svg').pipe(gulp.dest('./gleek/assets/plugins/dropify/dist/fonts/'));
    gulp.src('node_modules/dropify/dist/fonts/*.ttf').pipe(gulp.dest('./gleek/assets/plugins/dropify/dist/fonts/'));
    gulp.src('node_modules/dropify/dist/fonts/*.woff').pipe(gulp.dest('./gleek/assets/plugins/dropify/dist/fonts/'));
    gulp.src('node_modules/dropify/dist/js/*.min.js').pipe(gulp.dest('./gleek/assets/plugins/dropify/dist/js/'));

    //Cropperjs
    gulp.src('node_modules/cropperjs/dist/cropper.min.js').pipe(gulp.dest('./gleek/assets/plugins/cropperjs/dist/'));
    gulp.src('node_modules/cropperjs/dist/cropper.min.css').pipe(gulp.dest('./gleek/assets/plugins/cropperjs/dist/'));
    //jquery cropper
    gulp.src('node_modules/jquery-cropper/dist/*.js').pipe(gulp.dest('./gleek/assets/plugins/jquery-cropper/dist/'));

    //croppie
    // gulp.src('node_modules/croppie/croppie.min.js').pipe(gulp.dest('./gleek/assets/plugins/croppie/'));
    // gulp.src('node_modules/croppie/croppie.css').pipe(gulp.dest('./gleek/assets/plugins/croppie/'));

    //jasny-bootstrap-mask
    gulp.src('node_modules/jasny-bootstrap/dist/css/jasny-bootstrap.min.css').pipe(gulp.dest('./gleek/assets/plugins/jasny-bootstrap/dist/css/'));
    gulp.src('node_modules/jasny-bootstrap/dist/js/jasny-bootstrap.min.js').pipe(gulp.dest('./gleek/assets/plugins/jasny-bootstrap/dist/js/'));

    //block-ui
    gulp.src('node_modules/block-ui/jquery.blockUI.js').pipe(gulp.dest('./gleek/assets/plugins/block-ui/'));
    gulp.src('node_modules/block-ui/*.json').pipe(gulp.dest('./gleek/assets/plugins/block-ui/'));

    //bootstrap4-notify
    gulp.src('node_modules/bootstrap4-notify/bootstrap-notify.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap4-notify/'));
    
    //clipboard.js
    gulp.src('node_modules/clipboard/dist/clipboard.min.js').pipe(gulp.dest('./gleek/assets/plugins/clipboard/'));
    
    //noUIslider
    gulp.src('node_modules/nouislider/distribute/nouislider.min.js').pipe(gulp.dest('./gleek/assets/plugins/nouislider/'));
    gulp.src('node_modules/wnumb/wNumb.js').pipe(gulp.dest('./gleek/assets/plugins/wnumb/'));
    gulp.src('node_modules/nouislider/distribute/nouislider.min.css').pipe(gulp.dest('./gleek/assets/plugins/nouislider/'));
    
    //jQuery repeater
    gulp.src('node_modules/jquery.repeater/jquery.repeater.min.js').pipe(gulp.dest('./gleek/assets/plugins/jquery.repeater/'));
    
    //bootstrap-multiselect
    gulp.src('node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-multiselect/js/'));
    gulp.src('node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap-multiselect/css/'));
    
    //magnific-popup
    gulp.src('node_modules/magnific-popup/dist/jquery.magnific-popup.min.js').pipe(gulp.dest('./gleek/assets/plugins/magnific-popup/js/'));
    gulp.src('node_modules/magnific-popup/dist/magnific-popup.css').pipe(gulp.dest('./gleek/assets/plugins/magnific-popup/css/'));

    //tour - Shepherd
    gulp.src('node_modules/shepherd.js/dist/css/*.css').pipe(gulp.dest('./gleek/assets/plugins/shepherd/dist/css/'));
    gulp.src('node_modules/shepherd.js/dist/css/*.css').pipe(gulp.dest('./gleek/assets/plugins/shepherd/dist/css/'));
    gulp.src('node_modules/shepherd.js/dist/js/shepherd.min.js').pipe(gulp.dest('./gleek/assets/plugins/shepherd/dist/js/'));
    gulp.src('node_modules/shepherd.js/dist/js/popper.min.js').pipe(gulp.dest('./gleek/assets/plugins/shepherd/dist/js/'));

    //jquery counterup
    gulp.src('node_modules/counterup/jquery.counterup.min.js').pipe(gulp.dest('./gleek/assets/plugins/counterup/'));

    //TypedJS
    gulp.src('node_modules/typed.js/lib/typed.min.js').pipe(gulp.dest('./gleek/assets/plugins/typedjs/'));

    //bootstrap duallist box
    gulp.src('node_modules/bootstrap4-duallistbox/dist/bootstrap-duallistbox.min.css').pipe(gulp.dest('./gleek/assets/plugins/bootstrap4-duallistbox/'));
    gulp.src('node_modules/bootstrap4-duallistbox/dist/jquery.bootstrap-duallistbox.min.js').pipe(gulp.dest('./gleek/assets/plugins/bootstrap4-duallistbox/'));

    //datedropper
    gulp.src('node_modules/datedropper/datedropper.min.css').pipe(gulp.dest('./gleek/assets/plugins/datedropper/'));
    gulp.src('node_modules/datedropper/datedropper.min.js').pipe(gulp.dest('./gleek/assets/plugins/datedropper/'));
    gulp.src('node_modules/datedropper/dd-icon/*').pipe(gulp.dest('./gleek/assets/plugins/datedropper/dd-icon/'));

    //jstree
    gulp.src('node_modules/jstree/dist/themes/default/*').pipe(gulp.dest('./gleek/assets/plugins/jstree/dist/themes/default/'));
    gulp.src('node_modules/jstree/dist/themes/default-dark/*').pipe(gulp.dest('./gleek/assets/plugins/jstree/dist/themes/default-dark/'));
    gulp.src('node_modules/jstree/dist/jstree.min.js').pipe(gulp.dest('./gleek/assets/plugins/jstree/dist/'));
    
    //jstree
    gulp.src('node_modules/dragula/dist/dragula.min.css').pipe(gulp.dest('./gleek/assets/plugins/dragula/'));
    gulp.src('node_modules/dragula/dist/dragula.min.js').pipe(gulp.dest('./gleek/assets/plugins/dragula/'));
    
    //spinkit
    gulp.src('node_modules/spinkit/css/spinners/*').pipe(gulp.dest('./gleek/assets/plugins/spinkit/css/spinners/'));
    gulp.src('node_modules/spinkit/css/spinkit.css').pipe(gulp.dest('./gleek/assets/plugins/spinkit/css/'));
    
    //ladda
    gulp.src('node_modules/ladda/dist/*').pipe(gulp.dest('./gleek/assets/plugins/ladda/dist/'));
    


});

//make common js 
gulp.task('common_js', function() {
    return gulp.src(['./gleek/assets/plugins/jquery/jquery.min.js',
            './gleek/assets/plugins/bootstrap/js/bootstrap.bundle.min.js',
            './gleek/assets/plugins/metismenu/js/metisMenu.min.js',
            './gleek/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js', 
            './gleek/assets/plugins/bootstrap-select/dist/js/bootstrap-select.min.js'
        ])
        .pipe(concat('common.min.js'))
        .pipe(gulp.dest('./gleek/assets/plugins/common/'));
});


//minify html
gulp.task('minify_html', function() {
    return gulp.src('./gleek/main/template/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(function(file) {
            return file.base
        }));
});


//autoprefix css
gulp.task('prefix_css', function() {
    gulp.src('./gleek/main/css/*.css')
        .pipe(autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS,
            cascade: false
        }))
        .pipe(gulp.dest(function(file) {
            return file.base
        }))
});


//minify css
gulp.task('minify_css', function () {
    return gulp.src('./gleek/main/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest(function(file) {
            return file.base
        }));
});


//minify js
gulp.task('minify_js', function () {
    gulp.src('./gleek/main/js/**/*')
        .pipe(uglify())
        .pipe(gulp.dest(function(file) {
            return file.base
        }));
});


//pretify js
gulp.task('prettify_js', function() {
    gulp.src('./gleek/main/js/**/*')
      .pipe(beautify({indent_size: 2}))
      .pipe(gulp.dest(function(file) {
        return file.base
    }))
});


//css pretify
gulp.task('prettify_css', function() {
    return gulp.src('./gleek/main/css/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest(function(file) {
            return file.base
        }));
});


//htmll pretify
gulp.task('prettify_html', function() {
    gulp.src('./gleek/main/template/*.html')
      .pipe(prettify({indent_char: ' ', indent_size: 4}))
      .pipe(gulp.dest(function(file) {
        return file.base
    }))
});
