var playerOne = document.querySelector("#pOne");
var playerTwo = document.querySelector("#pTwo");
var reset = document.querySelector("#reset");
var inputLimit = document.querySelector("input[type='number']");
var limit = document.querySelector("#limit").textContent;
var playerOneScore = 0;
var playerTwoScore = 0;

playerOne.addEventListener("click", function(){
  playerOneScore++;
  if(playerOneScore<limit){
    document.querySelector("#pOneScore").textContent = playerOneScore;
  } else if(playerOneScore==limit) {
    document.querySelector("#pOneScore").textContent = playerOneScore;
    document.querySelector("#pOneScore").style.color = "green";
  }
});

playerTwo.addEventListener("click", function(){
  playerTwoScore++;
  if(playerTwoScore<limit){
    document.querySelector("#pTwoScore").textContent = playerTwoScore;
  } else if(playerTwoScore==limit) {
    document.querySelector("#pTwoScore").textContent = playerTwoScore;
    document.querySelector("#pTwoScore").style.color = "green";
  }
});

reset.addEventListener("click", function(){
  playerOneScore = playerTwoScore = 0;
  document.querySelector("#pOneScore").textContent = document.querySelector("#pTwoScore").textContent = 0;
  document.querySelector("#pOneScore").style.color = document.querySelector("#pTwoScore").style.color = "black";
});

inputLimit.addEventListener("input", function(){
  document.querySelector("#limit").textContent = limit = inputLimit.value;

});
