var playerOne = document.querySelector("#pOne");
var playerTwo = document.querySelector("#pTwo");
var reset = document.querySelector("#reset");
var inputLimit = document.querySelector("input[type='number']");
var limit = document.querySelector("#limit").textContent;
var playerOneScore = 0;
var playerTwoScore = 0;
var winner = false;

playerOne.addEventListener("click", function(){
  if(!winner){
    playerOneScore++;
    if(playerOneScore<limit){
      document.querySelector("#pOneScore").textContent = playerOneScore;
    } else if(playerOneScore==limit) {
      document.querySelector("#pOneScore").textContent = playerOneScore;
      document.querySelector("#pOneScore").style.color = "green";
      winner = true;
    }
  }
});

playerTwo.addEventListener("click", function(){
  if(!winner){
    playerTwoScore++;
    if(playerTwoScore<limit){
      document.querySelector("#pTwoScore").textContent = playerTwoScore;
    } else if(playerTwoScore==limit) {
      document.querySelector("#pTwoScore").textContent = playerTwoScore;
      document.querySelector("#pTwoScore").style.color = "green";
      winner = true;
    }
  }
});

reset.addEventListener("click", function(){
  playerOneScore = playerTwoScore = 0;
  document.querySelector("#pOneScore").textContent = document.querySelector("#pTwoScore").textContent = 0;
  document.querySelector("#pOneScore").style.color = document.querySelector("#pTwoScore").style.color = "black";
  winner = false;
});

inputLimit.addEventListener("input", function(){
  document.querySelector("#limit").textContent = limit = Number(this.value);

});
