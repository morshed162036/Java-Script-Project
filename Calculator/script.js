class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }
    appendNumber(number){
        if((number ==='.') && (this.currentOperand.includes('.'))) return;
        if(equalFlag==false){
        this.currentOperand = this.currentOperand.toString() + number.toString(); 
        //console.log(number);
        }
        else{
            this.clear();
            this.currentOperand = this.currentOperand.toString() + number.toString();
            equalFlag = false;
        }
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current ;
                break;
            case '-':
                computation = prev - current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case '*':
                computation = prev * current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';

    }
    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = '';
        }
        else{
            integerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits:0});
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        }
        else{
            return integerDisplay;
        }
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation == null || this.operation == undefined){
            this.previousOperandTextElement.innerText = '';
            }
        else{
           
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        
        }
        
    }
}


const allClearButton = document.querySelector('[data-all-clear]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButtons = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operant]');
const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);
let equalFlag = false;
numberButtons.forEach((button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
}))

operationButtons.forEach((button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
}))

equalsButton.addEventListener('click', button =>{
    equalFlag = true;
    calculator.compute();
    calculator.updateDisplay();
})
allClearButton.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButtons.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
})