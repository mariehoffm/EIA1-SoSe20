
//erst Variable mit allen Tönen deklarieren:
var sound: string[] =["/sounds/sound_boing.mp3", "/sounds/sound_boing_2.mp3", "/sounds/sound_kids_booo.mp3", "/sounds/sound_laugh.mp3"];

//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
document.getElementById("button1").addEventListener("click", function (){
    var playsound = new Audio(sound[0]); 
    playsound.play();
    playedSounds.push();
});

//zweiter Ton - boing 2
document.getElementById("button2").addEventListener("click", function (){
    var playsound = new Audio(sound[1]); 
    playsound.play();
    playedSounds.push();
});

//zweiter Ton - kids booo
document.getElementById("button3").addEventListener("click", function (){
    var playsound = new Audio(sound[2]); 
    playsound.play();
    playedSounds.push();
});

//zweiter Ton - laugh
document.getElementById("button4").addEventListener("click", function (){
    var playsound = new Audio(sound[3]); 
    playsound.play();
    playedSounds.push();
});



//sounds die geclickt (&gespielt) werden in einem array speichern
var playedSounds: string[] = []
console.log(playedSounds);

function soundEingabe(){
    var x: number = 0;
	//window.alert(anzahl);
	setInterval(function() {
		var eingabeSong = new Audio(playedSounds[x]);
		eingabeSong.play();
		console.log(playedSounds[x]);
		x++; //i=i+1
	}, 500); 
}






//array festlegen mit 5 random tönen --> später random machen
var song: string[] = [ "/sounds/sound_boing_2.mp3",  "/sounds/sound_boing_2.mp3", "/sounds/sound_boing.mp3", "/sounds/sound_laugh.mp3", "/sounds/sound_laugh.mp3"]

//gespielte Töne mit randomArray vergleichen --> richtig ? weiter / falsch? youLoose / nach 5 TÖnen immernoch richtig? youWin







