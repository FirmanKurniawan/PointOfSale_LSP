
$(document).ready(function () {
    "use strict";

    // Line Chart
    $("#sparklinedash").sparkline([10, 15, 26, 27, 28, 31, 34, 40, 41, 44, 49, 64, 68, 69, 72], {
        type: "bar",
        height: "50",
        barWidth: "4",
        resize: !0,
        barSpacing: "5",
        barColor: "#00A2FF"
    });


    $("#sparkline8").sparkline([79, 72, 29, 6, 52, 32, 73, 40, 14, 75, 77, 39, 9, 15, 10], {
        type: "line",
        width: "100%",
        height: "50",
        lineColor: "#0000FF",
        fillColor: "rgba(0, 162, 255, .5)",
        minSpotColor: "#0000FF",
        maxSpotColor: "#0000FF",
        highlightLineColor: "rgba(0, 0, 0, 0.2)",
        highlightSpotColor: "#0000FF"
    });

    $("#sparkline9").sparkline([27, 31, 35, 28, 45, 52, 24, 4, 50, 11, 54, 49, 72, 59, 75], {
        type: "line",
        width: "100%",
        height: "50",
        lineColor: "#00A2FF",
        fillColor: "#00A2FF",
        minSpotColor: "#00A2FF",
        maxSpotColor: "#00A2FF",
        highlightLineColor: "rgba(0, 0, 0, 0.2)",
        highlightSpotColor: "#00A2FF"
    });


    // Bar Chart


    $("#spark-bar").sparkline([33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38], {
        type: "bar",
        height: "200",
        barWidth: 10,
        barSpacing: 7,
        barColor: "#34C73B"
    });

    $('#StackedBarChart').sparkline([
        [1, 4, 2],
        [2, 3, 2],
        [3, 2, 2],
        [4, 1, 2]
    ], {
            type: "bar",
            height: "200",
            barWidth: 10,
            barSpacing: 7
        });

    $("#tristate").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        height: "200",
        barWidth: 10,
        barSpacing: 7
    });

    // Composite

    $("#composite-bar").sparkline([73, 53, 50, 67, 3, 56, 19, 70, 58, 48, 26, 72, 59, 37, 32, 40, 26, 71, 19, 75, 57, 47, 4, 53, 55, 31, 37, 67, 10, 21], {
        type: "bar",
        height: "200",
        barWidth: "10",
        resize: !0,
        barSpacing: "7",
        barColor: "#F44336"
    });

    $("#composite-bar").sparkline([40, 26, 71, 19, 75, 57, 47, 4, 53, 55, 31, 37, 67, 10, 21, 73, 53, 50, 67, 3, 56, 19, 70, 58, 48, 26, 72, 59, 37, 32], {
        type: "line",
        height: "200",
        lineColor: "#f96262",
        fillColor: "transparent",
        composite: !0,
        highlightLineColor: "rgba(0,0,0,.1)",
        highlightSpotColor: "rgba(0,0,0,.2)"
    });

    $("#sparkline-composite-chart").sparkline([5, 6, 7, 2, 0, 3, 6, 8, 1, 2, 2, 0, 3, 6], {
        type: 'line',
        width: '100%',
        height: '200'
    });

    $("#sparkline-composite-chart").sparkline([5, 6, 7, 2, 0, 3, 6, 8, 1, 2, 2, 0, 3, 6], {
        type: 'bar',
        height: '150px',
        width: '100%',
        barWidth: 10,
        barSpacing: 5,
        barColor: '#34C73B',
        negBarColor: '#34C73B',
        composite: true
    });


    //Pie
    $("#sparkline11").sparkline([24, 61, 51], {
        type: "pie",
        height: "200",
        resize: !0,
        sliceColors: ["#34C73B", "#00A2FF", "#0000FF"]
    });

    // Bullet
    $("#bullet-chart").sparkline([10, 12, 12, 9, 7], {
        type: 'bullet',
        height: '100',
        width: '100%',
    });

    //Boxplot
    $("#boxplot").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100], {
        type: 'box'});


});