(function($) {
    "use strict"

    // $('#us-map').vectorMap({
    //     map: 'us_aea',
    //     backgroundColor: 'transparent',
    //     zoomOnScroll: false,
    //     regionStyle: {
    //         initial: {
    //             fill: 'rgb(83, 166, 250)'
    //         }
    //     }
    // });

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

    // Chart.options.tooltips.style.boxShadow = '2px 3px 10px 0px rgba(119, 119, 119, 0.1)';
    

    var ctx = document.getElementById("temparature-chart");
    // ctx.height = 100;
    let newChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["08: 00", "09: 00", "10: 00", "11: 00", "12: 00", "01: 00", "02: 00"], 
            datasets: [{
                data: [0, 11, 29, 35, 24, 20, 33],
                borderWidth: 3,
                borderColor: "#51CCA9",
                pointBackgroundColor: "#51CCA9",
                pointBorderColor: "#51CCA9",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#51CCA9",
                pointRadius: 2,
                pointHoverRadius: 6,
                fill: !1, 
                label: 'London'
            }, {
                data: [15, 25, 39, 18, 20, 36, 10],
                borderWidth: 3,
                borderColor: "#D07BED",
                pointBackgroundColor: "#D07BED",
                pointBorderColor: "#D07BED",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#D07BED",
                pointRadius: 1,
                pointHoverRadius: 6,
                fill: !1, 
                label: 'Sydney'
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false, 
            legend: {
                display: true
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
                        stepSize: 10,
                        max: 40,
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
            }, 
            tooltips: {
                enabled: true, 
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false, 
                xPadding: 15, 
                yPadding: 15, 
                borderColor: '#ccc', 
                borderWidth: 1
            }
        }
    });

    var j = new Datamap( {
        scope: "usa", 
        element: document.getElementById("us-map"), 
        responsive: !0, 
        geographyConfig: {
            popupOnHover: !1, 
            highlightOnHover: !1, 
            borderColor: "transparent", 
            borderWidth: 1, 
            highlightBorderWidth: 3, 
            highlightFillColor: "rgba(0,123,255,0.5)", 
            highlightBorderColor: "white", 
            borderWidth: 1
        }, 
        bubblesConfig: {
            popupTemplate: function (e, j) {
                return '<div class="datamap-sales-hover-tooltip">' + j.country + '<span class="ml-3"></span>' + j.sold + "</div>"
            }, 
            borderWidth: 1, 
            highlightBorderWidth: 5, 
            highlightFillColor: "rgba(0,123,255,0.5)", 
            highlightBorderColor: "transparent", 
            fillOpacity: .75
        }, 
        fills: {
            Visited: "#00A2FF", 
            neato: "#673AB7", 
            white: "#FF9800", 
            defaultFill: "#53A6FA"
        }
    });
    
    j.bubbles([{
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
        j.resize()
    });



    let carousel  = $('.weather-report-days')
    carousel.owlCarousel({
        nav: true, 
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    carousel.on('translated.owl.carousel', function(event) {
        if(event.item.index === 4) {
            $(this).find('.owl-next').css('display', 'none');
            $(this).find('.owl-prev').css('display', 'block');
        }

        if(event.item.index === 0) {
            $(this).find('.owl-next').css('display', 'block');
            $(this).find('.owl-prev').css('display', 'none');
        }
    });




})(jQuery);