const choices = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');
const userScoreSpan = document.getElementById('userScore');
const compScoreSpan = document.getElementById('compScore');
let userScore = 0;
let compScore = 0;

document.querySelectorAll('.choice').forEach(btn => {
  btn.addEventListener('click', () => {
    const userChoice = btn.getAttribute('data-choice');
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === compChoice) {
      result = `Draw! You both chose ${capitalize(userChoice)}.`;
    } else if (
      (userChoice === 'rock' && compChoice === 'scissors') ||
      (userChoice === 'paper' && compChoice === 'rock') ||
      (userChoice === 'scissors' && compChoice === 'paper')
    ) {
      result = `You win! ${capitalize(userChoice)} beats ${capitalize(compChoice)}.`;
      userScore++;
    } else {
      result = `You lose! ${capitalize(compChoice)} beats ${capitalize(userChoice)}.`;
      compScore++;
    }
    resultDiv.textContent = result;
    userScoreSpan.textContent = userScore;
    compScoreSpan.textContent = compScore;
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}