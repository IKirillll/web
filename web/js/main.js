
$(function () {
	$('.menu-open').click(function () {
		$('.nav').toggleClass('show-menu')
	})
});

$(function () {
	$('.fa_button_open').click(function () {
		$('.catalog__filter').toggleClass('filter_title-show')
	})
});

$(function () {
	$('.close_fiter_catalog_b').click(function () {
		$('.catalog__filter').removeClass('filter_title-show')
	})
});

$(function () {
	$('.pr_feed_button_is').click(function () {
		$('.pr_comment').toggleClass('pr_comment_show'); 
		$('.pr_feed_button_no').toggleClass('pr_comment_show')
	})
});

$(function() {
	var log = document.getElementById('id02');
	var reg = document.getElementById('id01');
	var cat = document.getElementById('id03');
	var pr1 = document.getElementById('pr1');
	var pr2 = document.getElementById('pr2');
	var pr3 = document.getElementById('pr3');
	var pr4 = document.getElementById('pr4');
	var prs1 = document.getElementById('prs1');
	var prs2 = document.getElementById('prs2');
	var prs3 = document.getElementById('prs3');
	var prs4 = document.getElementById('prs4');
	var prs5 = document.getElementById('prs5');
	var prs6 = document.getElementById('prs6');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
	    if (event.target == log) {
        log.style.display = "none";
        
    }
     if (event.target == reg) {
        reg.style.display = "none";
        
    }
	    if (event.target == pr1) {
        $(document.getElementById('pr1')).addClass('is-active');
        $(document.getElementById('pr2')).removeClass('is-active');
        $(document.getElementById('pr3')).removeClass('is-active');
        $(document.getElementById('pr4')).removeClass('is-active');
        
    }
	    if (event.target == pr2) {
        $(document.getElementById('pr1')).removeClass('is-active');
        $(document.getElementById('pr2')).addClass('is-active');
        $(document.getElementById('pr3')).removeClass('is-active');
        $(document.getElementById('pr4')).removeClass('is-active');
        
    }
    	    if (event.target == pr3) {
        $(document.getElementById('pr1')).removeClass('is-active');
        $(document.getElementById('pr2')).removeClass('is-active');
        $(document.getElementById('pr3')).addClass('is-active');
        $(document.getElementById('pr4')).removeClass('is-active');
        
    }
    	    if (event.target == pr4) {
        $(document.getElementById('pr1')).removeClass('is-active');
        $(document.getElementById('pr2')).removeClass('is-active');
        $(document.getElementById('pr3')).removeClass('is-active');
        $(document.getElementById('pr4')).addClass('is-active');
        
    }
    if (event.target == prs1) {
        $('.gray').addClass('fa-check');
       $('.black').removeClass('fa-check');
       $('.red').removeClass('fa-check');
       $('.green').removeClass('fa-check');
       $('.blue').removeClass('fa-check');
       $('.yellow').removeClass('fa-check');
        
    }
    if (event.target == prs2) {
        $('.gray').removeClass('fa-check');
       $('.black').addClass('fa-check');
       $('.red').removeClass('fa-check');
       $('.green').removeClass('fa-check');
       $('.blue').removeClass('fa-check');
       $('.yellow').removeClass('fa-check');
        
    }
        if (event.target == prs3) {
        $('.gray').removeClass('fa-check');
       $('.black').removeClass('fa-check');
       $('.red').addClass('fa-check');
       $('.green').removeClass('fa-check');
       $('.blue').removeClass('fa-check');
       $('.yellow').removeClass('fa-check');
        
    }
        if (event.target == prs4) {
        $('.gray').removeClass('fa-check');
       $('.black').removeClass('fa-check');
       $('.red').removeClass('fa-check');
       $('.green').addClass('fa-check');
       $('.blue').removeClass('fa-check');
       $('.yellow').removeClass('fa-check');
        
    }
        if (event.target == prs5) {
        $('.gray').removeClass('fa-check');
       $('.black').removeClass('fa-check');
       $('.red').removeClass('fa-check');
       $('.green').removeClass('fa-check');
       $('.blue').addClass('fa-check');
       $('.yellow').removeClass('fa-check');
        
    }
        if (event.target == prs6) {
        $('.gray').removeClass('fa-check');
       $('.black').removeClass('fa-check');
       $('.red').removeClass('fa-check');
       $('.green').removeClass('fa-check');
       $('.blue').removeClass('fa-check');
       $('.yellow').addClass('fa-check');
        
    }

}



});

$('section.awSlider .carousel').carousel({
    pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
    $('section.awSlider > img').attr('src',bscn);
});


/* 
Philips ambilight tv
Üzerine gleince duruyor slide
*/



	
