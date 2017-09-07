console.log('Loaded!');
var element = document.getElementById('main-text');
console.log(element);
element.innerHTML = 'New value';
var img = document.getElementById('main-img');
img.onClick = function(){
  img.style.marginLeft = "10px"  ;
};