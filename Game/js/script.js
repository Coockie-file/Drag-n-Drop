var line = document.querySelector('.container-line');
var restart = document.getElementById('restart');

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
    M1 =   -(F1 * l1); // negative rotation
    M2 =   F2 * l2;  // positive rotation

    M0 = M1 + M2; // rotation angle
    elem.style = 'transform: rotate('+ M0 +'deg);transition: all 2s;';
  }

  function restart(){
    elem.style = 'transform: rotate(0deg);transition: all 2s';
    block.closest('.line').removeChild(block);
    document.body.appendChild(block);
    block.style.top = '100px';
    block.style.left = '50px';
    randomWeight.value = '';
    randomLength.value = '';
  }

  this.rotate = rotate;
  this.restart = restart;

}

var leverArm = new Rotation(line);
restart.addEventListener('click',function(){
  leverArm.restart();
})

// Drag'n'Drop part
var randomWeight = document.getElementById('random-weight'),
    randomLength = document.getElementById('random-length');

function getCoords(elem){
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  }
};

var block = document.querySelector('.block');
var index;
var start = false;


// Getting all ruler points
    // Left side
var firstLeft     = document.querySelector('.line-ten'),
    secondLeft    = document.querySelector('.line-twenty'),
    thirdLeft     = document.querySelector('.line-thirty'),
    fourthLeft    = document.querySelector('.line-fourty'),
    fifthLeft     = document.querySelector('.line-fifty'),
    sixthLeft     = document.querySelector('.line-sixty'),
    seventhLeft   = document.querySelector('.line-seventy');
    // Right side
var firstRight    = document.querySelector('.right-line-ten'),
    secondRight   = document.querySelector('.right-line-twenty'),
    thirdRight    = document.querySelector('.right-line-thirty'),
    fourthRight   = document.querySelector('.right-line-fourty'),
    fifthRight    = document.querySelector('.right-line-fifty'),
    sixthRight    = document.querySelector('.right-line-sixty'),
    seventhRight  = document.querySelector('.right-line-seventy');

block.onmousedown = function(e){
  var event = e || event;
  var coords = getCoords(block);
  var shiftX = event.pageX - coords.left,
      shiftY = event.pageY - coords.top;

  var moveY , moveX;

  // Function for defining: is block element is on the ruler point?
  function getMinMax(point){
    var minY = point.getBoundingClientRect().top,
        maxY = point.getBoundingClientRect().bottom;

    var minX = point.getBoundingClientRect().left,
        maxX = point.getBoundingClientRect().right;

    return {
      minY : minY,
      maxY : maxY,
      minX : minX,
      maxX : maxX
    }
  };

  
  move(event);
// Определяю, находится ли грузик в координатах данного деления
function inRange(point){
  var pointCoords = getMinMax(point);
  if((pointCoords.minX + 20 > moveX && pointCoords.maxX - 20 < moveX) && (pointCoords.minY  < moveY + 70 && pointCoords.maxY + 70 > moveY + 70)){
    return true;
  } else {
    return false;
  }
}
  function move(event){
    line.style = 'transform: rotate(0deg);transition: all 2s';
    document.body.appendChild(block);
    moveX = event.pageX - shiftX;
    moveY = event.pageY - shiftY;
    block.style.left = moveX + 'px';
    block.style.top  = moveY + 'px';
    

    // Первое левое деление
    if(inRange(firstLeft)){
      firstLeft.style.backgroundColor = 'red';
    } else {
      firstLeft.style.backgroundColor = '#000';
    }

    // Второе левое деление
    if(inRange(secondLeft)){
      secondLeft.style.backgroundColor = 'red';
    } else {
      secondLeft.style.backgroundColor = '#000';
    }

    // Третье левое деление
    if(inRange(thirdLeft)){
      thirdLeft.style.backgroundColor = 'red';
    } else {
      thirdLeft.style.backgroundColor = '#000';
    }

    // Четвертое левое деление
    if(inRange(fourthLeft)){
      fourthLeft.style.backgroundColor = 'red';
    } else {
      fourthLeft.style.backgroundColor = '#000';
    }

    // Пятое левое деление
    if(inRange(fifthLeft)){
      fifthLeft.style.backgroundColor = 'red';
    } else {
      fifthLeft.style.backgroundColor = '#000';
    }

    // Шестое левое деление
    if(inRange(sixthLeft)){
      sixthLeft.style.backgroundColor = 'red';
    } else {
      sixthLeft.style.backgroundColor = '#000';
    }

    // Седьмое левое деление
    if(inRange(seventhLeft)){
      seventhLeft.style.backgroundColor = 'red';
    } else {
      seventhLeft.style.backgroundColor = '#000';
    }

    // Первое правое деление
    if(inRange(firstRight)){
      firstRight.style.backgroundColor = 'red';
    } else {
      firstRight.style.backgroundColor = '#000';
    }

    // Второе правое деление
    if(inRange(secondRight)){
      secondRight.style.backgroundColor = 'red';
    } else {
      secondRight.style.backgroundColor = '#000';
    }

    // Третье правое деление
    if(inRange(thirdRight)){
      thirdRight.style.backgroundColor = 'red';
    } else {
      thirdRight.style.backgroundColor = '#000';
    }

    // Четвертое правое деление
    if(inRange(fourthRight)){
      fourthRight.style.backgroundColor = 'red';
    } else {
      fourthRight.style.backgroundColor = '#000';
    }

    // Пятое правое деление
    if(inRange(fifthRight)){
      fifthRight.style.backgroundColor = 'red';
    } else {
      fifthRight.style.backgroundColor = '#000';
    }

    // Шестое правое деление
    if(inRange(sixthRight)){
      sixthRight.style.backgroundColor = 'red';
    } else {
      sixthRight.style.backgroundColor = '#000';
    }

    // Седьмое правое деление
    if(inRange(seventhRight)){
      seventhRight.style.backgroundColor = 'red';
    } else {
      seventhRight.style.backgroundColor = '#000';
    }


  }

  document.onmousemove = function(event){
    line.style
    document.body.removeChild(block);
    move(event);
  }

  document.onmouseup = function(){
    // Первое левое деление
    if(inRange(firstLeft)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      firstLeft.appendChild(block);
      m1 = block.getAttribute('data-weight');
      l1 = firstLeft.getAttribute('data-length');
      m2 = 0;
      l2 = 0;

      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Второе левое деление
    if(inRange(secondLeft)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      secondLeft.appendChild(block);
      m1 = block.getAttribute('data-weight');
      l1 = secondLeft.getAttribute('data-length');
      m2 = 0;
      l2 = 0;
      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Третье левое деление
    if(inRange(thirdLeft)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      thirdLeft.appendChild(block);
      m1 = block.getAttribute('data-weight');
      l1 = thirdLeft.getAttribute('data-length');
      m2 = 0;
      l2 = 0;
      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Четвертое левое деление
    if(inRange(fourthLeft)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      fourthLeft.appendChild(block);
      m1 = block.getAttribute('data-weight');
      l1 = fourthLeft.getAttribute('data-length');
      m2 = 0;
      l2 = 0;
      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Пятое левое деление
    if(inRange(fifthLeft)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      fifthLeft.appendChild(block);
      m1 = block.getAttribute('data-weight');
      l1 = fifthLeft.getAttribute('data-length');
      m2 = 0;
      l2 = 0;
      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Шестое левое деление
    if(inRange(sixthLeft)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      sixthLeft.appendChild(block);
      m1 = block.getAttribute('data-weight');
      l1 = sixthLeft.getAttribute('data-length');
      m2 = 0;
      l2 = 0;
      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Седьмое левое деление
    if(inRange(seventhLeft)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      seventhLeft.appendChild(block);
      m1 = block.getAttribute('data-weight');
      l1 = seventhLeft.getAttribute('data-length');
      m2 = 0;
      l2 =  0;
      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Первое правое деление
    if(inRange(firstRight)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      firstRight.appendChild(block);
      m1 = 0;
      l1 = 0;
      m2 = block.getAttribute('data-weight');
      l2 = firstRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Второе правое деление
    if(inRange(secondRight)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      secondRight.appendChild(block);
      m1 = 0;
      l1 = 0;
      m2 = block.getAttribute('data-weight');
      l2 = secondRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Третье правое деление
    if(inRange(thirdRight)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      thirdRight.appendChild(block);
      m1 = 0;
      l1 = 0;
      m2 = block.getAttribute('data-weight');
      l2 = thirdRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Четвертое правое деление
    if(inRange(fourthRight)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      fourthRight.appendChild(block);
      m1 = 0;
      l1 = 0;
      m2 = block.getAttribute('data-weight');
      l2 = fourthRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Пятое правое деление
    if(inRange(fifthRight)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      fifthRight.appendChild(block);
      m1 = 0;
      l1 = 0;
      m2 = block.getAttribute('data-weight');
      l2 = fifthRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Шестое правое деление
    if(inRange(sixthRight)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      sixthRight.appendChild(block);
      m1 = 0;
      l1 = 0;
      m2 = block.getAttribute('data-weight');
      l2 = sixthRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Седьмое правое деление
    if(inRange(seventhRight)){
      block.style.left = '-18px';
      block.style.top  = '-30px';
      seventhRight.appendChild(block);
      m1 = 0;
      l1 = 0;
      m2 = block.getAttribute('data-weight');
      l2 = seventhRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }
    document.onmousemove = null;
    document.onmouseup = null;
  }

  block.ondragstart = function(){
    return false;
  }
}








