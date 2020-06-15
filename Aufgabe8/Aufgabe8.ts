
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
    var sound = new Audio(allSounds[Button_Nummer]);
    sound.play();
  } 



//  ---------- playbutton ----------
var Lied = ["kick.mp3", "snare.mp3", "hihat.mp3"];

document.querySelector("#playbutton").addEventListener("click", function() {DrumMachine(Lied,10);});

var functionIsRunning: boolean = false; //--> erster Versuch
var btn:HTMLElement = document.querySelector("#playbutton");


function DrumMachine(Lied,loopAnzahl) { 
//loop machen:
	if(loopAnzahl !=""){console.log(loopAnzahl);}//  anzahl der loops
	//Inhalt des arrays um das "loopAnzahl"-fache vervielfachen:
	var Beat = Lied;
	for (let i = 1;  i < loopAnzahl;  i++) {
		Lied = Lied.concat(Beat);//das Array Lied mit dem Inhalt des array Lied also mit sich selbst um das "loopAnzahl"-fache erweitern
		console.log(i);
	}
	console.log("Anzahl Sounds" + Lied.length);//(10 * kick.mp3,snare.mp3,hihat.mp3)

//Taktgeber starten um das array in 500ms(pro Sound) zu durchlaufen:	
	var i = 0;
	var Takt = setInterval(function() {
		var Sample = new Audio(Lied[i]);
		Sample.play();
		var functionIsRunning: boolean = true; //Lied läuft!, erster Versuch
		Sample.currentTime = 0;
		console.log(Lied[i]);
		if(i==Lied.length-1){clearInterval(Takt);}//wenn alle Sounds aus dem array Lied gespielt --> Taktgeber stoppen ansonsten Überforderung
		i++; //i=i+1
	}, 500); 


	if (functionIsRunning == true) {
		//function MachineSample play
		Lied.play();
		
	} if (functionIsRunning == false) {
		Lied.pause();
	}
	

}

//WIESO GEHT DAS NICHT OMG




//activ und nicht activ für design:
var btn:HTMLElement = document.querySelector("button");

if (btn.getAttribute("class") == "active"){
	btn. setAttribute("class", "");
} else{
	btn.setAttribute("class", "active");
}



	/* 
	erster Versuch:
	//play pause button (if: sound spielt dann pause button, else: playbutton)
	if (functionIsRunning = false) { //nur ein = weil sonst gehts nicht ?!
		alert("funktioniert!") //geht
		document.querySelector("#playbutton").addEventListener("click", //DrumMachine deaktivieren);
	}
	else {
		document.querySelector("#playbutton").addEventListener("click", function() {DrumMachine(Lied,10);});
	
	}
	} 
	//Problem: Sample.play ist nicht global deklariert also kann nicht drauf zugreifen, wenn ich aber die if else lokal mache ist direkt error und gar nix geht
	




*/