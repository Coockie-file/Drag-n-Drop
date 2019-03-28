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

block.onmousedown = function(e){
  var event = e || event;
  var coords = getCoords(block);
  document.body.appendChild(block);
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
    
    // First
    if(inRange(firstLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      firstLeft.appendChild(block);
      block.onmousemove = null;
    }

    // second
    if(inRange(secondLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      secondLeft.appendChild(block);
      block.onmousemove = null;
    }

    // third
    if(inRange(thirdLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      thirdLeft.appendChild(block);
      block.onmousemove = null;
    }

    // fourth
    if(inRange(fourthLeft)){
      block.style.left = '0px';
      block.style.top  = '-30px';
      fourthLeft.appendChild(block);
      block.onmousemove = null;
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