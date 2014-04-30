$(document).ready(function(){




	$(document).on('click','#menulist li a',function(){
		$('#menulist li').removeClass('selected');
		$(this).parent('li').addClass('selected');
		$("h1,h2,h3").removeClass('glow');
		$($(this).attr('href')).addClass('glow');
	    $('html, body').animate({scrollTop: $( $.attr(this, 'href') ).offset().top -50}, 800);

	    $('#menulist ol').removeClass('open');

	    if($(this).parent('li').parent('ol').css('display')=="block"){
			$(this).parent('li').parent('ol').addClass('open');
			$('#menulist ol').not('.open').slideUp();
	    }

		$(this).parent('li').next('ol').slideDown();

	    return false;
	});
	var menu = '';
	var submenu = '';
	$('.innertube .block').each(function(){
		$(this).find('h2').each( function(){
			if($(this).hasClass('newfeature')){var classs="class='newfeature'"}
			if($(this).attr('id')){
				menu =menu + "<li "+classs+" ><a href='#"+$(this).attr('id')+"'>"+$(this).html()+"</a></li>"
			}
		})
		menu =menu + '<ol>'
		$(this).find('h3').each( function(){
			if($(this).hasClass('newfeature')){var classs="class='newfeature'"}
			if($(this).attr('id')){
				menu =menu + "<li "+classs+"><a href='#"+$(this).attr('id')+"'>"+$(this).html()+"</a></li>"
			}
		})
		menu =menu + '</ol>'

	});

	$('#menulist').append(menu);

    /*load color template*/
    $(".fa-bookmark").each(function(){
        $(this).css('color',$(this).data('color'));
    })
})