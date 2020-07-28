//sounds die geclickt (& gespielt) werden in einem array speichern
var playedSounds: string[] = [];
var richtigGespielt: Boolean = false;

var alleSamples: string[] = ["/sounds/sound_boing_2.mp3", "/sounds/sound_boing.mp3", "/sounds/sound_kids_booo.mp3", "/sounds/sound_squeaking.mp3", "/sounds/sound_laugh.mp3"]; //ein array mit allen sounds


var song: string[] = []; // dir Reihenfolge die abgespielt werden soll zum nachspielen
var notRandomSong: string[] = ["/sounds/sound_boing.mp3", "/sounds/sound_boing_2.mp3", "/sounds/sound_kids_booo.mp3", "/sounds/sound_squeaking.mp3", "/sounds/sound_laugh.mp3"]; // damit die buttons immer einer mp3 zugeordnet werden können


//random arraytöne aufrufen lassen:
Math.random();
Math.floor(Math.random() * 5); // abrunden damit keine Kommazahlen 
//window.alert(Math.floor(Math.random() * 10)); 
//array song immer wieder per Zufall neu erstellen: 
for (let i: number = 0; i < 16; i++) {
    song.push(alleSamples[Math.floor(Math.random() * 5)]);
}
console.log(song);
//notRandomSong = song; 

var looserTon: string = "/sounds/looserSound.mp3"; //Verliererton wenn Spiel verloren
var winnerSound: string = "/sounds/winnerSound.mp3"; //Gewinnerton wen Spiel gewonnen
var letzterSound: number = 0; //Zähler für vom User gespielte Töne (Button Clickzähler)
var bisherigeTöne: number = 0; 



document.getElementById("start").addEventListener("click", function (): void { //funktion die ausgeführt wird wenn man auf den start button klickt
    new Audio(song[0]).play(); //zu spielender erster Ton
    //button der das song[0] mp3 hat soll kurz leuchten --> .getAttribute("hell");
    var i: number = 0;
    var start: string = ("#start");
    for (var index: number = 0; index < notRandomSong.length; index++) { //solange index kleiner als die Länge aller Sounds wird die schleife ausgeführt
        if (song[i] == notRandomSong[index]) { //wenn Position aus random array mit Position aus mp3 array übereinstimmt, dann soll folgendes ausgeführt werden:
            var thisindex: number = index;
            var start1: Element = document.querySelector("#button" + index);
            start1.setAttribute("class", "hell"); //der button an der stelle index wird hell (also der "aktive" button)
            //window.alert("knaf"); //wird angezeigt
            window.setTimeout(function (): void {
                document.querySelector("#button" + thisindex).setAttribute("class", "dunkel"); //der aktuelle button wird hellblau
            },                1500);
    }
        
}});


//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
document.querySelector("#button0").addEventListener("click", function (): void { ButtonFunktion("button0", notRandomSong[0]); });
document.querySelector("#button1").addEventListener("click", function (): void { ButtonFunktion("button1", notRandomSong[1]); });
document.querySelector("#button2").addEventListener("click", function (): void { ButtonFunktion("button2", notRandomSong[2]); });
document.querySelector("#button3").addEventListener("click", function (): void { ButtonFunktion("button3", notRandomSong[3]); });
document.querySelector("#button4").addEventListener("click", function (): void { ButtonFunktion("button4", notRandomSong[4]); });





function ButtonFunktion (buttonname: string, samplename: string): void { //Funktion der einzelnen Buttons

    buttonname = "#" + buttonname;
    console.log("ich bin in funktion" + " Button: " + buttonname + " sample: " + samplename);

    var gedrueckterButton: HTMLAudioElement = new Audio(samplename); //der ton des Buttons der vom SPieler geklickt wird wird gespielt
    gedrueckterButton.play();



    //Design: 
    var btn: Element = document.querySelector(buttonname);
    // wenn dem button1 keine Klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (btn.getAttribute("class") != "hell") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel hat, dann bekommt er sie jetzt
        btn.setAttribute("class", "hell"); // button1.dunkel
    }
    setTimeout(function (): void { btn.setAttribute("class", "dunkel"); }, 1500); //funktioniert nicht beim ersten bzw letzten button
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
            var i: number = 0; 
            let taktgeber: number = setInterval(function (): void {
                // es wird abgespielt was der User bisher gespielt hatte:

                var abgespielt: HTMLAudioElement = new Audio(song[i]);
                abgespielt.play();
                

                for (var index: number = 0; index < notRandomSong.length; index++) { //hier wird der button hellblau gemacht wenn der ton spielt und dunkel wenn nicht
                    if (song[i] == notRandomSong[index]) {
                        var aktuellerindex: number = index;
                        btn = document.querySelector("#button" + aktuellerindex);
                        btn.setAttribute("class", "hell");
                        setTimeout(function (): void {
                            document.querySelector("#button" + aktuellerindex).setAttribute("class", "dunkel");
                        },         1500);
 
                    }
                }


                if (song[i] == song[letzterSound]) {
                    clearInterval(taktgeber);

                    // Gewinner: 
                    if (song.length == playedSounds.length) {//wenn der komplette song stimmt hat der spieler gewonnen und die seite wird dementsprechend geändert
                        var gewonnen: HTMLAudioElement = new Audio(winnerSound);
                        gewonnen.play(); // Gewinnermusik spielt
                        gewonnenFenster (); //Aussehen ändert sich

                    }
                    playedSounds = []; 
                    bisherigeTöne = 0;


                }
                i++; //i=i+1
            },                                  1000);
        }





        //Taktgeber ende
    } else { //wenn nicht, wurde das spiel verloren 
        var verloren: HTMLAudioElement = new Audio(looserTon); 
        verloren.play(); // der Verlierersound kommt
        playedSounds = []; 
        verlorenFenster(); //und das Fenster wird dementsprechend geändert

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
        document.getElementById("nochmal").style.display = "block";

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
    document.getElementById("nochmal").style.display = "block";


} 


window.addEventListener("load", function (): void {

    var startButton: Element = document.querySelector("#start");
    // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (startButton.getAttribute("class") != "dunkel") {
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
    document.getElementById("nochmal").style.display = "none";

}); //ende eventlistener load