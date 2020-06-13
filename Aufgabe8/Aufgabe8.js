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
var Lied = ["kick.mp3", "snare.mp3", "hihat.mp3", "hihat.mp3"];
//document.querySelector("#playbutton").addEventListener("click", function() {DrumMachine(Lied);});
document.querySelector("#playbutton").addEventListener("click", function () { blub(Lied); });
function DrumMachine(Lied) {
    var i = 0;
    setInterval(function () {
        var Sample = new Audio(Lied[i]);
        Sample.play();
        //console.log(Lied[i]);
        i++; //i=i+1
    }, 500);
    return;
}
function blub(Lied) {
    for (var j = 0; j < 3; j++) {
        DrumMachine(Lied);
    }
}
// alle Töne 3 mal gespielt. Wie gehts hintereinander?
//Pause und Stop button:
var UntererButton = document.querySelector("playbutton");
if (UntererButton.getAttribute("geklickt") == ("geklickt")) {
    UntererButton.setAttribute("class", " ");
}
else {
    UntererButton.setAttribute("class", "geklickt");
}
/*
//var i: number = 0;

var playlistTotal: number = 2;





for (var i: number = 0;  i <= playlistTotal;  i++) {
    function DrumMachine(Lied) {
        var i: number = 0;
        setInterval(function() {
            var Sample = new Audio(Lied[i]);
            Sample.play();
            console.log(Lied[i]);
            if (i <=  2) {
                return true;
            }
            else {
                i++;
            }
        }, 500);
    }
}

//Problem: der macht unenedlich i++, wenn also noch mehr töne drin wären würde er die alle abspielen. Wie lasse ich es beim dritten Ton stoppen ?
*/
//# sourceMappingURL=Aufgabe8.js.map