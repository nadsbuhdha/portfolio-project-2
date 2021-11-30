//score feedback 
window.onload = function scoreFeedback() {
    const finalScores = document.getElementById('player-score');
    const myScore = localStorage.getItem('finalScore');
    const feedback = document.getElementById('feedback');
    finalScores.innerText = myScore;
    
    
    
    //  if statement to change colour of users final score 
    if (myScore <= 0 ) { 
        finalScores.style.color = 'red';
    }
    else {
        finalScores.style.color = 'green';
    }
    
    // if statement to display feedback message on score
    if (myScore >= 10 ) {
        feedback.innerHTML = "Well done! Looks like you've been revising!";
    }
    else if (myScore >= 1 ) {
        feedback.innerHTML = "Not bad! Keep revising";
    }
    
    else if (myScore <= 0) {
        feedback.innerHTML = "I think you need to do a little bit more revising!";
    }
    
    };