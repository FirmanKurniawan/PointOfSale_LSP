(function ($) {
    "use strict";

    //Team chart
    var ctx = document.getElementById("team-chart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                data: [0, 15, 7, 12, 85, 10, 50],
                label: "Saiful",
                backgroundColor: 'rgba(0, 162, 255, .8)',
                borderColor: 'rgba(0, 162, 255, .8)',
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#00A2FF',
            }, {
                label: "Saikot",
                data: [0, 14, 5, 3, 15, 5, 0],
                backgroundColor: 'rgba(52, 199, 59, .8)',
                borderColor: 'rgba(52, 199, 59, .8)',
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#87de75',
            }]
        },
        options: {
            responsive: true,
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
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


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
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    //Sales chart
    var ctx = document.getElementById("sales-chart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                label: "Clothes",
                data: [0, 10, 20, 10, 25, 15, 150],
                backgroundColor: 'transparent',
                borderColor: '#00A2FF',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#00A2FF',

            }, {
                label: "Foods",
                data: [0, 30, 10, 60, 50, 63, 10],
                backgroundColor: 'transparent',
                borderColor: '#F44336',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#F44336',
            }, {
                label: "Electronics",
                data: [0, 50, 40, 20, 40, 79, 20],
                backgroundColor: 'transparent',
                borderColor: '#34C73B',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#34C73B',
            }]
        },
        options: {
            responsive: true,

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
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
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
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    });







    //line chart
    var ctx = document.getElementById("lineChart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    borderColor: "rgba(0, 162, 255, .5)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 162, 255, .1)",
                    data: [22, 44, 67, 43, 76, 45, 12]
                },
                {
                    label: "My Second dataset",
                    borderColor: "rgba(52, 199, 59, .9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(52, 199, 59, .5)",
                    pointHighlightStroke: "rgba(52, 199, 59, 1)",
                    data: [16, 32, 18, 26, 42, 33, 44]
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    });


    //bar chart
    var ctx = document.getElementById("barChart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: "#34C73B",
                    borderWidth: "0",
                    backgroundColor: "rgba(52, 199, 59, .4)"
                },
                {
                    label: "My Second dataset",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: "#00A2FF",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 162, 255, .4)"
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 0.2
                }]
            }
        }
    });

    //radar chart
    var ctx = document.getElementById("radarChart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 66, 45, 56, 55, 40],
                    borderColor: "rgba(0, 162, 255, .7)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 162, 255, .5)"
                },
                {
                    label: "My Second dataset",
                    data: [28, 12, 40, 19, 63, 27, 87],
                    borderColor: "rgba(55, 160, 0, 0.7)",
                    borderWidth: "1",
                    backgroundColor: "rgba(52, 199, 59, .5)"
                }
            ]
        },
        options: {
            legend: {
                position: 'top'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });


    //pie chart
    var ctx = document.getElementById("pieChart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    "rgba(52, 199, 59, .9)",
                    "rgba(52, 199, 59, .7)",
                    "rgba(52, 199, 59, .5)",
                    "rgba(0,0,0,0.07)"
                ],
                hoverBackgroundColor: [
                    "rgba(52, 199, 59, .9)",
                    "rgba(52, 199, 59, .7)",
                    "rgba(52, 199, 59, .5)",
                    "rgba(0,0,0,0.07)"
                ]

            }],
            labels: [
                "green",
                "green",
                "green"
            ]
        },
        options: {
            responsive: true
        }
    });

    //doughut chart
    var ctx = document.getElementById("doughutChart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    "rgba(52, 199, 59, .9)",
                    "rgba(52, 199, 59, .7)",
                    "rgba(52, 199, 59, .5)",
                    "rgba(52, 199, 59, .2)"
                ],
                hoverBackgroundColor: [
                    "rgba(52, 199, 59, .9)",
                    "rgba(52, 199, 59, .7)",
                    "rgba(52, 199, 59, .5)",
                    "rgba(52, 199, 59, .2)"
                ]

            }],
            labels: [
                "green",
                "green",
                "green",
                "green"
            ]
        },
        options: {
            responsive: true,
        }
    });

    //polar chart
    var ctx = document.getElementById("polarChart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            datasets: [{
                data: [15, 18, 9, 6, 19],
                backgroundColor: [
                    "rgba(52, 199, 59, .5)",
                    "rgba(52, 199, 59, .7)",
                    "rgba(52, 199, 59, .3)",
                    "rgba(52, 199, 59, .1)",
                    "rgba(52, 199, 59, .8)"
                ]

            }],
            labels: [
                "green",
                "green",
                "green",
                "green"
            ]
        },
        options: {
            responsive: true
        }
    });

    // single bar chart
    var ctx = document.getElementById("singelBarChart");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [40, 55, 75, 81, 56, 55, 40],
                    borderColor: "rgba(52, 199, 59, .9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(52, 199, 59, .5)"
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });




})(jQuery);



let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function () {
        draw.apply(this, arguments);
        let nk = this.chart.chart.ctx;
        let _stroke = nk.stroke;
        nk.stroke = function () {
            nk.save();
            nk.shadowColor = '#ddd';
            nk.shadowBlur = 10;
            nk.shadowOffsetX = 0;
            nk.shadowOffsetY = 4;
            _stroke.apply(this, arguments)
            nk.restore();
        }
    }
});

(nk = document.getElementById("canvas")).height = 100;
myChart = new Chart(nk, {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
        datasets: [{
            data: [100, 70, 150, 120, 300, 250, 400, 300],
            borderWidth: 4,
            borderColor: "#00A2FF",
            pointBackgroundColor: "#FFF",
            pointBorderColor: "#00A2FF",
            pointHoverBackgroundColor: "#FFF",
            pointHoverBorderColor: "#00A2FF",
            pointRadius: 0,
            pointHoverRadius: 6,
            fill: !1
        },
        {
            data: [20, 70, 300, 120, 180, 220, 450, 250],
            borderWidth: 4,
            borderColor: "#34C73B",
            pointBackgroundColor: "#FFF",
            pointBorderColor: "#34C73B",
            pointHoverBackgroundColor: "#FFF",
            pointHoverBorderColor: "#34C73B",
            pointRadius: 0,
            pointHoverRadius: 6,
            fill: !1
        }
        ]
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
                    drawBorder: !1,
                    lineWidth: 1,
                    zeroLineColor: "#e5e5e5"
                }
            }]
        }
    },
});


