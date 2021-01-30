Webcam.set(
    {
height : 400,
  width:400,
  image_format:'png',
  png_quality:90
    }
);

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML = "<img id='snapshot' src='"+data_uri+"'>";   
});
}
console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DE-wCbmEE/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded Successfully :)");
}

function check(){
    img = document.getElementById("snapshot");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results)
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}