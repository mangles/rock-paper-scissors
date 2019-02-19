let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function letterToWord(letter){
  if (letter === "r") return "Rock"
  if (letter === "p") return "Paper"
  return "Scissors"
}

function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${letterToWord(user)} beats ${letterToWord(computer)}. You win!`;
  const userChoice_div = document.getElementById(user);
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500)
}

function lose(user, computer){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${letterToWord(user)} loses to ${letterToWord(computer)}. You lost!`;
  const userChoice_div = document.getElementById(user);
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500)
}

function draw(user, computer){
  result_p.innerHTML = `${letterToWord(user)} equals to ${letterToWord(computer)}. It's a draw!`;
  const userChoice_div = document.getElementById(user);
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500)
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + "-" + computerChoice) {
    case "r-s":
    case "p-r":
    case "s-p":
      win(userChoice, computerChoice);
      break;
    case "r-p":
    case "p-s":
    case "s-r":
      lose(userChoice, computerChoice);
      break;
    case "r-r":
    case "p-p":
    case "s-s":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"))
  paper_div.addEventListener('click', () => game("p"))
  scissors_div.addEventListener('click', () => game("s"))
}

main();
