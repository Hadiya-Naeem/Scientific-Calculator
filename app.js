let buttons = document.querySelectorAll(".btns")
let equalBtn = document.querySelector(".equals")
let userInput = document.getElementById("input1")
let expr = document.querySelector("#expr")


for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        if (event.target.closest(".delete")) return;
        userInput.value += event.target.innerHTML
    })
}

// reciprocal
let reciprocal = document.getElementById("reciprocal");
reciprocal.addEventListener("click", () => {
  let number = parseFloat(userInput.value);

    userInput.value = (1 / number).toString();
   
})





// equal btn 

equalBtn.addEventListener("click", () => {

    let originalExpression = userInput.value;

    
 expression = originalExpression
        .replaceAll("÷", "/")
        .replaceAll("×", "*");
        
 let  number;
    // sin
    if (expression.includes("sin")) {
         number = expression.replace("sin", "");
        expression = Math.sin(Number(number) * Math.PI / 180);
    }
    else if(expression.includes("cos")){
         number = expression.replace("cos", "");
        expression = Math.cos(Number(number) * Math.PI / 180);
    }
    else if(expression.includes("tan")){
         number = expression.replace("tan", "");
        expression = Math.tan(Number(number) * Math.PI / 180);
    }
    else if(expression.includes("In")){
         number = expression.replace("In", "");
        expression = Math.log(number);
    }
    else if(expression.includes("log")){
         number = expression.replace("log", "");
        expression = Math.log10(number);
    }
    else{
                expression = eval(expression);

    }


         expr.innerHTML = originalExpression;


    userInput.value = expression;
});



// All Clear

let allClear = document.querySelector(".allClear")
allClear.addEventListener("click", () => {
    userInput.value = ""
    expr.innerHTML = ""
})

// Clear

let del = document.querySelector(".delete")
del.addEventListener("click", () => {
    userInput.value = userInput.value.slice(0, -1);
})


