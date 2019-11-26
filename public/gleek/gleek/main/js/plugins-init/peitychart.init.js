$(function() {
    "use strict";
    $(".bar-line").peity("bar", {
        width: "100",
        height: "100"
    });

    
    $("span.pie").peity("pie", {
        width: "100",
        height: "100"
    });
    
    
    
    $("span.donut").peity("donut", {
        width: "100",
        height: "100"
    });
    
    
    
    $(".peity-line").peity("line", {
        width: "300",
        height: "100"
    });
    
    
    
    $(".bar").peity("bar", {
        width: "300",
        height: "100"
    });
    
    
    
    $(".bar-colours-1").peity("bar", {
        fill: ["#F44336", "#34C73B", "#0000FF"],
        width: "100",
        height: "100"
    });
    
    
    
    $(".bar-colours-2").peity("bar", {
        fill: function(t) {
            return t > 0 ? "#34C73B" : "#F44336"
        },
        width: "100",
        height: "100"
    });
    
    
    
    $(".bar-colours-3").peity("bar", {
        fill: function(t, e, i) {
            return "rgb(125, " + parseInt(e / i.length * 255) + ", 0)"
        },
        width: "100",
        height: "100"
    });
    
    
    
    $(".pie-colours-1").peity("pie", {
        fill: ["cyan", "magenta", "yellow", "black"],
        width: "100",
        height: "100"
    });
    
    
    
    $(".pie-colours-2").peity("pie", {
        fill: ["#F44336", "#34C73B", "#0000FF", "#00A2FF", "#28D6C3"],
        width: "100",
        height: "100"
    });
    
    
    
    $(".data-attr").peity("donut");




    var t = $(".updating-chart").peity("line", {
        width: "100%",
        height: 100
    });
    setInterval(function() {
        var e = Math.round(10 * Math.random()),
            i = t.text().split(",");
        i.shift(), i.push(e), t.text(i.join(",")).change()
    }, 1e3)
});