//sounds die geclickt (& gespielt) werden in einem array speichern
var playedSounds: string [] = [];
var richtigGespielt: Boolean = false;

//array festlegen mit 5 random tönen --> später random machen
var song: string [] = ["/sounds/sound_boing.mp3", "/sounds/sound_boing_2.mp3", "/sounds/sound_kids_booo.mp3", "/sounds/sound_squeaking.mp3", "/sounds/sound_laugh.mp3"];
var looserTon: string = "/sounds/looserSound.mp3";
var winnerSound: string = "/sounds/winnerSound.mp3";
var c: number = 0; //Zähler für vom User gespielte Töne (Button Clickzähler)
//new Audio(song[0]).play(); 

//window.addEventListener("load", function() { --> stattdessen start game button
    //erstmal den ersten Ton abspielen:
    //new Audio(song[0]).play(); 
//});

document.getElementById("start").addEventListener("click", function (): void {
    new Audio(song[0]).play(); //zu spielender erster Ton
});


//Ton soll abgespielt werden wenn auf den entsprechenden button geklickt wird
//erster Ton - boing
//document.querySelector("#playbutton").addEventListener("click", function() {DrumMachine(Lied01,4);});
document.querySelector("#button1").addEventListener("click", function(): void {ButtonFunktion("button1", "/sounds/sound_boing.mp3"); });
document.querySelector("#button2").addEventListener("click", function(): void {ButtonFunktion("button2", "/sounds/sound_boing_2.mp3"); });
document.querySelector("#button3").addEventListener("click", function(): void {ButtonFunktion("button3", "/sounds/sound_kids_booo.mp3"); });
document.querySelector("#button4").addEventListener("click", function(): void {ButtonFunktion("button4", "/sounds/sound_squeaking.mp3"); });
document.querySelector("#button5").addEventListener("click", function(): void {ButtonFunktion("button5", "/sounds/sound_laugh.mp3"); });

function ButtonFunktion(buttonname: string, samplename: string): void {
    buttonname = "#" + buttonname;
    console.log("ich bin in funktion" + " Button: " + buttonname + " sample: "  + samplename);
//Design:
    var btn: Element = document.querySelector(buttonname);
    // wenn dem button1 keine Klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
    if (btn.getAttribute("class") != "hell") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel hat, dann bekommt er sie jetzt
      btn.setAttribute("class", "hell"); // button1.dunkel
      }
    setTimeout(function(): void{ btn.setAttribute("class", "dunkel"); }, 3000);
//Design


 
// wenn der Button geklickt wurde werden alle vom User bisher richtig gespielten Töne(array playedSounds) abgespielt(Zähler c),
// + der nächste neue Ton aus Array song (song[w + 1])
    playedSounds.push(samplename); // wir speichern den gespielten Ton in array playedSounds
    console.log("letzter gespielter Ton: " + playedSounds[c]);
// Als erstes hier der Vergleich von song[c] mit playedSounds[c]
    if (playedSounds[c] == song[c]) { // Vergleich letzter gespielter Ton mit Vorgabe
        console.log(playedSounds[c] + " ist gleich " + song[c]);
        richtigGespielt = true; // letzter Ton wurde richtig gespielt
        c++; // wenn der Vergleich richtig war setzen wir den Clickzähler "c" um 1 hoch
        console.log("nächster zu erwartender Ton wäre: " + song[c]);
    // wenn richtig gespielt wurde spielen wir Array Sound mit einem weiteren neuen Ton (bis position c):



    // Taktgeber start
        let i: number = 0; // let statt var, i brauchen wir nur hier in diesem Block
        let taktgeber: number = setInterval(function (): void {
        // es wird abgespielt was der User bisher gespielt hatte:
            var abgespielt: HTMLAudioElement = new Audio(song[i]);
            abgespielt.play();

            if (song[i] == song[c]) { 
                clearInterval(taktgeber);

        // Gewinner:
                if (song.length == playedSounds.length) {
                    var gewonnen: HTMLAudioElement = new Audio(winnerSound);
                    gewonnen.play();      
                }


            }
            i++; //i=i+1
        },                                  500);
    //Taktgeber ende
    } else {
        var verloren: HTMLAudioElement = new Audio(looserTon);
        verloren.play();
    } // ende von if (playedSounds[c] == song[c])


 } // ende von ButtonFunktion




window.addEventListener("load", function(): void {
  var btn1: Element = document.querySelector("#button1");
  // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
  if (btn1.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
    btn1.setAttribute("class", "dunkel"); // button1.dunkel
    }
  var btn2: Element = document.querySelector("#button2");
  // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
  if (btn2.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
    btn2.setAttribute("class", "dunkel"); // button1.dunkel
    }   
  var btn3: Element = document.querySelector("#button3");
  // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
  if (btn3.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
    btn3.setAttribute("class", "dunkel"); // button1.dunkel
    }
  var btn4: Element = document.querySelector("#button4");
  // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
  if (btn4.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
    btn4.setAttribute("class", "dunkel"); // button1.dunkel
    }
  var btn5: Element = document.querySelector("#button5");
  // wenn dem button1 keine klasse zugeordnet ist bekommt er Klasse dunkel (button1.dunkel)
  if (btn5.getAttribute("class") != "dunkel") {// wenn der Button beim Laden der Seite nicht die Klasse dunkel dann bekommt er sie jetzt
    btn5.setAttribute("class", "dunkel"); // button1.dunkel
    }
 


    
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