const today = [];
const done = [];


function checkTime() {
    var date = new Date(); 
    var hours = date.getHours();
    var cases = {
        1: "Good night",
        2: "Good morning",
        3: "Good afternoon",
    }
    var messege = document.getElementById("welcome"); 
    if (hours < 12) {
        messege.innerHTML = cases[2];
    } else if (hours >= 12 && hours < 18) {
        messege.innerHTML = cases[3];
    } else if (hours >= 18) {
        messege.innerHTML = cases[1];
    }
}

function addTask() {
    var bottum = document.getElementById('add')

    bottum.addEventListener('click', function() { 
        var menu = document.getElementById('add_task')
        menu.style.display = 'block'
    });

    var close = document.getElementById('cancel')
    close.addEventListener('click', function() {
        var menu = document.getElementById('add_task')
        menu.style.display = 'none'
    });
    
    var add = document.getElementById('add_task_button')
    add.addEventListener('click', function() {
        var taskInput = document.getElementById('task')
        var task = taskInput.value
        
        if (task === '') {
            alert("You must write something!");
            return;
        }
        
        var menu = document.getElementById('add_task')
        menu.style.display = 'none'
        today.push(task); 
        printToDoList();
    });
}
    
//
//print the to do list
function printToDoList() {
    const ul = document.getElementById("list");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    const doneDiv = document.getElementById("done");


    for (let i = 0; i < today.length; i++) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                const doneLi = document.createElement("li");
                doneLi.textContent = this.nextSibling.textContent;
                doneLi.style.textDecoration = "line-through"; 
                setTimeout(() => {
                    doneDiv.appendChild(doneLi); 
                    ul.removeChild(this.parentNode);
                }, 1000);
            }
        });
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(today[i]));
        ul.appendChild(li);
    }
}



checkTime();
addTask();