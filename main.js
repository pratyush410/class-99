var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    recognition.start();
document.getElementById("textbox").innerHTML=""
}

recognition.onresult=function(event){
    console.log(event)
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content
    speak()
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
    Webcam.attach(camera)
}

Webcam.set({
    width:330,
    height:250,
    image_format:"png",
    png_quality:100
})

camera=documnt.getElementById("camera");