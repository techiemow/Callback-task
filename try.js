 
    const updateDiv = (count) => {
        const div = document.querySelector(".countdown");
        div.textContent = count;
    };

    
    const countdow = (count) => {
        const countdownIteration = () => {
            if (count === 10) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 9) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 8) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 7) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 6) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 5) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 4) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 3) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 2) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } else if (count === 1) {
                updateDiv(count);
                count--;
                setTimeout(countdownIteration, 1000); 
            } 
            else {
                updateDiv("Happy Independance Day");
            }
        };
        countdownIteration(); 
       
    };

    let countdown = (5, () => {
        console.log("Countdown completed!"); 
    });
    