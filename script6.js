    function handleArrayTask() {
    
    let randomArray = [];
    let size = Math.floor(Math.random() * 5) + 5; // size of array

    for (let i = 0; i < size; i++) {
       
        let randomNum = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNum);
    }

    
    let firstElement = randomArray[0];
    let lastElement = randomArray[randomArray.length - 1];

    
    document.getElementById("full-array").innerText = `[ ${randomArray.join(", ")} ]`;
    document.getElementById("first-el").innerText = firstElement;
    document.getElementById("last-el").innerText = lastElement;
}
