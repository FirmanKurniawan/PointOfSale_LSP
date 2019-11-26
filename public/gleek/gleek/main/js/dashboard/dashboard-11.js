(function($) {
    "use strict"

    //switch by switchery
    var elem1 = $('.js-switch-1');
    new Switchery(elem1[0], {
        color: '#FF5275', 
        secondaryColor: '#FF5275'
    });

    $("#sparklinedash1").sparkline([80, 85, 76, 67, 78, 81, 54, 70, 51, 44, 79, 64, 68, 69, 72], {
        type: "bar",
        height: "50",
        barWidth: "2",
        resize: !0,
        barSpacing: "8",
        barColor: "#FDA23F"
    });

    $("#sparklinedash2").sparkline([90, 75, 86, 77, 98, 61, 74, 90, 71, 84, 79, 94, 78, 69, 72], {
        type: "bar",
        height: "50",
        barWidth: "2",
        resize: !0,
        barSpacing: "8",
        barColor: "#9A56FF"
    });

    var ctx = document.getElementById("call-monitors");
    // ctx.height = 80;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                // label: "Saikot",
                data: [0, 4, 5, 3, 5, 5, 10, 2, 5, 6, 1, 7, 2, 12, 12],
                backgroundColor: 'transparent',
                borderColor: '#FC5D7C',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#FF5274',
            }, {
                data: [0, 10, 7, 12, 20, 10, 15, 13, 22, 23, 12, 21, 23, 17, 25],
                // label: "Saiful",
                backgroundColor: '#D9FAEA',
                borderColor: '#43E794',
                borderWidth: 3.5,
                // pointStyle: 'circle',
                // pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'transparent'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                position: 'top',
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                }
            },
            scales: {
                xAxes: [{
                    display: true,
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
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Callers'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    var ctx = document.getElementById("call-trend-chart-1");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [10, 17, 85, 32, 30, 95, 10, 85],
                borderWidth: 3,
                borderColor: "#FD61B0",
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
                        padding: 3,
                        stepSize: 10,
                        max: 100,
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


    var ctx = document.getElementById("call-trend-chart-2");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [9, 97, 15, 92, 30, 95, 10, 85],
                borderWidth: 3,
                borderColor: "#FD61B0",
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
                        padding: 3,
                        stepSize: 10,
                        max: 100,
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


    var ctx = document.getElementById("call-trend-chart-3");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [40, 17, 35, 82, 30, 95, 10, 55],
                borderWidth: 3,
                borderColor: "#FD61B0",
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
                        padding: 3,
                        stepSize: 10,
                        max: 100,
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


    var ctx = document.getElementById("call-trend-chart-4");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [10, 17, 85, 32, 30, 95, 10, 85],
                borderWidth: 3,
                borderColor: "#FD61B0",
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
                        padding: 3,
                        stepSize: 10,
                        max: 100,
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


    var ctx = document.getElementById("call-trend-chart-5");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [60, 17, 85, 52, 30, 85, 10, 85],
                borderWidth: 3,
                borderColor: "#FD61B0",
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
                        padding: 3,
                        stepSize: 10,
                        max: 100,
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


    var ctx = document.getElementById("call-trend-chart-6");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [10, 97, 15, 32, 93, 15, 10, 85],
                borderWidth: 3,
                borderColor: "#FD61B0",
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
                        padding: 3,
                        stepSize: 10,
                        max: 100,
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


    var ctx = document.getElementById("call-trend-chart-7");
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [15, 87, 15, 92, 30, 15, 90, 85],
                borderWidth: 3,
                borderColor: "#FD61B0",
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
                        padding: 3,
                        stepSize: 10,
                        max: 100,
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






})(jQuery);
