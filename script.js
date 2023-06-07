
x = 10;
y = 0;
let para = document.getElementById('para');
let para2 = document.getElementById('para2');
let para3 = document.getElementById('para3');
let para4 = document.getElementById('para4');




function check() {
    let arr = ["Inside which HTML element do we put the JavaScript?", "Which of the following is NOT a valid JavaScript variable name?", "What is the correct way to declare a JavaScript array?", "Which keyword is used to define a function in JavaScript?", "How do you check if a variable is an array in JavaScript?", "What does the 'this' keyword refer to in JavaScript?", "Which method is used to remove the last element from an array in JavaScript?", "What is the purpose of the 'addEventListener' method in JavaScript?", "Which of the following is NOT a JavaScript data type?", "How do you declare a constant variable in JavaScript?",];
    let math = Math.floor(Math.random() * 10);
    math
    para4.innerText = arr[math]
}

setInterval(check, 3000)

setInterval(function assignment1() {
    para.innerHTML += "Hello World ";
}, 2000);


function assignment2() {
    if (x == 0) {
        clearInterval(a)
    } else {
        para2.innerHTML = --x;
    }
}

function assignment3() {
    y = y + 10;
    if (y == 200) {
        clearInterval(b)
    } else {
        para3.style.marginLeft = y + "px";
    }
}



b = setInterval(assignment3, 100)
a = setInterval(assignment2, 1000)

// setInterval(assignment4(){
//     para4.innerHTML = arr[math];
// }, 5000)