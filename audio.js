
let audio = new Audio();
audio.src = "./click.mp3";

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
      audio.play();
    
  });
});