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


var today = ["Clean the house", "Wash the dishes", "Do the laundry",];
var done = [];

function printToDoList() {
    var ul = document.getElementById("today");
    var doneDiv = document.getElementById("done"); // Get the done div
    for (var i = 0; i < today.length; i++) {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                var doneLi = document.createElement("li");
                doneLi.textContent = this.nextSibling.textContent;
                doneLi.style.textDecoration = "line-through"; 
                setTimeout(function() {
                    doneDiv.appendChild(doneLi); 
                    ul.removeChild(this.parentNode);
                }.bind(this), 1000);
            }
        });
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(today[i]));
        ul.appendChild(li);
    }

    //code to add elements to the list

    getElementById("add").addEventListener("click", function() {
        
    }


} 



printToDoList();
checkTime();