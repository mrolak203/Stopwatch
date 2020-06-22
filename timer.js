var startButton = document.querySelector('.start');
var timerDisplay = document.querySelector('.timer');

var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;

var paused = 0;
var running = 0;

/*
	This function launches the timer for the first time
*/
function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getDisplayTime, 1);

    paused = 0;
    running = 1;
  }
}

/*
	This function stops the timer and resets all values
*/
function stopTimer(){

		clearInterval(tInterval);
    	running = 0;
    	savedTime = 0;
  		difference = 0;
 		paused = 0;
  		running = 0;
  		
}

function pauseTimer(){
	if(!difference){

		//do nothing if the timer is not currently running

	} else if(!paused){

		clearInterval(tInterval);
    	savedTime = difference;
   		paused = 1;
    	running = 0;
 
	} else {

		startTimer();

	}


}

/*
	This function saves the stopwatch time onto local storage, along with the current date into 
	stopwatch history
*/

var finalscore = 0;

function saveTime(){

	if(running){
		stopTimer();
	}

	finalscore = document.getElementById("time").innerHTML;

	


	const history = JSON.parse(localStorage.getItem('history')) || [];

	var de = new Date().toISOString();
	
	var d = "created on: "+de.slice(0,10) + "at " + de.slice(11,19);
	

	saveNewTime  = (e) => {

		console.log("ssaving noew time");

		e.preventDefault();

		
		const value = {
			time: finalscore,
			date: d,
		};

		history.push(value);

		localStorage.setItem('history', JSON.stringify(history));
	};

 saveNewTime(event);
}

/*
	this function works by checking for the current time
	and subtracting that from the total amount of time since the timer started.
*/

function getDisplayTime(){

  updatedTime = new Date().getTime();

  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }

  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = (hours < 10) ? "0" + hours : hours;

  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  minutes = (minutes < 10) ? "0" + minutes : minutes;
 
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  

  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}