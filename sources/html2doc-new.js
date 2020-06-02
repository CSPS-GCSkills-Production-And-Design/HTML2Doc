/* Custom HTML2Doc Script Copyright Canada 2018 */
$("#dynamic_content").before('<link rel="stylesheet" type="text/css" id="HTML2Doc_css" href="content/module0/HTML2Doc.css">');
$("#HTML2Doc").insertAfter($("#dynamic_content"));
function wordToC() { $("body").prepend("<div class=WordSection2> <h3 align=center style='text-align:center'><a name=\"_Ref490653000\"></a><a name=\"_Toc513016131\"><span style='mso-bookmark:_Ref490653000'>Table of Contents</span></a></h3> <p class=MsoToc1> <!--[if supportFields]><span style='font-size:14.0pt; mso-bidi-font-size:12.0pt;font-family:\"Futura Md BT\",sans-serif;text-transform: uppercase'><span style='mso-element:field-begin'></span></span><span style='font-family:\"Futura Md BT\",sans-serif;text-transform:uppercase'><span style='mso-spacerun:yes'> </span>TOC \\o \"1-2\" \\h \\z \\u </span><span style='font-size:14.0pt;mso-bidi-font-size:12.0pt;font-family:\"Futura Md BT\",sans-serif; text-transform:uppercase'><span style='mso-element:field-separator'></span></span><![endif]--><span class=MsoHyperlink><span style='mso-no-proof:yes'><a href=\"#_Toc513016179\">Right-click to update field<span style='color:windowtext;display:none;mso-hide:screen; text-decoration:none;text-underline:none'><span style='mso-tab-count:1 dotted'>. </span></span> <!--[if supportFields]><span style='color:windowtext;display:none;mso-hide:screen;text-decoration:none; text-underline:none'><span style='mso-element:field-begin'></span> PAGEREF _Toc513016179 \\h <span style='mso-element:field-separator'></span></span><![endif]--><span style='color:windowtext;display:none;mso-hide:screen;text-decoration:none; text-underline:none'>3<!--[if gte mso 9]><xml> <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000E0000005F0054006F0063003500310033003000310036003100370039000000</w:data> </xml><![endif]--></span> <!--[if supportFields]><span style='color:windowtext; display:none;mso-hide:screen;text-decoration:none;text-underline:none'><span style='mso-element:field-end'></span></span><![endif]--></a> <o:p></o:p> </span> </span> </p> <span style='font-size:12.0pt;font-family:\"Calibri\",sans-serif;mso-ascii-theme-font: minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin; mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\"; mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-CA;mso-fareast-language: EN-CA;mso-bidi-language:AR-SA'><br clear=all style='mso-special-character:line-break; page-break-before:always'> </span> <p class=MsoNormal><span style='mso-bidi-font-size:10.0pt;mso-fareast-font-family: \"Times New Roman\";mso-bidi-font-family:Arial;mso-fareast-language:EN-CA'><o:p>&nbsp;</o:p></span></p> <p class=MsoToc2><span style='mso-fareast-language:EN-CA'><o:p>&nbsp;</o:p></span></p> <p class=MsoNormal> <!--[if supportFields]><span style='font-family:\"Futura Md BT\",sans-serif; mso-fareast-font-family:\"Times New Roman\";mso-bidi-font-family:Arial'><span style='mso-element:field-end'></span></span><![endif]--> <o:p>&nbsp;</o:p> </p> </div>"); }

function d2h(e) { return ("0000" + (+e).toString(16)).substr(-4) }

function convertToHexLink(e) {
	var t = e,
		a = t.length,
		o = d2h(a + 1);
	if (0 !== a) { for (var s = "08D0C9EA79F9BACE118C8200AA004BA90B02000000080000" + o + "0000", n = 0; n < a; n++) s += d2h(t.charCodeAt(n)).toUpperCase(); return s += "000000" }
}

function prepareWordLink(e, t, a) { return "<!--[if supportFields]><span><span style='mso-element:field-begin'></span><span style='mso-spacerun:yes'> </span>REF " + e + " \\h <span style='mso-element:field-separator'></span></span><![endif]--><span>" + t + "</span><span><!--[if gte mso 9]><xml> <w:data>" + a + "</w:data></xml><![endif]--></span><!--[if supportFields]><span><span style='mso-element:field-end'></span></span><![endif]-->" }

function removeElement(e) {
	e.stopPropagation();
	$(this).off();
	$(this).remove()
}

function createComment(that, initials, a, e) {
	var comment = "<a style='mso-comment-reference:"+ initials +"_" + a + ";'>" + $(that).text() + '</a><span class=MsoCommentReference><![if !supportAnnotations]><a class=msocomanchor id="_anchor_' + a + '" onmouseover="msoCommentShow(\'_anchor_' + a + "','_com_" + a + "')\" onmouseout=\"msoCommentHide('_com_" + a + '\')" href="#_msocom_' + a + '" language=JavaScript name="_msoanchor_' + a + '"> ['+ initials + a + "]</a><![endif]><span style='mso-special-character:comment'>&nbsp;</span></span>";
	return comment;
}

function createReference(object, content, refType, initials, a, e) {
	var reference = "<div style='mso-element:comment'><![if !supportAnnotations]><div id=\"_com_" + a + '" class=msocomtxt language=JavaScript onmouseover="msoCommentShow(\'_anchor_' + a + "','_com_" + a + "')\" onmouseout=\"msoCommentHide('_com_" + a + "')\"><![endif]><span style='mso-comment-author:" + refType + "'><![if !supportAnnotations]><a name=\"_msocom_" + a + "\"></a><![endif]></span><p class=MsoCommentText><span class=MsoCommentReference><span style='mso-special-character: comment'>&nbsp;<![if !supportAnnotations]><a href=\"#_msoanchor_" + a + '" class=msocomoff>[' + initials + a + "]</a><![endif]></span></span> Definition :" + $(object).text() + " <br> " + $($(object).attr("href") + " .modal-body").text() + " <o:p></o:p></p><![if !supportAnnotations]></div><![endif]></div>";
	return reference;
}

function startCleanup() {
	$(".setForRemoval").css("display", "inherit");
	$("#dynamic_content *").each(function() {
		$(this).mouseover(function(e) {
			e.stopPropagation();
			$(this).addClass("cleanupMode")
		});
		$(this).mouseout(function() { $(this).removeClass("cleanupMode") });
		$(this).mousedown(function() {
			event.preventDefault();
			$(this).attr("onclick", "")
		});
		$(this).click(function(e) {
			e.stopImmediatePropagation(), e.preventDefault();
			$(this).toggleClass("setForRemoval");
			$(this).addClass("manuallySelected")
		})
	})
}

function stopCleanup() {
	$(".setForRemoval").css("display", "none");
	$("#dynamic_content *").each(function() {
		$(this).off(this.removeElement);
		$(this).removeClass("cleanupMode")
	})
}
var cleanMe = function() {
	$.fn.shiftHeadingLevels = function(e) {
		e = parseInt(e) || 1;
		return this.each(function(t, a) {
			if ($el = $(a), 1 == a.nodeType && a.tagName.match(/H[1-6]/)) {
				var o = parseInt(a.tagName[1]) + e;
				o = (o = o < 1 ? 1 : o) > 6 ? 6 : o;
				for (var s = $("<h" + o + ">" + $el.html() + "</h" + o + ">"), n = a.attributes, i = 0; i < n.length; i++) s.attr(n[i].name, n[i].value);
				$el.replaceWith(s)
			} else $el.find("h1,h2,h3,h4,h5,h6").shiftHeadingLevels(e)
		}), this
	};
	$('.wb-inv').remove();
	$('a.wb-lbx-inited').remove();
	$('.generated').remove();
	$('[href="#"]').remove();
	$('.modal-dialog').removeAttr('class');
	$('details').addClass('Lines').replaceTagName('div');
	$('summary').addClass('MsoTitle').replaceTagName('p');
	$('ul>li').addClass('l0');
	$('.qs-submit').addClass('setForRemoval');
	$(".HTML2DocInfo").each(function() {
		$(this).insertAfter($(this).next("h1"))
	});
	$("[data-ajax-after], [data-ajax-append], [data-ajax-before], [data-ajax-prepend], [data-ajax-replace]").trigger("wb-init.wb-data-ajax");
	$(":header> span").before("").after("");
	$(".clearfix").remove();
	$(".fa").parent(":header").remove();
	$(".graph").css("display", "block");
	var t = $("[data-id=sitemap_pop]>.modal-body").remove();
	$(".modal-content").shiftHeadingLevels(1);
	$("h4").shiftHeadingLevels(2);
	$("h3").shiftHeadingLevels(2);
	$("h2").shiftHeadingLevels(2);
	$("h1").shiftHeadingLevels(2);
	$(".TopicSection>:header:first-of-type").shiftHeadingLevels(-1);
	$(".ModuleFirstHeader+.HTML2DocInfo+section>:header:first-of-type").shiftHeadingLevels(-6);
	$(".ModuleFirstHeader+.HTML2DocInfo+section :header:first").shiftHeadingLevels(-6);
	$("#dynamic_content").prepend("<p id = '_ToC'></p>"), t.appendTo("#_ToC");
	$("#_ToC h3").each(function(e) {
		$($(".ModuleFirstHeader").toArray()[e]).html("<H1>" + $(this).text() + "</H1>")
	});
	$("#_ToC").remove();
	$("#HTMLLinks").append('<div style = \'mso-element:comment-list\'><![if !supportAnnotations]><hr class = msocomoff align = left size = 1 width = "33%"><![endif]><div id = "LinkPlaceholder"></div></div>');
	var a = 0;
	$(".csps-glossary").each(function(e) {
		a++;
		$(this).replaceWith(createComment(this, "CS", a, e));
		$("#LinkPlaceholder").before(createReference(this, "Definition", "CS", a, e));
	});
	$(".external").each(function(e) {
		a++;
		$(this).replaceWith(createComment(this, "CS", a, e));
		$("#LinkPlaceholder").before("<div style = 'mso-element:comment'><![if !supportAnnotations]><div id = \"_com_" + a + '"class=msocomtxt language=JavaScript onmouseover="msoCommentShow(\'_anchor_' + a + "', '_com_" + a + "')\"onmouseout=\"msoCommentHide('_com_" + a + "')\"><![endif]><span style = 'mso-comment-author:Links'><![if !supportAnnotations]><a name = \"_msocom_" + a + "\"></a><![endif]></span><p class = MsoCommentText><span class = MsoCommentReference><span style = 'mso-special-character: comment'>&nbsp;<![if !supportAnnotations]><a href = \"#_msoanchor_" + a + '"class=msocomoff>[CS' + a + "]</a><![endif]></span></span>" + $(this).text() + ": <a href='" + $(this).attr("href") + "'>" + $(this).attr("href") + "</a> [" + $(this).attr("data-ext") + "] <o: p></o:p></p><![if !supportAnnotations]></div><![endif]></div>");
	});
	$(".loading").removeClass("loading");
	$('.breadcrumb,footer,#wb-tphp,#admin_window,[class*="removefirst"],.mod-index,.handle,noscript,.spinner').remove();
	$('[data-id="sitemap_pop"]').remove();
	$("[role = banner]").remove();
	$(".wb-mltmd details").each(function(){$(this).closest(".wb-mltmd").after(this)}),$("video[poster]").each(function(){$(this).closest(".wb-mltmd").before('<img width=100% height=100% src="'+$(this).attr("poster")+'"/>')});
	$(".wb-mltmd").remove();
	$(".mfp-hide .modal-title").removeClass();
	$("details").attr("open",!0),function(){for(var e=document.getElementsByTagName("*"),t={},a=0,o=e.length;a<o;++a){var s=e[a].id;s&&(void 0===t[s]?t[s]=1:(!0,$("#"+s).attr("id",s+"_"+a),$("#"+s+"_"+a).attr("data-duplicate",!0)))}}();
	$("[data-ajax-append] [id*=lbx-title]").removeClass("modal-title").replaceTagName("h1"),$("summary").after("<hr>"),$(".modal-title").replaceTagName("strong");
	$(".modal-content").replaceTagName("table");
	$('[class*="ribbon"]').replaceTagName("table");
	$('[class*="ribbon"]').removeClass();
	$(".effect2").removeClass("effect2");
	$(".didyouknow").replaceTagName("table");
	$(".dyk").replaceTagName("table");
	$("header.modal-header").replaceTagName("strong");
	$(".modal-body").replaceTagName("td");
	$("legend").replaceTagName("strong");
	$("select").replaceTagName("ol");
	$("option[disabled]").remove();
	$("option").removeAttr("value");
	$("option").replaceTagName("li");
	$(".mfp-hide").removeClass("mfp-hide");
	$("iframe,textarea,progress").remove();
	$(".qs-answers label").each(function() {
		var e = $(this).text();
		$(this).parent().text(e)
	});
	$(".qs-answers>ul").replaceTagName("ol");
	$(".qs-elearning-activity").removeClass("qs-elearning-activity");
	$("").remove();
	$("table").css("border", "1px solid black");
	$(".external> span.wb-inv,.qs-current-info").remove();
	$(".qs-right,.qs-wrong,img,.qs-feedback-final").addClass("setForRemoval");
	setTimeout(function() {
		$("#HTMLDefinitions").before("<h1>Definitions</h1>");
		$("[id='pop']").appendTo("#HTMLDefinitions");
		$(".mfp-hide").removeClass("mfp-hide");
		$("svg").each(function() {
			$(this).attr("data-id", $(this).closest("section").attr("id"))
		});
		$("svg").each(function() {
			$(this).attr("id", "H2D_" + $(this).closest("section").attr("id")), $(this).closest("section").attr("data-svg-id", $(this).closest("section").attr("id"))
		});
		$("[data-graph-id]").each(function() {
			var e = $(this).text(),
				t = $(this).attr("data-graph-id"),
				a = prepareWordLink(t, e, convertToHexLink(t));
			$(this).replaceWith(a);
			$("#" + t).before("<a name=" + t + ">" + e + "</a><br/><img width=35% height=35% src='" + t + "_" + lang + ".png'>");
			$("#" + t).removeAttr("id")
		});
		$(".docs").removeClass();
		$("#links_docs").remove();
		$("svg").addClass("setForRemoval");
		$("link").addClass("setForRemoval");
		$(".instructions,.instruc,.instructional").addClass("setForRemoval");
		$(".modal-title").shiftHeadingLevels(-1);
		$(".modal-dialog").removeClass("modal-dialog");
		$(".modal-content").removeClass("modal-content");
		$(".overlay-def").removeClass("overlay-def");
		$(".modal-graphics").removeClass("modal-graphics");
		$("svg a").removeAttr("onclick");
		$("[style*='display:none'],[style*='display: none']").css("display", "unset");
		$("svg a").removeAttr("xlink:href");
		$("svg a").replaceTagName("g"), canvg();
		$(".quiz-nav").toggleClass("setForRemoval"), alert("Done")
	}, 2e3)
};
		$("#dynamic_content").before('<link rel="stylesheet" type="text/css" id="HTML2Doc_css" href="content/module0/HTML2Doc.css">');
		$("#HTML2Doc").insertAfter($("#dynamic_content"));
		$("#HTML2Doc #Step2").change(function(e) { $(this).is(":checked") ? startCleanup() : stopCleanup() });
		var courseHeader = "<h3>" + $(".series-title").text() + "</h3><h4>" + $("#wb-sttl").text() + "</h4>";
		$("head>title").text($(".series-title").text());
		/*End of script */