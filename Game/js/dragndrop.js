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
    secondRight   = document.querySelector('.right-line-ten'),
    thirdRight    = document.querySelector('.right-line-ten'),
    fourthRight   = document.querySelector('.right-line-ten'),
    fifthRight    = document.querySelector('.right-line-ten'),
    sixthRight    = document.querySelector('.right-line-ten'),
    seventhRight  = document.querySelector('.right-line-ten');

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
    }

    // Второе левое деление
    if(inRange(secondLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      secondLeft.appendChild(block);
      block.onmousemove = null;
    }

    // Третье левое деление
    if(inRange(thirdLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      thirdLeft.appendChild(block);
      block.onmousemove = null;
    }

    // Четвертое левое деление
    if(inRange(fourthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fourthLeft.appendChild(block);
      block.onmousemove = null;
    }

    // Пятое левое деление
    if(inRange(fifthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fifthLeft.appendChild(block);
      block.onmousemove = null;
    }

    // Шестое левое деление
    if(inRange(sixthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      sixthLeft.appendChild(block);
      block.onmousemove = null;
    }

    // Седьмое левое деление
    if(inRange(seventhLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      seventhLeft.appendChild(block);
      block.onmousemove = null;
    }

    // Первое правое деление
    if(inRange(firstRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      firstRight.appendChild(block);
      block.onmousemove = null;
    }

    // Второе правое деление
    if(inRange(secondRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      secondRight.appendChild(block);
      block.onmousemove = null;
    }

    // Третье правое деление
    if(inRange(thirdRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      thirdRight.appendChild(block);
      block.onmousemove = null;
    }

    // Четвертое правое деление
    if(inRange(fourthRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fourthRight.appendChild(block);
      block.onmousemove = null;
    }

    // Пятое правое деление
    if(inRange(fifthRight)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fifthRight.appendChild(block);
      block.onmousemove = null;
    }

    // Шестое правое деление
    if(inRange(fourthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fourthLeft.appendChild(block);
      block.onmousemove = null;
    }

    // Седьмое правое деление
    if(inRange(fourthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fourthLeft.appendChild(block);
      block.onmousemove = null;
      block.onmouseup   = null;
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

function isOnLine(block){
  var lines = document.querySelectorAll('.line');
  for(var i = 0; i < lines.length; i++){
    if(block.closest('.line')){
      return i;
    }
  }
  return false;
}