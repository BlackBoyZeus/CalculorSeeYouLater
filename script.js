document.querySelector('.updateScore').addEventListener('click', function() {
    const scoresString = document.getElementById('scores').value;
    const scoresArray = scoresString.split(',').map(score => parseFloat(score)).filter(score => !isNaN(score));

    // Check if there are any valid scores
    if (scoresArray.length === 0) {
        document.querySelector('.display').value = "No valid scores provided.";
        return;
    }

    // Calculate the average
    const total = scoresArray.reduce((sum, score) => sum + score, 0);
    const averageScore = total / scoresArray.length;
    
    // Convert to percentage and display
    document.querySelector('.display').value = `${averageScore.toFixed(4)}%`;
});


// script.js
const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const history = document.querySelector('.history');

let currentInput = "";

buttons.addEventListener('click', function(event) {
    const value = event.target.getAttribute('data-value');
    
    if (value) {
        currentInput += value;
        display.value = currentInput;
    }
    
    if (event.target.classList.contains('equals')) {
        try {
            let result = eval(currentInput.replace('^', '**'));
            display.value = result;
            history.innerHTML += `<div>${currentInput} = ${result}</div>`;
            currentInput = result.toString();
        } catch (error) {
            display.value = 'Error';
            currentInput = '';
        }
    }
    
    if (event.target.classList.contains('clear')) {
        currentInput = '';
        display.value = '';
    }
});

