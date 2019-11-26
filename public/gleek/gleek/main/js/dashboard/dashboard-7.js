$(function() {
    "use strict";

    // Project Bar

    var ctx = document.getElementById("project-bar1").getContext('2d');
    // ctx.height = 50;

    var bg_gradient = ctx.createLinearGradient(0, 0, 0, 1);
    bg_gradient.addColorStop(0, 'rgba(244,134,101,0.5)');
    bg_gradient.addColorStop(1, 'rgba(253,162,63,0.5)');

    var hover_gradient = ctx.createLinearGradient(0, 0, 0, 900);
    hover_gradient.addColorStop(0, 'rgba(244,134,101,1)');
    hover_gradient.addColorStop(1, 'rgba(253,162,63,1)');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: '',
                data: [5000, 6000, 4500, 5500, 3004, 6677, 4765, 6007, 5543, 3654, 5509, 4675, 6324, 9345, 3412, 4231, 3432, 6534, 4455, 6323, 8454, 4345, 5121, 6432, 4325, 5325],
                backgroundColor: bg_gradient,
                hoverBackgroundColor: hover_gradient,
                hoverBorderColor: 'purple'
            }]
        },
        options: {
            maintainAspectRatio: false, 
            responsive: true, 
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawBorder: true,
                        display: false
                    },
                    ticks: {
                        display: true, // hide main x-axis line
                        beginAtZero: true
                    },
                    barPercentage: 1,
                    categoryPercentage: 0.2
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: true, // hide main y-axis line
                        display: false
                    },
                    ticks: {
                        display: true,
                        beginAtZero: true
                    },
                }]
            },
            tooltips: {
                enabled: true
            }
        }
    });



    jQuery('#world-map-hospital').vectorMap({
        map: 'world_en',
        backgroundColor: 'transparent',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        zoomOnScroll: false,
        color: '#E5E5E5',
        regionStyle: {
            initial: {
                fill: '#bbb'
            }
        },
        markerStyle: {
            initial: {
                r: 9,
                'fill': '#fff',
                'fill-opacity': 1,
                'stroke': '#000',
                'stroke-width': 5,
                'stroke-opacity': 0.4
            },
        },
        enableZoom: true,
        hoverColor: '#FFB36B',
        markers: [{
            latLng: [21.00, 78.00],
            name: 'Bangladesh'

        }],
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        showTooltip: true,
        onRegionClick: function(element, code, region) {
            var message = 'You clicked "' +
                region +
                '" which has the code: ' +
                code.toUpperCase();

            alert(message);
        }
    });
    
});