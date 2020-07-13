//erst Variable mit allen Tönen deklarieren:
var sound = ["sound_boing.mp3", "sound_boing_2.mp3", "sound_kids_booo.mp3", "sound_laugh.mp3", "sound_squeaking.mp3", "sound_whistle.mp3", "sound_whistle_2.mp3", "sound_yeah.mp3", "sound_yeah_2.mp3"];
//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
document.getElementById("button1").addEventListener("click", function () {
    var playsound = new Audio(sound[0]);
    playsound.play();
});
//zweiter Ton - boing 2
document.getElementById("button2").addEventListener("click", function () {
    var playsound = new Audio(sound[1]);
    playsound.play();
});
//zweiter Ton - kids booo
document.getElementById("button3").addEventListener("click", function () {
    var playsound = new Audio(sound[2]);
    playsound.play();
});
//dritter Ton - laugh
document.getElementById("button4").addEventListener("click", function () {
    var playsound = new Audio(sound[3]);
    playsound.play();
});
//vierter Ton - squeaking
document.getElementById("button5").addEventListener("click", function () {
    var playsound = new Audio(sound[4]);
    playsound.play();
});
//fünfter Ton - whistle
document.getElementById("button6").addEventListener("click", function () {
    var playsound = new Audio(sound[5]);
    playsound.play();
});
//sechster Ton - whistle 2
document.getElementById("button7").addEventListener("click", function () {
    var playsound = new Audio(sound[6]);
    playsound.play();
});
//siebter Ton - yeah
document.getElementById("button8").addEventListener("click", function () {
    var playsound = new Audio(sound[7]);
    playsound.play();
});
//achter Ton - yeah 2
document.getElementById("button9").addEventListener("click", function () {
    var playsound = new Audio(sound[8]);
    playsound.play();
});
//# sourceMappingURL=veryhard.js.map