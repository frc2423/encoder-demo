// Global variable
var img = null,
	needle = null,
	ctx = null,
	degrees = 0;

function clearCanvas() {
	 // clear canvas
	ctx.clearRect(0, 0, 200, 200);
}

function draw() {

	clearCanvas();

	// Draw the compass onto the canvas
	ctx.drawImage(img, 0, 0);

	// Save the current drawing state
	ctx.save();

	// Now move across and down half the 
	ctx.translate(100, 100);

	// Rotate around this point
	ctx.rotate(degrees * (Math.PI / 180));

	// Draw the image back and up
	ctx.drawImage(needle, -100, -100);

	// Restore the previous drawing state
	ctx.restore();

	// Increment the angle of the needle by 5 degrees
	degrees += 5;
}

function imgLoaded() {
	// Image loaded event complete. Start listening
	NetworkTables.addKeyListener('/SmartDashboard/sensor', onValueChanged, true);
}

function onRobotConnection(connected) {
	$('#robotstate').text(connected ? "Connected!" : "Disconnected");
}

function onValueChanged(key, value, isNew) {
  if (value > 4.7)
		value = 4.7;
	else if (value < 0)
		value = 0;
		
	degrees = value * (360.0/4.7);
	draw();
}

function init() {
	
	NetworkTables.addRobotConnectionListener(onRobotConnection, true);
	
	// Grab the compass element
	var canvas = document.getElementById('compass');

	// Canvas supported?
	if (canvas.getContext('2d')) {
		ctx = canvas.getContext('2d');

		// Load the needle image
		needle = new Image();
		needle.src = 'needle.png';

		// Load the compass image
		img = new Image();
		img.src = 'compass.png';
		img.onload = imgLoaded;
	} else {
		alert("Canvas not supported!");
	}
}