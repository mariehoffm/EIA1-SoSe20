
//sounds die geclickt (& gespielt) werden in einem array speichern
var playedSounds: string[] = [];

//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
document.getElementById("button1").addEventListener("click", function (){
    var playsound: HTMLAudioElement = new Audio("sound_boing.mp3"); 
    playsound.play();
    playedSounds.push(sound[1]);
    console.log("playedSoundArray: "playedSounds);//gespielte Töne in der Konsole ausgeben
});

//zweiter Ton - boing 2
document.getElementById("button2").addEventListener("click", function (){
    var playsound: HTMLAudioElement = new Audio("sound_boing_2.mp3"); 
    playsound.play();
    //window.alert(sound[1]);
    playedSounds.push(sound[1]);
    console.log("playedSoundArray: "playedSounds);//gespielte Töne in der Konsole ausgeben


});

//dritter Ton - kids booo
document.getElementById("button3").addEventListener("click", function (){
    var playsound: HTMLAudioElement = new Audio("sound_kids_booo.mp3"); 
    playsound.play();
    playedSounds.push(sound[2]);
    console.log("playedSoundArray: "playedSounds);//gespielte Töne in der Konsole ausgeben


});

//vierter Ton - laugh
document.getElementById("button4").addEventListener("click", function (){
    var playsound: HTMLAudioElement = new Audio("sound_laugh.mp3"); 
    playsound.play();
    playedSounds.push(sound[3]);
    console.log("playedSoundArray: "playedSounds);//gespielte Töne in der Konsole ausgeben


});

//fünfter Ton - squeaking
document.getElementById("button5").addEventListener("click", function (){
    var playsound: HTMLAudioElement = new Audio("sound_squeaking.mp3"); 
    playsound.play();
    playedSounds.push(sound[4]);
    console.log("playedSoundArray: "playedSounds);//gespielte Töne in der Konsole ausgeben


});



//array festlegen mit 5 random tönen --> später random machen
var song: string[] = [ "/sounds/sound_boing_2.mp3",  "/sounds/sound_boing_2.mp3", "/sounds/sound_boing.mp3", "/sounds/sound_laugh.mp3", "/sounds/sound_laugh.mp3"]

window.addEventListener('load', function() {
        //erstmal den ersten Ton abspielen:
        new Audio (song[0]).play(); 

        if (song[0] == playedSounds[0]){// dann wenn der gleiche ton gespielt wurde nächster Ton usw 
            var ö: number = 0;
            var playsong2: HTMLAudioElement = new Audio (song[ö]);
            playsong2.play();
            ++ö;
        } // funktioniert NOCH nicht
});




//gespielte Töne mit randomArray vergleichen --> richtig ? weiter / falsch? youLoose / nach 5 TÖnen immernoch richtig? youWin


