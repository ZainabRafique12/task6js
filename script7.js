function calculate() {

    let val1 = document.getElementById('num1').value;
    let val2 = document.getElementById('num2').value;
    let resultBox = document.getElementById('result');

    if (val1 !== "" && val2 === "") {
        resultBox.value = "NaN";
    } 
    else if (val1 !== "" && val2 !== "") {
        let sum = parseFloat(val1) + parseFloat(parseFloat(val2));
        resultBox.value = sum;
    } 
    else {
        resultBox.value = "";
    }
}