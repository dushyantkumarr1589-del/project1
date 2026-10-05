let againBtn = document.querySelector(".again");
let gueessNumber = document.querySelector(".number");
let guessValue = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let gameScore = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

// click event for check
checkBtn.addEventListener("click", () => {
  // 1. get input value
  let val = Number(guessValue.value);

  // 2. check if input is empty
  if (!val) {
    // 2.1 show a message to enter a value
    msg.textContent = "Enter a value";
  }
  // 3. if random value is same as guess value
  else if (val === randomNumber) {
    // 3.1 change background color to green
    document.body.style.backgroundColor = "green";
    // 3.2 instead of ? show the random value
    gueessNumber.textContent = randomNumber;
    // 3.3 show correct number message
    msg.textContent = "Correct Number!";
    // 3.4 check if score is greater than highScore
    if (score > Number(highScore.textContent)) {
      // 3.4.1 update highscore value
      highScore.textContent = score;
    }
  }
  // 4. if input value is less than random
  else if (val < randomNumber) {
    // 4.1 show message too low
    msg.textContent = "Too low!";
    // 4.2 decrement score by 1
    score--;
    // 4.3 update the DOM value of score
    gameScore.textContent = score;
  }
  // 5. if input value is greater than random
  else if (val > randomNumber) {
    // 5.1 show message too high
    msg.textContent = "Too high!";
    // 5.2 decrement score by 1
    score--;
    // 5.3 update the DOM value of score
    gameScore.textContent = score;
  }
});

// functionality for again button
againBtn.addEventListener("click", () => {
  // 1. change background color to #222
  document.body.style.backgroundColor = "#222";
  // 2. change message to Start guessing...
  msg.textContent = "Start guessing...";
  // 3. put ? back in place of the number
  gueessNumber.textContent = "?";
  // 4. reset score to 20
  score = 20;
  // 5. update score in the DOM
  gameScore.textContent = score;
  // 6. generate a new random number
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  // extra: clear the input box
  guessValue.value = "";
});