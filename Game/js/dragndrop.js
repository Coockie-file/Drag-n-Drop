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

  // Определяю, находится ли грузик в координатах данного деления
  function inRange(point){
    var pointCoords = getMinMax(point);
    if((pointCoords.minX < moveX && pointCoords.maxX > moveX) && (pointCoords.minY < moveY + 40 && pointCoords.maxY > moveY + 40)){
      return true;
    } else {
      return false;
    }
  }

  function move(event){
    moveX = event.pageX - shiftX;
    moveY = event.pageY - shiftY
    block.style.left = moveX + 'px';
    block.style.top  = moveY + 'px';
    
    // Первое левое деление
    if(inRange(firstLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      firstLeft.appendChild(block);
      block.onmousemove = null;
      m1 = block.getAttribute('data-weight');
      l1 = firstLeft.getAttribute('data-length');
      m2 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l2 = Math.floor(10 + Math.random() * (70 + 1 - 10));

      randomWeight.value = 'm2 : ' + m2;
      randomLenght.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Второе левое деление
    if(inRange(secondLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      secondLeft.appendChild(block);
      block.onmousemove = null;
      m1 = block.getAttribute('data-weight');
      l1 = secondLeft.getAttribute('data-length');
      m2 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l2 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      randomWeight.value = 'm2 : ' + m2;
      randomLenght.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Третье левое деление
    if(inRange(thirdLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      thirdLeft.appendChild(block);
      block.onmousemove = null;
      m1 = block.getAttribute('data-weight');
      l1 = thirdLeft.getAttribute('data-length');
      m2 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l2 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      randomWeight.value = 'm2 : ' + m2;
      randomLenght.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Четвертое левое деление
    if(inRange(fourthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fourthLeft.appendChild(block);
      block.onmousemove = null;
      m1 = block.getAttribute('data-weight');
      l1 = fourthLeft.getAttribute('data-length');
      m2 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l2 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      randomWeight.value = 'm2 : ' + m2;
      randomLenght.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Пятое левое деление
    if(inRange(fifthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fifthLeft.appendChild(block);
      block.onmousemove = null;
      m1 = block.getAttribute('data-weight');
      l1 = fifthLeft.getAttribute('data-length');
      m2 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l2 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      randomWeight.value = 'm2 : ' + m2;
      randomLenght.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Шестое левое деление
    if(inRange(sixthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      sixthLeft.appendChild(block);
      block.onmousemove = null;
      m1 = block.getAttribute('data-weight');
      l1 = sixthLeft.getAttribute('data-length');
      m2 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l2 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Седьмое левое деление
    if(inRange(seventhLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      seventhLeft.appendChild(block);
      block.onmousemove = null;
      m1 = block.getAttribute('data-weight');
      l1 = seventhLeft.getAttribute('data-length');
      m2 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l2 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      randomWeight.value = 'm2 : ' + m2;
      randomLength.value = 'l2 : ' + l2;
      leverArm.rotate();
    }

    // Первое правое деление
    if(inRange(firstRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      firstRight.appendChild(block);
      block.onmousemove = null;
      m1 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l1 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      m2 = block.getAttribute('data-weight');
      l2 = firstRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Второе правое деление
    if(inRange(secondRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      secondRight.appendChild(block);
      block.onmousemove = null;
      m1 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l1 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      m2 = block.getAttribute('data-weight');
      l2 = secondRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Третье правое деление
    if(inRange(thirdRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      thirdRight.appendChild(block);
      block.onmousemove = null;
      m1 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l1 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      m2 = block.getAttribute('data-weight');
      l2 = thirdRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Четвертое правое деление
    if(inRange(fourthRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fourthRight.appendChild(block);
      block.onmousemove = null;
      m1 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l1 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      m2 = block.getAttribute('data-weight');
      l2 = fourthRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Пятое правое деление
    if(inRange(fifthRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fifthRight.appendChild(block);
      block.onmousemove = null;
      m1 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l1 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      m2 = block.getAttribute('data-weight');
      l2 = fifthRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Шестое правое деление
    if(inRange(sixthRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      sixthRight.appendChild(block);
      block.onmousemove = null;
      m1 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l1 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      m2 = block.getAttribute('data-weight');
      l2 = sixthRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }

    // Седьмое правое деление
    if(inRange(seventhRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      seventhRight.appendChild(block);
      block.onmousemove = null;
      block.onmouseup   = null;
      m1 = Math.floor(1 + Math.random() * (50 + 1 - 1));
      l1 = Math.floor(10 + Math.random() * (70 + 1 - 10));
      m2 = block.getAttribute('data-weight');
      l2 = seventhRight.getAttribute('data-length');
      randomWeight.value = 'm1 : ' + m1;
      randomLength.value = 'l1 : ' + l1;
      leverArm.rotate();
    }
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

