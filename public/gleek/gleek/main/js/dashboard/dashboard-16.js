(function($) {
    "use strict"



    var i = new Datamap( {
        scope: "world", 
        element: document.getElementById("country-widget-map"), 
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

    
    $("#usage-chart").sparkline([80, 85, 76, 67, 78, 81, 54, 70, 51, 74, 43, 56, 23, 54, 24, 64, 34, 64, 34, 54, 65, 43, 76], {
        type: "bar",
        height: "38",
        barWidth: "4",
        resize: true,
        barSpacing: "10",
        barColor: "#CD78F5", 
        width: "100%"
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

    var ctx = document.getElementById("trend-chart");
    // ctx.height = 70;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [1, 8, 3, 5, 14, 1, 5],
                borderWidth: 3,
                borderColor: "#28BDB8",
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

    var ctx = document.getElementById("weekly-view-chart");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [8, 13, 1, 14, 1, 5, 11],
                borderWidth: 3,
                borderColor: "#28BDB8",
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
            maintainAspectRatio: false, 
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

    var ctx = document.getElementById("weekly-likes-chart");
    // ctx.height = 110;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01 July", "02 July", "03 July", "04 July", "05 July", "06 July", "07 July"], 
            datasets: [{
                data: [1, 13, 1, 5, 10, 3, 15],
                borderWidth: 3,
                borderColor: "#9A56FF",
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

    var ctx = document.getElementById("t-monthly-likes-chart");
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

    $('#photo-carousel').owlCarousel({
        // rtl: true, 
        items: 1, 
        dots: true, 
        autoplay: true, 
        loop: true, 
        autoWidth: true, 
        // onInitialized: fixOwl,
        // onRefreshed: fixOwl,
        responsive: {
            1200: {
                autoWidth: false
            }
        }
    });



})(jQuery);