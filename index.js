
var slides = document.querySelectorAll('.js-presentation .presentation');
var buttons = document.querySelectorAll(".inside-border");
var jsbuttons = document.querySelectorAll(".presentation-buttons>li");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

 function nextSlide() {
    goToSlide(currentSlide+1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'presentation';
    buttons[currentSlide].className = 'inside-border';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'presentation showing';
    buttons[currentSlide].className = 'inside-border showing-button';
}

for (var i = slides.length - 1; i >= 0; i--) {
	jsbuttons[i].addEventListener("click", slideEvent);
}

function slideEvent() {
	for (var i = slides.length - 1; i >= 0; i--) {
		if (jsbuttons[i] == event.target) {
			goToSlide(i);
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide,2000);
		}
	}
}



