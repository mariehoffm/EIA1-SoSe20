
//Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables
let LIST: string = ["wef"]; //ist immer 0...
let id = 0;

//document.querySelector("#Zähler").innerHTML= (LIST.length + " in total");//wird angezeigt, ist aber immer 0 XXXXXXXXXX 
//console.log(LIST.length); //geht nicht



//Show todays date
const options = {weekday: "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

 // add to do function

 function addToDo (toDo, id, done, trash){

    if(trash){return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";


    const item =  `<li class="item"> \ <i class="fa ${DONE} co" job="complete" id="${id}"></i> \ <p class="text ${LINE}"> ${toDo} </p> \ <i class="fa fa-trash-o de" job="delete" id="${id}"></i> </li>`; 
    
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);


 }



//add an item to the list when the enter key is pressed

document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){ //= enter taste
        const toDo = input.value;

        //if the input isnt empty:
        if(toDo){
            addToDo(toDo, id, false, false); //funktion toDo starten
            LIST.push({
                name : toDo, 
                id : id, 
                done : false, 
                trash : false
            });
            //document.getElementById("#Zähler") = (LIST.length +1); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            //LIST.length = +1; //geht nicht

            id++;
            document.querySelector("#Zähler").innerHTML= (id + " in total");//GEHT XXXXXXXXXX 

        }
        input.value = "";//input feld wieder leer machen danach
    }

});

// Complete to do (wenn man auf den complete button drückt)
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
//set done to true if it was false and fals if it was true:
    LIST[element.id].done = LIST[element.id].done ? false : true;
}


//remove to do function (wenn man auf trash button klickt)
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
    //document.getElementById("#Zähler") = (LIST.length -1); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //LIST.length = -1; //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    id--;
    document.querySelector("#Zähler").innerHTML= (id + " in total");

}

//target the items created dynamically
list.addEventListener("click", function(event){
    const element = event.target; //return the clicked element inside list
    const elementJob = element.attributes.job.value; //complete or delete

    if (elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }
});




/*
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
