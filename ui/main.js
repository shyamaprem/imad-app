console.log('Loaded!');
var element = document.getElementById('main-text');
console.log(element);
element.innerHTML = 'New value';
var img = document.getElementById('main-img');
img.onclick = function(){
  for(var i=1;i<10;i++)
    img.style.marginLeft = "10px"  ;
};