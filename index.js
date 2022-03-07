//document.getElementById("count-el").innerText = 5;

let count = 0;
let ele = document.getElementById('count-el');
let message = "You have three new notifications";
let messageToUser = message + "," + "Panos";



function increment() {
    count++;
    ele.textContent = count;
};

let saveEl = document.getElementById('save-el');

function save() {
    let num = count + " - ";
    saveEl.textContent += num;
    ele.textContent = 0;
    count = 0;

}

let welcomeEl = document.getElementById('welcome-el')
let name = "Panos";
let greeting = "Welcome back ";

welcomeEl.innerText = greeting + name;
welcomeEl.innerHTML += "👏";