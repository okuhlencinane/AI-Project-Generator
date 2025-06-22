function buttonAction(event){
    event.preventDefault();
   
      new Typewriter("#poem", {
    strings: "It is never too late to be what you might have been.Change your thoughts and you change your world.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let instructionsButton =document.querySelector('.submit-button');
instructionsButton.addEventListener('click',buttonAction);