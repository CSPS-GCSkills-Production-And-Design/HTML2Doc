/*printAll();*/
var sourceDoc = 'http://skynet-01.csps-efpc.com/_toolbox/HTML2Doc/sources/';
var toRemove = [{
	"selector": "img",
	"label": "Images"
}, {
	"selector": [".instructional", ".instruct"],
	"label": "Instructions",
	"checked": true
}, {
	"selector": ".qs-elearning-activity",
	"label": "Quiz and tests",
	"checked": true
}, {
	"selector": ".quiz-nav",
	"label": "Quiz navigation"
}, {
	"selector": ".HTML2DocInfo",
	"label": "Page Numbers",
	"checked": true
}, {
	"selector": ".endModimg",
	"label": "End of Module Images"
}];
$('.spinner').remove();

function addItems() {
	var itemsToRemove = "";
	for (i in toRemove) {
		var label = toRemove[i].label;
		var id = label.replace(/[\s]+/g, "");
		var selector = "";
		var checked = (toRemove[i].checked) ? " checked" : "";
		if (Array.isArray(toRemove[i].selector)) {
			for (items in toRemove[i].selector) { selector += toRemove[i].selector[items] + ":not(.manuallySelected)," };
			selector = selector.slice(0, -1);
		} else { selector = toRemove[i].selector };
		itemsToRemove += "<li><input id='show" + id + "'" + checked + " onclick=\"javascript:$('" + selector + "').toggleClass('setForRemoval')\" type='checkbox'> <label for='show" + id + "'>" + label + "</label> </li>"
	}
	return itemsToRemove;
}
var e;
(e = window.jQuery).fn.replaceTagName = function(t) {
	for (var a = [], o = this.length; o--;) {
		for (var s = document.createElement(t), n = this[o], i = n.attributes, r = i.length - 1; r >= 0; r--) {
			var m = i[r];
			s.setAttribute(m.name, m.value)
		}
		s.innerHTML = n.innerHTML, e(n).after(s).remove(), a[o - 1] = s
	}
	return e(a);
};
var HTML2DocInterface = "<div id='HTMLDefinitions'></div> <div id='HTMLLinks'></div> <div id='HTML2Doc'> <p class='Step1_Prepare' style='display: initial;'> <button id='HTML2Doc_step1' onclick=\"javascript:\">Step 1</button> <strong>Prepare the document</strong> </p> <div class='unprepare'> <p> <input id='step2' type='checkbox'> <label for='step2'>Step 2</label> <strong>Toggle item removing mode</strong> </p> <details> <summary> Click here for more options </summary> <hr> Check the box to keep these elements. Manually selected items will remain in their state. <ul style='list-style:none;-webkit-padding-start:0px;'> " + addItems() + "</ul> </details> <p> <input id='photoMode' type='checkbox'> <label for='photoMode'>Keep layout as image</label> <p> <button onclick=\"javascript:lastClean()\">Step 3</button> <strong>Finalize cleanup</strong> </p> <ul> <li>Save as -&gt; 'Web page, complete'</li> <li>Right-click on graphics marked with a <strong>Save as</strong> suggestion.</li> <li>Save all graphics with suggested names under the _files folder.</li> <li>Open the html document with Word.</li> <li> <small>(Optional)</small>Select all, Copy and Paste in the corresponding Word Template.</li> </ul> </div> </div> </script> <script type='text/javascript' src='" + sourceDoc + "rgbcolor.js'> </script><script type='text/javascript' src='" + sourceDoc + "canvg.js'></script><script type='text/javascript' src='" + sourceDoc + "html2canvas.js'></script><script type='text/javascript' src='" + sourceDoc + "StackBlur.js'> </script> <script type='text/javascript' src='" + sourceDoc + "savecanvas.js'> </script> <script type='text/javascript' src='" + sourceDoc + "lastclean.js'> </script><script type='text/javascript' src='" + sourceDoc + "HTML2Doc.js'></script><script src='" + sourceDoc + "html2canvas.js'></script>";
$('#dynamic_content').html("<div id='printall'></div>");
masterStructure.loadAll("#printall");
$(HTML2DocInterface).insertAfter($("#dynamic_content"));
$('#HTML2Doc_step1').click(function() {
	cleanMe();
	$('.unprepared').removeClass();
	$('.Step1_Prepare').remove();
});
(function() {
	var style = document.createElement("style"),
		styleContent = document.createTextNode("*{border:1px solid !important;border-color:transparent !important;float:none !important;clear:both}@keyframes glowing{50%{text-shadow:0 0 .1em,0 0 .3em}}#HTML2Doc summary{text-align:right !important;margin:auto !important;width:max-content !important;background-color:hsla(200,50%,50%,1)}.photoMode{outline: #bada55; 5px!important;outline-color: #bada55;outline-style: auto;outline-width: 5px!important;}.cleanupMode{border-radius:10px !important;border:1px solid transparent !important;box-sizing:inherit !important;background:linear-gradient(white,white) padding-box,repeating-linear-gradient(-45deg,black 0,black 25%,transparent 0,transparent 50%) 0 / .6em .6em !important;animation:ants 36s linear infinite !important;cursor:pointer}.setForRemoval{box-shadow:0 0 1px 10px hsla(1,100%,50%,.5) inset !important;color:grey !important;filter:blur(1px) !important;opacity:.2 !important;background-color:rgba(255,50%,0%,.5)}@keyframes ants{to{background-position:100% 100%}} #HTML2Doc strong{font-size:130% !important;font-weight:540}#HTML2Doc{font-family:monospace !important;font-size:100% !important;position:fixed !important;width:350px !important;height:min-content !important;background:hsla(200,30%,70%,.85) !important;padding:.5em !important;border-radius:10px !important;box-shadow:0 20px 16px -8px hsla(0,0%,0%,.45),20px 20px 100px -8px hsla(0,0%,100%,.65) inset !important;border:1px solid #000 !important;z-index:1000 !important;top:15px !important;right:15px}.unprepared{display:none}#HTML2Doc button{transition:.8s !important;width:min-content !important;padding:.4em .8em !important;border:2px solid transparent !important;border-bottom-width:0 !important;margin:.25em auto !important;background-color:hsla(200,10%,50%,.85) !important;background-origin:border-box !important;color:#fff !important;font-size:100% !important;font-weight:700 !important;white-space:nowrap !important;cursor:pointer !important;text-shadow:0 -.05em .05em rgba(0,0,0,.5) !important;border-radius:.5em !important;box-shadow:0 2px rgba(255,255,255,.7) inset,0 .5em rgba(255,255,255,.2) inset,0 -.2em .5em rgba(0,0,0,.5) inset,0 .05em .1em #000} #HTML2Doc button:hover,#step2+label:hover,#photoMode+label:hover{background-color:hsla(200,50%,50%,.85)}#HTML2Doc details{margin:2em !important;text-align:left !important;margin:auto !important;width:min-content !important;font-weight:400 !important;box-shadow:2px 2px 8px -2px !important;padding:.5em}#HTML2Doc summary{font-weight:800 !important;padding:1em !important;margin:-.5em}#step2+label,#photoMode+label{font:400 11px system-ui !important;display:inline-block !important;width:min-content !important;padding:.4em .8em !important;border:2px solid transparent !important;border-bottom-width:0 !important;margin:.25em auto !important;background-color:hsla(200,10%,50%,.85);background-origin:border-box !important;color:#fff !important;font-size:100% !important;font-weight:700 !important;white-space:nowrap !important;cursor:pointer !important;text-shadow:0 -.05em .05em rgba(0,0,0,.5) !important;border-radius:.5em !important;box-shadow:0 2px rgba(255,255,255,.7) inset,0 .5em rgba(255,255,255,.2) inset,0 -.2em .5em rgba(0,0,0,.5) inset,0 .05em .1em #000} #step2,#photoMode{position:absolute !important;clip:rect(0,0,0,0)} #step2:checked+label,#photoMode:checked+label,#step2:active+label,#photoMode:active+label{color:#ffc !important;animation:glowing 3s infinite linear !important;box-shadow:0 -2px rgba(0,0,0,.7) inset,0 -.5em rgba(0,0,0,.2) inset,0 .2em -.5em rgba(0,255,255,.5) inset,0 .05em .1em #fff !important;border-color:rgba(0,0,0,.3) !important;background:#0D0} ");
	style.appendChild(styleContent);
	var caput = document.getElementsByTagName("head");
	caput[0].appendChild(style);
})();