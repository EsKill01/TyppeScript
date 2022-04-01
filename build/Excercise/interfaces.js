"use strict";
function calculateInterestOnlyLoanPayment(loanTerms) {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment = loanTerms.principal * interest;
    return 'Te interest only loan payment is ' + payment.toFixed(2);
}
function calculationConventionalLoanPayment(loanTerms) {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
function displayAlert(message) {
    alert('The message is ' + message);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
let addNumber = (x, y) => x + y;
let subTRactNumber = (x, y) => x - y;
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumber;
    }
    else {
        return subTRactNumber;
    }
};
console.log(doCalculation('add')(1, 2));
console.log(addNumber(5, 2));
console.log(subTRactNumber(5, 3));
//displayAlert("Hola mundo");
let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
console.log(interestOnlyPayment);
let conventionalPayment = calculationConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
