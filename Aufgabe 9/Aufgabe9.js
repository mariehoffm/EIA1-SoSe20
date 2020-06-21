var TaskList = ["task1", "task2"];
document.getElementById("ausgabe").innerHTML = TaskList; // geht nicht.....
//Array soll als Liste auf der Webseite zu sehen sein
document.querySelector("button").addEventListener("click", myFunctionListe);
function myFunctionListe() {
    //alert("test"); //--> funktioniert !!
    var task = document.getElementById("input").value;
    alert(task); // --> funktioniert auch omg
    //jetzt hinten ans array dran:
    //TaskList.push(task); //WHY???? macht no sinn
}
//AUFGABE: Zahl der ToDos anzeigen (Listenlänge)
document.getElementById("dieliste").innerHTML = TaskList.length; //--> funktioniert!
//AUFGABE: Eingabe in Textfeld soll dem Array hinten hinzugefügt werden (bei click auf addTask bzw enter-Taste)
if ("#addTaskButton".onclick) {
    TaskList.push(task); //WHY???? macht no sinn
}
//# sourceMappingURL=Aufgabe9.js.map