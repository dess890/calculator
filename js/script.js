// const plus = document.querySelector("+")
// const minus = document.querySelector("-")
// const multi = document.querySelector("*")
// const divid = document.querySelector("/")
// const seven = document.querySelector("#7")
// const eight = document.querySelector("#8")
// const nine = document.querySelector("#9")
// const four = document.querySelector("#4")
// const five = document.querySelector("#5")
// const six = document.querySelector("#6")
// const one = document.querySelector("#1")
// const two = document.querySelector("#2")
// const three = document.querySelector("#3")
// const zero = document.querySelector("#0")
// const eight = document.querySelector("#.")
// const clear = document.querySelector("#c")


// grabbing the input div (the display on our calculator)
const display = document.getElementById("input");
// grabbing the div that houses our calculator
const buttons = document.getElementsByClassName("buttons")[0];
// using [0] because getElementsByClassName returns a list, and the one we want is the first item (technically only)
// an empty array to store the values punched in
let buttonSequence = [];
buttons.addEventListener('click', function(event){
    if(event.target.innerHTML !== "="){
        buttonSequence += event.target.innerHTML;
        display.innerHTML = buttonSequence;
        if(event.target.innerHTML === "C"){
            display.innerHTML = "";
            buttonSequence = []}
    }
    else{
        let answer = eval(buttonSequence); 
        display.innerHTML = answer; 
        buttonSequence = [answer]};
})