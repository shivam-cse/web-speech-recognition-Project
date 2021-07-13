
let speak = document.getElementById('speak');
speak.addEventListener('click', textToSpeech);

function textToSpeech(){
    const textRead = document.getElementById('textWrite').value;
    console.log("Text to speech: " + textRead);
    let speech = new SpeechSynthesisUtterance();

    //Setting various property
    speech.lang = "en-US";
    speech.text = textRead;
    speech.volume = 5;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

};

document.querySelector("#pause").addEventListener("click", () => {
    // Pause the speechSynthesis instance
    window.speechSynthesis.pause();
  });
  
  document.querySelector("#resume").addEventListener("click", () => {
    // Resume the paused speechSynthesis instance
    window.speechSynthesis.resume();
  });
  
  document.querySelector("#cancel").addEventListener("click", () => {
    // Cancel the speechSynthesis instance
    window.speechSynthesis.cancel();
  });