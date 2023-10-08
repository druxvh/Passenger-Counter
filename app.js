let count = 0;
let counter = document.getElementById("counter");



function inc() {
    console.log("clicked");
    count += 1;
    counter.innerText= count
    console.log(count);
 }

 