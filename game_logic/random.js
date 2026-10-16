// debug file for all the random dev tools and debug stuff

// fps counter code, just checks the time between frames, and then shows it on the fps element in the html page
var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;

function tick() {
  var time = Date.now();
  frame++;
  if (time - startTime > 100) {
      fps.innerHTML = "FPS: " + (frame / ((time - startTime) / 1000)).toFixed(1);
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}
tick();

//ram usage
let RAMp = document.getElementById("ram");

function ram() {
    if (window.performance && window.performance.memory) { // checks to see if the browser supports it
        const memoryInfo = window.performance.memory;
        /*
        // console logs to show how much memory and whatnot
        console.log(`Used Heap: ${memoryInfo.usedJSHeapSize} bytes`);
        console.log(`Total Heap: ${memoryInfo.totalJSHeapSize} bytes`);
        console.log(`Heap Limit: ${memoryInfo.jsHeapSizeLimit} bytes`);
        */

        RAMp.innerHTML = "RAM usage: " + Math.floor((memoryInfo.totalJSHeapSize / 1024) / 1024) + "mb";
    }
}
setInterval(ram, 500);


//showing / hiding the debug screen (maybe ` )
let debugHidden = 1; //debug hidden by default
const debug = document.getElementById("debug");

document.addEventListener("keydown", function(event) {
    if (event.key === "`") {
        if (debugHidden == 0) { //if its hidden, show it
            debugHidden = 1;
            debug.style.visibility = "hidden";
        } else if (debugHidden == 1) {
            debugHidden = 0;
            debug.style.visibility = "visible";
        }
    }

})



