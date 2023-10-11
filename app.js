let count = 0;
let counter = document.getElementById("counter");
let entries = document.getElementById("prevEnt");
// let save = document.getElementById("save")

// let welcome_el = document.getElementById("welcome_el")
// let name = "Dhruv"
// let greeting = "Welcome Back, "
// let emoji = "👍👍"

// welcome_el.innerText = greeting + name + emoji


function inc() {
    console.log("clicked");
    count += 1;
    counter.innerText= count
    console.log(count);
 }

function save(){
    let countStr = count + " - "
    entries.textContent += countStr    // entries.textContent = entries.textContent + count + "-"
    console.log(count)
}

function reset(){
    count = 0;
    counter.innerText= count
}