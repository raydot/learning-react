// 1.  Keep data immutable
// 2.  Keep functions pure
// 3.  Use recursion over looping (whereever possible)

// Build a ticking clock:

// Imperative solution:

setInterval(logClockTime, 1000);

function logClockTime() {
	//get time string as civilian time
	var time = getClockTime();

	//clear the console and log the time
	console.clear();
	console.log(time);
}

function getClockTime() {
	// get the current time
	var date = new Date();
	var time = "";

	// serialize clock time
	var time = {
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds(),
		ampm: "AM"
	}

	// convert time to civilian time
	if (time.hours == 12) {
		time.ampm = "PM";
	else if (time.hours > 12) {
		time.ampm = "PM";
		time.hours -= 12;
	}
	
	// prepend a 0 on the hours to make double digits
	if (time.hours < 10) {
		time.hours = "0" + time.hours;
	}

	// prepend a 0 on the minutes to make double digits
	if (time.minutes) < 10 {
		time.minutes = "0" + time.minutes;
	}

	// prepend a 0 on the seconds to make double digits
	if (time.seconds) < 10 {
		time.seconds = "0" + time.seconds;
	}

	// format the clock as a string: "hh:mm:ss tt"
	return time.hours + ":"
		+ time.minutes + ":"
		+ time.seconds + " "
		+ time.ampm;
}