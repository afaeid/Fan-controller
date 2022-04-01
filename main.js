var buttonCover = document.querySelector('.switch-cover');
var button = document.querySelector('.switch-button');
var fan = document.querySelector('.fan');
buttonCover.onclick = function(){
  button.classList.toggle('button-on');
  fan.classList.toggle('fan-on');
}
