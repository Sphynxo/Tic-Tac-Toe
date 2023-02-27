"use strict";

const cells = document.querySelectorAll(".cell");
const xOrO = document.querySelector(".x-or-o");
const startButton = document.getElementById("start-game");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const winnerPlayer = document.querySelector(".winner-player");

const cellOne = document.querySelector(".cell-one");
const cellTwo = document.querySelector(".cell-two");
const cellThree = document.querySelector(".cell-three");
const cellFour = document.querySelector(".cell-four");
const cellFive = document.querySelector(".cell-five");
const cellSix = document.querySelector(".cell-six");
const cellSeven = document.querySelector(".cell-seven");
const cellEight = document.querySelector(".cell-eight");
const cellNine = document.querySelector(".cell-nine");

const startGame = function () {
  playerOne.classList.add("active");
  startButton.textContent = "Reset";
};

const resetGame = function () {
  if (
    playerOne.classList.contains("active") ||
    playerTwo.classList.contains("active-two")
  ) {
    playerOne.classList.remove("active");
    playerTwo.classList.remove("active-two");
  }

  winnerPlayer.classList.add("hidden");
  playerOne.classList.remove("hidden");
  playerTwo.classList.remove("hidden");

  startButton.textContent = "Start Game";
  cells.forEach((cell) => {
    cell.textContent = "";
  });
};

const checkWInner = function () {
  if (
    (cellOne.textContent == "X" &&
      cellTwo.textContent == "X" &&
      cellThree.textContent == "X") ||
    (cellFour.textContent == "X" &&
      cellFive.textContent == "X" &&
      cellSix.textContent == "X") ||
    (cellSeven.textContent == "X" &&
      cellEight.textContent == "X" &&
      cellNine.textContent == "X") ||
    (cellOne.textContent == "X" &&
      cellFour.textContent == "X" &&
      cellSeven.textContent == "X") ||
    (cellTwo.textContent == "X" &&
      cellFive.textContent == "X" &&
      cellEight.textContent == "X") ||
    (cellThree.textContent == "X" &&
      cellSix.textContent == "X" &&
      cellNine.textContent == "X") ||
    (cellOne.textContent == "X" &&
      cellFive.textContent == "X" &&
      cellNine.textContent == "X") ||
    (cellThree.textContent == "X" &&
      cellFive.textContent == "X" &&
      cellSeven.textContent == "X")
  ) {
    playerOne.classList.add("hidden");
    playerTwo.classList.add("hidden");
    winnerPlayer.classList.remove("hidden");
    winnerPlayer.textContent = "Player 1 Wins!";
    winnerPlayer.classList.remove("red-winner");
    winnerPlayer.classList.add("active");
  } else if (
    (cellOne.textContent == "O" &&
      cellTwo.textContent == "O" &&
      cellThree.textContent == "O") ||
    (cellFour.textContent == "O" &&
      cellFive.textContent == "O" &&
      cellSix.textContent == "O") ||
    (cellSeven.textContent == "O" &&
      cellEight.textContent == "O" &&
      cellNine.textContent == "O") ||
    (cellOne.textContent == "O" &&
      cellFour.textContent == "O" &&
      cellSeven.textContent == "O") ||
    (cellTwo.textContent == "O" &&
      cellFive.textContent == "O" &&
      cellEight.textContent == "O") ||
    (cellThree.textContent == "O" &&
      cellSix.textContent == "O" &&
      cellNine.textContent == "O") ||
    (cellOne.textContent == "O" &&
      cellFive.textContent == "O" &&
      cellNine.textContent == "O") ||
    (cellThree.textContent == "O" &&
      cellFive.textContent == "O" &&
      cellSeven.textContent == "O")
  ) {
    playerOne.classList.add("hidden");
    playerTwo.classList.add("hidden");
    winnerPlayer.classList.remove("hidden");
    winnerPlayer.textContent = "Player 2 Wins!";
    winnerPlayer.classList.remove("active");
    winnerPlayer.classList.add("red-winner");
  }

  let filledCells = 0;
  cells.forEach((cell) => {
    if (cell.textContent !== "") {
      filledCells++;
    }
  });

  if (filledCells === 9) {
    playerOne.classList.add("hidden");
    playerTwo.classList.add("hidden");
    winnerPlayer.classList.remove("hidden");
    winnerPlayer.textContent = "Draw!";
  }
};

startButton.addEventListener("click", function () {
  if (startButton.textContent == "Start Game") {
    startGame();
  } else if (startButton.textContent == "Reset") {
    resetGame();
  }
});

cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    if (
      cell.textContent === "" &&
      playerOne.classList.contains("active") &&
      winnerPlayer.classList.contains("hidden")
    ) {
      cell.textContent = "X";
      cell.classList.remove("red");
      playerOne.classList.remove("active");
      playerTwo.classList.add("active-two");
    }
    checkWInner();
  });
});

cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    if (
      cell.textContent === "" &&
      playerTwo.classList.contains("active-two") &&
      winnerPlayer.classList.contains("hidden")
    ) {
      cell.textContent = "O";
      cell.classList.add("red");
      playerTwo.classList.remove("active-two");
      playerOne.classList.add("active");
    }
    checkWInner();
  });
});
