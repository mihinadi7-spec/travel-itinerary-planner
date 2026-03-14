function startPlan(){
  alert("Welcome! Let's start planning your dream trip.");
}

function startPlan(){
alert("Welcome! Let's start planning your dream trip.");
}


function addPlan(){

let destination = document.getElementById("destination").value;
let date = document.getElementById("date").value;
let activity = document.getElementById("activity").value;
let notes = document.getElementById("notes").value;

if(destination === "" || date === "" || activity === ""){
alert("Please fill destination, date and activity");
return;
}

let table = document.getElementById("planTable").getElementsByTagName("tbody")[0];

let row = table.insertRow();

row.insertCell(0).innerHTML = destination;
row.insertCell(1).innerHTML = date;
row.insertCell(2).innerHTML = activity;
row.insertCell(3).innerHTML = notes;

row.insertCell(4).innerHTML =
'<button class="delete-btn" onclick="deleteRow(this)">Delete</button>';

document.getElementById("destination").value="";
document.getElementById("date").value="";
document.getElementById("activity").value="";
document.getElementById("notes").value="";

}


function deleteRow(button){
let row = button.parentElement.parentElement;
row.remove();
}

function bookTour(tourName){
alert("You selected the " + tourName + " tour!");
}

function sendMessage(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if(name === "" || email === "" || message === ""){
alert("Please fill all fields");
return;
}

alert("Thank you " + name + "! Your message has been sent.");

document.getElementById("contactForm").reset();

}