function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZDN7Pd3Ct/',modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         random_r=Math.floor(Math.random()*255)+1;
         random_b=Math.floor(Math.random()*255)+1;
         random_g=Math.floor(Math.random()*255)+1;

document.getElementById('result_label').innerHTML="i can hear-"+results[0].label;
document.getElementById('result_confidence').innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById('result_label').style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById('result_confidence').style.color="rgb("+random_r+","+random_g+","+random_b+")";
img1=document.getElementById("aliens-01");
img2=document.getElementById("aliens-02");
img3=document.getElementById("aliens-03");
img4=document.getElementById("aliens-04");}}