(function($) {
    "use strict"


        
    $('#eb-tickets').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.8,
        size: 195,
        lineCap: 'round',
        fill: { color: '#43E794' },
        reverse: false
    });


    $('#ev-goals').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.5,
        size: 195,
        lineCap: 'round',
        fill: { color: '#FDA23F' },
        reverse: false
    });

    Morris.Area({
        element: 'ticket-sale-trend',
        data: [{
                period: '01-04 Jul',
                Jun: 0,
                July: 0,
            }, {
                period: '05-08 Jul',
                Jun: 90,
                July: 60,
            }, {
                period: '09-12 Jul',
                Jun: 40,
                July: 80,
            }, {
                period: '13-17 Jul',
                Jun: 30,
                July: 47,
            }, {
                period: '18-21 Jul',
                Jun: 150,
                July: 40,
            }, {
                period: '22-25 Jul',
                Jun: 25,
                July: 80,
            }, {
                period: '26-28 Jul',
                Jun: 10,
                July: 10,
            }, {
                period: '29-31 Jul',
                Jun: 10,
                July: 10,
            }
        ],
        xkey: 'period',
        ykeys: ['Jun', 'July'],
        labels: ['Jun', 'July'],
        pointSize: 5,
        fillOpacity: 0,
        pointStrokeColors: ['#FDA23F', '#A660FF'],
        behaveLikeLine: true,
        gridLineColor: 'transparent',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#FDA23F', '#A660FF'],
        resize: false, 
        parseTime: false
    });

    var nk = document.getElementById("chart-gross-sale");
    // nk.height = 50
    new Chart(nk, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [10, 70, 15, 92, 30, 85, 40, 70],
                borderWidth: 4,
                borderColor: "#fff",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "rgba(0, 123, 255, 0.9)",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "rgba(0, 123, 255, 0.9)",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: !1
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false, 
            legend: {
                display: !1
            },
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: {
                        display: !1
                    }
                }],
                yAxes: [{
                    display: !1,
                    ticks: {
                        padding: 10,
                        stepSize: 10,
                        max: 100,
                        min: 0
                    },
                    gridLines: {
                        display: !0,
                        drawBorder: !1,
                        lineWidth: 1,
                        zeroLineColor: "#e5e5e5"
                    }
                }]
            }
        },
    });

    var nk = document.getElementById("chart-online-sale");
    // nk.height = 50
    new Chart(nk, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 4,
                borderColor: "#fff",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "rgba(0, 123, 255, 0.9)",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "rgba(0, 123, 255, 0.9)",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: !1
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false, 
            legend: {
                display: !1
            },
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: {
                        display: !1
                    }
                }],
                yAxes: [{
                    display: !1,
                    ticks: {
                        padding: 10,
                        stepSize: 100,
                        max: 600,
                        min: 0
                    },
                    gridLines: {
                        display: !0,
                        drawBorder: !1,
                        lineWidth: 1,
                        zeroLineColor: "#e5e5e5"
                    }
                }]
            }
        },
    });

    var nk = document.getElementById("chart-venue-expenses");
    // nk.height = 50
    new Chart(nk, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 30, 250, 20, 300, 50, 400, 30],
                borderWidth: 4,
                borderColor: "#fff",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "rgba(0, 123, 255, 0.9)",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "rgba(0, 123, 255, 0.9)",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: !1
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false, 
            legend: {
                display: !1
            },
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: {
                        display: !1
                    }
                }],
                yAxes: [{
                    display: !1,
                    ticks: {
                        padding: 10,
                        stepSize: 100,
                        max: 600,
                        min: 0
                    },
                    gridLines: {
                        display: !0,
                        drawBorder: !1,
                        lineWidth: 1,
                        zeroLineColor: "#e5e5e5"
                    }
                }]
            }
        },
    });


})(jQuery);