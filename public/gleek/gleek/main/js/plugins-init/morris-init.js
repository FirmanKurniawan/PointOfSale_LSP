// Dashboard 1 Morris-chart
$(function() {
    "use strict";

    // LINE CHART
    let line = new Morris.Line({
        element: 'morris-line-chart',
        resize: true,
        data: [{
                y: '2011 Q1',
                item1: 2666
            },
            {
                y: '2011 Q2',
                item1: 2778
            },
            {
                y: '2011 Q3',
                item1: 4912
            },
            {
                y: '2011 Q4',
                item1: 3767
            },
            {
                y: '2012 Q1',
                item1: 6810
            },
            {
                y: '2012 Q2',
                item1: 5670
            },
            {
                y: '2012 Q3',
                item1: 4820
            },
            {
                y: '2012 Q4',
                item1: 15073
            },
            {
                y: '2013 Q1',
                item1: 10687
            },
            {
                y: '2013 Q2',
                item1: 8432
            }
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        gridLineColor: 'transparent',
        lineColors: ['#0000FF'], //hrere
        lineWidth: 1,
        hideHover: 'auto',
        pointSize: 0,
        axes: false
    });
    // Morris donut chart 
    

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12,

        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true,
        colors: ['#00A2FF', '#34C73B', '#F44336']
    });

    // Extra chart
    Morris.Area({
        element: 'extra-area-chart',
        data: [{
                period: '2001',
                smartphone: 0,
                windows: 0,
                mac: 0
            }, {
                period: '2002',
                smartphone: 90,
                windows: 60,
                mac: 25
            }, {
                period: '2003',
                smartphone: 40,
                windows: 80,
                mac: 35
            }, {
                period: '2004',
                smartphone: 30,
                windows: 47,
                mac: 17
            }, {
                period: '2005',
                smartphone: 150,
                windows: 40,
                mac: 120
            }, {
                period: '2006',
                smartphone: 25,
                windows: 80,
                mac: 40
            }, {
                period: '2007',
                smartphone: 10,
                windows: 10,
                mac: 10
            }


        ],
        lineColors: ['#34C73B', '#F44336', '#00A2FF'],
        xkey: 'period',
        ykeys: ['smartphone', 'windows', 'mac'],
        labels: ['Phone', 'Windows', 'Mac'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        behaveLikeLine: true,
        gridLineColor: 'transparent',
        hideHover: 'auto'

    });

   
    
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
                period: '2001',
                smartphone: 0,
                windows: 0,
                mac: 0
            }, {
                period: '2002',
                smartphone: 90,
                windows: 60,
                mac: 25
            }, {
                period: '2003',
                smartphone: 40,
                windows: 80,
                mac: 35
            }, {
                period: '2004',
                smartphone: 30,
                windows: 47,
                mac: 17
            }, {
                period: '2005',
                smartphone: 150,
                windows: 40,
                mac: 120
            }, {
                period: '2006',
                smartphone: 25,
                windows: 80,
                mac: 40
            }, {
                period: '2007',
                smartphone: 10,
                windows: 10,
                mac: 10
            }


        ],
        xkey: 'period',
        ykeys: ['smartphone', 'windows', 'mac'],
        labels: ['Phone', 'Windows', 'Mac'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors: ['#DCDCDC', '#34C73B', '#0000FF'],
        behaveLikeLine: true,
        gridLineColor: 'transparent',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#DCDCDC', '#34C73B', '#0000FF'],
        resize: true

    });

    

    
    
    Morris.Area({
        element: 'morris-area-chart0',
        data: [{
                period: '2010',
                SiteA: 0,
                SiteB: 0,

            }, {
                period: '2011',
                SiteA: 130,
                SiteB: 100,

            }, {
                period: '2012',
                SiteA: 80,
                SiteB: 60,

            }, {
                period: '2013',
                SiteA: 70,
                SiteB: 200,

            }, {
                period: '2014',
                SiteA: 180,
                SiteB: 150,

            }, {
                period: '2015',
                SiteA: 105,
                SiteB: 90,

            },
            {
                period: '2016',
                SiteA: 250,
                SiteB: 150,

            }
        ],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors: ['#b4becb', '#00A2FF'], //here
        behaveLikeLine: true,
        gridLineColor: 'transparent',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#00A2FF'],
        resize: true

    });
    
    // Morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90,
            c: 60
        }, {
            y: '2007',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2008',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: '2009',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2010',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: '2011',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2012',
            a: 100,
            b: 90,
            c: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['A', 'B', 'C'],
        barColors: ['#0000FF', '#34C73B', '#DCDCDC'],
        hideHover: 'auto',
        gridLineColor: 'transparent',
        resize: true,
        barSizeRatio: 0.25,
    });

});