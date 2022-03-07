

let count = 0;
let ele = document.getElementById('count-el');

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
