function show(response){
   new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function buttonAction(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#poem-generator-form input");
    //let apiKey = '37o01tf961eb43e8aa46dbf5fa9e5225';
    let context = "You are a wisdom-filled expert and love to give people information about great poems. Your mission is to generate a short 6-line poem based on User instructions below, make it short and simple. The poem must have </br> in between. Make sure to follow the user instructions.";

    let prompt = 'User instructions: Generate an Africa beauty poem about ${instructionsInput.value}'; 
    let apiURL = 'https://api.shecodes.io/ai/v1/generate?prompt=Generate an Africa beauty poem about ${instructionsInput.value}&context=You are a wisdom-filled expert and love to give people information about poems. Your mission is to generate a short 6-line poem based on User instructions below, make it short and simple.Make sure to follow the user instructions.&key=37o01tf961eb43e8aa46dbf5fa9e5225';
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;
    axios.get(apiURL).then(show);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", buttonAction);
