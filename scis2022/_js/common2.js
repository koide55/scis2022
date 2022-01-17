/*
-------------------------------------------------------------------------------------------------
	[common.js] JavaScript
-------------------------------------------------------------------------------------------------
	copyright          : Lampros co.,Ltd.
	author             : Atsushi Umehara
	making day         : 2010-09-17
*/


/* ================================================

common

=================================================*/

jQuery(function($) {

	// add class
//	$('html').css('overflow-y', 'scroll');

	// rolloveer
	var overImg = '_f2';
	$('.btn').each(function(){
		var classes = $(this).attr("class");
		var imgout = $(this).attr("src");
		var imgovr = imgout.replace('.gif', overImg + '.gif').replace('.jpg', overImg + '.jpg').replace('.png', overImg + '.png');
		$(this).hover(
			function(){ $(this).attr("src", imgovr); },
			function(){ $(this).attr("src", imgout); }
		);
	});

	//odd even
	$('ul').each(function(){
		$(this).find('li:first').addClass('first');
		$(this).find('li:odd').addClass('odd');
		$(this).find('li:even').addClass('even');
		$(this).find('li:last').addClass('last');
	});
	$('table').each(function(){
		$(this).find('tr:first').addClass('first');
		$(this).find('tr:odd').addClass('odd');
		$(this).find('tr:even').addClass('even');
		$(this).find('tr:last').addClass('last');
	});
	
	if( $.browser.name == "msie" && $.browser.version < 8 ){
		$('#gMenu').each(function(){
			var table = $("<table/>");
			var tr = $("<tr/>");
			$(this).find('li').each(function(){
				var className = $(this).attr("class");
				var td = $("<td/>");
				td.addClass(className);
				td.append($(this).html());
				tr.append(td);
			});
			table.append(tr);
			$(this).append(table);
			$(this).find('ul').remove();
			return false;
		});
	}


	$("#slidetoggle_menu dt").on(
		"click", function() {
			$(this).next().slideToggle(); 
			$(this).toggleClass("active"); 
		});
	$("#slidetoggle_menu dt").mouseover(function(){
        $(this).addClass("over");   
    });
    $("#slidetoggle_menu dt").mouseout(function(){
        $(this).removeClass("over");    
    });

	$(".open").click(function(){
		$("dd").toggle(true);
	});
	$(".close").click(function(){
		$("dd").toggle(false);
	});
});
