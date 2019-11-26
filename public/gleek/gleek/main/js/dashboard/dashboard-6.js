$(function() {
    "use strict";

    var draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            let ctx = this.chart.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = 'rgba(127, 99, 244, .5)';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 9;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });

    //  Mixed chart
    var ctx = document.getElementById("sales-graph");
    // ctx.height = 80;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
            datasets: [{
                    label: "Product Sold",
                    type: "line",
                    borderColor: "#7f63f4",
                    backgroundColor: 'transparent',
                    data: [168, 129, 84, 196, 137, 70, 45, 163, 47, 99, 23, 32, 59, 87, 57],
                    pointBackgroundColor: "#7f63f4",
                    pointHoverBackgroundColor: "#7f63f4",
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    fill: true
                },
                {
                    label: "Total Customer",
                    type: "bar",
                    backgroundColor: "#f0f2f8",
                    backgroundColorHover: "#7f63f4",
                    data: [168, 129, 84, 196, 137, 70, 45, 163, 47, 99, 23, 32, 59, 87, 57]
                }
            ]
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false, 
            barRadius: 4,
            title: {
                display: false,
                text: 'Population growth (millions): Europe & Africa'
            },
            legend: {
                position: 'top',
                labels: {
                    // usePointStyle: true,
                    fontFamily: 'CircularStdBook',
                }
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true, 
                        padding: 10,
                        stepSize: 50,
                        max: 200,
                        min: 0
                    }, 
                    gridLines: {
                        display: true, 
                        zeroLineColor: "transparent", 
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    // Change here
                    display: true, 
                    barPercentage: 0.1, 
                    gridLines: {
                        display: false, 
                        zeroLineColor: "transparent", 
                        drawBorder: false
                    }
                }]
            }
        }
    });

    $('#ticket-circle-progress-1').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.8,
        size: 110,
        fill: { color: '#FE60AD' },
        thickness: 5,
        emptyFill: "#fff"
    });

    $('#ticket-circle-progress-2').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.7,
        size: 110,
        fill: { color: '#FDA23F' },
        thickness: 5,
        emptyFill: "#fff"
    });

    var ctx = document.getElementById("ticket-small-chart-1");
    // ctx.height = 135;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#7F63F4",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#e46bd7",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#e46bd7",
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
                        draw1Border: !1,
                        lineWidth: 0.5,
                        zeroLineColor: "#e5e5e5"
                    }
                }]
            }
        },
    });

    var ctx = document.getElementById("ticket-small-chart-2");
    // ctx.height = 135;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#43e794",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#e46bd7",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#e46bd7",
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
                        draw1Border: !1,
                        lineWidth: 0.5,
                        zeroLineColor: "#e5e5e5"
                    }
                }]
            }
        },
    });



});