(function($) {
    "use strict"

    Morris.Bar({
        element: 'count-avarage-students',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['A', 'B'],
        barColors: ['#D57FF8', '#FFC107'],
        hideHover: 'auto',
        gridLineColor: '#F5F5F5',
        resize: true,
        barSizeRatio: 0.4
    });




})(jQuery);