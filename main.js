var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start()
    {
document.getElementById("textbox").innerHTML="";
recognition.start();
    }

recognition.onresult= function (event)
{
console.log(event);

var content= event.results [0][0]. transcript;
document.getElementById("textbox").innerHTML= content;
console.log(content);

if (content=="take my selfie")
{
console.log("take selfie---");
speak();
}
}

    function speak()
    {
 var speakable= window.speechSynthesis;
 data="Taking your Selfie in 5 seconds";
 var utter=new SpeechSynthesisUtterance(data);
 speakable.speak(utter);
 Webcam.attach(camera);

        setTimeout(function(){
            take_snapshot();
        save();
        },5000);

    }
function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="img1"src="'+data_uri+'">';
    })
}

function save()
{
link= document.getElementById("link");
img1= document.getElementById("img1").src;
link.href=img1;
link.click();
}
    Webcam.set({
        width:360,
        height:250,
        image_format:'jpeg',
        jpeg_quality:90
    });

    camera= document.getElementById("camera");
