(function($) {
    "use strict"

    $("#walet-status").sparkline([80, 85, 76, 67, 78, 81, 54, 70, 51, 74, 79, 64, 68, 69, 72, 54, 75], {
        type: "bar",
        height: "65",
        barWidth: "3",
        resize: !0,
        barSpacing: "17",
        barColor: "#71D875"
    });


    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            let ctx = this.chart.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = 'rgba(0, 0, 0, .4)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 1;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });

    var ctx = document.getElementById("transaction");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [10, 30, 35, 25, 32, 60, 90],
                borderWidth: 3,
                borderColor: "#D07BED",
                pointBackgroundColor: "#fff",
                pointBorderColor: "#D07BED",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#D07BED",
                pointRadius: 5,
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
                    display: !0,
                    ticks: {
                        padding: 10,
                        stepSize: 25,
                        max: 125,
                        min: 0
                    },
                    gridLines: {
                        display: !0,
                        draw1Border: !1,
                        lineWidth: 0.5,
                        zeroLineColor: "transparent",
                        drawBorder: false
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById("transaction-receivable");
    // ctx.height = 40;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 
            datasets: [{
                data: [2, 9, 4, 13, 9, 6, 10, 11, 12, 4, 14, 13],
                borderWidth: 3,
                borderColor: "#E46CDA",
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
            responsive: true,
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
                        stepSize: 5,
                        max: 15,
                        min: 0
                    },
                    gridLines: {
                        display: !1,
                        draw1Border: !1,
                        lineWidth: 0.5,
                        // zeroLineColor: "transparent",
                        // drawBorder: false
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById("transaction-payable");
    // ctx.height = 40;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 
            datasets: [{
                data: [10, 3, 13, 5, 3, 9, 6, 1,12, 4, 14, 3],
                borderWidth: 3,
                borderColor: "#FA9A4A",
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
            responsive: true,
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
                        stepSize: 5,
                        max: 15,
                        min: 0
                    },
                    gridLines: {
                        display: !1,
                        draw1Border: !1,
                        lineWidth: 0.5,
                        // zeroLineColor: "transparent",
                        // drawBorder: false
                    }
                }]
            }
        }
    });




})(jQuery);