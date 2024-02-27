var result = document.getElementById("result");
var guessNumber = document.getElementById("guess");
var check = document.getElementById("check");
var randomNumber = Math.floor(Math.random() * 10) + 1;
var score = document.getElementById("score");
console.log(randomNumber);
var totalScore = 10;

check.addEventListener("click", () => {
  var enterNumber = guessNumber.value;
  if (!isNaN(enterNumber)) {
    if (enterNumber == randomNumber) {
      result.innerHTML = "Your guess the correct number";
      console.log("correct");
    } else {
      totalScore = totalScore - 1;
      score.innerHTML = "Score: " + totalScore;
      result.innerHTML = "Your guess the wrong number";
      console.log("wrong");
    }
  } else {
    alert("enter the number");
  }
});
