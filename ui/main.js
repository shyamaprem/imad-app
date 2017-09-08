console.log('Loaded!');
var element = document.getElementById('main-text');
console.log(element);
element.innerHTML = 'New value';
var img = document.getElementById('main-img');
var int = 10;
function moveMadi(){
 int += 5;  
 img.style.marginLeft = int + "px"  ;
}
img.onclick = function(){
    var interval = setInterval(moveMadi,100);
    
};
var counter = 0;
var btn = document.getElementById('click_btn');
console.log("before func call");
console.log(btn);
btn.onclick = function() {
    
    counter = counter + 1;
    var span = document.getElementById('counter_span');
    span.innerHTML = counter;
    console.log(span);
}