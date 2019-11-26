
//// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
//        Le nom de mon namespace
        root.appear = factory(root);
  }
}(this, function (root) {
    
    
    
if  (root) {
  
   var style = root.document.createElement("style");
//    style.type= "text/css";
//    var css = root.document.createTextNode(
//            "#appear {background: #ccccff; }"
//    + "#appear p {font-family: impact; }"
//    );
    
//    if(style.styleSheet){
//        style.styleSheet.cssText = css.nodeValue;
//    } else {
//        style.appendChild(css);
//    }
//    
//    root.document.getElementsByTagName("head")[0].appendChild(style);
}
    
    var getHelper = function(message) {
        if (typeof message!=="string"){
        throw new Error("Message must be string");   
        }
        
//       Création des éléments
    var div = root.document.createElement("div");
    
// !!! Mettre un id sur le conteneur !!!
    div.setAttribute("id", "appear");
    var p = root.document.createElement("p");
    var close = root.document.createElement("a");
    var button = root.document.createElement("button");
    
//    root.document.body.removeChild(elem);
    
    close.onclick = function () {
        var parent = close.parentNode;
//        parent.style.left = "0%";
//            button.style.background="#";
//            buttonCancel.style.background ="#C60800";
//            parent.style.background="#";
        close.parentNode.parentNode.removeChild(close.parentNode);
    };
 
    
//  Création des textes    
    var pText = root.document.createTextNode(message);
    close.innerHTML ="&#x274C";
    var buttonText = root.document.createTextNode("OK");
    
// Insertion des textes dans les éléments
    p.appendChild(pText);
    button.appendChild(buttonText);
    div.appendChild(close);
    div.appendChild(p);
    div.appendChild(button);
    return div;
        
    /*
     * 
     * @throws {Error} si type du message n'est pas vide 
     * 
     */    
//    
    };
    
    /**
     * Log l'élément HTML dnas le body
     * 
     * @throws {Error} si le helper n'est pas un élément html 
     * @throws {Error} si le body n'existe pas
     */
    
    var log = function (helper) {
//    if(!(helper instanceof root.HTMLElement)
//            ||!root.document.body){
//        throw new Error(
//                "Require a valid element and a body");
//    }

        root.document.body.appendChild(helper);
    };

    /**
     * @namespace appear
     */
      return (function () {
          
          var self = {};

        /**
         * Create emergency notification
         * 
         * @memberOf appear
         * @param {String} message appear to display
         * @returns {Object} appear module
         * 
         * @throws {Error} for invalid argument exception
         */ 
          self.emergency = function (message) {
            var helper = getHelper(message);
            helper.getElementsByTagName("button")[0]
                    .setAttribute("class", "emergency");
            log(helper);
          };
          
         /**
         * Create alert notification
         * 
         * @memberOf appear
         * @param {string} message appear message
         * @returns {Object} appear module
         * 
         * @throws {Error} for invalid argument exception
         */
          self.alert = function(message) { 
         var helper = getHelper(message);
         helper.getElementsByTagName("button")[0]
                 .setAttribute("class", "alert");
         log(helper);     
           };
           
    
            /**
         * Create critical notification
         * 
         * @memberOf appear
         * @param {string} message appear message
         * @returns {Object} appear module
         * 
         * @throws {Error} for invalid argument exception
         */
          self.critical = function (message) {
         var helper = getHelper(message);
         helper.getElementsByTagName("button")[0]
                 .setAttribute("class", "critical");
         log(helper);
            };
             
            /**
         * Create error notification
         * 
         * @memberOf appear
         * @param {string} message appear message
         * @returns {Object} appear module
         * 
         * @throws {Error} for invalid argument exception
         */
          self.error = function (message) { 
         var helper = getHelper(message);
         helper.getElementsByTagName("button")[0]
                 .setAttribute("class", "error");
         log(helper);
            }; 
     
              /**
         * Create warning notification
         * 
         * @memberOf appear
         * @param {string} message appear message
         * @returns {Object} appear module
         * 
         * @throws {Error} for invalid argument exception
         */
           self.warning = function (message) {
         var helper = getHelper(message);
         helper.getElementsByTagName("button")[0]
                 .setAttribute("class", "warning");
         log(helper);
            };   
            
//       /**
//         * Create notice notification
//         * 
//         * @memberOf appear
//         * @param {string} message appear message
//         * @returns {Object} appear module
//         * 
//         * @throws {Error} for invalid argument exception
//         */
           self.notice = function (message) {
         var helper = getHelper(message);
         helper.getElementsByTagName("button")[0]
                 .setAttribute("class", "notice");
         log(helper);
            }; 
         //     /**
//         * Create info notification
//         * 
//         * @memberOf appear
//         * @param {string} message appear message
//         * @returns {Object} appear module
//         * 
//         * @throws {Error} for invalid argument exception
//         */
           self.info = function (message) {
         var helper = getHelper(message);
         helper.getElementsByTagName("button")[0]
                 .setAttribute("class", "info");
         log(helper);
            };
     
//    /**
//         * Create debug notification
//         * 
//         * @memberOf appear
//         * @param {string} message appear message
//         * @returns {Object} appear module
//         * 
//         * @throws {Error} for invalid argument exception
//         */
           self.debug = function (message) {
         var helper = getHelper(message);
         helper.getElementsByTagName("button")[0]
                 .setAttribute("class", "debug");
         log(helper);
            };
     
      /**
         * Init appear
         * 
         * @memberOf appear
         * @param {Object} root with a root.document
         * @returns {Object} appear module
         * 
         * @throws {Error} for invalid argument exception
         */
            self.init = function (window) {
                if (!window || !window.document) {
                    throw new Error("appear requires a window with a document");
                }
                root = window;
            };
            
          return self;

      }());
      
}));
