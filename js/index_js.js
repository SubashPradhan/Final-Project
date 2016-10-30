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

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google-translate');
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("container").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById('container').style.marginLeft = "0";
	
}

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 'fast');
        return false;
    });

});








