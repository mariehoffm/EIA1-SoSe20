var TaskList = ["task1", "task2"];
document.getElementById("ausgabe").innerHTML = TaskList; // geht nicht.....
//Array soll als Liste auf der Webseite zu sehen sein
//document.getElementById("dieliste").innerHTML = TaskList; //geht nicht weil Listenlänge überschreibt, ist außerdem keine Liste sondern Aufzählung
//console.log(input.value) //geht nicht omg why
document.querySelector("button").addEventListener("click", myFunctionListe);
function myFunctionListe() {
    //alert("test"); //--> funktioniert !!
    var task = document.getElementById("input").value;
    alert(task); // --> funktioniert auch omg
    //jetzt hinten ans array dran:
    TaskList.push('testttt'); //WHY???? macht no sinn
}
/* GEHT ALLES NICHT:

  function ListeBitte() {
    var x = document.getElementById("input").value;
    document.getElementById("ausgabe").innerHTML = x;
  }


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
//# sourceMappingURL=Aufgabe9.js.map