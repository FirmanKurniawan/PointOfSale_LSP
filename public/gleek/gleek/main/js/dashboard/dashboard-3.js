$(function() {
    "use strict";

    // Morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'January',
            a: 100,
            b: 90,
            c: 60
        }, {
            y: 'February',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'March',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: 'April',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'May',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: 'June',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'July',
            a: 100,
            b: 90,
            c: 40
        }, {
            y: 'August',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'September',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: 'October',
            a: 75,
            b: 65,
            c: 40
        }, ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['A', 'B', 'C'],
        barColors: ['#7bb31a', '#00a2ff', '#ff9800'],
        hideHover: 'auto',
        gridLineColor: 'transparent',
        resize: true,
        barSizeRatio: 0.5,
        barRadius: [5, 5, 0, 0],
    });


    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Chrome",
            value: 60,

        }, {
            label: "Firefox",
            value: 30
        }, {
            label: "Safari",
            value: 20
        }, {
            label: "Others",
            value: 40
        }],
        resize: true,
        colors: ['#ff9800', '#7bb31a', '#00a2ff', '#ffc107']
    });

});