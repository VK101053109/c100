SpeechRecognition = window.webkitSpeechRecognition;
rec = new SpeechRecognition();

function start_rec() {
    rec.start();
}

rec.onresult = function (rec_details) {
    console.log(rec_details);
    content = rec_details.results[0][0].transcript;
    if (content == "take my selfie") {
        speak();
    }
    document.getElementById("textbox").innerHTML = content;
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {


    synth = window.speechSynthesis;
    Webcam.attach("#camera");
    speak_data = "Taking your next Selfie in 5 seconds";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function () {
        image_id = "image1"
        takepic();
        speak_data = "Taking your next Selfie in 10 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 5000);

    setTimeout(function () {
        image_id = "image2"
        takepic();
        speak_data = "Taking your next Selfie in 15 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);


    }, 10000);
    setTimeout(function () {
        image_id = "image3"
        takepic();

    }, 15000);




}

function takepic() {
    Webcam.snap(function (pic) {
        if (image_id == "image1") {
            document.getElementById("img1").innerHTML = '<img src="' + pic + '">';
        } 
        if (image_id == "image2") {
            document.getElementById("img2").innerHTML = '<img src="' + pic + '">';
        } 
        if (image_id == "image3") {
            document.getElementById("img3").innerHTML = '<img src="' + pic + '">';
        }
    });
}