//file to render the map

const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");
let cameraOffset = { x: 0, y: 0};
let cameraZoom = 1;

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


import * as cities from "../game_logic/mapData/cities.js";

function render() {
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
    ctx.fillRect(width,height,50,50);

    ctx.restore();
}