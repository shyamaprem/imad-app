console.log('Loaded!');
var element = document.getElementById('main-text');
console.log(element);
element.innerHTML = 'New value';
var img = document.getElementById('main-img');
img.onclick = function(){
  img.style.marginLeft = "100px"  ;
};