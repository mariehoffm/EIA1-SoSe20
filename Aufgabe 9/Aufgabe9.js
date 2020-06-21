var TaskList = ["task1", "task2"];
//Aus dem Array eine ungeordnete Liste machen:
var list = document.createElement('ul');
// Create a list item for each pups
// and append it to the list
TaskList.forEach(function (pups) {
    var li = document.createElement('li');
    li.textContent = pups;
    list.appendChild(li);
});
var app = document.querySelector('#pupu');
app.appendChild(list);
//document.getElementById("ausgabe").innerHTML = TaskList; // geht nicht.....
//AUFGABE: Array soll als Liste auf der Webseite zu sehen sein --> ja
document.querySelector("button").addEventListener("click", myFunctionListe);
function myFunctionListe() {
    //alert("test"); //--> funktioniert !!
    var task = document.getElementById("input").value;
    alert(task); // --> funktioniert auch omg
}
//wie mach ich das jetzt noch als hübsche liste und nicht so in einer reihe ?
//AUFGABE: Zahl der ToDos anzeigen (Listenlänge) --> ja
document.getElementById("dieliste").innerHTML = TaskList.length + " tasks in total"; //--> funktioniert!
//AUFGABE: Eingabe in Textfeld soll dem Array hinten hinzugefügt werden (bei click auf addTask bzw enter-Taste)
if ("#addTaskButton".onclick) {
    TaskList.push(task); //WIESO GEHT DAS NICHT ?
}
//# sourceMappingURL=Aufgabe9.js.map