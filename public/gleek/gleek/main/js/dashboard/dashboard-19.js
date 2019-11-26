(function($) {
    "use strict"

    Morris.Bar({
        element: 'timeline-chart',
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
        ykeys: ['a', 'b', "c"],
        labels: ['A', 'B', "C"],
        barColors: ['#D57FF8', "#FF9800", '#FFC107'],
        hideHover: 'auto',
        gridLineColor: '#F5F5F5',
        resize: true,
        barSizeRatio: 0.4
    });


    $('#download-chart').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        size: 195,
        fill: { color: '#00A2FF' },
        reverse: false, 
        thickness: 30
    });


    $('#upload-chart').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.7,
        size: 195,
        fill: { color: '#00A2FF' },
        reverse: false, 
        thickness: 30
    });

    var ctx = document.getElementById("storage-used-chart");
    // ctx.height = 200;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [45, 25],
                backgroundColor: [
                    "#FFC107",
                    "#E36CD9"
                ],
                hoverBackgroundColor: [
                    "rgba(255, 193, 7, .6)",
                    "rgba(227, 108, 217, 0.6)"
                ]

            }],
            labels: [
                "#FFC107",
                "#E36CD9"
            ]
        }, 
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            legend: {
                display: false
            }
        }
    });

        
    var ctx = document.getElementById("total-income");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [50, 31, 49, 75, 84, 90, 43],
                borderWidth: 3,
                borderColor: "#51CCA9",
                pointBackgroundColor: "#fff",
                pointBorderColor: "#D07BED",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#D07BED",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: !1
            }, {
                data: [45, 35, 39, 58, 90, 76, 80],
                borderWidth: 3,
                borderColor: "#D07BED",
                pointBackgroundColor: "#fff",
                pointBorderColor: "#D07BED",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#D07BED",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: !1
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false, 
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        padding: 10,
                        stepSize: 25,
                        max: 100,
                        min: 0
                    },
                    gridLines: {
                        display: true,
                        draw1Border: !1,
                        lineWidth: 0.5,
                        zeroLineColor: "transparent",
                        drawBorder: false
                    }
                }]
            }
        }
    });



})(jQuery);