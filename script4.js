function capitalizeName() {
    let fullName = document.getElementById('nameInput').value;
    let resultDiv = document.getElementById('result');

    if (fullName === "") {
        resultDiv.innerHTML = "Please enter a name!";
        return;
    }

    // 1. Naam ko tukron mein baantein (Space ki wajah se)
    let words = fullName.toLowerCase().split(' ');

    // 2. Har tukray (word) ka pehla letter bara karein
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // 3. Sab ko wapas jorr dein
    let finalName = capitalizedWords.join(' ');

    resultDiv.innerHTML = `Converted Name: <b>${finalName}</b>`;
}