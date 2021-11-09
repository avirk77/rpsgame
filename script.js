let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const rst_div = document.getElementById("rst");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Rock";
    case "p":
        return "Paper";
    case "s":
        return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.<br> You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout (() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. <br> You lost!`;
  userChoice_div.classList.add("red-glow");
  setTimeout (() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord}. <br> It's draw!`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "sr":
      case "rp":
      case "ps":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}
function reset(){
  userScore_span.innerHTML = computerScore_span.innerHTML = 0;
  userScore = computerScore = 0;
  result_div.innerHTML = "Play again!"
}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();