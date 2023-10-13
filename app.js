let count = 0;
let counter = document.getElementById("counter");
let entries = document.getElementById("prevEnt");


function inc() {
    count += 1;
    counter.textContent= count
    console.log("Incremented by 1 : ",count);
 }

function save(){
    let countStr = count + " - "
    entries.textContent += countStr    // entries.textContent = entries.textContent + count + "-"
    console.log("Data Saved : ", count)
    count = 0;
    counter.textContent= count
    

}
//Reset Function
function reset(){
    count = 0;
    counter.textContent= count
    console.log("Counter Reset")
}

