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
	var scale;
	//max possible reps
	var total_reps;

	function generatepattern90() {
		ctx.clearRect(0, 0, canvaswidth, canvasheight);
		xdata = document.getElementById('inputXdata90').value;
		ydata = document.getElementById('inputYdata90').value;
		if(xdata==''){
			xdata = genRandomString(20);
			document.getElementById('inputXdata90').placeholder = xdata;
		} else {
			document.getElementById('inputXdata90').placeholder = "Enter as binary string";
		}
		if(ydata==''){
			ydata = genRandomString(20);
			document.getElementById('inputYdata90').placeholder = ydata;
		} else {
			document.getElementById('inputYdata90').placeholder = "Enter as binary string";
		}

		drawPattern();
	}
	/* FOR TESTING
	// function ObjXDrawer() {
	// 	this.x = 0;
	// 	this.y = 0;
	// 	this.reps = 0;

	// 	this.animate = function() {
	// 		while(this.reps < 200) {
	// 			var phasedata = xdata[this.reps];
	// 			if(phasedata==0) {
	// 				this.x = 0;
	// 			} else {
	// 				this.x = scale;
	// 			}
	// 			while(this.x<canvaswidth){
	// 				ctx.beginPath();
	// 				ctx.moveTo(this.x,this.y);
	// 				ctx.lineTo(this.x + scale, this.y);
	// 				ctx.stroke();
	// 				ctx.closePath();
	// 				this.x += (2*scale);
	// 				//return true;
	// 			}
	// 			this.y += scale;
	// 			this.reps++;
	// 		}
	// 		//return false;
	// 	};
	// } */

	function drawPattern() {
		scale = Number(document.getElementById('inputScale90').value);
		if(!(scale>=1 && scale<=100)){
			document.getElementById('inputScale90').value = '12';
			scale = Number(document.getElementById('inputScale90').value);
		}
		total_reps = (MAX(canvasheight,canvaswidth)/(scale))+3;
		xdata = loopdata(xdata, total_reps);
		ydata = loopdata(ydata, total_reps);
		drawX();
		drawY();
	}

	function drawX() {
		var x=0, y=0, reps=0;
		while(reps < total_reps) {
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
				ctx.closePath();
				x += (2*scale);
				//return true;
			}
			y += scale;
			reps++;
		}
		//return false;
	}

	function drawY() {
		var x=0, y=0;
		for(var reps=0; reps < total_reps; reps++) {
			var phasedata = ydata[reps];
			if(phasedata==0) {
				y = 0;
			} else {
				y = scale;
			}
			while(y<canvasheight){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.lineTo(x, y + scale);
				ctx.stroke();
				ctx.closePath();
				y += (2*scale);
			}
			x += scale;
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
	var total_reps;
	var cpib6 = COS(PI/6);

	function generatepattern60() {
		ctx.clearRect(0, 0, canvaswidth, canvasheight);
		xdata = document.getElementById('inputXdata60').value;
		ydata = document.getElementById('inputYdata60').value;
		zdata = document.getElementById('inputZdata60').value;
		if(xdata==''){
			xdata = genRandomString(20);
			document.getElementById('inputXdata60').placeholder = xdata;
		} else {
			document.getElementById('inputXdata60').placeholder = "Enter as binary string";
		}
		if(ydata==''){
			ydata = genRandomString(20);
			document.getElementById('inputYdata60').placeholder = ydata;
		} else {
			document.getElementById('inputYdata60').placeholder = "Enter as binary string";
		}
		if(zdata==''){
			zdata = genRandomString(20);
			document.getElementById('inputZdata60').placeholder = zdata;
		} else {
			document.getElementById('inputZdata60').placeholder = "Enter as binary string";
		}
		drawPattern60();
	}

	function drawPattern60() {
		/* Change the scales for
		/  different sizes and ratios 
		/  Need to add option for user 
		/  to set scales
		*/
		scale = Number(document.getElementById('inputScale60').value);
		if(!(scale>=1 && scale<=100)){
			document.getElementById('inputScale60').value = '15';
			scale = Number(document.getElementById('inputScale60').value);
		}
		total_reps = (MAX(canvasheight,canvaswidth)/(scale))*2;
		xdata = loopdata(xdata, total_reps);
		ydata = loopdata(ydata, total_reps);
		zdata = loopdata(zdata, total_reps);
		drawX();
		drawY();
		drawZ();
	}

	function drawX() {
		var x=0, y=0;
		for(var reps=0; reps < total_reps; reps++) {
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
				ctx.closePath();
				x += (2*scale);
			}
			y += scale*cpib6;
		}
	}

	function drawY() {
		var x, y, startx=0;
		for(var reps=0; reps < total_reps; reps++) {
			var phasedata = ydata[reps];
			if(phasedata==0) {
				y = 0;
				x = startx;
			} else {
				//change
				y = (cpib6*scale);
				x = startx - scale/2;
			}
			while((y<=canvasheight && y>=0) || (x<=canvaswidth*2 && x>=0)){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.lineTo(x - (scale*0.5), y + (scale*cpib6));
				ctx.stroke();
				ctx.closePath();
				y += (2*cpib6*scale);
				x -= scale;
			}
			startx += scale;
		}
	}

	function drawZ() {
		var x, y, startx = -canvasheight;
		for(var reps=0; reps < total_reps; reps++) {
			var phasedata = ydata[reps];
			if(phasedata==0) {
				y = 0;
				x = startx;
			} else {
				//change
				y = (cpib6*scale);
				x = startx + scale/2;
			}
			while((y<=canvasheight && y>=0) || (x<=canvaswidth)){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.lineTo(x + (scale*0.5), y + (scale*cpib6));
				ctx.stroke();
				ctx.closePath();
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
		ctx.translate(canvaswidth/2, canvasheight/2);
		rdata = document.getElementById('inputRdata').value;
		tdata = document.getElementById('inputTdata').value;
		if(tdata==''){
			tdata = genRandomString(20);
			document.getElementById('inputTdata').placeholder = tdata;
		} else {
			document.getElementById('inputTdata').placeholder = "Enter as binary string";
		}
		if(rdata==''){
			rdata = genRandomString(20);
			document.getElementById('inputRdata').placeholder = rdata;
		} else {
			document.getElementById('inputRdata').placeholder = "Enter as binary string";
		}

		drawCircular();
	}

	function drawCircular() {
		angle = Number(document.getElementById('inputAngleCircular').value);
		if(!(angle>=1 && angle<=359)){
			document.getElementById('inputAngleCircular').value = '10';
			angle = Number(document.getElementById('inputAngleCircular').value);
		}
		angle *= (PI/180);
		scale = Number(document.getElementById('inputScaleCircular').value);
		if(!(scale>=1 && scale<=100)){
			document.getElementById('inputScaleCircular').value = '6';
			scale = Number(document.getElementById('inputScaleCircular').value);
		}

		rdata = loopdata(rdata, canvaswidth/2);
		tdata = loopdata(tdata, canvaswidth/2);

		drawR();
		drawT();
	}

	function drawR() {
		var radius = scale;
		var sangle = 0;
		var reps = 0;
		while(radius<MAX(canvasheight,canvaswidth)) {
			var phasedata = rdata[reps];
			if(phasedata==0) {
				sangle = 0;
			} else {
				sangle = angle;
			}
			while((0.1 < (2*PI)-sangle) && (radius < MAX(canvasheight/2, canvaswidth/2))){
				ctx.beginPath();
				ctx.arc(0, 0, radius, sangle, sangle+angle);
				ctx.stroke();
				ctx.closePath();
				sangle += (2*angle);
			}
			radius += scale;
			reps++;
		}
	}

	function drawT() {
		// vars angle, scale
		var sangle = 0;
		var r=0;
		var reps = 0;
		while((0.1 < (2*PI)-sangle)) {
			var phasedata = tdata[reps];
			if(phasedata==0) {
				r = 0;
			} else {
				r = scale;
			}
			while(r < MAX(canvasheight, canvaswidth)){
				ctx.beginPath();
				ctx.moveTo(r*COS(sangle), r*SIN(sangle));
				ctx.lineTo((r+scale)*COS(sangle), (r+scale)*SIN(sangle));
				ctx.stroke();
				ctx.closePath();
				r += 2*scale;
			}
			sangle += angle;
			reps++;
		}
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

function loopdata(data, num) {
	var temp = String(data);
	while(data.length<=num){
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
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	var colorChosen = document.getElementById('colorlist').value;
	if(colorChosen=='random'){
		ctx.strokeStyle = colors[Math.floor(mrand()*(colors.length))];
	} else {
		ctx.strokeStyle = colorChosen;
	}
	
	//ctx.translate(0.5, 0.5);
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