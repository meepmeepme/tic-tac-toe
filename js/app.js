var squares = {sq1:0,sq2:0,sq3:0,sq3:0,sq4:0,sq5:0,sq6:0,sq7:0,sq8:0, sq9:0};
var airun;

function buttonpush(taken) {
	if (taken == 'butt1' && squares.sq1 == 0) {
		console.log('butt1starting');
		document.getElementById("button1").innerHTML = "Taken by Player";
		squares.sq1 = 2;
		runai();
	}

	else if (taken == 'butt2' && squares.sq2 == 0) {
		console.log('butt2starting');
		document.getElementById("button2").innerHTML = "Taken by Player";
		squares.sq2 = 2;
		runai();
	}
	else if (taken == 'butt3' && squares.sq3 == 0) {
		console.log('butt3starting');
		document.getElementById("button3").innerHTML = "Taken by Player";
		squares.sq3 = 2;
		runai();
	}
	else if (taken == 'butt4' && squares.sq4 == 0) {
		console.log('butt4starting');
		document.getElementById("button4").innerHTML = "Taken by Player";
		squares.sq4 = 2;
		runai();
	}
	else if (taken == 'butt5' && squares.sq5 == 0) {
		console.log('butt5starting');
		document.getElementById("button5").innerHTML = "Taken by Player";
		squares.sq5 = 2;
		runai();
	}
	else if (taken == 'butt6' && squares.sq6 == 0) {
		console.log('butt6starting');
		document.getElementById("button6").innerHTML = "Taken by Player";
		squares.sq6 = 2;
		runai();
	}
	else if (taken == 'butt7' && squares.sq7 == 0) {
		console.log('butt7starting');
		document.getElementById("button7").innerHTML = "Taken by Player";
		squares.sq7 = 2;
		runai();
	}
	else if (taken == 'butt8' && squares.sq8 == 0) {
		console.log('butt8starting');
		document.getElementById("button8").innerHTML = "Taken by Player";
		squares.sq8 = 2;
		runai();
	}
	else if (taken == 'butt9' && squares.sq9 == 0) {
		console.log('butt9starting');
		document.getElementById("button9").innerHTML = "Taken by Player";
		squares.sq9 = 2;
		runai();
	}


	
}
function runai() {
	airun = Math.floor(Math.random()*10);
	console.log('running ' + airun);
	if (airun == 1 && squares.sq1 == 0) {
		document.getElementById("button1").innerHTML = "Taken by AI";
			console.log('executed square 1 by AI');
			squares.sq1 = 3;
	} 

	else if (airun == 2 && squares.sq2 == 0) {
		document.getElementById("button2").innerHTML = "Taken by AI";
			console.log('executed square 2 by AI');
			squares.sq2 = 3;
	} 

	else if (airun == 3 && squares.sq3 == 0) {
		document.getElementById("button3").innerHTML = "Taken by AI";
			console.log('executed square 3 by AI');
			squares.sq3 = 3;
	}

	else if (airun == 4 && squares.sq4 == 0) {
		document.getElementById("button4").innerHTML = "Taken by AI";
			console.log('executed square 4 by AI');
			squares.sq4 = 3;
	}

	else if (airun == 5 && squares.sq5 == 0) {
		document.getElementById("button5").innerHTML = "Taken by AI";
			console.log('executed square 5 by AI');
			squares.sq5 = 3;
	}

	else if (airun == 6 && squares.sq6 == 0) {
		document.getElementById("button6").innerHTML = "Taken by AI";
			console.log('executed square 6 by AI');
			squares.sq6 = 3;
	}

	else if (airun == 7 && squares.sq7 == 0) {
		document.getElementById("button7").innerHTML = "Taken by AI";
			console.log('executed square 7 by AI');
			squares.sq7 = 3;
	}

	else if (airun == 8 && squares.sq8 == 0) {
		document.getElementById("button8").innerHTML = "Taken by AI";
			console.log('executed square 8 by AI');
			squares.sq8 = 3;
	}

	else if (airun == 9 && squares.sq9 == 0) {
		document.getElementById("button9").innerHTML = "Taken by AI";
			console.log('executed square 9 by AI');
			squares.sq9 = 3;
	}else{
		runai();
	}
}