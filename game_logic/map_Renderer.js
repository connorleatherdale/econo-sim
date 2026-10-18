//file to render the map

const dpr = window.devicePixelRatio; //device pixel ratio
const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");

//handing the size of the canvas based on the device
canvas.width = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;

ctx.scale(dpr,dpr);

canvas.style.width = `${canvas.clientWidth}px`;
canvas.style.height = `${canvas.clientHeight}px`;

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();