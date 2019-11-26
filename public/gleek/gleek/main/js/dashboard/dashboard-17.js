(function($) {
    "use strict"

    var ctx = document.getElementById("table-chart-1");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#CD78F5",
                pointBackgroundColor: "#FFF",
                backgroundColor: "#F5E4FD", 
                pointBorderColor: "#e46bd7",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#e46bd7",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: true
            }]
        },
        options: {
            responsive: !0,
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

    var ctx = document.getElementById("table-chart-2");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#F26C4F",
                pointBackgroundColor: "#FFF",
                backgroundColor: "#FCE2DC", 
                pointBorderColor: "#e46bd7",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#e46bd7",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: true
            }]
        },
        options: {
            responsive: !0,
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

    var ctx = document.getElementById("table-chart-3");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#FBAF5D",
                pointBackgroundColor: "#FFF",
                backgroundColor: "#FEEFDF", 
                pointBorderColor: "#e46bd7",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#e46bd7",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: true
            }]
        },
        options: {
            responsive: !0,
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

    var ctx = document.getElementById("table-chart-4");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#CF7EF5",
                pointBackgroundColor: "#FFF",
                backgroundColor: "#F5E4FD", 
                pointBorderColor: "#e46bd7",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#e46bd7",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: true
            }]
        },
        options: {
            responsive: !0,
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

    var ctx = document.getElementById("table-chart-5");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#6DCFF6",
                pointBackgroundColor: "#FFF",
                backgroundColor: "#E2F5FD", 
                pointBorderColor: "#e46bd7",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#e46bd7",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: true
            }]
        },
        options: {
            responsive: !0,
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

    var ctx = document.getElementById("table-chart-6");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#6DCFF6",
                pointBackgroundColor: "#FFF",
                backgroundColor: "#E2F5FD", 
                pointBorderColor: "#e46bd7",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#e46bd7",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: true
            }]
        },
        options: {
            responsive: !0,
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

    //Dounut Chart
    var ctx = document.getElementById("revenue-chart");
    // ctx.height = 220;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [10, 20, 30, 50],
                backgroundColor: [
                    "rgba(255,193,7,0.9)",
                    "rgba(0,162,255,0.9)",
                    "rgba(123,179,26,0.9)",
                    "rgba(255,152,0,0.9)"
                ],
                hoverBackgroundColor: [
                    "rgba(255,193,7,0.5)",
                    "rgba(0,162,255,0.5)",
                    "rgba(123,179,26,0.5)",
                    "rgba(255,152,0,0.5)"
                ]

            }],
            labels: [
                "Mushroom Soup",
                "Salad with Bacon",
                "Grilled Chicken",
                "Beef Sashimi"
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            cutoutPercentage: 60,
            animation: {
                animateRotate: true,
                animateScale: true,
            },
            legend: {
                position: 'right',
                display: false, 
                labels: {
                    usePointStyle: true,
                    fontFamily: "CircularStdBook",
                },


            },
        }
    });

    var ctx = document.getElementById("chart-views-display");
    // ctx.height = 80;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                data: [0, 4, 5, 3, 5, 5, 10, 2, 5, 6, 1, 7],
                backgroundColor: 'rgba(255, 152, 0, .75)',
                borderColor: 'transparent',
                borderWidth: 0,
                pointStyle: 'circle',
                pointRadius: 0,
                pointBorderColor: '#fff',
                pointBackgroundColor: 'rgb(255, 152, 0)',
            }, {
                data: [0, 10, 7, 12, 2, 10, 15, 13, 2, 63, 12, 21, 23],
                backgroundColor: 'rgba(64, 185, 255, .75)',
                borderColor: 'transparent',
                borderWidth: 0,
                pointStyle: 'circle',
                pointRadius: 0,
                pointBorderColor: '#fff',
                pointBackgroundColor: 'rgb(64, 185, 255)'
            }, {
                data: [0, 10, 3, 12, 2, 40, 12, 13, 22, 33, 12, 21, 23],
                backgroundColor: 'rgba(255, 209, 69, .75)',
                borderColor: 'transparent',
                borderWidth: 0,
                pointStyle: 'circle',
                pointRadius: 0,
                pointBorderColor: '#fff',
                pointBackgroundColor: 'rgb(255, 209, 69)'
            }, {
                data: [50, 10, 7, 12, 20, 10, 19, 13, 22, 23, 12, 21, 23],
                backgroundColor: 'rgba(156, 198, 83, .75)',
                borderColor: 'transparent',
                borderWidth: 0,
                pointStyle: 'circle',
                pointRadius: 0,
                pointBorderColor: '#fff',
                pointBackgroundColor: 'rgb(156, 198, 83)'
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
                intersect: false
            },
            legend: {
                position: 'top',
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat'
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
                        display: true,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Callers'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    
    var ctx = document.getElementById("sort-chart");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [10, 3, 13, 5, 14, 1, 10],
                borderWidth: 3,
                borderColor: "#F58862",
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

    
    var ctx = document.getElementById("sort-graph");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [10, 3, 13, 5, 14, 1, 10],
                borderWidth: 3,
                borderColor: "#F58862",
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

    
    var ctx = document.getElementById("sort-track");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [10, 3, 13, 5, 14, 1, 10],
                borderWidth: 3,
                borderColor: "#E969CF",
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

    
    var ctx = document.getElementById("sort-diagrams");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [10, 3, 13, 5, 14, 1, 10],
                borderWidth: 3,
                borderColor: "#E969CF",
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



    //gaugeJS init
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.4, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.76, // // Relative to gauge radius
            strokeWidth: 0.031, // The thickness
            color: '#000000' // Fill color
        },
        // limitMax: false,     // If false, max value increases automatically if value > maxValue
        // limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#71D875',    // just experiment with them
        strokeColor: '#F3F6F9',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
    };
    var target = document.getElementById('gauge-1'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 3000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 113; // set animation speed (32 is default value)
    gauge.set(1850); // set actual value


    $('.track-list-stats').slimscroll({
        position: "right",
        size: "5px",
        height: "550px",
        color: "#7F63F4"
    });

    $('.track-list').slimscroll({
        position: "right",
        size: "5px",
        height: "268px",
        color: "#7F63F4"
    });
    

    $('.artist-list-card').slimscroll({
        position: "right",
        size: "5px",
        height: "645px",
        color: "#7F63F4"
    });


})(jQuery);