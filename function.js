function timer(spot) {
	var a = Date.parse(Date());
	var b = Date.parse(spot);

	var c = (a-b) / 1000;
	var hour = Math.floor( c / 3600 );

	var min =  Math.floor( (c%3600)/60 );
	var sec =  ( c%3600 ) % 60 ;

	if (min < 10) {
		min = "0" + min;
	}

	if (sec < 10) {
		sec = "0" + sec;
	}

	var show = hour + ":" + min + ":" + sec;
	$(".timer").html(show);

}

// Date.parse(a)-Date.parse(b)