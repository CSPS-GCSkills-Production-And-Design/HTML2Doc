(function(DnDContext) {
	var jQuerify = document.createElement("script"),
		style = document.createElement("style"),
		styles = `#DnDHeader{text-align:center;
			box-shadow: 0px 45px 30px -30px rgba(255,255,255,.95), 0px 14px 15px -7px rgba(10,15,10,.30);
			padding:2em 1px 1px; z-index:10; cursor:move; top:2em; right:2em;
		 	position:fixed; display:block;
		 	background-color:rgba(250,255,250,0.90);
		 	border-radius:7px;border:1px solid #DDD;}
		  .SnapBtn { background-color: #bada55 !important;
		    text-align: center !important; padding: 0px 20px !important;
		    color: black !important; border-radius: 7px !important; line-height: 36px !important;
		    height: 36px !important;
		    border: 1px solid gray !important; min-width: 110px !important;
		    display: inline-block !important; font-size: 14px !important;
		    text-decoration: none !important; }
		   .SnapBtn:hover { transition: all 0.2s ease !important;
		    background-color: #8fc050 !important; color: gray !important; }
		   .SnapBtn:visited { color: black }
		   section { border: 1px solid transparent !important; padding: 1em !important;
		    margin: 1px !important; border-radius: 2px !important; } 
		  .SnapPage { background-color: #968f7e !important; } 
		  .wrongHdrs{color:red;position:relative;bottom:.25em;}
		  section::before { content: attr(id) !important; display: block !important; width: 10% !important;
		   position: relative !important;
		   top: 0px !important; left: 0px !important; background-color: #eee !important; } 
		  .level1 { border-color: green !important; border-width: 5px } 
		  .level2 { border-color: red !important; } 
		  .level3 { border-color: blue !important; } 
		  .level0 { border-color: yellow !important; }
		  h1, h2, h3, h4 { -webkit-margin-before: 0.3em !important; -webkit-margin-after: 0.3em !important; }`;
	styleContent = document.createTextNode(styles);
	// jQuerify.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
	style.appendChild(styleContent);
	var caput = document.getElementsByTagName("head");
	var validStructure = true;
	caput[0].appendChild(style);
	// caput[0].appendChild(jQuerify);
	var content = `	<div id="DnDHeader">
					<div id="DivideAndDownloadBar">
					<a class="SnapBtn" id="SnapPrepare" href="#">Prepare separation</a>
					<a class="SnapBtn" id="SnapDownload" href="#">Download</a></div>
					<a class="SnapBtn" id="SnapSupermenu" href="#">Generate Supermenu</a></div>
					</div>`;
	$('body').append(content);
	var lang = $('html').attr('lang') || prompt("Language (en/fr)", "en");
	$('html').attr('lang', lang);
	(function(that) {
		var selector = '#DnDHeader';
		var elements = document.querySelectorAll(selector);
		var z = 1;
		var _moving = false;
		// Bind functions to events
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('mousedown', drag);
			elements[i].addEventListener('mouseup', end);
			that.addEventListener('mouseup', end);
		};
		//prevent selection while dragging
		function pauseEvent(e) {
			if (e.stopPropagation) e.stopPropagation();
			if (e.preventDefault) e.preventDefault();
			e.cancelBubble = true;
			e.returnValue = false;
			return false;
		}
		// Drag function
		function drag(event) {
			var e = e || event;
			pauseEvent(e);
			// Set variable to true on mousedown
			_moving = true;
			// Increase z-index so last clicked always on top
			z = z + 1;
			// Select the item that was clicked
			_this = event.target;
			// Positions cursor in center of element when being dragged, as oposed to the top left
			_width = _this.offsetWidth / 2;
			_height = _this.offsetHeight / 8;
			// Element follows mouse cursor
			that.addEventListener('mousemove', function(e) {
				// Only run if variable is true (this is destroyed on mouseup)
				if (_moving === true) {
					// Postion element, minus half width/height as above
					var x = e.clientX - _width;
					var y = e.clientY - _height;
					// Store left, top, and z-index in variable
					var position = `left: ${x}px;top: ${y}px;z-index: ${z};cursor:move;`;
					// Set style
					_this.setAttribute('style', position);
				};
			});
		};
		// Destroy drag on mouse up
		function end(event) {
			_moving = false;
		};
	})(DnDContext);
	$('#SnapPrepare').click(function() {
		for (var i = 1; i < 4; i++) {
			let docHeader = $(`h` + i);
			var j = 0;
			docHeader.each(function(n) {
				j = $(this).index('h' + i - 1);
				let sectId = (i == 1) ? `m${j}` : $(this).closest("section").attr("id") + "-" + (j - 1);
				$(this).nextUntil(`h` + i).addBack().wrapAll(`<section id="${sectId}" />`);
				$(this).closest("section").addClass(`level${i}`);
				let nextIsHeader = $(this).next(`h${i+1}`).length > 0;
				let SectionHasMulipleHeaders = $(this).closest("section").children(':header').length > 1;
				if (SectionHasMulipleHeaders != nextIsHeader) {
					validStructure = false;
					// $('#SnapDownload').attr("disabled", "disabled");
				}
				let appendMe = (SectionHasMulipleHeaders === nextIsHeader) ? "" : " <span class='wrongHdrs'>Missing Title or subtitle</span>";
				console.log($(this).text(), SectionHasMulipleHeaders, nextIsHeader);
				$(this).append(appendMe);
			})
			$('section').addClass('SnapPage');
			$('section:has(section)').each(function() {
				$(this).removeClass('SnapPage');
				$(this).append('<span class="HTML2DocInfo"></span>');
			})
		}
		if (!validStructure) alert("Check document for errors");
	});
	$('#SnapDownload').click(function() {
		var multipleA = document.createElement('a');
		$("section.SnapPage").each(function(n) {
			var filename = `${this.id}_${lang}.html`;
			var that = this;
			console.log(filename);
			var sectCont = that.innerHTML;
			var sectData = new Blob([sectCont], { "type": `text/html` });
			var url = window.URL.createObjectURL(sectData);
			multipleA.setAttribute("href", url);
			multipleA.setAttribute("download", filename);
			if (n % 10 == 0) prompt("Small Pause");
			multipleA.click();
		})
	});
	$('#SnapSupermenu').click(function() {
		var levels = [],
			e;
		(e = window.jQuery).fn.replaceTagName = function(t) {
			for (var a = [], o = this.length; o--;) {
				for (var s = document.createElement(t), n = this[o], i = n.attributes, r = i.length - 1; r >= 0; r--) {
					var m = i[r];
					s.setAttribute(m.name, m.value);
				}
				s.innerHTML = n.innerHTML;
				e(n).after(s).remove();
				a[o - 1] = s;
			}
			return e(a);
		};
		$('section').each(function(n) {
			var hasChildSections = $(this).children('section').length > 0;
			var setHref = (hasChildSections) ? "#":"javascript:" ;
			$(this).attr('data-href', setHref);
		});
		
			levels[3] = $(`.level3`).remove();
			levels[2] = $(`.level2`).remove();
			levels[1] = $(`.level1`).remove();
			$('body').append(levels[1]);
			$('body').append(levels[2]);
			$('body').append(levels[3]);
		for (var j = 1; j<4; j++) {			
			$(`.level${j}`).wrapAll(`<ul class="sm list-unstyled" data-ID="nav${j}" role="menu" />`);
			// debugger
			$(`[data-ID="nav${j}"]`).before(`<a href="#" data-ID="lvl${j}" class="item">Choose</a>`);
		}

		$(':header').each(function(n) {
			var sectId = $(this).closest('section').attr('id');
			var setHref = $(this).closest('section').attr('data-href');
			$(this).attr('data-target', sectId);
			$(this).attr('href', setHref);
		})
		$('section *:not(:header)').remove()
		$(':header').replaceTagName('a').unwrap('section');
		$(`a[data-target]`).each(function(){$(this).wrap('<li>')});
	});

	function unwrap(selector) {
		var b = document.querySelector(selector);
		while (b.length) {
			var parent = b[0].parentNode;
			while (b[0].firstChild) {
				parent.insertBefore(b[0].firstChild, b[0]);
			}
			parent.removeChild(b[0]);
		}
	}
})(this)