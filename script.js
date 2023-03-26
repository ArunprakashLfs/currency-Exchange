//getting input
let inputvalEl = document.getElementById("input-value");
let inputCurEl = document.getElementById("input-currency");
let outputvalEl = document.getElementById("output-value");
let outputCurEl = document.getElementById("output-currency");
let formEl = document.getElementById("form");


//add event listners
formEl.addEventListener("submit", function(e){
    e.preventDefault();
    let input = inputvalEl.value;
    let inputcur = inputCurEl.value;
    console.log(input, inputcur);
})