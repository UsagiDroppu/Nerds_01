setInterval(picturesOn,500);

console.log("пек");

var pictures = document.querySelectorAll(".cat-pictures>li");
var price = document.querySelectorAll(".pictures-hover");
var browser = document.querySelectorAll(".browser");
var buttons = document.querySelectorAll(".nav-buttons");
var currentButton = 0;

for (var i = pictures.length - 1; i >= 0; i--) {
	pictures[i].addEventListener("mouseover", picturesOn);
	pictures[i].addEventListener("mouseout", picturesOff);
	console.log(pictures[i]);
}

for (var i = buttons.length - 1; i >= 0; i--) {
	buttons[i].addEventListener("click", buttonsOn);
}

function picturesOn(){
	for (var i = pictures.length - 1; i >= 0; i--) {
		
		if (pictures[i] == this) {
			price[i].className = 'pictures-hover-on';
			browser[i].className = 'browser-on';
		}
	}
}

function picturesOff() {
	for (var i = pictures.length - 1; i >= 0; i--) {
		
		if (pictures[i] == this) {
			price[i].className = 'pictures-hover';
			browser[i].className = 'browser';
		}
	}
}



function buttonsOn() {
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].classList.contains('nav-buttons--active')){
			currentButton=i;
			console.log(currentButton);
		};
		if (!(this.classList.contains('nav-buttons-next'))) {
			// console.log(event.target);
			if (buttons[i]==this) {
				buttons[i].className = 'nav-buttons nav-buttons--active';	
			}
			else {
				if (!(buttons[i].classList.contains('nav-buttons-next'))){
					buttons[i].className = 'nav-buttons';
				}
			}
		}
	}
	if (this.classList.contains('nav-buttons-next') && !buttons[currentButton+1].classList.contains('nav-buttons-next')){
			buttons[currentButton].className = 'nav-buttons';
			buttons[currentButton+1].className = 'nav-buttons nav-buttons--active';
	}
}
