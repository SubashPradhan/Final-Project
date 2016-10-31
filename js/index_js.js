//ACCORDION //

$(document).ready(function(){
	var acc = document.getElementsByClassName('accordion');
	var i;

	for (i = 0; i < acc.length; i++){
		acc[i].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		}
	}
});

// GOOGLE TRANSLATE //

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google-translate');
}

// SIDE NAVIGATION //

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("container").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById('container').style.marginLeft = "0";
	
}

// GO UP ARROW //
$(document).ready(function () {
	$('.scroll-up').hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.scroll-up').fadeIn('slow');
		} else {
			$('.scroll-up').fadeOut('slow');
		}
	});

	$('.scroll-up').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 'fast');
		return false;
	});

});

// SLIDE SHOW //

$(document).ready(function(){
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

});



