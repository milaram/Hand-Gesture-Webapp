var prediction_1 ="";


Webcam.set({

    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
});

Camera = document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot()
{
Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
});

}

console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2n7LNh3JP/', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="first prediction is" + prediction_1;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function Check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
     } else 
{
console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;


prediction_1 = results[0].label;

speak();
if(result[0].label=="Good Luck")
{
    document.getElementById("update_emoji").innerHTML="&#128076;";
}

if(result[0].label=="Nice")
{
    document.getElementById("update_emoji").innerHTML="&#128077;";
}

if(result[0].label=="Peace")
{
    document.getElementById("update_emoji").innerHTML="&#9996;";
}



}

}

