$(function() {
    "use strict";


    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            let ctx = this.chart.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = '#f060b1';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 9;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });

    //  Mixed chart
    var ctx = document.getElementById("mixedChart");
    // ctx.height = 70;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug"],
            datasets: [{
                    label: "Product Sold",
                    type: "line",
                    borderColor: "#f060b1",
                    backgroundColor: 'transparent',
                    data: [32, 59, 87, 45, 63, 57, 34, 74, 68, 29, 84, 96, 37, 70, 71, 44, 47, 99, 23, 39],
                    pointColor: "#f060b1",
                    pointBorderColor: "#f060b1",
                    pointBackgroundColor: "#fff",
                    pointBorderColor: "#f060b1",
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverBackgroundColor: "#f060b1",
                    pointHoverBorderColor: "#f060b1",
                    pointHoverRadius: 7,
                    fill: true
                },
                {
                    label: "Total Customer",
                    type: "bar",
                    backgroundColor: "#f2f2f2",
                    backgroundColorHover: "#f060b1",
                    data: [32, 59, 87, 45, 63, 57, 34, 74, 68, 29, 84, 96, 37, 70, 71, 44, 47, 99, 23, 39],
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
                display: false,
                labels: {
                    // usePointStyle: true,
                    fontFamily: 'CircularStdBook',
                },


            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    // Change here
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    // display: false,
                    barPercentage: 0.1
                }]
            }
        }
    });


    // Sales Properties



    var ctx = document.getElementById("sales-properties");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", ],
            datasets: [{
                label: '',
                data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3, 5.5, 4, 6, 9, 12, 4, 3, 6, 4.5, 6, 8, 4.5, 5, 6, 4.5, 5.5, ],
                backgroundColor: '#fdae3b',
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false, // hide main x-axis line
                        beginAtZero: true
                    },
                    barPercentage: 1,
                    categoryPercentage: 0.3
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false, // hide main y-axis line
                        display: false
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true
                    },
                }]
            },
            tooltips: {
                enabled: true
            }
        }
    });




    // Rent Properties



    var ctx = document.getElementById("rent-properties");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", ],
            datasets: [{
                label: '',
                data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3, 5.5, 4, 6, 9, 12, 4, 3, 6, 4.5, 6, 8, 4.5, 5, 6, 4.5, 5.5, ],
                backgroundColor: '#71d875',
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false, // hide main x-axis line
                        beginAtZero: true
                    },
                    barPercentage: 1,
                    categoryPercentage: 0.3
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false, // hide main y-axis line
                        display: false
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true
                    },
                }]
            },
            tooltips: {
                enabled: true
            }
        }
    });

});