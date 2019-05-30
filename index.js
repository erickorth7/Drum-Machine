//jshint esversion:6

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonSound = this.textContent;

      makeSound(buttonSound);

      buttonAnimation(buttonSound);

  });
}

document.addEventListener("keydown", function(event){

makeSound(event.key);

buttonAnimation(event.key);
});


function makeSound(key) {

  switch (key) {

    case "a":
    var blockAudio = new Audio("sounds/woodBlock.mp3");
    blockAudio.play();
    break;

    case "s":
    var crashAudio = new Audio("sounds/crash.mp3");
    crashAudio.play();
    break;

    case "d":
    var bassAudio1 = new Audio("sounds/bassDrum1.mp3");
    bassAudio1.play();
    break;

    case "f":
    var bassAudio2 = new Audio("sounds/bassDrum2.mp3");
    bassAudio2.play();
    break;

    case "j":
    var hiHatAudio = new Audio("sounds/hiHat.mp3");
    hiHatAudio.play();
    break;

    case "k":
    var snareAudio = new Audio("sounds/snare.mp3");
    snareAudio.play();
    break;

    case "l":
    var clapAudio = new Audio("sounds/clap.mp3");
    clapAudio.play();
    break;

    default: console.log(key)
  }
}

function buttonAnimation(currentKey) {

  var animatedButton = document.querySelector("." + currentKey);

  animatedButton.classList.add("pressed");

  setTimeout(function(){

  animatedButton.classList.remove("pressed");
}, 80);

}
