
var allSounds = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];

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
    //window.alert("Hello world!");
    //window.alert(Button_Nummer);
    sound = new Audio(allSounds[Button_Nummer]);
    sound.play(sound);
  } 





//  ---------- 2. Teil ----------


//viel zu schnelL: 
/*
function DrumMachine(Lied) { 

	//window.alert(anzahl);
	setInterval(function() {
	var anzahl = Lied.length;
	var i = 0;
		do {
			//console.log(Lied[i]);
			//window.alert(Lied[i]);
			var Sample = new Audio(Lied[i]);
			Sample.play();
			i++;
			}
		while (i < anzahl);

	}, 2000); //mach die while-Schleife alle 2 Sekunden
} 
/*


//geht:
var Lied01 = ["kick.mp3", "snare.mp3", "hihat.mp3"];
document.querySelector("#playbutton").addEventListener("click", function() {DrumMachine(Lied01);});




function DrumMachine(Lied) { 

  var Sample = new Audio(),
      i = 0;
    Sample.addEventListener('ended', function () {
      i = ++i < Lied.length ? i : 0;
      console.log(i)
      Sample.src = Lied[i];
      Sample.play();
    }, true);
  Sample.volume = 0.5;
  Sample.loop = false;
  Sample.src = Lied[0];
  Sample.play();
  }




  

