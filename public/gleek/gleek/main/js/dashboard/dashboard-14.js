(function($) {
    "use strict"

    $('#t-revenue').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0.75,
        size: 73,
        lineCap: 'round',
        fill: { color: '#43E794' },
        reverse: false
    });
    
    
    $("#daily-sales").sparkline([80, 85, 76, 77, 78, 81], {
        type: "bar",
        height: "78",
        barWidth: "3",
        resize: !0,
        barSpacing: "18",
        barColor: "#7F63F4"
    });

    
    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            let ctx = this.chart.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = 'rgba(0, 0, 0, .3)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 1;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });

    var ctx = document.getElementById("total-revenue");
    // ctx.height = 250;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2015", "2016", "2017", "2018", "2019"], 
            datasets: [{
                data: [1000, 2260, 2135, 2525, 3732],
                backgroundColor: "rgba(113, 216, 117, .3)", 
                borderWidth: 3,
                borderColor: "#75D879",
                pointBackgroundColor: "#fff",
                pointBorderColor: "#D07BED",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#D07BED",
                pointRadius: 0,
                pointHoverRadius: 5,
                fill: true
            }, {
                data: [1000, 1830, 1735, 2135, 3232],
                backgroundColor: "rgba(34, 144, 255, .3)", 
                borderWidth: 3,
                borderColor: "#2290FF",
                pointBackgroundColor: "#fff",
                pointBorderColor: "#D07BED",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#D07BED",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: true
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
                        stepSize: 500,
                        max: 4000,
                        min: 1000
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

    
    var ctx = document.getElementById("sold-product");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [1, 14, 5, 8, 1, 14, 2],
                borderWidth: 3,
                borderColor: "#fff",
                pointBackgroundColor: "#FB9D46",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#FA9B48",
                pointHoverBorderColor: "#fff",
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
            },
            tooltips: {
                enabled: true
            }
        }
    });


    var ctx = document.getElementById("comparison-rate");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O"],
            datasets: [{
                label: '',
                data: [4, 3, 4, 4, 3, 2, 3, 5, 4, 5],
                backgroundColor: '#fff',
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
                        display: true, // hide main x-axis line
                        beginAtZero: true
                    },
                    barPercentage: 1,
                    categoryPercentage: 0.15
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

    var ctx = document.getElementById("total-income");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [50, 31, 49, 75, 84, 90, 43],
                borderWidth: 3,
                borderColor: "#D07BED",
                pointBackgroundColor: "#D07BED",
                pointBorderColor: "#D07BED",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#D07BED",
                pointRadius: 5,
                pointHoverRadius: 6,
                fill: !1
            }, {
                data: [45, 35, 39, 58, 90, 76, 80],
                borderWidth: 3,
                borderColor: "#51CCA9",
                pointBackgroundColor: "#51CCA9",
                pointBorderColor: "#51CCA9",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#51CCA9",
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



    Morris.Donut({
        element: 'monthly-income-chart',
        data: [{
            label: "Daily Income",
            value: 20,

        }, {
            label: "Weekly Income",
            value: 98
        }, {
            label: "Monthly Income",
            value: 235
        }, {
            label: "Yearly Income",
            value: 634
        }],
        resize: true,
        colors: ['#7BB31A', '#FFC107', '#00A2FF', "#FF9800"]
    });


    var i = new Datamap( {
        scope: "world", 
        element: document.getElementById("company-locations"), 
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







    // $(document).ready(function() {
    //     let circles = $("#company-locations .datamaps-bubble")
    //     for(let i = 0; i < circles.length; i++) {
    //         console.log(circles[i].attributes.style);
    //     }
    // });




})(jQuery);

