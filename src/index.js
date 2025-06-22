function showPoem(response){
   new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function buttonAction(event){

    event.preventDefault();
   let instructionsInput=document.querySelector("#poem-generator-form")
   let apiKey ='37o01tf961eb43e8aa46dbf5fa9e5225';
   let context=
   'You are a widsom filled expert and love to give people motivation when they are confused and feeling depressed. Your mission is to generate a short 4 line poem based on User instructions below , make it short and simple.The poem must have </br> in between.Make sure to follow the user instructions. Do not include a title to the poem.';
   let prompt=`User instructions: Generate a motivation poem about ${instructionsInput.value} ';
   let apiUrl='https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}';

  axios.get(apiURL).then(showPoem);
}
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", buttonAction);
