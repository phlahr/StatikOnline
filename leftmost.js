
/*
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let $ce = document.createElement.bind(document);

let pointArr = [];
const randPoints = (amount, minNumber, maxNumber) => {
  let i = minNumber;
  do {
    const x = Math.floor(Math.random() * maxNumber);
    const y = Math.floor(Math.random() * maxNumber);
    const point = { x, y, 0: "false" };
    pointArr.push(point);
    i++;
  } while (i < amount);
};
//create points
randPoints(20, 0, 500);

const getLeftMost = (array) => {
  let xArr = [];
  for (let point of array) {
    xArr.push(point.x);
  }
  let leftMostX = Math.min.apply(Math, xArr);
  let leftMostCoordinate = array[xArr.indexOf(leftMostX)];
  // console.log(leftMostCoordinate)
  pointArr[xArr.indexOf(leftMostX)][0] = "leftmost";
};
getLeftMost(pointArr);
// console.log(pointArr);


const createPoint = (context , x, y, radius, startAngle, endAngle, strokeColor, fillColor, lineWidth) => {
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, true);
    context.strokeStyle = strokeColor;
    context.fillStyle = fillColor;
    context.lineWidth = lineWidth;
    context.stroke();
    context.fill();
}


const insertPoints = () => {
  let canvas = $("#canvas");
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    canvas.style.backgroundColor = "black";

    //loop trough points arr
    for (let point of pointArr) {
        //check for leftmost
        //insert leftmost point
      if (point[0] === "leftmost") {
        //insert points
        createPoint(context, point.x, point.y, 1, 0, 2 * Math.PI, "#00ff00", "#00ff00", 4)
      } else {
        //insert other points
        createPoint(context, point.x, point.y, 1, 0, 2 * Math.PI, "#ffffff", "#ffffff", 4)
      }
    }
  }
}

insertPoints();

*/



let points = [
  {x: 5, y:5, 0:false},
  {x: 15, y:15, 0:false},
  {x: 25, y:10, 0:false},
  {x: 15, y:5, 0:false},
];

const getLeftMost = (array) => {
  let xArr = [];
  for (let point of array) {
    xArr.push(point.x);
  }
  let leftMostX = Math.min.apply(Math, xArr);
  // let leftMostCoordinate = array[xArr.indexOf(leftMostX)];
  // console.log(leftMostCoordinate)
  points[xArr.indexOf(leftMostX)][0] = "leftmost";
};
getLeftMost(points);


let lastAngle = 0;
const getAngle = (p1, p2) => {
  if (!p1  || !p2) return 0;

  let angle;
  let deltax = p2.x - p1.x;
  let deltay = p2.y - p1.y;

  _toRad = (x) => {
    return x * 180/Math.PI;
  };

  angleTmp = _toRad(Math.atan(deltax/deltay));

  if (angle <= 0){
    angle = 180 + (angleTmp + lastAngle)
    lastAngle = angle
  } else {
    angle = angleTmp + lastAngle
    lastAngle = angle
  }

  //boundaries
  console.log(angle)
}

// getAngle({x: 15, y:15, 0:false},{x: 25, y:10, 0:false});

const checkAll = (points) => {
  console.log(points)
  for(let i = 0; i < points.length; i++) {
    if(i+1 > points.length-1){
      getAngle(points[i], points[0])
    } else {
      getAngle(points[i], points[i+1])
    }
  }
}

checkAll(points);

