interface Loan{
    principal: number,
    interestRate: number
}

interface ConventionalLoan extends Loan{
    months: number
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string{
    let interest = loanTerms.interestRate / 1200;
    let payment;

    payment = loanTerms.principal * interest;

    return 'Te interest only loan payment is ' + payment.toFixed(2);
}

function calculationConventionalLoanPayment(loanTerms: ConventionalLoan): string{
    let interest: number = loanTerms.interestRate / 1200;
    let payment: number;

    payment = loanTerms.principal * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

function displayAlert(message: string) {
    alert('The message is ' + message);
}

function sum(input: number[]): number {        
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
return total;
}

type calculador = (x: number, y: number) => number;

let addNumber : calculador = (x: number, y: number): number => x + y;
let subTRactNumber: calculador = (x: number, y:number): number => x - y;

let doCalculation = (operation: 'add'| 'subs') : calculador =>{
    if (operation === 'add'){
        return addNumber;
    }
    else{
        return subTRactNumber;
    }
}

console.log(doCalculation('add')(1,2));

console.log(addNumber(5,2));
console.log(subTRactNumber(5,3));

//displayAlert("Hola mundo");

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
console.log(interestOnlyPayment);

let conventionalPayment = calculationConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"

