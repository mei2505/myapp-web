//https://developer.mozilla.org/ja/docs/Web/API/Canvas_API

const canvas: any = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 10, 50, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (30, 30, 50, 50);