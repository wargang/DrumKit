var number_of_drums = document.querySelectorAll(".drum").length;

for (var i = 0; i < number_of_drums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", handle_click);
}

function handle_click() {
  var which = this.innerHTML;
  makeSound(which);
  makeAnimation(which);
}


document.addEventListener("keydown",function(event){
  makeSound(event.key);
  makeAnimation(event.key);
});


function makeSound(which){
  switch (which) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:console.log(which);
  }
}
function makeAnimation(key){
  var activeClass = document.querySelector("." + key);
  activeClass.classList.add("pressed");

  setTimeout(function(){
    activeClass.classList.remove("pressed");
  }, 10);
}
