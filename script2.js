
    
        function convertTime() { 
            const hours = document.getElementById('hoursInput').value;
            
            const result = document.getElementById('result');
         
            if (hours === "" || hours < 0) {
                result.innerHTML = "Please enter a valid number!";
                result.style.color = "red";
                return;
            }

            const seconds = hours * 3600;

            result.innerHTML = `${hours} Hours = ${seconds.toLocaleString()} Seconds`;
            result.style.color = "#2c3e50";
        }
  