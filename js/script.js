// Global Variables
var canvas;
var ctx;
var canvasheight;
var canvaswidth;
var colors = ['#ff2212','#ffeb12','#1aff12','#12ffef','#c012ff', '#1c08ff','#efdecd'];

// Math funcs
const mrand = Math.random;
const mfloor = Math.floor;
const MAX = Math.max;
const MIN = Math.min;
const PI = Math.PI;
const SIN = Math.sin;
const COS = Math.cos;
const TAN = Math.tan;

function generate90(){
	var xdata;
	var ydata;
	var xscale;
	var yscale;

	function generatepattern90() {
		ctx.clearRect(0, 0, canvaswidth, canvasheight);
		ctx.strokeStyle = colors[Math.floor(mrand()*(colors.length))];
		xdata = document.getElementById('inputXdata90').value;
		ydata = document.getElementById('inputYdata90').value;
		if(xdata==''){
			xdata = genRandomString(15);
		}
		if(ydata==''){
			ydata = genRandomString(15);
		}
		xdata = loopdata(xdata);
		ydata = loopdata(ydata);

		drawPattern(xdata, ydata);
		/*console.log(xdata);
		console.log(ydata);
		console.log(xdata.length);
		console.log(ydata.length);*/
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
		for(var reps=0; reps < 200; reps++) {
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
		for(var reps=0; reps < 200; reps++) {
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
		ctx.strokeStyle = colors[mfloor(mrand()*(colors.length))];
		xdata = document.getElementById('inputXdata60').value;
		ydata = document.getElementById('inputYdata60').value;
		zdata = document.getElementById('inputZdata60').value;
		if(xdata==''){
			xdata = genRandomString(15);
		}
		if(ydata==''){
			ydata = genRandomString(15);
		}
		if(zdata==''){
			zdata = genRandomString(15);
		}
		xdata = loopdata(xdata);
		ydata = loopdata(ydata);
		zdata = loopdata(zdata);
		drawPattern60();
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
		var cpib6 = COS(PI/6);
		for(var reps=0; reps < 200; reps++) {
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
		var cpib6 = COS(PI/6);
		console.log(cpib6);
		for(var reps=0; reps < 200; reps++) {
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
		var cpib6 = COS(PI/6);
		console.log(cpib6);
		for(var reps=0; reps < 200; reps++) {
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

function generateCircular() {
	var rdata;
	var tdata;
	var angle;
	var scale;

	function generatePatternCircular() {
		ctx.clearRect(0, 0, canvaswidth, canvasheight);
		ctx.strokeStyle = colors[mfloor(mrand()*(colors.length))];
		rdata = document.getElementById('inputRdata').value;
		tdata = document.getElementById('inputTdata').value;
		if(tdata==''){
			tdata = genRandomString(15);
		}
		if(rdata==''){
			rdata = genRandomString(15);
		}
		rdata = loopdata(rdata);
		tdata = loopdata(tdata);

		drawCircular();
	}

	function drawCircular() {
		angle = PI/3;
		scale = 10;
		drawR();
		drawT();
	}

	function drawR() {
		var radius = scale;
		var sangle = 0;

		// console.log("func drawR called");
		// ctx.beginPath();
		// ctx.moveTo(0,0);
		// ctx.lineTo(570,280);
		// ctx.stroke();

		for(var reps=0; reps < 200; reps++) {
			var phasedata = rdata[reps];
			if(phasedata==0) {
				sangle = 0;
			} else {
				sangle = angle;
			}
			while((0.1 < (2*PI)-sangle) && (radius < MAX(canvasheight/2, canvaswidth/2))){
				ctx.beginPath();
				ctx.arc(canvaswidth/2, canvasheight/2, radius, sangle, sangle+angle);
				ctx.stroke();
				sangle += (2*angle);
			}
			radius += scale;
		}
	}

	function drawT() {
		//
	}

	generatePatternCircular();
}

function genRandomString(n) {
	var ran = '';
	var len = mfloor(mrand()*n) + 2;
	while(len--) {
		ran += String(mfloor(mrand()*100)%2);
	}
	return ran;
}

function loopdata(data) {
	var temp = String(data);
	while(data.length<=200){
		data += temp;
	}
	return data;
}

function loadCanvas() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvasheight = canvas.clientHeight;
	canvaswidth = canvas.clientWidth;
	ctx.lineWidth = 2;
	ctx.lineCap = 'round';
	// show only appropriate input forms when initially loaded
	hideInput("degrees60");
	hideInput("circularInputs");

}

function generate() {
	var mode = document.getElementById('modelist').value;	
	console.log('canvas height: ' + canvasheight);
	console.log('canvas width: ' + canvaswidth);
	if(mode=='90 degrees'){
		generate90();
	} else if(mode=='60 degrees'){
		generate60();
	} else if(mode=='circular'){
		generateCircular();
	}
}

function hideInput(name) {
	var buttons = document.getElementsByClassName(name),
		len = buttons !== null ? buttons.length : 0,
		i = 0;
	for(i; i < len; i++) {
		buttons[i].classList.add('invisible'); 
	}
}

function showInput(name) {
	var buttons = document.getElementsByClassName(name),
		len = buttons !== null ? buttons.length : 0,
		i = 0;
	for(i; i < len; i++) {
		buttons[i].classList.remove('invisible'); 
	}
}

function changeinput() {
	var mode = document.getElementById('modelist').value;
	if(mode=='90 degrees'){
		showInput("degrees90");
		hideInput("degrees60");
		hideInput("circularInputs");
		
	} else if(mode=='60 degrees'){
		showInput("degrees60");
		hideInput("degrees90");
		hideInput("circularInputs");
	} else if(mode=='circular') {
		showInput("circularInputs");
		hideInput("degrees60");
		hideInput("degrees90");
	}
}

window.addEventListener('load', loadCanvas);
document.getElementById('modelist').addEventListener('change',changeinput);
document.getElementById('generateButton').addEventListener('click',generate);
document.addEventListener('keydown', function(event){
	if(event.code=="Enter"){
		generate();
	}
});