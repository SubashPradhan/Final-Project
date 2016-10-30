


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








