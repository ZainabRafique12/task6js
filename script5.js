function calculateBMI(){
    let weight =parseFloat(document.getElementById("weight").value);
    let height =parseFloat(document.getElementById("height").value);
    let result = document.getElementById("result");

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        result.innerHTML ="Please enter valid numbers for weight and height!";
        return;
    }
    let heightM = height / 100; // convert cm to meters heightM is a new vriable
   
    let BMI =weight/(heightM * heightM); //BMI FORMULA
    

    let category = "";
    if(BMI < 18.5){
        category = "Underweight";
        bgColor = "Orange";
    } else if(BMI >= 18.5 && BMI < 25){
        category = "Normal weight";
        bgColor = "green";
    } else if(BMI >= 25 && BMI < 30){
        category = "Overweight";
        bgColor = "darkorange";
    } else {
        category = "Obese";
        bgColor = "red";
    }
    result.innerHTML = "Your BMI is: " + BMI.toFixed(2) + " (" + category + ")";
}