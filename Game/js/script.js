var line = document.querySelector('.container-line');
var timer = document.getElementById('input');



function  Rotation(elem){
  var elem = elem;

  function rotate(){
  
    var length1 = l1; // First length
    var length2 = l2; // Second length
  
    var Force1 = F1; // First load
    var Force2 = F2; // Second load
  
    var Moment1 = -(Force1 * length1); // First moment of force
    var Moment2 = (Force2 * length2);  // Second moment of force
  
    var Moment0 = Moment1 + Moment2;
  
    line.style = 'transform: rotate('+ Moment0 +'deg);transition: all 2s;';
  
  }

}