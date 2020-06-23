

var TaskList: string [] = [];


//Aus dem Array eine ungeordnete Liste machen:
var list = document.createElement('ul');

// eine Liste für jedes pups machen
// und hinten an liste anhängen
TaskList.forEach(function (pups) {
	var li = document.createElement('li');
	li.textContent = pups;
	list.appendChild(li);
});

var app = document.querySelector('#pupu');
app.appendChild(list);



//AUFGABE: Array soll als Liste auf der Webseite zu sehen sein --> ja
document.querySelector("button").addEventListener("click", myFunctionListe);

function myFunctionListe(){
    //alert("test"); //--> funktioniert !!
    let task = document.getElementById("input").value;
    //alert(task); // --> funktioniert auch omg
    //jetzt hinten ans array dran:
    TaskList.push(task); 
    //alert("huhu: "+TaskList);//funktioniert 

        //JETZT: als Liste anzeigen statt komma aufzählung XXXXXXXXXXXXXXXXXXXXXXXXXXX
    document.getElementById("ausgabe").innerHTML = TaskList;

    //document.getElementById("ausgabe").innerHTML = TaskList[0]; // undefined
    //document.getElementById("ausgabe").innerHTML = TaskList[1]; // undefined
    //document.getElementById("ausgabe").innerHTML = TaskList[2]; //wird angezeigt

    for (let i: number = 0;  i < TaskList;  i++) {
        document.getElementById("ausgabe").innerHTML = TaskList[i]; //GEHT AUCH NICHT 
        console.log(TaskList[i]);
    }

    //AUFGABE: Zahl der ToDos anzeigen (Listenlänge) --> ja
    document.getElementById("dieliste").innerHTML = TaskList.length + " in total"; //--> funktioniert   
}

}


//DANN: wenn neues array element hinzugefüht wird kommen trash button und check mark direkt mit.. XXXXXXXXXXXXXXXXXXXXXXXXXXX


 





/*
   for (let i = 0; i < TaskList.length; i++) {
        console.log(TaskList[i]);
     }


    let i: number = 0;	// Zählervariable auserhalb der Schleife definieren
    do {
        console.log(TaskList[i]);
        i++;
    } while (i < TaskList) // Die Bedingung nach dem Codeblock
*/





