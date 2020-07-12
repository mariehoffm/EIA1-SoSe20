//erst Variable mit allen Tönen deklarieren:
var sound = ["sounds/sound_boing.mp3.webarchive", "/sounds/sound_boing_2.mp3.webarchive", "sounds/sound_kids_booo.mp3.webarchive", "sounds/sound_laugh.mp3.webarchive"];
//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
document.getElementById("button1").addEventListener("click", function playSound() {
    //window.alert("hi"); //funktioniert
    var i = 0;
    //window.alert(sound[i]) //funktioniert
    sound[i].play;
});
//# sourceMappingURL=easy.js.map