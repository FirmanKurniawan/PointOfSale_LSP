
$(function () {
    "use strict";
    
    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            let ctx = this.chart.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = '#ccc';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 1;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });

    var ctx = document.getElementById("chart-campaign");
    // ctx.height = 50;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jul, 01", "Jul, 02", "Jul, 03", "Jul, 04", "Jul, 05", "Jul, 06", "Jul, 07"],
            datasets: [{
                data: [100, 3470, 1250, 7120, 1300, 9250, 8400],
                borderWidth: 3,
                borderColor: "#7F63F4",
                pointColor: "#7F63F4",
                pointBorderColor: "#7F63F4",
                pointBackgroundColor: "#7F63F4",
                pointBorderColor: "transparent",
                pointBorderWidth: 2,
                pointRadius: 3,
                pointHoverBackgroundColor: "#7F63F4",
                pointHoverBorderColor: "#7F63F4",
                pointHoverRadius: 5,
                pointStyle: 'circle',
                fill: false
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
                    display: !0,
                    gridLines: {
                        display: !0
                    }
                }],
                yAxes: [{
                    display: !0,
                    ticks: {
                        padding: 10,
                        stepSize: 1000,
                        max: 10000,
                        min: 0
                    },
                    gridLines: {
                        display: !0,
                        draw1Border: !0,
                        lineWidth: 0.5,
                        zeroLineColor: "#e5e5e5"
                    }
                }]
            }
        },
    });

    
    var ctx = document.getElementById("impression-chart");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [10, 170, 150, 320, 30, 250, 10, 350],
                borderWidth: 3,
                borderColor: "#FB9D46",
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



    var ctx = document.getElementById("top-products");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [200, 20, 250, 20, 23, 250, 400, 30],
                borderWidth: 3,
                borderColor: "#24BEB7",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#c285fe",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#c285fe",
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


    var ctx = document.getElementById("conversion-chart");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 20, 300, 25, 400, 430],
                borderWidth: 3,
                borderColor: "#9A56FF",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#2eccab",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#2eccab",
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

    var ctx = document.getElementById("cpa-chart");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [40, 270, 150, 120, 300, 220, 400, 50],
                borderWidth: 3,
                borderColor: "#EA69CE",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#2eccab",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#2eccab",
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

    $('.input-daterange-datepicker').daterangepicker({
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-danger',
        cancelClass: 'btn-inverse'
    });


});
