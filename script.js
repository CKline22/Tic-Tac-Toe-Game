let box = document.querySelectorAll(".box");
let showWinner = document.getElementById("winner")
box = Array.from(box);

let player = "x";

winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWin() {
  winningConditions.forEach(function (condition) {
    let check = condition.every((index) => box[index].innerText == player);
    if (check) {
        showWinner.innerText = player + "-" + "has won!"
        showWinner.classList.remove('hide')
      console.log("game over");
    }
  });
}

box.forEach(function (box) {
  box.addEventListener("click", function () {
    if (box.innerText != "") return;
    box.innerText = player;
    checkWin();
    player = player == "x" ? "o" : "x";
  });
});
