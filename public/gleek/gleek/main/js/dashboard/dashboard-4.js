$(function() {
    "use strict";

    // Line Chart
    $("#sparkline1").sparkline([33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38], {
        type: "bar",
        height: "40",
        barWidth: "2",
        resize: !0,
        barSpacing: "6",
        barColor: "#6a707e"
    });

    $("#sparkline2").sparkline([33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38], {
        type: "bar",
        height: "40",
        barWidth: "2",
        resize: !0,
        barSpacing: "6",
        barColor: "#6a707e"
    });

    $("#sparkline3").sparkline([33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38], {
        type: "bar",
        height: "40",
        barWidth: "2",
        resize: !0,
        barSpacing: "6",
        barColor: "#6a707e"
    });

    $("#new-patients-chart").sparkline([33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38], {
        type: "bar",
        height: "40",
        barWidth: "2",
        resize: !0,
        barSpacing: "6",
        barColor: "#6a707e"
    });

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


    var ctx = document.getElementById("hospital-survey");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [50, 31, 49, 75, 84, 90, 43],
                borderWidth: 3,
                borderColor: "#00AFF0",
                pointBackgroundColor: "#00AFF0",
                pointBorderColor: "#00AFF0",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#00AFF0",
                pointRadius: 5,
                pointHoverRadius: 6,
                fill: !1
            }, {
                data: [45, 35, 39, 58, 90, 76, 80],
                borderWidth: 3,
                borderColor: "#75D979",
                pointBackgroundColor: "#75D979",
                pointBorderColor: "#75D979",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#75D979",
                pointRadius: 5,
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


    //New Patient
    var ctx = document.getElementById("new-patient");
    ctx.height = 140;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            type: 'line',

            datasets: [{
                data: [28, 35, 36, 48, 46, 42, 60],
                backgroundColor: "rgba(113,216,117,0.32)",
                borderColor: "#71d875",
                borderWidth: 3,
                strokeColor: "#71d875",
                // capBezierPoints: !0,
                pointColor: "#71d875",
                pointBorderColor: "#71d875",
                pointBackgroundColor: "#71d875",
                pointBorderWidth: 3,
                pointRadius: 5,
                pointHoverBackgroundColor: "#71d875",
                pointHoverBorderColor: "#71d875",
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            // maintainAspectRatio: false, 
            tooltips: {
                enabled: true,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,

                }
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    // Heart Surgeries
    var ctx = document.getElementById("heart-surgeries");
    ctx.height = 140;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            type: 'line',

            datasets: [{
                data: [28, 35, 36, 48, 46, 42, 60],
                backgroundColor: "rgba(255,164,34,0.32)",
                borderColor: "#ffa422",
                borderWidth: 3,
                strokeColor: "#ffa422",
                capBezierPoints: !0,
                pointColor: "#ffa422",
                pointBorderColor: "#ffa422",
                pointBackgroundColor: "#ffa422",
                pointBorderWidth: 3,
                pointRadius: 5,
                pointHoverBackgroundColor: "#ffa422",
                pointHoverBorderColor: "#ffa422",
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                enabled: true,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,

                },


            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });




    // Medical Treatment
    var ctx = document.getElementById("medical-treatment");
    ctx.height = 140;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            type: 'line',

            datasets: [{
                data: [28, 35, 36, 48, 46, 42, 60],
                backgroundColor: "rgba(0,175,240,0.32)",
                borderColor: "#00aff0",
                borderWidth: 3,
                strokeColor: "#00aff0",
                capBezierPoints: !0,
                pointColor: "#00aff0",
                pointBorderColor: "#00aff0",
                pointBackgroundColor: "#00aff0",
                pointBorderWidth: 3,
                pointRadius: 5,
                pointHoverBackgroundColor: "#00aff0",
                pointHoverBorderColor: "#00aff0",
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                enabled: true,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,

                }
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    var i = new Datamap( {
        scope: "world", 
        element: document.getElementById("world-map-hospital"), 
        responsive: !0, 
        geographyConfig: {
            popupOnHover: !1, 
            highlightOnHover: !1, 
            borderColor: "transparent", 
            borderWidth: 1, 
            highlightBorderWidth: 3, 
            highlightFillColor: "rgba(0,123,255,0.5)", 
            highlightBorderColor: "transparent", 
            borderWidth: 1
        }, 
        bubblesConfig: {
            popupTemplate: function (e, i) {
                return '<div class="datamap-sales-hover-tooltip">' + i.country + '<span class="m-l-5"></span>' + i.sold + "</div>"
            }, 
            borderWidth: 1, 
            highlightBorderWidth: 3, 
            highlightFillColor: "rgba(0,123,255,0.5)", 
            highlightBorderColor: "transparent", 
            fillOpacity: .75
        }, 
        fills: {
            Visited: "#00A2FF", 
            neato: "#673AB7", 
            white: "#FF9800", 
            defaultFill: "#E7E8E9"
        }
    });
    
    i.bubbles([{
        centered: "USA", fillKey: "white", radius: 5, sold: "$500", country: "United States"
    }, {
        centered: "SAU", fillKey: "Visited", radius: 5, sold: "$900", country: "Saudia Arabia"
    }, {
        centered: "RUS", fillKey: "neato", radius: 5, sold: "$250", country: "Russia"
    }, {
        centered: "CAN", fillKey: "white", radius: 5, sold: "$1000", country: "Canada"
    }, {
        centered: "IND", fillKey: "Visited", radius: 5, sold: "$50", country: "India"
    }, {
        centered: "AUS", fillKey: "white", radius: 5, sold: "$700", country: "Australia"
    }, {
        centered: "BGD", fillKey: "Visited", radius: 5, sold: "$1500", country: "Bangladesh"
    }
    ]),
    window.addEventListener("resize", function (e) {
        i.resize()
    });


});