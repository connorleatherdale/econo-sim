//file to render the map

const canvas = document.getElementById("map");
const out = document.getElementById("render"); // part of the map render calculation
const ctx = canvas.getContext("2d");
let cameraOffset = { x: 0, y: 0};
let cameraZoom = 1;

//rendering stuff
import * as cities from "../game_logic/mapData/cities.js"; // imports the cities
//import the countries
import countries from "./mapData/countries-coastline-25m.json" with { type: "json" };
const countriesLength = countries.features.length;
console.log(countries.features[1].geometry.coordinates);
let countri = countries.features;
console.log(countri)

// zooming on a wheel
canvas.addEventListener("wheel", (e) => {
    e.preventDefault()
    const zoomIntensity = 0.1;
    const direction = e.deltaY > 0 ? -1 : 1;
    cameraZoom += direction * zoomIntensity * cameraZoom
    cameraZoom = Math.max(0.1, Math.min(5, cameraZoom));
    render();
});

// if the mouse is dragging

let isDragging = false;
let dragStart = {x: 0, y:0};

canvas.addEventListener("mousedown", (e)=>{
    isDragging = true;
    dragStart.x = e.clientX / cameraZoom - cameraOffset.x;
    dragStart.y = e.clientY / cameraZoom - cameraOffset.y;
});


canvas.addEventListener("mousemove", (e) => {
    if (!isDragging) return; 
    cameraOffset.x = e.clientX / cameraZoom - dragStart.x;
    cameraOffset.y = e.clientY / cameraZoom - dragStart.y;
    render()
});

canvas.addEventListener('mouseup', () => isDragging = false);

// see if the window has changed sizes, to update the size of the canvas
function calculateCanvasSize() { // function does as what it says, simple as
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    render();
};

new ResizeObserver(calculateCanvasSize).observe(canvas);
window.addEventListener("resize", calculateCanvasSize);
calculateCanvasSize();


/*
async function loadJSON() {
    const response = await fetch("./mapData/countries-coastline-25m.json");
    const c = await response.json();

    return c;
}

const Countries = loadJSON()

*/



function render() {
    let time = Date.now();
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.scale(cameraZoom, cameraZoom);
    ctx.translate(-width / 2 + cameraOffset.x, -height / 2 + cameraOffset.y);
    

    //draw whatever we wanna see
    // gonna end up with a loop at some point, probably running through a .json file of city names along with filling out the country borders, unless i can manage a background for it (i do have a .json file of countries that i *might* be able to use)
    for(let i = 0; i < cities.cities.length; i++) {
        let city = cities.cities[i];
        console.log(city.name);
        console.log(i);
        ctx.beginPath();
        ctx.arc(city.posX,city.posY, 20, 0, 2 * Math.PI);
        ctx.stroke()
    }

    //drawing the countries of the world (hopefully)
    //side note, a reverse for loop might be the best case since this big ol JSON array WILL have to be called every frame (not ideal, might see about storing it in memory?)
    for(let k=0; k < countriesLength;k++) {
        let country = countries.features[k];
        //might have to loop for the different arrays? cause it looks like theres different arrays and such inside each one idek
    }

    ctx.restore();

    out.innerHTML = "Render (MS): " + (Date.now() - time) + "MS";
}


//helper render functions

function projectLatMercToCanvas(lat, canvasHeight, CanvasWidth) {

}