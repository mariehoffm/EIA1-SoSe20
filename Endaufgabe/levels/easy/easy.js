//erst Variable mit allen Tönen deklarieren:
var sound = ["sound_boing.mp3", "/sounds/sound_boing_2.mp3", "/sounds/sound_kids_booo.mp3", "/sounds/sound_laugh.mp3", "/sounds/sound_squeaking.mp3"];
//sounds die geclickt (& gespielt) werden in einem array speichern
var playedSounds = [];
//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
document.getElementById("button1").addEventListener("click", function () {
    var playsound = new Audio(sound[0]);
    playsound.play();
    playedSounds.push("/sounds/sound_boing.mp3");
});
//zweiter Ton - boing 2
document.getElementById("button2").addEventListener("click", function () {
    var playsound = new Audio(sound[1]);
    playsound.play();
    //window.alert(sound[1]);
    playedSounds.push(playsound.src);
});
//dritter Ton - kids booo
document.getElementById("button3").addEventListener("click", function () {
    var playsound = new Audio(sound[2]);
    playsound.play();
    playedSounds.push(sound[2]);
});
//vierter Ton - laugh
document.getElementById("button4").addEventListener("click", function () {
    var playsound = new Audio(sound[3]);
    playsound.play();
    playedSounds.push(sound[3]);
});
//fünfter Ton - squeaking
document.getElementById("button5").addEventListener("click", function () {
    var playsound = new Audio(sound[4]);
    playsound.play();
    playedSounds.push(sound[4]);
});
//gespielte Töne in der Konsole ausgeben:
console.log(playedSounds);
//array festlegen mit 5 random tönen --> später random machen
var song = ["/sounds/sound_boing_2.mp3", "/sounds/sound_boing_2.mp3", "/sounds/sound_boing.mp3", "/sounds/sound_laugh.mp3", "/sounds/sound_laugh.mp3"];
//gespielte Töne mit randomArray vergleichen --> richtig ? weiter / falsch? youLoose / nach 5 TÖnen immernoch richtig? youWin
//# sourceMappingURL=easy.js.map