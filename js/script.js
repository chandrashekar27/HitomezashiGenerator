// Global Variables
var canvas;
var ctx;
var canvasheight;
var canvaswidth;
var colors = ['#ff2212','#ffeb12','#1aff12','#12ffef','#c012ff', '#1c08ff','#efdecd'];

function generate90(){
	var xdata;
	var ydata;
	var xscale;
	var yscale;

	function generatepattern90() {
		ctx.clearRect(0, 0, canvaswidth, canvasheight);
		ctx.strokeStyle = colors[Math.floor(Math.random()*(colors.length))];
		xdata = document.getElementById('inputXdata90').value;
		ydata = document.getElementById('inputYdata90').value;
		if(xdata==''){
			xdata = genRandomString();
		}
		if(ydata==''){
			ydata = genRandomString();
		}
		xdata = loopdata(xdata);
		ydata = loopdata(ydata);

		drawPattern(xdata, ydata);
		/*console.log(xdata);
		console.log(ydata);
		console.log(xdata.length);
		console.log(ydata.length);*/
	}

	function genRandomString() {
		var ran = '';
		var len = Math.floor(Math.random()*15) + 2;
		while(len--) {
			ran += String(Math.floor(Math.random()*100)%2);
		}
		return ran;
	}

	function loopdata(data) {
		var temp = String(data);
		while(data.length<=100){
			data += temp;
		}
		return data;
	}

	function drawPattern() {
		/* Change the scales for
		/  different sizes and ratios 
		/  Need to add option for user 
		/  to set scales
		*/
		xscale = 8;
		yscale = 8;
		drawX();
		drawY();
	}

	function drawX() {
		var x=0, y=0;
		for(var reps=0; reps < 100; reps++) {
			var phasedata = xdata[reps];
			if(phasedata==0) {
				x = 0;
			} else {
				x = xscale;
			}
			while(x<canvaswidth){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.lineTo(x + xscale, y);
				ctx.stroke();
				x += (2*xscale);
			}
			y += yscale;
		}
	}

	function drawY() {
		var x=0, y=0;
		for(var reps=0; reps < 100; reps++) {
			var phasedata = ydata[reps];
			if(phasedata==0) {
				y = 0;
			} else {
				y = yscale;
			}
			while(y<canvasheight){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.lineTo(x, y + yscale);
				ctx.stroke();
				y += (2*yscale);
			}
			x += xscale;
		}
	}
	//func call
	generatepattern90();
}

function generate60() {
	var xdata;
	var ydata;
	var zdata;
	var scale;

	function generatepattern60() {
		ctx.clearRect(0, 0, canvaswidth, canvasheight);
		ctx.strokeStyle = colors[Math.floor(Math.random()*(colors.length))];
		xdata = document.getElementById('inputXdata60').value;
		ydata = document.getElementById('inputYdata60').value;
		zdata = document.getElementById('inputZdata60').value;
		if(xdata==''){
			xdata = genRandomString();
		}
		if(ydata==''){
			ydata = genRandomString();
		}
		if(zdata==''){
			zdata = genRandomString();
		}
		xdata = loopdata(xdata);
		ydata = loopdata(ydata);
		zdata = loopdata(zdata);
		drawPattern60();
	}

	function genRandomString() {
		var ran = '';
		var len = Math.floor(Math.random()*15) + 2;
		while(len--) {
			ran += String(Math.floor(Math.random()*100)%2);
		}
		return ran;
	}

	function loopdata(data) {
		var temp = String(data);
		while(data.length<=100){
			data += temp;
		}
		return data;
	}

	function drawPattern60() {
		/* Change the scales for
		/  different sizes and ratios 
		/  Need to add option for user 
		/  to set scales
		*/
		scale = 10;
		drawX();
		drawY();
		drawZ();
	}

	function drawX() {
		var x=0, y=0;
		var cpib6 = Math.cos(Math.PI/6);
		for(var reps=0; reps < 100; reps++) {
			var phasedata = xdata[reps];
			if(phasedata==0) {
				x = 0;
			} else {
				x = scale;
			}
			while(x<canvaswidth){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.lineTo(x + scale, y);
				ctx.stroke();
				x += (2*scale);
			}
			y += scale*cpib6;
		}
	}

	function drawY() {
		var x, y, startx=0;
		var cpib6 = Math.cos(Math.PI/6);
		console.log(cpib6);
		for(var reps=0; reps < 120; reps++) {
			var phasedata = ydata[reps];
			if(phasedata==0) {
				y = 0;
				x = startx;
			} else {
				//change
				y = (cpib6*scale);
				x = startx - scale/2;
			}
			while((y<=canvasheight && y>=0) || (x<=canvaswidth && x>=0)){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.lineTo(x - (scale*0.5), y + (scale*cpib6));
				ctx.stroke();
				y += (2*cpib6*scale);
				x -= scale;
			}
			startx += scale;
		}
	}

	function drawZ() {
		var x, y, startx = -scale*20;
		var cpib6 = Math.cos(Math.PI/6);
		console.log(cpib6);
		for(var reps=0; reps < 120; reps++) {
			var phasedata = ydata[reps];
			if(phasedata==0) {
				y = 0;
				x = startx;
			} else {
				//change
				y = (cpib6*scale);
				x = startx + scale/2;
			}
			while((y<=canvasheight && y>=0) || (x<=canvaswidth && x>=0)){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.lineTo(x + (scale*0.5), y + (scale*cpib6));
				ctx.stroke();
				y += (2*cpib6*scale);
				x += scale;
			}
			startx += scale;
		}
	}

	//func call
	generatepattern60();
}

function loadCanvas() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvasheight = canvas.clientHeight;
	canvaswidth = canvas.clientWidth;
	ctx.lineWidth = 2;
	ctx.lineCap = 'round';
	// show only appropriate input forms when initially loaded
	var buttons = document.getElementsByClassName("degrees60"),
        len = buttons !== null ? buttons.length : 0,
        i = 0;
    for(i; i < len; i++) {
        buttons[i].classList.add('invisible'); 
    }

}

function generate() {
	var mode = document.getElementById('modelist').value;
	if(mode=='90 degrees'){
		generate90();
	} else if(mode=='60 degrees'){
		generate60();
	}
}

function changeinput() {
	var mode = document.getElementById('modelist').value;
	if(mode=='90 degrees'){
		var buttons = document.getElementsByClassName("degrees90"),
			len = buttons !== null ? buttons.length : 0,
			i = 0;
		for(i; i < len; i++) {
			buttons[i].classList.remove('invisible'); 
		}
		var buttons = document.getElementsByClassName("degrees60"),
			len = buttons !== null ? buttons.length : 0,
			i = 0;
		for(i; i < len; i++) {
			buttons[i].classList.add('invisible'); 
		}
	} else if(mode=='60 degrees'){
		var buttons = document.getElementsByClassName("degrees90"),
			len = buttons !== null ? buttons.length : 0,
			i = 0;
		for(i; i < len; i++) {
			buttons[i].classList.add('invisible'); 
		}
		var buttons = document.getElementsByClassName("degrees60"),
			len = buttons !== null ? buttons.length : 0,
			i = 0;
		for(i; i < len; i++) {
			buttons[i].classList.remove('invisible'); 
		}
	}
}

window.addEventListener('load', loadCanvas);
document.getElementById('modelist').addEventListener('change',changeinput);
document.getElementById('generateButton').addEventListener('click',generate);