

let TaskList: string [] = ["task1", "task2"];

//Array soll als Liste auf der Webseite zu sehen sein
//document.getElementById("dieliste").innerHTML = TaskList; //geht nicht weil Listenlänge überschreibt, ist außerdem keine Liste sondern Aufzählung
//console.log(input.value) //geht nicht omg why

document.querySelector("#addTaskButton").addEventListener("click", function() {ListeBitte();});



  function ListeBitte() {
    var x = document.getElementById("input").value;
    document.getElementById("ausgabe").innerHTML = x;
  }

/* GEHT ALLES NICHT:

function ListeBitte(){
    if (document.form.input.value != "") {
        //dann in Array anhängen mit .push
        alert(document.getElementById("addTaskButton").value);
    }
}
*/

//Zahl der ToDos anzeigen (Listenlänge)
document.getElementById("dieliste").innerHTML = TaskList.length; //--> funktioniert!


//Eingabe in Textfeld soll dem Array hinten hinzugefügt werden (bei click auf addTask bzw enter-Taste)
//TaskList.push(input.value)

