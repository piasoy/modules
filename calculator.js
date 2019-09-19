var calcObj ={
    add : function add(num1, num2){
        let answer = num1 + num2;
        console.log(answer);
    },
    subtract : function subtract(num1, num2){
        let answer = num1 - num2;
        console.log(answer);
    },
    multiply : function multiply(num1, num2){
        let answer = num1 * num2;
        console.log(answer);
    },
    divide : function divide(num1, num2){
        let answer = num1 / num2;
        console.log(answer);
    }
}

// function add(num1, num2){
//     let answer = num1 + num2;
//     console.log(answer);
// }

// function subtract(num1, num2){
//     let answer = num1 - num2;
//     console.log(answer);
// }

// function multiply(num1, num2){
//     let answer = num1 * num2;
//     console.log(answer);
// }

// function divide(num1, num2){
//     let answer = num1 / num2;
//     console.log(answer);
// }

module.exports = calcObj;