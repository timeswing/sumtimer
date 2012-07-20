var state = 0;
var c = 0;

function timer(){
	if(state == 0){
	
	state = 1;
	b = Date.parse(Date())-c;

	} else {
		state = 0;
		a = new Date();
		c = Date.parse(a) - b;

		$(".timer").html(cal(c));

	}
}



function showtime(){
	setTimeout("showtime();", 50);
	if(state == 1){
		a = new Date();
		c = Date.parse(a) - b;
		$(".timer").html(cal(c));
	}
}




function cal(time){

	ms = time/1000;

	hour = Math.floor( ms / 3600);
	min = Math.floor( (ms%3600) / 60);
	sec = (ms%3600) % 60;

	if (min < 10) {
		min = "0" + min;
	}

	if (sec < 10) {
		sec = "0" + sec;
	}

	show = hour + ":" + min + ":" + sec;
	return show;
}