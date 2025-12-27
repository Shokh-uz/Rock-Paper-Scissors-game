const buttons = document.querySelectorAll(".btn");
const resultText = document.getElementById("resultText");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerMove = button.dataset.move;

    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber < 2 / 3) {
      computerMove = "paper";
    } else {
      computerMove = "scissors";
    }

    let result = "";

    if (playerMove === computerMove) {
      result = "Tie 😐";
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      result = "You win 🎉";
    } else {
      result = "You lose 😢";
    }

    resultText.textContent =
      `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
  });
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  document.getElementById("themeToggle").classList.toggle("dark");
  console.log('Bosildi');
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});
