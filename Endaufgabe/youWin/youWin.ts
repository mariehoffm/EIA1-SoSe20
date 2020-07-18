//you loose sound
var sound: string[] = ["/sounds/WinnerSound.mp3"];
//Ton soll abgespielt werden wenn Seite aufgerufen wird

window.addEventListener("load", function () {
    var playsound: HTMLAudioElement = new Audio(sound[0]);
    playsound.play();
});

 