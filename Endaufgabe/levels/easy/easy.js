//sounds die geclickt (& gespielt) werden in einem array speichern
var playedSounds = [];
//array festlegen mit 5 random tönen --> später random machen
var song = ["/sounds/sound_boing_2.mp3", "/sounds/sound_laugh.mp3", "/sounds/sound_boing.mp3", "/sounds/sound_laugh.mp3", "/sounds/sound_laugh.mp3"];
var w = 0;
window.addEventListener("load", function () {
    //erstmal den ersten Ton abspielen:
    new Audio(song[0]).play();
});
//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
document.getElementById("button1").addEventListener("click", function () {
    var playsound = new Audio("/sounds/sound_boing.mp3");
    playsound.play();
    playedSounds.push("/sounds/sound_boing.mp3");
    window.alert(song[w]);
    window.alert(playedSounds[w]);
    if (song[w] == playedSounds[w]) { // dann wenn der gleiche ton gespielt wurde nächster Ton usw 
        window.alert("BJ");
        w++;
        //start Schleife (array playedSounds durchlaufen)
        var i = 0;
        for (i = 0; playedSounds.length == w - 1; i++) {
            new Audio(playedSounds[i]).play();
        }
        //ende Schleife
        var playsong2 = new Audio(song[w]);
        playsong2.play();
    }
});
//zweiter Ton - boing 2
document.getElementById("button2").addEventListener("click", function () {
    var playsound = new Audio("/sounds/sound_boing_2.mp3");
    playedSounds.push("/sounds/sound_boing_2.mp3");
    playsound.play();
    //window.alert(song[0]);
    //window.alert(playedSounds[0]);
    window.alert(song[w]);
    window.alert(playedSounds[w]);
    if (song[w] == playedSounds[w]) { // dann wenn der gleiche ton gespielt wurde nächster Ton usw 
        window.alert("BJ");
        w++;
        //start Schleife (array playedSounds durchlaufen)
        var i = 0;
        for (i = 0; playedSounds.length == w - 1; i++) {
            new Audio(playedSounds[i]).play();
        }
        //ende Schleife
        var playsong2 = new Audio(song[w]);
        playsong2.play();
    }
});
//dritter Ton - kids booo
document.getElementById("button3").addEventListener("click", function () {
    var playsound = new Audio("/sounds/sound_kids_booo.mp3");
    playsound.play();
    playedSounds.push("/sounds/sound_kids_booo.mp3");
    //console.log("playedSoundArray: "playedSounds);//gespielte Töne in der Konsole ausgeben
    window.alert(w);
    if (song[w] == playedSounds[w]) { // dann wenn der gleiche ton gespielt wurde nächster Ton usw 
        //window.alert("BJ");
        w++;
        //start Schleife (array playedSounds durchlaufen)
        var i = 0;
        for (i = 0; playedSounds.length == w - 1; i++) {
            new Audio(playedSounds[i]).play();
        }
        //ende Schleife
        var playsong2 = new Audio(song[w]);
        playsong2.play();
    }
});
//vierter Ton - laugh
document.getElementById("button4").addEventListener("click", function () {
    var playsound = new Audio("/sounds/sound_laugh.mp3");
    playsound.play();
    playedSounds.push("/sounds/sound_laugh.mp3");
    //console.log("playedSoundArray: "playedSounds);//gespielte Töne in der Konsole ausgeben
    window.alert(w);
    if (song[w] == playedSounds[w]) { // dann wenn der gleiche ton gespielt wurde nächster Ton usw 
        //window.alert("BJ");
        w++;
        //start Schleife (array playedSounds durchlaufen)
        var i = 0;
        for (i = 0; playedSounds.length == w - 1; i++) {
            new Audio(playedSounds[i]).play();
        }
        //ende Schleife
        var playsong2 = new Audio(song[w]);
        playsong2.play();
    }
});
//fünfter Ton - squeaking
document.getElementById("button5").addEventListener("click", function () {
    var playsound = new Audio("/sounds/sound_squeaking.mp3");
    playsound.play();
    playedSounds.push("/sounds/sound_squeaking.mp3");
    //console.log("playedSoundArray: "playedSounds); //gespielte Töne in der Konsole ausgeben
    window.alert(w);
    if (song[w] == playedSounds[w]) { // dann wenn der gleiche ton gespielt wurde nächster Ton usw 
        //window.alert("BJ");
        w++;
        //start Schleife (array playedSounds durchlaufen)
        var i = 0;
        for (i = 0; playedSounds.length == w - 1; i++) {
            new Audio(playedSounds[i]).play();
        }
        //ende Schleife
        var playsong2 = new Audio(song[w]);
        playsong2.play();
    }
});
//wenn geklickt wurde das ausführen:
/*
if (song[0] == playedSounds[0]) { // dann wenn der gleiche ton gespielt wurde nächster Ton usw
    var w: number = 0;
    var playsong2: HTMLAudioElement = new Audio (song[w]);
    playsong2.play();
    ++w;
} // funktioniert NOCH nicht
*/
//gespielte Töne mit randomArray vergleichen --> richtig ? weiter / falsch? youLoose / nach 5 TÖnen immernoch richtig? youWin
//# sourceMappingURL=easy.js.map