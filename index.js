

var slides = document.querySelectorAll('.js-presentation .presentation');
var buttons = document.querySelectorAll(".inside-border");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
    slides[currentSlide].className = 'presentation';
    buttons[currentSlide].className = 'inside-border';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'presentation showing';
    buttons[currentSlide].className = 'inside-border showing-button';
}