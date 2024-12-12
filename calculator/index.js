function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
    
    if(isNaN(num1)||isNaN(num2)){
        result = "Please enter 2 numbers!";
    }

    else{
        switch(operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'div':
                if(num2 === 0){
                    result = "Division by 0 is unidentified!"
                    break; 
                }

                else{
                    result = num1 / num2;
                    break;
                }
            default:
                result = "Please enter 2 numbers!";
        }
    }

    document.getElementById('result').innerText = `Result: ${result}`;

    if (!isNaN(result)) {
        const historyItem = document.createElement('li');
        let operationText;

        switch (operation) {
            case 'add':
                operationText = `${num1} + ${num2} = ${result}`;
                break;
            case 'sub':
                operationText = `${num1} - ${num2} = ${result}`;
                break;
            case 'multi':
                operationText = `${num1} × ${num2} = ${result}`;
                break;
            case 'divide':
                operationText = `${num1} ÷ ${num2} = ${result}`;
                break;
        }

        historyItem.textContent = operationText;
        document.getElementById('history').appendChild(historyItem);
    }
}