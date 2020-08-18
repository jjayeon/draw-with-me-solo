const app = document.getElementById("app");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

app.appendChild(canvas);

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var mousedown = false;
var rightmousedown = false;

document.oncontextmenu = function (e) {
  e.preventDefault();
  return false;
};

document.addEventListener("mousedown", function (e) {
  e.preventDefault();

  switch (e.buttons) {
    case 1:
      mousedown = true;
      ctx.strokeStyle = "#000000";
      break;
    case 2:
      rightmousedown = true;
      ctx.fillStyle = "#FFFFFF";
      break;
  }

  ctx.beginPath();

  return false;
});

document.addEventListener("mousemove", function (e) {
  e.preventDefault();

  const x = e.x,
    y = e.y;

  if (mousedown) {
    ctx.lineTo(x, y);
    ctx.stroke();
  } else if (rightmousedown) {
    ctx.fillRect(x - 10, y - 10, 20, 20);
  } else {
    ctx.moveTo(x, y);
  }

  return false;
});

document.addEventListener("mouseup", function (e) {
  e.preventDefault();

  mousedown = false;
  rightmousedown = false;

  return false;
});

document.addEventListener("onContextMenu", function (e) {
  console.log("here");
  e.preventDefault();
  return false;
});
