

(function($) {
    "use strict"

     //Moving the slider by clicking pips
     var pipsSlider = document.getElementById('slider-pips-2');
     noUiSlider.create(pipsSlider, {
         range: {
             min: 0,
             max: 11
         },
         start: [5],
         pips: {mode: 'count', values: 5}, 
         tooltips: true
     });
 
     
    

})(jQuery);