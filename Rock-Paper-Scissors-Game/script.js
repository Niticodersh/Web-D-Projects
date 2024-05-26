
let min = 1;
let max = 3;
let computer = 0;
let scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || { Wins: 0, Losses: 0, Ties: 0 };
win_loss_tie_info()

function win_loss_tie_info() {
  document.querySelector('.js-win-loss-tie').innerHTML = `Wins: ${scoreboard.Wins}, Losses: ${scoreboard.Losses}, Ties: ${scoreboard.Ties}`
}

function result_display(computer, user, result) {
  document.querySelector('.js-result-display').innerHTML = `${result} <br><br> You picked <img class="move-icon" src="images/${mapping(user)}-emoji.png">. Computer picked <img class="move-icon" src="images/${mapping(computer)}-emoji.png">. `
}

function reset_result_display() {
  document.querySelector('.js-result-display').innerHTML = ``;
}

function computerPicker() {
  computer = Math.floor(Math.random()*(max - min +  1) + min); 
}

function mapping(num) {
    if (num == 1) {return 'Rock';}
    else if (num == 2) {return 'Paper';}
    else if (num == 3) {return 'Scissors';}
}

function evaluator(computer, user) {
  result = '';
  if (computer == user) { result =  'Tie Occured!'; scoreboard.Ties+=1;}
  else if ((user==1 && computer==2) || (user==2 && computer==3) || (user==3 && computer==1)) { result =  'You lose!'; scoreboard.Losses+=1;}
  else 
  { result =  'You win!'; scoreboard.Wins+=1;}
  win_loss_tie_info()
localStorage.setItem('scoreboard',JSON.stringify(scoreboard));
result_display(computer, user, result);

//         alert(`You picked ${mapping(user)}. Computer picked ${mapping(computer)}. ${result}.
// Wins: ${scoreboard.Wins}, Losses: ${scoreboard.Losses}, Ties: ${scoreboard.Ties}`);
}
