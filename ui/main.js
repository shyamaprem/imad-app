console.log('Loaded!');
var element = document.getElementById('main-text');
console.log(element);
element.innerHTML = 'New value';
var img = document.getElementById('main-img');
var int = 10;
function moveMadi(){
 var margin  = int + 5;  
 img.style.marginLeft = 10 + "px"  ;
}
img.onclick = function(){
    var interval = setInterval(moveMadi,100);
    
};
