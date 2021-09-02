var SpeechRecognition=window.webkitSpeechRecognition;
var recogition = new SpeechRecognition()

function start(){
    document.getElementById("lol").innerHTML="";
    recogition.start();
}
recogition.onresult=function run (event){
    console.log(event);
    var Content=event.results[0][0].transcript;
   document.getElementById("lol").innerHTML=Content; 
   var synth=window.speechSynthesis;
    speak_data1=document.getElementById("lol").value;
    var utter=new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utter);
    Webcam.attach(camera);
   content=document.getElementById("lol").value;
   if(content=="take my selfie")
   speak();

}

        
   
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")
function  speak(){
    var synth=window.speechSynthesis;
    speak_data="taking you selfie in 5 seconds"
    var utter_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snap();
        save();
    },5000);
    

}
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'"/>';
    })
}

function save(){
    link=document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}