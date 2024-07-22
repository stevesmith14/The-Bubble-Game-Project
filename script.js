//Making bubbles
function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 102; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter = clutter + `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#panelbottom").innerHTML = clutter;
}
makeBubble();

//Now decrease timer
var timer = 60;
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer").textContent = timer;
    } else {
      clearInterval(timerInt); //for clearing interval when timer=0
      document.querySelector("#panelbottom").innerHTML = `<h1>Game Over</h1>`; //printing game over when timer = 0
    }
  }, 1000);
}
runTimer();

//Creating Hit Number
var hitrn = 0; //we create var hitrn outside the function because if we create this insied the function then we can't use it in the last lines of code("getting clicked number")
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector(".hitval").textContent = hitrn;
}
getNewHit();

//Increasing Score
var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector(".scoreval").textContent = score;
}

// getting clicked number
document
  .querySelector("#panelbottom")
  .addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);

    if (clickedNum === hitrn) {
      increaseScore(); //increasing score
      makeBubble(); //making new bubbles
      getNewHit(); //creating new hit
    }
  });
