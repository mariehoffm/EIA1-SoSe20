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
//  ---------- 2. Teil ----------
var Lied01 = ["kick.mp3", "snare.mp3", "hihat.mp3"];
document.querySelector("#playbutton").addEventListener("click", function () { DrumMachine(Lied01); });
function DrumMachine(Lied) {
    //window.alert(anzahl);
    setInterval(function () {
        var Sample = new Audio(Lied[i]);
        Sample.play();
        console.log(Lied[i]);
        i++; //i=i+1
    }, 500);
}
var i = 0;
//inspiriert von Gabriel Rausch :)
//# sourceMappingURL=Aufgabe7neu.js.map