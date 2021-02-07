var computerScore = 0;
var playerScore = 0;
const playerScore_span = document.getElementById('playerScore');
const computerScore_span = document.getElementById('computerScore');
const scoreboard_div = document.querySelector('scoreBoard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissor');

function computerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You chose ${playerChoice} and computer chose ${computerChoice}. That means You won!`
    document.getElementById(playerChoice).classList.add('green-border');
     setTimeout(() => document.getElementById(playerChoice).classList.remove('green-border'), 400)
}
function lose(playerChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = `You chose ${playerChoice} and computer chose ${computerChoice}. That means You lost...`
    document.getElementById(playerChoice).classList.add('red-border');
    setTimeout(() => document.getElementById(playerChoice).classList.remove('red-border'), 400)
}
function draw(playerChoice, computerChoice) {
    result_p.innerHTML = `You chose ${playerChoice} and computer chose ${computerChoice}. That means...Its a draw`
    document.getElementById(playerChoice).classList.add('gray-border');
    setTimeout(() => document.getElementById(playerChoice).classList.remove('gray-border'), 400)
}

function click(playerChoice) {
    const computersChoice = computerChoice();
    switch (playerChoice + computersChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
          win(playerChoice, computersChoice);
          break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
          lose(playerChoice, computersChoice);
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
          draw(playerChoice, computersChoice);
          break;
    }


}

function main() {
  rock_div.addEventListener('click', () => {
    click("rock");
  });

  paper_div.addEventListener('click', () => {
    click("paper");
  });

  scissor_div.addEventListener('click', () => {
    click("scissor")
  });
}
main();
