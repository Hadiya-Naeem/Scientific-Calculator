let buttons = document.querySelectorAll(".btns")
let equalBtn = document.querySelector(".equals")
let userInput = document.getElementById("input1")
let expr = document.querySelector("#expr")


for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        if (event.target.closest(".delete, #reciprocal, #square, #cube, #base, #power, #exponent, #factorial")) return;
        userInput.value += event.target.innerHTML
    })
}

// reciprocal

let reciprocal = document.getElementById("reciprocal");
reciprocal.addEventListener("click", () => {
    let number = parseFloat(userInput.value);
    console.log(number)

    userInput.value = (1 / number).toString();

})

// square root

let sqRoot = document.getElementById("sqRoot");
sqRoot.addEventListener("click", () => {
    userInput.value = "√"
})

// square

let square = document.getElementById("square");
square.addEventListener("click", () => {
    userInput.value += "²";
})

// cube

let cube = document.getElementById("cube");
cube.addEventListener("click", () => {
    userInput.value += "³";
})

// cubic root 
let cubicRoot = document.getElementById("cubicRoot")




// Exp
let exp = document.getElementById("exponent")
exp.addEventListener("click", () => {
    userInput.value += " × 10^ ";
});

// factorial x!


let fact = document.getElementById("factorial")
fact.addEventListener("click", () => {
    let value = Number(userInput.value);
    let f = 1;

    for (let i = 1; i <= value; i++) {
        f = f * i;
    }

    userInput.value = f;
});

// percentage

// let percentage = document.getElementById("percentage");

// percentage.addEventListener("click", () => {
//     let number = Number(userInput.value);
//     userInput.value = number / 100;
// });


// equal btn 

equalBtn.addEventListener("click", () => {

    let originalExpression = userInput.value;


    expression = originalExpression
        .replaceAll("÷", "/")
        .replaceAll("×", "*");

    let number;
    // sin
    if (expression.includes("sin")) {
        number = expression.replace("sin", "");
        expression = Math.sin(Number(number) * Math.PI / 180);
    }
    else if (expression.includes("cos")) {
        number = expression.replace("cos", "");
        expression = Math.cos(Number(number) * Math.PI / 180);
    }
    else if (expression.includes("tan")) {
        number = expression.replace("tan", "");
        expression = Math.tan(Number(number) * Math.PI / 180);
    }
    else if (expression.includes("In")) {
        number = expression.replace("In", "");
        expression = Math.log(number);
    }
    else if (expression.includes("log")) {
        number = expression.replace("log", "");
        expression = Math.log10(number);
    }
    else if (expression.includes("√")) {
        number = expression.replace("√", "");
        expression = Math.sqrt(number);
    }
    else if (expression.includes("²")) {
        number = expression.replace("²", "");
        expression = Math.pow(Number(number), 2);
    }
    else if (expression.includes("³")) {
        number = expression.replace("³", "");
        expression = Math.pow(Number(number), 3);
    }
    else if (expression.includes("∛")) {
        number = expression.replace("∛", "");
        expression = Math.cbrt(number);
    }
    else if (expression.includes("× 10^")) {
        let parts = expression.split("× 10^");

        let fisrtNum = Number(parts[0]);
        let power = Number(parts[1]);

        expression = fisrtNum * Math.pow(10, power);
    }
    else if (expression.includes("π")) {
        expression = expression.replaceAll("π", "3.142");
        expression = eval(expression);
    }
    else if (expression.includes("%")) {
        let parts = expression.split("%")[0];

        if (parts.includes("*")) {
            let numbers = parts.split("*");
            expression = Number(numbers[0]) * (Number(numbers[1]) / 100);
        }
        else if (parts.includes("/")) {
            let numbers = parts.split("/");
            expression = Number(numbers[0]) / (Number(numbers[1]) / 100);
        }
        else if (parts.includes("+")) {
            let numbers = parts.split("+");
            expression = Number(numbers[0]) + (Number(numbers[1]) / 100);
        }
        else if (parts.includes("-")) {
            let numbers = parts.split("-");
            expression = Number(numbers[0]) - (Number(numbers[1]) / 100);
        }
        else {
            expression = Number(parts) / 100;
        }
    }
    else {
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


