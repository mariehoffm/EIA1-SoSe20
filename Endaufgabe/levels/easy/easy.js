//sounds die geclickt (& gespielt) werden in einem array speichern
var playedSounds = [];
//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
document.getElementById("button1").addEventListener("click", function () {
    var playsound = new Audio("sound_boing.mp3");
    playsound.play();
    playedSounds.push(sound[1]);
    console.log("playedSoundArray: ", playedSounds); //gespielte Töne in der Konsole ausgeben
});
//zweiter Ton - boing 2
document.getElementById("button2").addEventListener("click", function () {
    var playsound = new Audio("sound_boing_2.mp3");
    playsound.play();
    //window.alert(sound[1]);
    playedSounds.push(sound[1]);
    console.log("playedSoundArray: ", playedSounds); //gespielte Töne in der Konsole ausgeben
});
//dritter Ton - kids booo
document.getElementById("button3").addEventListener("click", function () {
    var playsound = new Audio("sound_kids_booo.mp3");
    playsound.play();
    playedSounds.push(sound[2]);
    console.log("playedSoundArray: ", playedSounds); //gespielte Töne in der Konsole ausgeben
});
//vierter Ton - laugh
document.getElementById("button4").addEventListener("click", function () {
    var playsound = new Audio("sound_laugh.mp3");
    playsound.play();
    playedSounds.push(sound[3]);
    console.log("playedSoundArray: ", playedSounds); //gespielte Töne in der Konsole ausgeben
});
//fünfter Ton - squeaking
document.getElementById("button5").addEventListener("click", function () {
    var playsound = new Audio("sound_squeaking.mp3");
    playsound.play();
    playedSounds.push(sound[4]);
    console.log("playedSoundArray: ", playedSounds); //gespielte Töne in der Konsole ausgeben
});
//array festlegen mit 5 random tönen --> später random machen
var song = ["/sounds/sound_boing_2.mp3", "/sounds/sound_boing_2.mp3", "/sounds/sound_boing.mp3", "/sounds/sound_laugh.mp3", "/sounds/sound_laugh.mp3"];
window.addEventListener('load', function () {
    var playsong = new Audio(song[0]);
    playsong.play();
    if (song[0] == playedSounds[0]) { // wenn der gleiche ton gespielt nächster Ton usw 
        var ö = 0;
        var playsong2 = new Audio(song[ö]);
        playsong2.play();
        ++ö;
    } // funktioniert NOCH nicht
});
//gespielte Töne mit randomArray vergleichen --> richtig ? weiter / falsch? youLoose / nach 5 TÖnen immernoch richtig? youWin
//# sourceMappingURL=easy.js.map