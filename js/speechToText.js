let speakBtn = document.getElementById('speakBtn');
        let textWrite = document.getElementById('textWrite');
        speakBtn.addEventListener('click', speechTotext);

        function speechTotext() {
            console.log("Now ready to speak!");
            let recognition = new webkitSpeechRecognition() || new SpeechRecognition;
            recognition.lang = "en-GB";//To wrte text in english
            // recognition.lang = "hin-GB"; //To wrte text in Hindi

            recognition.onresult = function (event) {
                let textWrite = document.getElementById('textWrite');
                textWrite.value = event.results[0][0].transcript;
            }
                // Start the Speech Recognition
                recognition.start();
            

            document.querySelector("#stop").onclick = () => {
                console.log("Stop recording");
                // Start the Speech Recognition
                recognition.stop();
            };


        };





