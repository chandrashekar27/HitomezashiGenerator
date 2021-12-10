// Global Variables
var canvas;
var ctx;
var canvasheight;
var canvaswidth;


function loadCanvas() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvasheight = canvas.clientHeight;
	canvaswidth = canvas.clientWidth;
	ctx.strokeStyle = "#8a007e";
}

function generate() {
	ctx.clearRect(0, 0, canvaswidth, canvasheight);
	var xdata = document.getElementById('inputXdata').value;
	var ydata = document.getElementById('inputYdata').value;
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

function drawPattern(xdata, ydata) {
	/* Change the scales for
	/  different sizes and ratios 
	/  Need to add option for user 
	/  to set scales
	*/
	var xscale = 10;
	var yscale = 10;
	drawX(xdata, xscale, yscale);
	drawY(ydata, yscale, xscale);
}

function drawX(xdata, xscale, yscale) {
	var x=0, y=0;
	for(var reps=0; reps < 100; reps++) {
		var phasedata = xdata[reps];
		if(phasedata==0) {
			x = 0;
		} else {
			x = xscale;
		}
		ctx.beginPath();
		while(x<canvaswidth){
			ctx.moveTo(x,y);
			ctx.lineTo(x + xscale, y);
			ctx.stroke();
			x += (2*xscale);
		}
		y += yscale;
	}
}

function drawY(ydata, yscale, xscale) {
	var x=0, y=0;
	for(var reps=0; reps < 100; reps++) {
		var phasedata = ydata[reps];
		if(phasedata==0) {
			y = 0;
		} else {
			y = yscale;
		}
		ctx.beginPath();
		while(y<canvasheight){
			ctx.moveTo(x,y);
			ctx.lineTo(x, y + yscale);
			ctx.stroke();
			y += (2*yscale);
		}
		x += xscale;
	}
}

window.addEventListener('load', loadCanvas);
document.getElementById('generateButton').addEventListener('click',generate);