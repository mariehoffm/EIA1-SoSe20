

//erst Variable mit allen Tönen deklarieren:
var sound: string[] =["sound_boing.mp3", "sound_boing_2.mp3", "sound_kids_booo.mp3", "sound_laugh.mp3", "sound_squeaking.mp3", "sound_whistle.mp3"];


//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
document.getElementById("button1").addEventListener("click", function (){
    var playsound = new Audio(sound[0]); 
    playsound.play();
});

//zweiter Ton - boing 2
document.getElementById("button2").addEventListener("click", function (){
    var playsound = new Audio(sound[1]); 
    playsound.play();
});

//zweiter Ton - kids booo
document.getElementById("button3").addEventListener("click", function (){
    var playsound = new Audio(sound[2]); 
    playsound.play();
});

//zweiter Ton - laugh
document.getElementById("button4").addEventListener("click", function (){
    var playsound = new Audio(sound[3]); 
    playsound.play();
});

//zweiter Ton - squeaking
document.getElementById("button5").addEventListener("click", function (){
    var playsound = new Audio(sound[4]); 
    playsound.play();
});

//zweiter Ton - whistle
document.getElementById("button6").addEventListener("click", function (){
    var playsound = new Audio(sound[5]); 
    playsound.play();
});
