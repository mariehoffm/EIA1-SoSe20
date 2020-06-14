var allSounds = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];
document.querySelector("#button1").addEventListener("click", function () { playSample(0); });
document.querySelector("#button2").addEventListener("click", function () { playSample(1); });
document.querySelector("#button3").addEventListener("click", function () { playSample(2); });
document.querySelector("#button4").addEventListener("click", function () { playSample(3); });
document.querySelector("#button5").addEventListener("click", function () { playSample(4); });
document.querySelector("#button6").addEventListener("click", function () { playSample(5); });
document.querySelector("#button7").addEventListener("click", function () { playSample(6); });
document.querySelector("#button8").addEventListener("click", function () { playSample(7); });
document.querySelector("#button9").addEventListener("click", function () { playSample(8); });
function playSample(Button_Nummer) {
    //window.alert("Hello world!");
    //window.alert(Button_Nummer);
    var sound = new Audio(allSounds[Button_Nummer]);
    sound.play();
}
//  ---------- playbutton ----------
var Lied = ["kick.mp3", "snare.mp3", "hihat.mp3"];
document.querySelector("#playbutton").addEventListener("click", function () { DrumMachine(Lied, 10); });
function DrumMachine(Lied, loopAnzahl) {
    if (loopAnzahl != "") {
        console.log(loopAnzahl);
    } //  anzahl der loops
    //Inhalt des arrays um das "loopAnzahl"-fache vervielfachen:
    var Lied_einfach = Lied;
    for (var i_1 = 1; i_1 < loopAnzahl; i_1++) {
        Lied = Lied.concat(Lied_einfach); //das Array Lied mit dem Inhalt des array Lied also mit sich selbst um das "loopAnzahl"-fache erweitern
        console.log(i_1);
    }
    console.log("Anzahl Sounds" + Lied.length); //(10 * kick.mp3,snare.mp3,hihat.mp3)
    //jetzt den Taktgeber starten um das array in 500ms(pro Sound) zu durchlaufen:	
    var i = 0;
    var Takt = setInterval(function () {
        var Sample = new Audio(Lied[i]);
        Sample.play();
        Sample.currentTime = 0;
        console.log(Lied[i]);
        if (i == Lied.length - 1) {
            clearInterval(Takt);
        } //wenn alle Sounds aus dem array Lied gespielt --> Taktgeber stoppen ansonsten Überforderung
        i++; //i=i+1
    }, 500);
}
//# sourceMappingURL=Aufgabe8.js.map