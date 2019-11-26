$(function() {
    "use strict";

    Morris.Area({
        element: 'workout-statistics',
        data: [{
                period: '01 - 04 July',
                Running: 0,
                Cycling: 0,
            }, {
                period: '05 -10 July',
                Running: 90,
                Cycling: 60,
            }, {
                period: '11 - 15 July',
                Running: 40,
                Cycling: 80,
            }, {
                period: '16 - 20 July',
                Running: 30,
                Cycling: 47,
            }, {
                period: '21 - 25 July',
                Running: 150,
                Cycling: 40,
            }, {
                period: '26 - 29 July',
                Running: 25,
                Cycling: 80,
            }, {
                period: '30 - 31 July',
                Running: 10,
                Cycling: 10,
            }


        ],
        xkey: 'period',
        ykeys: ['Running', 'Cycling'],
        labels: ['Running', 'Cycling'],
        pointSize: 5,
        fillOpacity: 0,
        pointStrokeColors: ['#A660FF', '#FDA23F'],
        behaveLikeLine: true,
        gridLineColor: '#F5F5F5',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#A660FF', '#FDA23F'],
        resize: true, 
        parseTime: false

    });


    var map;

    map = new GMaps({
        el: '#routes',
        lat: 23.724972447504364,
        lng: 90.42870283126831,
        zoom: 14,
        zoomControl: false,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false

    });



    map.drawRoute({
        origin: [23.724972447504364, 90.42870283126831],
        destination: [23.726661840052, 90.42148232460022],
        travelMode: 'driving',
        strokeColor: '#51cca9',
        strokeOpacity: 0.6,
        strokeWeight: 6
    });

    var styles = [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "saturation": "-100"
            }]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                    "saturation": -100
                },
                {
                    "lightness": "50"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": "-100"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [{
                "lightness": "30"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [{
                "lightness": "40"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                    "hue": "#ffff00"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -97
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        }
    ];

    map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
    });

    map.setStyle("map_style");




    map = new GMaps({
        el: '#routes2',
        lat: 23.724972447504364,
        lng: 90.42870283126831,
        zoom: 14,
        zoomControl: false,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false

    });


    map.drawRoute({
        origin: [23.724972447504364, 90.42870283126831],
        destination: [23.726661840052, 90.42148232460022],
        travelMode: 'driving',
        strokeColor: '#51cca9',
        strokeOpacity: 0.6,
        strokeWeight: 6
    });
    var styles = [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "saturation": "-100"
            }]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                    "saturation": -100
                },
                {
                    "lightness": "50"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": "-100"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [{
                "lightness": "30"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [{
                "lightness": "40"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                    "hue": "#ffff00"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -97
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        }
    ];

    map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
    });

    map.setStyle("map_style");








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

    var ctx = document.getElementById("canvas1");
    // ctx.height = 200;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#e46bd7",
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



    var ctx = document.getElementById("canvas2");
    // ctx.height = 200;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#c285fe",
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


    var ctx = document.getElementById("canvas3");
    // ctx.height = 200;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [{
                data: [100, 70, 150, 120, 300, 250, 400, 300],
                borderWidth: 3,
                borderColor: "#2eccab",
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

    var ctx = document.getElementById("canvas4");
    // ctx.height = 160;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"],
            datasets: [{
                data: [310, 300, 350, 250, 320, 60, 90, 150, 80, 250, 120, 160, 380, 250, 210, 150],
                borderWidth: 3,
                borderColor: "#f78f58",
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#f78f58",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#f78f58",
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



});