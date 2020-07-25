//sounds die geclickt (& gespielt) werden in einem array speichern
var playedSounds: string[] = [];
var richtigGespielt: Boolean = false;

var alleSamples: string[] = ["/sounds/sound_boing_2.mp3", "/sounds/sound_boing.mp3", "/sounds/sound_kids_booo.mp3", "/sounds/sound_squeaking.mp3", "/sounds/sound_laugh.mp3"];

//array festlegen mit 5 random tönen --> später random machen
var song: string[] = []; // dir Reihenfolge die abgespielt werden soll zum nachspielen
var notRandomSong: string[] = ["/sounds/sound_boing.mp3", "/sounds/sound_boing_2.mp3", "/sounds/sound_kids_booo.mp3", "/sounds/sound_squeaking.mp3", "/sounds/sound_laugh.mp3"]; // damit die buttons immer einer mp3 zugeordnet werden können
/*
//random arraytöne aufrufen lassen:
Math.random();
Math.floor(Math.random() * 5); // abrunden damit keine Kommazahlen und insgesamt 5 Töne weil level easy
//window.alert(Math.floor(Math.random() * 5)); //funktioniert

//array song immer wieder per Zufall neu erstellen:
for (let i: number = 0; i < 5; i++) {
    song.push(notRandomSong[Math.floor(Math.random() * 5)]);
}

console.log(song);*/

//random arraytöne aufrufen lassen:
Math.random();
Math.floor(Math.random() * 5); // abrunden damit keine Kommazahlen 
//window.alert(Math.floor(Math.random() * 10)); 
//array song immer wieder per Zufall neu erstellen: 
for (let i: number = 0; i < 5; i++) {
    song.push(alleSamples[Math.floor(Math.random() * 5)]);
}
console.log(song);
//notRandomSong = song; 

var looserTon: string = "/sounds/looserSound.mp3";
var winnerSound: string = "/sounds/winnerSound.mp3";
var letzterSound: number = 0; //Zähler für vom User gespielte Töne (Button Clickzähler)
var bisherigeTöne: number = 0;
//new Audio(song[0]).play(); 

//window.addEventListener("load", function() { --> stattdessen start game button
//erstmal den ersten Ton abspielen:
//new Audio(song[0]).play(); 
//});

window.setTimeout(function (): void {
    document.querySelector("#button" + index).setAttribute("class", "dunkel");
    window.alert("kqengv");
},                2500);

document.getElementById("start").addEventListener("click", function (): void {
    new Audio(song[0]).play(); //zu spielender erster Ton
    //button der das song[0] mp3 hat soll kurz leuchten --> .getAttribute("hell");
    var i: number = 0;
    var start: string = ("#start");
    for (var index: number = 0; index < notRandomSong.length; index++) {
        if (song[i] == notRandomSong[index]) { //wenn Position aus random array mit Position aus mp3 array übereinstimmt, dann soll folgendes ausgeführt werden:
            start = document.querySelector("#button" + index);
            start.setAttribute("class", "hell"); //der button an der stelle index wird hell (also der "aktive" button)
            //window.alert("knaf");
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            window.setTimeout(function (): void {
                document.querySelector("#button" + index).setAttribute("class", "dunkel");
                window.alert("kqengv");
            },                2500);
    }
        
}});


//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
//document.querySelector("#playbutton").addEventListener("click", function() {DrumMachine(Lied01,4);});
document.querySelector("#button0").addEventListener("click", function (): void { ButtonFunktion("button0", notRandomSong[0]); });
document.querySelector("#button1").addEventListener("click", function (): void { ButtonFunktion("button1", notRandomSong[1]); });
document.querySelector("#button2").addEventListener("click", function (): void { ButtonFunktion("button2", notRandomSong[2]); });
document.querySelector("#button3").addEventListener("click", function (): void { ButtonFunktion("button3", notRandomSong[3]); });
document.querySelector("#button4").addEventListener("click", function (): void { ButtonFunktion("button4", notRandomSong[4]); });





function ButtonFunktion(buttonname: string, samplename: string): void {

    buttonname = "#" + buttonname;
    console.log("ich bin in funktion" + " Button: " + buttonname + " sample: " + samplename);

    var gedrueckterButton: HTMLAudioElement = new Audio(samplename);
    gedrueckterButton.play();



    //Design: 
    var btn: Element = document.querySelector(buttonname);
    // wenn dem button1 keine Klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (btn.getAttribute("class") != "hell") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel hat, dann bekommt er sie jetzt
        btn.setAttribute("class", "hell"); // button1.dunkel
    }
    setTimeout(function (): void { btn.setAttribute("class", "dunkel"); }, 2000);
    //Design
 

    // wenn der Button geklickt wurde werden alle vom User bisher richtig gespielten Töne(array playedSounds) abgespielt(Zähler c),
    // + der nächste neue Ton aus Array song (song[w + 1])
    playedSounds.push(samplename); // wir speichern den gespielten Ton in array playedSounds
    console.log("letzter gespielter Ton: " + playedSounds[letzterSound]);
    // Als erstes hier der Vergleich von song[c] mit playedSounds[c]
    if (samplename == song[bisherigeTöne]) { // Vergleich letzter gespielter Ton mit Vorgabe
        console.log(playedSounds[letzterSound] + " ist gleich " + song[letzterSound]);
        //richtigGespielt = true; // letzter Ton wurde richtig gespielt
        bisherigeTöne++;

        if (bisherigeTöne - 1 >= letzterSound) {
            letzterSound++; // wenn der Vergleich richtig war setzen wir den Clickzähler "c" um 1 hoch
            console.log("nächster zu erwartender Ton wäre: " + song[letzterSound]);
            // wenn richtig gespielt wurde spielen wir Array Sound mit einem weiteren neuen Ton (bis position c):


            // Taktgeber start 
            var i: number = 0; //IN Math.floor(Math.random() * 10) GEÄNDERT STATT 0 - funktioniert aber nicht :------(
            let taktgeber: number = setInterval(function (): void {
                // es wird abgespielt was der User bisher gespielt hatte:

                var abgespielt: HTMLAudioElement = new Audio(song[i]);
                abgespielt.play();

                for (var index: number = 0; index < notRandomSong.length; index++) {
                    if (song[i] == notRandomSong[index]) {
                        btn = document.querySelector("#button" + index);
                        btn.setAttribute("class", "hell");
                        setTimeout(function (): void {
                            document.querySelector("#button" + index).setAttribute("class", "dunkel");
                        },         2500);
 
                    }  
                }


                if (song[i] == song[letzterSound]) {
                    clearInterval(taktgeber);

                    // Gewinner: 
                    if (song.length == playedSounds.length) {
                        //var urlGewonnen: HTMLElement = document.getElementById("gewinnerLink");
                        //window.location.href = "https://mariehoffm.github.io/EIA1-SoSe20/Endaufgabe/youWin/index.html";
                        var gewonnen: HTMLAudioElement = new Audio(winnerSound);
                        gewonnen.play();
                        gewonnenFenster ();

                    }
                    playedSounds = []; 
                    bisherigeTöne = 0;


                }
                i++; //i=i+1
            },                                  1000);
        }





        //Taktgeber ende
    } else {
        var verloren: HTMLAudioElement = new Audio(looserTon);
        verloren.play();
        playedSounds = [];
        verlorenFenster();

    } // ende von if (playedSounds[c] == song[c])

} // ende von ButtonFunktion


function gewonnenFenster (): void {
    // diese Funktion sorg für das verschwinden aller Elemente die auf der Win Seite nicht erscheinen sollen:
        let start: Element = document.querySelector("#start");
        start.remove();
        let btn1: Element = document.querySelector("#button0");
        btn1.remove();
        let btn2: Element = document.querySelector("#button1");
        btn2.remove();
        let btn3: Element = document.querySelector("#button2");
        btn3.remove();
        let btn4: Element = document.querySelector("#button3");
        btn4.remove();
        let btn5: Element = document.querySelector("#button4");
        btn5.remove();
        //winner.style.display = "block";
        document.getElementById("WinText").style.display = "block";

    }

function verlorenFenster(): void {
    // diese Funktion sorg für das verschwinden aller Elemente die auf der Loose Seite nicht erscheinen sollen:
    let start: Element = document.querySelector("#start");
    start.remove();
    let btn1: Element = document.querySelector("#button0");
    btn1.remove();
    let btn2: Element = document.querySelector("#button1");
    btn2.remove();
    let btn3: Element = document.querySelector("#button2");
    btn3.remove();
    let btn4: Element = document.querySelector("#button3");
    btn4.remove();
    let btn5: Element = document.querySelector("#button4");
    btn5.remove();
    //winner.style.display = "block";
    document.getElementById("LooseText").style.display = "block";

} 


window.addEventListener("load", function (): void {

    var startButton: Element = document.querySelector("#start");
    // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if( startButton.getAttribute("class") != "dunkel"){
        startButton.setAttribute("class", "dunkel");
    }

    var btn1: Element = document.querySelector("#button0");
    // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (btn1.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
        btn1.setAttribute("class", "dunkel"); // button1.dunkel
    }
    var btn2: Element = document.querySelector("#button1");
    // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (btn2.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
        btn2.setAttribute("class", "dunkel"); // button1.dunkel
    }
    var btn3: Element = document.querySelector("#button2");
    // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (btn3.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
        btn3.setAttribute("class", "dunkel"); // button1.dunkel
    }
    var btn4: Element = document.querySelector("#button3");
    // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (btn4.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
        btn4.setAttribute("class", "dunkel"); // button1.dunkel
    }
    var btn5: Element = document.querySelector("#button4");
    // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (btn5.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
        btn5.setAttribute("class", "dunkel"); // button1.dunkel
    }
    
    //Win und Loose soll nur angezeigt werden wenn gewonnen / verloren wurde
    document.getElementById("WinText").style.display = "none";
    document.getElementById("LooseText").style.display = "none";


    /*
    let winText: HTMLElement = document.getElementById("#WinText"); 
    window.alert("test1");
    winText.style.display = "none";
    window.alert("test2"); //wird nicht ausgegeben

    let looseText: HTMLElement = document.getElementById("#LooseText");
    looseText.style.display = "none";
    */

    






}); //ende eventlistener load

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

//halloooo