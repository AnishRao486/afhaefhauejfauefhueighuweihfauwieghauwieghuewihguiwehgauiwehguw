Webcam.set({
width:310,
height:300,
img_format:"png",
png_quality:90,

constraints:{
    facedMode:"environment"}
});

camera = document.getElementById("camera")

Webcam.attach('#camera')

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version );

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
    console.log("MODEL HAS SUCCESSFULLY BEEN LOADED BY BEN THE ROBOT AND HAS BEEN SAFETLY KEPT IN THE CLOUD!")
}

function check(){
     capImg = document.getElementById("captured_img");
     classifier.classify(capImg, getResult);
}

function getResult(error, results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
}
}