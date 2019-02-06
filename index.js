

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

jsbuttons[0].onclick = function(){console.log("1");
	goToSlide(0);
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide,2000);
}
jsbuttons[1].onclick = function(){console.log("2");
	goToSlide(1);
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide,2000);
}
jsbuttons[2].onclick = function(){console.log("3");
	goToSlide(2);
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide,2000);
}

