// Object(s) // 
var readline = require("readline"); 
var interval; 

// variable(s) // 
var finishingTime = 0; 
var oneSecond = 1000; // 1 second AKA 1000 Millisecond

// holdes different time entity 
var hours = 0; 
var minutes = 0; 
var seconds = 0; 

// render clock every second // 
function renderClock(){
	// adjust seconds, minutes and hour 
	seconds+=1;

	if ((seconds % 60) == 0 && seconds != 0)
	{
		seconds = 0; 
		minutes++; 
	}

	if ((minutes % 60) == 0 && minutes != 0)
	{
		minutes = 0; 
		hours++; 
	}


	process.stdout.clearLine(); 
	process.stdout.cursorTo(0); 
	process.stdout.write(`${hours} : ${minutes} : ${seconds}`); 
}


// an interface to (get/send) (input/output) (back from/to) the user
var readlineInterface = readline.createInterface(process.stdin, process.stdout); 

// Adjust alarm 
readlineInterface.question("Alarm in: ", function(timeInSecond){

	// get finishingTime and conver it to Millisecond . 
	finishingTime = parseInt(timeInSecond.trim()); 
	finishingTime = finishingTime * 1000; 

	process.stdout.write(`${hours} : ${minutes} : ${seconds}`); 
	// Clock rendering every second // 
	interval = setInterval(function(){

		// send this waited time to a function to print render it
		renderClock(); 


	}, oneSecond);


	// stop clock rendering // 
	setTimeout(function(){
		clearInterval(interval); 
		console.log("Done"); 

	}, finishingTime); 
	
}); 