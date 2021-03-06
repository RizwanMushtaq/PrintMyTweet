//classes------------------------------------------------------------------------------
class Circle {
    constructor(centerX, centerY, radius) {
      this.centerX = centerX;
      this.centerY = centerY;
      this.radius = radius;
    }
  
    draw(context, shapeColor) {
      context.beginPath();
      context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = shapeColor;
      context.fill();
    }
}
//Cirles
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function createRandomCircle(canvasWidth, canvasHeight) {
  const x = getRandomNumber(0, canvasWidth);
  const y = getRandomNumber(0, canvasHeight);
  const r = getRandomNumber(5, 40);

  return new Circle(x, y, r);
}
function saveCirclesinArray(canvasWidth, canvasHeight){
  // We manage all circles here
  let circles = [];
  for(let i=0;i<20;i++){
      // Add a circle
      circles.push(createRandomCircle(canvasWidth, canvasHeight));
  }
  return circles;
}
function drawCircles(circles, backgroundShapeColor) {
  let myCanvas = document.querySelector(".myCanvas");
  let context = myCanvas.getContext("2d");

  for(let i = 0; i < circles.length; i++){
      let circle = new Circle(circles[i].centerX, circles[i].centerY, circles[i].radius);
      circle.draw(context, backgroundShapeColor);
  }
}