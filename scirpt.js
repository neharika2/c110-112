Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
}) ;
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
    })
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NC7bLeNQ_/model.json',modelloaded);
function modelloaded(){
    console.log('model is loaded');
}
prediction_1="";
prediction_2=""

function check(){
    var img= document.getElementById('captured_image');
    classifier.classify(img,gotresult);

}
function gotresult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        document.getElementById("result_gesture_name_two").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="good"){
            document.getElementById("update_gesture").innerHTML="&#128522;"
        }
         if(results[0].label=="thumbs down"){
            document.getElementById("update_gesture").innerHTML="&#128532;"
         }
         if(results[0].label=="victory"){
            document.getElementById("update_gesture").innerHTML="&#128548;"
         }
         if(results[1].label=="thumbs up"){
            document.getElementById("update_gesture_two").innerHTML="&#128522;"
         }
         if(results[1].label=="good"){
            document.getElementById("update_gesture_two").innerHTML="&#128532;"
         }
         if(results[1].label=="victory"){
            document.getElementById("update_gesture_two").innerHTML="&#128548;"
         }
    }

}