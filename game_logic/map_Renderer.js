//file to render the map

const dpr = window.devicePixelRatio; //device pixel ratio
const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");
let cameraOffset = { x: 0, y: 0};
let cameraZoom = 1;

//handing the size of the canvas based on the device
canvas.width = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;

ctx.scale(dpr,dpr);

canvas.style.width = `${canvas.clientWidth}px`;
canvas.style.height = `${canvas.clientHeight}px`;

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


function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(cameraZoom, cameraZoom);
    ctx.translate(-canvas.width / 2 + cameraOffset.x, -canvas.height / 2 + cameraOffset.y);
    

    //draw whatever we wanna see
    ctx.fillRect(canvas.width,canvas.height,50,50);

    ctx.restore();
}