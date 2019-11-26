(function($) {
    "use strict"

    $('#p-users').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.85,
        size: 115,
        lineCap: 'round',
        fill: { color: '#43E794' },
        reverse: false, 
        emptyFill: "#F3F6F9"
    });
    
    $('#a-users').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.75,
        size: 115,
        lineCap: 'round',
        fill: { color: '#FF5274' },
        reverse: false, 
        emptyFill: "#F3F6F9"
    });
    
    $('#dm-users').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        size: 115,
        lineCap: 'round',
        fill: { color: '#1D8FF7' },
        reverse: false, 
        emptyFill: "#F3F6F9"
    });
    
    $('#dl-users').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.3,
        size: 115,
        lineCap: 'round',
        fill: { color: '#FFA616' },
        reverse: false, 
        emptyFill: "#F3F6F9"
    });

    Morris.Bar({
        element: 'job-applicants-chart',
        data: [{
            y: 'S',
            a: 66, 
            b: 34
        }, {
            y: 'M',
            a: 75, 
            b: 25
        }, {
            y: 'T',
            a: 50, 
            b: 50
        }, {
            y: 'W',
            a: 75, 
            b: 25
        }, {
            y: 'T',
            a: 50, 
            b: 50
        }, {
            y: 'F',
            a: 16, 
            b: 84
        }, {
            y: 'S',
            a: 70, 
            b: 30
        }, {
            y: 'S',
            a: 30, 
            b: 70
        }, {
            y: 'M',
            a: 40, 
            b: 60
        }, {
            y: 'T',
            a: 29, 
            b: 71
        }, {
            y: 'W',
            a: 44, 
            b: 56
        }, {
            y: 'T',
            a: 30, 
            b: 70
        }, {
            y: 'F',
            a: 60, 
            b: 40
        }, {
            y: 'G',
            a: 40, 
            b: 60
        }, {
            y: 'S',
            a: 46, 
            b: 54
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['A', 'B'],
        barColors: ['#7F63F4', "#F1F3F7"],
        hideHover: 'auto',
        gridLineColor: 'transparent',
        resize: true,
        barSizeRatio: 0.25,
        stacked: true, 
        behaveLikeLine: true, 
        barRadius: [6, 6, 0, 0]
    });



})(jQuery);