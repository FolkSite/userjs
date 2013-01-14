// ==UserScript==
// @name        Nice alert
// @namespace   http://userscripts.ru/js/nice-alert/
// @include     *
// @description Makes alert box suck less
// @copyright   2008+, Nikita Vasilyev (http://userscripts.org/scripts/show/43780)
// @version     1.3
// @licence     LGPL 3
// @icon        http://userscripts.ru/js/nice-alert/chrome/icon_48.png
// ==/UserScript==
(function(){
  var w = window.wrappedJSObject || window;
  if(!w.alert.is_nice) {
    w.alert = function alert(msg) {
		  var css = "#nice_alert {\
        font:18px/20px 'Segoe UI', 'Droid Sans', sans-serif !important;\
        position:fixed !important; z-index:9999 !important;\
        margin:0; margin-left:-200px; top:0 !important; left:50% !important; \
        padding:0 !important; float:left !important;\
        cursor:pointer !important; text-align:left !important;\
      }\
      #nice_alert ALERTBOX {\
        background-color:InfoBackground !important; color:InfoText !important;\
        border-bottom:1px solid rgba(0,0,0,0.3) !important;\
        margin:0 !important; width:400px !important; float:right !important;\
        text-align:center !important; clear:both !important;\
        overflow:hidden !important; white-space:pre-wrap !important; \
        outline:0 !important; box-shadow:0px 2px 6px rgba(0,0,0,0.3);\
      }";
    var head = document.head || document.getElementsByTagName('head')[0];
    if(head) {
      var style = document.createElement("style");
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }
		var nice_alert = document.getElementById('nice_alert') || document.createElement('ALERTGROUP');
		nice_alert.id = 'nice_alert';
		document.documentElement.appendChild(nice_alert);
		nice_alert.addEventListener('click', function(e){
			var t = e.target;
			if(t.tagName == 'ALERTBOX') {
				var h = t.clientHeight-18;
				t.style.height = h+'px';
				var i = 9;
				var closing = setInterval(function(){
					i--; t.style.opacity = i/10;
					t.style.paddingTop = parseInt(t.style.paddingTop) - 1+'px';
					t.style.paddingBottom = parseInt(t.style.paddingBottom) - 1+'px';
					var currentHeight = parseInt(t.style.height) - h/10;
					t.style.height = (currentHeight < 0 ? 0 : currentHeight)+'px';
					if(i < 1) { t.style.display = 'none'; clearInterval(closing); }
				}, 30);
			}
		}, false);
		var cache = document.createElement('ALERTBOX');
		cache.style.padding = '0px 16px';
		cache.style.opacity = cache.tabIndex = 0;
		(w.alert = function alert(msg) {
			w.alert.is_nice = 'Of course it is!';
			var box = cache.cloneNode(false);
			box.appendChild(document.createTextNode(msg));
			nice_alert.appendChild(box);
			var i = 1;
			var showing = setInterval(function(){
				box.style.opacity = i/10; i++;
				box.style.paddingTop = parseInt(box.style.paddingTop)+1+'px';
				box.style.paddingBottom = parseInt(box.style.paddingBottom)+1+'px';
				if(i > 9) { clearInterval(showing); }
			}, 30);
		})(msg);
	};
}
})();