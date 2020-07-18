//you loose sound
var sound = ["/sounds/WinnerSound.mp3"];
//Ton soll abgespielt werden wenn Seite aufgerufen wird
window.addEventListener("load", function () {
    var playsound = new Audio(sound[0]);
    playsound.play();
});
//# sourceMappingURL=youWin.js.map