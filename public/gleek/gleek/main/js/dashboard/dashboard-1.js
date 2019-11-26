$(function() {
    "use strict";

    //  Mixed chart
    var ctx = document.getElementById("monthly-orders-chart");
    // ctx.height = 60;
    let orderChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
            datasets: [{
                    label: "Product Sold",
                    type: "line",
                    borderColor: "#7f63f4",
                    borderWidth: 5,
                    backgroundColor: 'rgba(127,99,244,0.1)',
                    data: [0, 29, 84, 96, 37, 70, 45, 63, 47, 99, 23, 32, 59, 87, 57, 34, 74, 39, 71, 44],
                    pointBackgroundColor: "#7f63f4",
                    pointHoverBackgroundColor: "#7f63f4",
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    fill: true
                },
                {
                    label: "Total Customer",
                    type: "bar",
                    backgroundColor: "#f0f2f8",
                    backgroundColorHover: "#7f63f4",
                    data: [0, 29, 84, 96, 37, 70, 45, 63, 47, 99, 23, 32, 59, 87, 57, 34, 74, 39, 71, 44]
                }
            ]
        },
        options: {
            barRadius: 4,
            maintainAspectRatio: false, 
            title: {
                display: false,
                text: 'Population growth (millions): Europe & Africa'
            },
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Segoe UI',
                    padding: 25
                    
                },


            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: false
                    },
                    gridLines: { color: "#f2f2f2" }
                }],
                xAxes: [{
                    // Change here
                    display: false,
                    barPercentage: 0.4 ,
                    ticks: {
                        beginAtZero: false
                    },
                    gridLines: { color: "#fff" }
                }]
            }
        }
    });
    

    //doughut chart
    var ctx = document.getElementById("most-selling-items");
    // ctx.height = 175;
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
            cutoutPercentage: 60,
            maintainAspectRatio: false, 
            animation: {
                animateRotate: true,
                animateScale: true,
            },
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    fontFamily: "Segoe UI", 
                    fontSize: 14, 
                    fontColor: '#464a53'
                },


            },
        }
    });
    






});