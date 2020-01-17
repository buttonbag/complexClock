// set container divs as variables
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const amPm = document.querySelector('.ampm');

// amPm = n => {
// 	if(n < 12) {
// 		return "am";
// 	}
// 	return "pm";
// }

addZero = n => {
	if(n <= 9) {
		 return "0" + n;
 	}
	return n;
}

// get current time

showTime = () => {
	const now = new Date();
	const secs = now.getSeconds();
	const mins = now.getMinutes();
	const hrs = now.getHours();
	const ampm = hrs < 12 ? 'am' : 'pm'; 
	// display current time in divs
	seconds.innerText = addZero(secs);
	minutes.innerText = addZero(mins);
	hours.innerText = addZero(hrs % 12 || 12);
	amPm.innerText = ampm;
	
	// console.log(hours.innerText + ":" + minutes.innerText + ":" + seconds.innerText + " " + ampm);
}

const userHr = document.querySelector('.userHr');
const userMin = document.querySelector('.userMin');
const userSecs = document.querySelector('.userSecs');

// function alarm() {
// 	const now = new Date();
// 	const secs = now.getSeconds();
// 	const mins = now.getMinutes();
// 	const hrs = now.getHours();
	
// 	if(hrs == userHr.value && mins == userMin.value && secs == userSecs.value) {
// 		alert('time!');
// 		console.log('time');
// 	}
	
// 	console.log('alarm set' + userHr.value +
// userMin.value + 
// userSecs.value);
// }

// const alarmBtn = document.querySelector('#set-alarm');
// alarmBtn.addEventListener('click', alarm);

// setInterval(alarm, 1000);
setInterval(showTime, 1000);

