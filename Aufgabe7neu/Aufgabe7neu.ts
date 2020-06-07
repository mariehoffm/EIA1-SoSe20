
var allSounds = ["A.mp3.webarchive", "C.mp3.webarchive", "F.mp3.webarchive", "G.mp3.webarchive", "hihat.mp3.webarchive", "kick.mp3.webarchive", "laugh-1.mp3.webarchive", "laugh-2.mp3.webarchive", "snare.mp3.webarchive"];

document.querySelector("#button1").addEventListener("click", function() {playSample(0);});
document.querySelector("#button2").addEventListener("click", function() {playSample(1);});
document.querySelector("#button3").addEventListener("click", function() {playSample(2);});
document.querySelector("#button4").addEventListener("click", function() {playSample(3);});
document.querySelector("#button5").addEventListener("click", function() {playSample(4);});
document.querySelector("#button6").addEventListener("click", function() {playSample(5);});
document.querySelector("#button7").addEventListener("click", function() {playSample(6);});
document.querySelector("#button8").addEventListener("click", function() {playSample(7);});
document.querySelector("#button9").addEventListener("click", function() {playSample(8);});


function playSample(Button_Nummer) { 
    //window.alert("Hello world!");//bin ich in der Funktion angekommen?
    window.alert(Button_Nummer);//Nummer anzeigen
    sound = new Audio(allSounds[Button_Nummer]);// mache aus der Datei ein Audio (was genau das ist weiß ich nicht aber sonst spielt das nicht ab)
    sound.play(sound);
  } 





  //zweiter Aufgabenteil:

var DrumMachineSample = ["hihat.mp3.webarchive", "kick.mp3.webarchive","snare.mp3.webarchive"];

document.querySelector("#playbutton").addEventListener("click"), DrumMachineSample;


setInterval(function(DrumMachineSample){ 
    alert("NKNK");
    sound = new Audio(DrumMachineSample);
    sound.play(sound);
}, 500);
