$(function () {
    "use strict";
    function sparkline_charts() {
        $('.sparkline-marketcap').sparkline('html');
    }
    if ($('.sparkline-marketcap').length) {
        sparkline_charts();
    }

});