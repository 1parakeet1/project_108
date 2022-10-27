function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NFP8srE4o/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}
cat = 0
dog = 0
lion = 0
cow = 0
bg_sound = 0

function gotResults(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        
        r = Math.floor(Math.random()*255)+1 ;
        g = Math.floor(Math.random()*255)+1 ; 
        b = Math.floor(Math.random()*255)+1 ;
    
        document.getElementById("number_of_times").innerHTML = "Detected dog"+dog+"Detected cat"+cat+"Detected lion"+lion+"Detected cow"+cow+"Detected Background Noise"+bg_sound;
        document.getElementById("sound_of").innerHTML = "This is the sound of-"+results[0].label;
        document.getElementById("number_of_times").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("sound_of").style.color = "rgb("+r+","+g+","+b+")";

        img = document.getElementById("gif");

        if(results[0].label == "Bark"){
            img.src = "dog.gif"
            dog = dog+1
        }
        else if(results[0].label == "Meowing"){
            img.src = "cat.gif"
            cat = cat+1
        }
        else if(results[0].label == "Mooing"){
            img.src = "cow.gif"
            cow = cow+1
        }
        else if(results[0].label == "Roar"){
            img.src = "lion.gif"
            lion = lion+1
        }
        else{
            img.src = "abc.gif"
            bg_sound = bg_sound+1
        }
    }

}