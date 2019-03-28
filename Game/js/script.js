var line = document.querySelector('.container-line');
var timer = document.getElementById('input');

var startBtn = document.getElementById('start-button');
var cancelBtn = document.getElementById('cancel-button');

var lengthOne = document.getElementById('length-one');
var lengthTwo = document.getElementById('length-two');

var weightOne = document.getElementById('weight-one');
var weightTwo = document.getElementById('weight-two');

var lineCenter = document.querySelector('.container-line__center');
function center(){
  var lineWidth = line.offsetWidth;
  var centerWidth = lineCenter.offsetWidth;
  lineCenter.style.left = (lineWidth/2 - centerWidth/2) + 'px';
}
center();


// Free fall speed
var g = 9.8;
// Weights
var m1;
var m2;

// Lengths
var l1;
var l2;

// Loads
var F1;
var F2;

// Moments of force
var M1;
var M2;
var M0;



function  Rotation(elem){
  var elem = elem;

  lengthOne.oninput = function(){
    l1 = this.value;
  }
  
  lengthTwo.oninput = function(){
    l2 = this.value;
  }
  
  weightOne.oninput = function(){
    m1 = this.value;
  }
  
  weightTwo.oninput = function(){
    m2 = this.value;
  }

  function rotate(){

    // Counting loads
    F1 = Math.round(m1 * g);
    F2 = Math.round(m2 * g);
    l1 = l1/100;
    l2 = l2/100;

    // Counting moments of force
    M1 = -(F1 * l1); // negative rotation
    M2 =   F2 * l2;  // positive rotation

    M0 = M1 + M2; // rotation angle
    elem.style = 'transform: rotate('+ M0 +'deg);transition: all 2s;';
  }

  function cancel(){
    elem.style = 'transform: rotate(0deg);transition: all 2s';
    startBtn.removeEventListener('click',rotate);
  }

  this.rotate = rotate;
  this.cancel = cancel;

}

startBtn.addEventListener('click', function(){
  leverArm.rotate();
})

cancelBtn.addEventListener('click', function(){
  leverArm.cancel();
})

var leverArm = new Rotation(line);

// Drag'n'Drop part

function getCoords(elem){
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  }
};

var block = document.querySelector('.block');

// Getting all ruler points

var firstLeft   = document.querySelector('.line-ten'),
    secondLeft  = document.querySelector('.line-twenty'),
    thirdLeft   = document.querySelector('.line-thirty'),
    fourthLeft  = document.querySelector('.line-fourty'),
    fifthLeft   = document.querySelector('.line-fifty'),
    sixthLeft   = document.querySelector('.line-sixty'),
    seventhLeft = document.querySelector('.line-seventy');

// Getting all ruler points's coords

var firstLeftCoords   = getCoords(firstLeft),
    secondLetCoords   = getCoords(secondLeft),
    thirdLeftCoords   = getCoords(thirdLeft),
    fourthLeftCoords  = getCoords(fourthLeft),
    fifthLetCoords    = getCoords(fifthLeft),
    sixthLetCoords    = getCoords(sixthLeft),
    seventhLetCoords  = getCoords(seventhLeft);

block.onmousedown = function(e){
  var event = e || event;
  var coords = getCoords(block);
  document.body.appendChild(block);
  var shiftX = event.pageX - coords.left,
      shiftY = event.pageY - coords.top;

  var moveY , moveX;
  function move(event){
    moveX = event.pageX - shiftX;
    moveY = event.pageY - shiftY
    block.style.left = moveX + 'px';
    block.style.top  = moveY + 'px';
    
  }
  block.onmousemove = function(event){
    move(event);
  }

  block.onmouseup = function(){
    block.onmousemove = null;
    block.onmouseup = null;
  }

  block.ondragstart = function(){
    return false;
  }
}









