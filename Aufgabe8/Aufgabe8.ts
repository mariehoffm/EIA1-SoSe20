//window.addEventListener("load", function()){}

var allSounds = ['snare.mp3', 'laugh-2.mp3', 'laugh-1.mp3', 'kick.mp3', 'hihat.mp3', 'G.mp3', 'F.mp3', 'C.mp3', 'A.mp3'];

//var Beat01 = ['kick.mp3', 'snare.mp3', 'hihat.mp3'];

// myFunctionSound1 habe ich in myFunctionSound umbenannt, dann brauche ich nur eine Funktion für alle Buttons
// aber ich übergebe der Funktion einen Wert -->myFunctionSound("0")<--, nämlich die Button-Nummer minus 1 (weil array bei 0 losgeht)
document.querySelector("#button1").addEventListener("click", function() {playSample(0);});
document.querySelector("#button2").addEventListener("click", function() {playSample(1);});
document.querySelector("#button3").addEventListener("click", function() {playSample(2);});
document.querySelector("#button4").addEventListener("click", function() {playSample(3);});

document.querySelector("#button6").addEventListener("click", function() {playSample(5);});
document.querySelector("#button7").addEventListener("click", function() {playSample(6);});
document.querySelector("#button8").addEventListener("click", function() {playSample(7);});
document.querySelector("#button9").addEventListener("click", function() {playSample(8);});



function playSample(Button_Nummer) { 
    //window.alert("Hello world!");//bin ich in der Funktion angekommen?
    //window.alert(Button_Nummer);//Nummer anzeigen
    var sound = new Audio(allSounds[Button_Nummer]);// mache aus der Datei ein Audio (idk genau das ist aber sonst spiel das nicht ab)
	sound.play();
	if (isRecording = true){
		if ("#button1".onclick) {
			Lied01.push(allSounds[0]);
			console.log();
		}
		if ("#button2".onclick) {
			Lied01.push(allSounds[1]); 
		}
		if ("#button3".onclick) {
			Lied01.push(allSounds[2]);
		}
		if ("#button4".onclick) {
			Lied01.push(allSounds[3]);
		}
		if ("#button5".onclick) {
			Lied01.push(allSounds[4]);
		}
		if ("#button6".onclick) {
			Lied01.push(allSounds[5]);
		}
		if ("#button7".onclick) {
			Lied01.push(allSounds[6]);
		}
		if ("#button8".onclick) {
			Lied01.push(allSounds[7]);
		}
		}
	//recording true dann recording function aufrufen  XXXXXXXX
  } 

//  ---------- 2. Teil ----------

// ein Array anlegen mit der gewünschten Sounds:
var Lied01 = ['kick.mp3', 'snare.mp3', 'hihat.mp3'];
//var Lied01 = allSounds;
// das html Dokument überwachen ob da ein click auf dem Button playbutton ausgelöst wird um dann die Funktion "DrumMachine" auszuführen, der ich gleich die "Playlist" Beat01:

//document.querySelector("#playbutton").addEventListener("click", function() {DrumMachine(Lied01,4);});



//Teil3 Button
document.querySelector("#playbutton2").addEventListener("click", function() {DrumMachine(Lied01,4);});
var functionIsRunning = true;
var aktuellesSample = 0;//number braucht man nur wenn man Pause einbauen möchte, ist aber nicht gefordert


window.addEventListener('load', function() {
console.log('geladen!');// -> geladen!
	//var btn:HTMLElement = document.querySelector('playbutton2');
	var btn = document.querySelector('#playbutton2');

	// wenn dem playbutton2 keine klasse zugeordnet ist bekommt er Klasse play (#playbutton2.play)
	if(btn.getAttribute('class') != 'play'){// wenn der Button beim Laden der Seite nicht die Klasse #playbutton2.play, dann bekommt er sie jetzt
		btn.setAttribute('class','play');// #playbutton2.play (Farbe grün)
	}
});


//DELETE BUTTON
document.querySelector("#deletebutton").addEventListener("click", function() {DeletePlaylist();});
function DeletePlaylist(){
	Lied01.length = 0;
}

//record button: KOMM NICHT WEITER WIESO GEHT DAS NICHT IJÜLWQGMÜOJWENGPIENÜVPKÜPQEOJN

//var Recording: string[] = [""];

document.querySelector("#recordbutton").addEventListener("click", function () {RecordingFunction(); });

//var isRecording: boolean = false;

function RecordingFunction {
	var isRecording: boolean = true;
	if (isRecording == true) {
		if ("#button1".onclick) {
			Recording.push(allSounds[0]);
		}
		if ("#button2".onclick) {
			Recording.push(allSounds[1]); 
		}
		if ("#button3".onclick) {
			Recording.push(allSounds[2]);
		}
		if ("#button4".onclick) {
			Recording.push(allSounds[3]);
		}
		if ("#button5".onclick) {
			Recording.push(allSounds[4]);
		}
		if ("#button6".onclick) {
			Recording.push(allSounds[5]);
		}
		if ("#button7".onclick) {
			Recording.push(allSounds[6]);
		}
		if ("#button8".onclick) {
			Recording.push(allSounds[7]);
		}
	} 

//wenn jetzt click auf play kommt spielt es das array:
	if ("#playbutton2".onclick) { //wenn man ein zweites Mal drauf klickt
		Recording.play();
	}
}
//Schleife ja nicht weil soll ja nicht einfach ablaufen sondern nur bei click..





function DrumMachine(Lied,loopAnzahl) { 

// den Button verändern Anfang...
var btn = document.querySelector('#playbutton2');
if(btn.getAttribute('class') == 'play'){// wenn Klasse play
//	btn.setAttribute('class','pause');//dann auf Klasse auf pause ändern weil Player läuft schon
	btn.setAttribute('class','stop');//dann auf Klasse stop ändern weil Player läuft schon
	functionIsRunning = true;//player hat keine Freigabe zum Start
}else{
//	btn.setAttribute('class','pause');//ansonsten Klasse play setzen
	btn.setAttribute('class','stop');//ansonsten Klasse play setzen
	functionIsRunning = false;//player hat Freigabe zum Start
}



//btn.setAttribute('class','pause');// playbutton2 bekommt die Klasse (#playbutton2.pause) zugewiesen
btn.setAttribute('class','stop');// playbutton2 bekommt die Klasse (#playbutton2.stop) zugewiesen
//PlayerIsRunning = true; //Playmodus !
// ...den Button verändern Ende

// neues Array erstellen Anfang...
	if(loopAnzahl !=""){console.log(loopAnzahl);}// zeigt anzahl der loops, funktioniert also
	//Trick: ich vervielfache den Inhalt des arrays um das "loopAnzahl"-fache
	var Lied_einfach = Lied;
	for (let i = 1;  i < loopAnzahl;  i++) {
		Lied = Lied.concat(Lied_einfach);//erweitert das Array Lied mit dem Inhalt des array Lied(also mit sich selbst) und zwar um das "loopAnzahl"-fache
		console.log(i);
	}
	console.log("Anzahl Sounds" + Lied.length);//sollte in diesem Beispiel 12 liefern (4 * kick.mp3,snare.mp3,hihat.mp3)
// ...neues Array erstellen Ende



//jetzt den Taktgeber starten um das array in 500ms(pro Sound) zu durchlaufen:	
// Taktgeber und Player Anfang...

//braucht man wenn der Button auch Pause machen können soll:
// if(aktuellesSample != 0 && aktuellesSample < Lied.length){
// 	var i = aktuellesSample;
// }else{var i = 0;}
//ohne Pause Funktion muss das rein:
var i = 0;
	
let taktgeber = setInterval(function() {
	if(functionIsRunning){
		var Sample = new Audio(Lied[i]);
		Sample.play();
		if(i==Lied.length-1){
			clearInterval(taktgeber);//Taktgeber wieder stoppen, sonst läuft der ewig und stresst den Computer
			btn.setAttribute('class','play');
		}
		i++; //i=i+1
		//aktuellesSample = i;// das braucht man nur, wenn der Button auch Pause machen soll, Aufgabe lautet aber Stop!
	}else{
			//was hier folgt macht stop und nicht pause:
			clearInterval(taktgeber);//Taktgeber wieder stoppen, sonst läuft der ewig und stresst den Computer
			btn.setAttribute('class','play'); 

			//pause machen(ist aber nicht gefordert) funktioniert dann so:
			/* 				
			i = aktuellesSample;
			console.log('aktuellesSample: ' + aktuellesSample);
			var Sample = new Audio(Lied[i]);
			Sample.pause();
			clearInterval(taktgeber);//Taktgeber wieder stoppen, sonst läuft der ewig und stresst den Computer
			btn.setAttribute('class','play');
			i++; //i=i+1 
			*/	
	}
}, 500); 
// ...Taktgeber und Player Ende
} 




//wenn click auf record button --> record = true --> in der DrumMachine function --> wenn auf button 1,2,3,.. gedrückt: hinten in neues record array rein
/*
var Recording = [''];

document.querySelector("#recordbutton").addEventListener("click", function() {Record();});

function () Record{
	if ("#recordbutton".onclick){
	if ("#button1".onclick){
		Recording.push(allSounds[0]);
	if ("#button2".onclick){
		Recording.push(allSounds[1]);
	}
	Recording.play();
}
}





/*
document.querySelector("#recordbutton").addEventListener("click", function() {Record();});

var Recording = [''];

function() Record{
	if recording = true;
}

if (recording == true) {
	function () DrumMachine{
		Recording.push('button'.'onclick')
	}
} else {

}

// wenn clik on delete button --> array record löschen

/*delete button:
document.querySelector("#delete").addEventListener("click", function () { DeleteSample; });
function DeleteSample() {
    // var Lied löschen
}
*/