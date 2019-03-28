var line = document.querySelector('.container-line');

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

  function rotate(){

    // Counting loads
    F1 = Math.round(m1 * g);
    F2 = Math.round(m2 * g);
    l1 = l1/100;
    l2 = l2/100;

    // Counting moments of force
    M1 =   F1 * l1; // negative rotation
    M2 =   -(F2 * l2);  // positive rotation

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

var leverArm = new Rotation(line);









