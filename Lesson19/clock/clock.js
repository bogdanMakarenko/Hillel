function ready() {
	clockRunner();
}

document.addEventListener("DOMContentLoaded", ready);

// Get CSS elements 
var hourEl = document.querySelector('.hour');
var minuteEl = document.querySelector('.minute');
var secondEl =  document.querySelector('.second');

function clockRunner() {
	var date = new Date();	

	var minuteDegree = date.getSeconds() / 10;
	var hourDegree = date.getMinutes() / 2;

	var seconds = date.getSeconds() * 6;
	var minutes = date.getMinutes() * 6 + minuteDegree;
	var hovers = (date.getHours() > 12) ? 
		     ((date.getHours() - 12) * 30):
	             (date.getHours() * 30) + hourDegree;

	hourEl.style.transform = 'rotate(' + hovers + 'deg)';
	minuteEl.style.transform = 'rotate(' + minutes + 'deg)';
	secondEl.style.transform = 'rotate(' + seconds + 'deg)';
}

setInterval(clockRunner, 1000);
