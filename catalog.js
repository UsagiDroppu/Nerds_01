setInterval(picturesOn,500);

console.log("пек");

var pictures = document.querySelectorAll(".cat-pictures>li");
var price = document.querySelectorAll(".pictures-hover");
var browser = document.querySelectorAll(".browser");
var buttons = document.querySelectorAll("nav-buttons");

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
		console.log(event.target);
		if (pictures[i] == this) {
			price[i].className = 'pictures-hover-on';
			browser[i].className = 'browser-on';
		}
	}
}

function picturesOff() {
	for (var i = pictures.length - 1; i >= 0; i--) {
		console.log(event.target);
		if (pictures[i] == this) {
			price[i].className = 'pictures-hover';
			browser[i].className = 'browser';
		}
	}
}

function buttonsOn() {
	for (var i = buttons.length - 1; i >= 0; i--) {
		console.log(event.target);
		if ((buttons[i] == this)&&(i!=(buttons.length-1)) {
			buttons[i].className = '.nav-buttons--active';
		}
	}
}