$(document).ready(function(){
	var acc = document.getElementsByClassName('accordion');
	var i;

	for (i = 0; i < acc.length; i++){
		acc[i].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		}
	}

	//side navigation

	var mySidenav = document.getElementById("mySidenav");
	var container = document.getElementById("container");
	$('.open').click(function(){
		$('.sidenav').css('width', '250px');
		$('#container').css('marginLeft', '250px');

	});
	
	$('.closebtn').click(function(){
		$('.sidenav').css('width', 0);
		$('#container').css('marginLeft', 0);
		$('.icon-bar').css('display', 'block');
	});	

	//side navigation when resized
	
	if ($(window).width() < 1024){
		$('.open').click(function(){
			$('.sidenav').css('width', '135px');
			$('#container').css('marginLeft', '135px');
			$('.icon-bar').css('display', 'none');
		});
		
	}
	
	//Go up arrow

	$('.scroll-up').hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.scroll-up').fadeIn('slow');
		} else {
			$('.scroll-up').fadeOut('slow');
		}
	});

	$('.scroll-up').click(function(){
		$("body").animate({
			scrollTop: 0
		}, 'fast');
		return false;
	});

	//Slide-show gallery

	var currentIndex = 0,
	items = $('.myslides'),
	itemAmt = items.length;

	function cycleItems() {

		var item = $('.myslides').eq(currentIndex);
		items.hide();
		item.css('display', 'block');
	}

	$('.next').click(function() {
		currentIndex += 1;
		if (currentIndex > itemAmt - 1) {
			currentIndex = 0;
		}
		cycleItems();
	});

	$('.prev').click(function() {
		currentIndex -= 1;
		if (currentIndex < 0) {
			currentIndex = itemAmt - 1;
		}
		cycleItems();
	});

	cycleItems(0);

	// simple effects for footer and header 

	$('h4').hide();
	$('h4').show(4000);

	$('.footer').hide();
	$('.footer').show(3000);

	// google-translate

	$(window).load(function googleTranslateElementInit() {
		new google.translate.TranslateElement({pageLanguage: 'en'}, 'google-translate');
	});



});

