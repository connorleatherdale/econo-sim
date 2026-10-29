//file to render the map

const canvas = document.getElementById("map");
const out = document.getElementById("render"); // part of the map render calculation
const ctx = canvas.getContext("2d");
let cameraOffset = { x: 0, y: 0};
let cameraZoom = 5;

//rendering stuff
import * as cities from "../game_logic/mapData/cities.js"; // imports the cities
//import the countries
import countries from "./mapData/countries-coastline-5km.geo.json" with { type: "json" };


// zooming on a wheel
canvas.addEventListener("wheel", (e) => {
    e.preventDefault()
    const zoomIntensity = 0.1;
    const direction = e.deltaY > 0 ? -1 : 1;
    cameraZoom += direction * zoomIntensity * cameraZoom
    cameraZoom = Math.max(5, Math.min(20, cameraZoom));
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

const countryFeatures = countries.features || (countries.type === "Feature" ? [countries] : []);
const countryBounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };

function mercatorY(latitude) {
    const radians = Math.max(-85.0511, Math.min(85.0511, latitude)) * Math.PI / 180;
    return Math.log(Math.tan(Math.PI / 4 + radians / 2));
}

function findCountryBounds(value) {
    if (!Array.isArray(value)) return;
    if (typeof value[0] === "number" && typeof value[1] === "number") {
        const x = value[0] * Math.PI / 180;
        const y = mercatorY(value[1]);
        countryBounds.minX = Math.min(countryBounds.minX, x);
        countryBounds.maxX = Math.max(countryBounds.maxX, x);
        countryBounds.minY = Math.min(countryBounds.minY, y);
        countryBounds.maxY = Math.max(countryBounds.maxY, y);
        return;
    }
    value.forEach(findCountryBounds);
}

for (const feature of countryFeatures) {
    const geometry = feature.geometry;
    if (geometry?.type === "GeometryCollection") {
        geometry.geometries.forEach(item => findCountryBounds(item.coordinates));
    } else {
        findCountryBounds(geometry?.coordinates);
    }
}

function projectCountryPoint(coordinate, width, height) {
    const mapWidth = countryBounds.maxX - countryBounds.minX;
    const mapHeight = countryBounds.maxY - countryBounds.minY;
    const scale = Math.min((width - 20) / mapWidth, (height - 20) / mapHeight);
    return {
        x: (width - mapWidth * scale) / 2 + (coordinate[0] * Math.PI / 180 - countryBounds.minX) * scale,
        y: (height - mapHeight * scale) / 2 + (countryBounds.maxY - mercatorY(coordinate[1])) * scale
    };
}

function drawCountryGeometry(geometry, width, height) {
    if (!geometry) return;
    if (geometry.type === "GeometryCollection") {
        geometry.geometries.forEach(item => drawCountryGeometry(item, width, height));
        return;
    }

    const polygons = geometry.type === "Polygon"
        ? [geometry.coordinates]
        : geometry.type === "MultiPolygon" ? geometry.coordinates : [];

    for (const polygon of polygons) {
        ctx.beginPath();
        for (const ring of polygon) {
            ring.forEach((coordinate, index) => {
                const point = projectCountryPoint(coordinate, width, height);
                if (index === 0) ctx.moveTo(point.x, point.y);
                else ctx.lineTo(point.x, point.y);
            });
            ctx.closePath();
        }
        ctx.fillStyle = "#d8dfc8";
        ctx.strokeStyle = "#58644d";
        ctx.lineWidth = 0.7;
        ctx.fill("evenodd");
        ctx.stroke();
    }
}

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
    if (Number.isFinite(countryBounds.minX) && countryBounds.maxX > countryBounds.minX && countryBounds.maxY > countryBounds.minY) {
        for (const feature of countryFeatures) {
            drawCountryGeometry(feature.geometry, width, height);
        }
    }

    for(let a = 0; a < cities.cities.length; a++) {
        let city = cities.cities[a];
        ctx.beginPath();
        ctx.arc(city.posX,city.posY, 20, 0, 2 * Math.PI);
        ctx.stroke()
    }

    ctx.restore();

    out.innerHTML = "Render (MS): " + (Date.now() - time) + "MS";
}


//helper render functions

function projectLatMercToCanvas(lat, canvasHeight, CanvasWidth) {

}