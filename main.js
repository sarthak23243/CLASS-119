function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
video =createCapture(VIDEO);
video = video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

}
function draw(){
image(video, 0, 0, 400,400);
classifier.classify(video,gotResult);
}
function modelLoaded(){
    console.log("Model Is Injected ");
}
function gotResult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectans").innerHTML=results[0].label;
        document.getElementById("Accuracyans").innerHTML=results[0].confidence.toFixed(3);
    }
}