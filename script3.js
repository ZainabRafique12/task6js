// Scenario 1: Array wala logic
function findInArray() {
    let rawInput = document.getElementById('arrayInput').value;
    let target = parseFloat(document.getElementById('targetNumber').value);
    let resultDiv = document.getElementById('arrayResult');

    let arr = rawInput.split(',').map(num => parseFloat(num.trim()));

    let index = arr.indexOf(target);

    if (index === -1) {
        resultDiv.innerHTML = "THIS NUMBER IS NOT PRESENT IN THE ARRAY!";
    } else if (index === arr.length - 1) {
        resultDiv.innerHTML = "This is the last number in the array.";
    } else {
        let nextNum = arr[index + 1];
        resultDiv.innerHTML = `The next number is: <b>${nextNum}</b>.`;
    }
}

// Scenario 2
function findNextValue() {
    let inputVal = document.getElementById('singleInput').value;
    let resultDiv = document.getElementById('singleResult');

    if (inputVal === "") {
        resultDiv.innerHTML = "Enter number first!";
        return;
    }

    let num = parseFloat(inputVal);
    let nextNum;
    let type;
if (inputVal.includes('.')) {
        type = "Float";
        nextNum = (num + 0.1).toFixed(1); 
    } else {
        type = "Integer";
        nextNum = num + 1;
    }
     type = Number.isInteger(num) ? "Integer" : "Float";
    
    resultDiv.innerHTML = `Type is: ${type}, and your Next Number is: <b>${nextNum}</b>`;
}