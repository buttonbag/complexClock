	// get current time
	const now = new Date();
	const secs = now.getSeconds();
	const mins = now.getMinutes();
	const hrs = now.getHours();
	const ampm = hrs < 12 ? 'am' : 'pm'; 

showTime = () => {
	// get current time
	const now = new Date();
	const secs = now.getSeconds();
	const mins = now.getMinutes();
	const hrs = now.getHours();
	const ampm = hrs < 12 ? 'am' : 'pm'; 

	// set container divs as variables
	const hours = document.querySelector('.hours');
	const minutes = document.querySelector('.minutes');
	const seconds = document.querySelector('.seconds');
	const amPm = document.querySelector('.ampm');
	const userHr = document.querySelector('.userHr');
	const userMin = document.querySelector('.userMin');
	const userSecs = document.querySelector('.userSecs');

	// amPm = n => {
	// 	if(n < 12) {
	// 		return "am";
	// 	}
	// 	return "pm";
	// }

	addZero = n => n <= 9 ? "0" + n : n;

	// display current time in divs
	seconds.innerHTML = addZero(secs);
	minutes.innerHTML = addZero(mins);
	hours.innerHTML = addZero(hrs % 12 || 12);
	amPm.innerHTML = ampm;
	
	console.log(hours.innerHTML + ":" + minutes.innerHTML + ":" + seconds.innerHTML + " " + ampm);

}



setInterval(showTime, 1000);

