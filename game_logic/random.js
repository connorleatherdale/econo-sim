// debug file for all the random dev tools and debug stuff

// fps counter code, just checks the time between frames, and then shows it on the fps element in the html page
var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;
let FPSgraph = [];
const FPScanvas = document.getElementById("fpsCanvas");

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
const RAMcanvas = document.getElementById("RAMcanvas");
let RAMp = document.getElementById("ram");
let RAMGraph = [];

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

        // sorting out pushing/popping out of the RAMgraph array, which we will use later to graph
        RAMGraph.unshift(Math.floor((memoryInfo.totalJSHeapSize / 1024) / 1024));
        if (RAMGraph.length > 20) {
            RAMGraph.pop();
        }
    }
    
    GraphArray(RAMGraph, RAMcanvas, "RAM (MB)");
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



let randomArray = [];
let xValue = 1;
const randomCanvas = document.getElementById("random");

//random graph test
function randomGraph() {
    xValue++;
    randomArray.unshift(Math.pow(xValue, 2));
    GraphArray(randomArray, randomCanvas, "random array graph");
}

//setInterval(randomGraph, 50);


// might create graphs for everything just because

export function GraphArray(array, canvas, title) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (array.length === 0) {
        return;
    }

    const maxVal = Math.max(...array);
    const range = maxVal || 1;
    const padding = Math.min(5, canvas.height / 2);
    const plotLeft = 48;
    const plotWidth = Math.max(0, canvas.width - plotLeft - padding);
    const plotHeight = canvas.height - padding * 2;
    const tickCount = 5;

    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#333";
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 1;

    for (let tick = 0; tick < tickCount; tick++) {
        const fraction = tick / (tickCount - 1);
        const y = padding + fraction * plotHeight;
        const value = maxVal * (1 - fraction);
        const label = Number.isInteger(value) ? String(value) : value.toFixed(1);

        ctx.beginPath();
        ctx.moveTo(plotLeft, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
        ctx.fillText(label, plotLeft - 5, y);
    }

    ctx.beginPath();
    array.forEach((value, index) => {
        // Calculate X position (evenly spaced)
        const x = array.length > 1
            ? plotLeft + (plotWidth / (array.length - 1)) * index
            : plotLeft + plotWidth / 2;
        
        // Calculate Y position (inverted because canvas Y starts at top)
        // Normalize value to 0-1 range, then scale to canvas height
        const normalizedY = Math.max(0, Math.min(1, value / range));
        const y = padding + ((1 - normalizedY) * plotHeight);
    
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
    
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.translate(10, canvas.height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "center";
      ctx.fillStyle = "#333";
      ctx.fillText(title, 0, 0);
      ctx.restore();
}