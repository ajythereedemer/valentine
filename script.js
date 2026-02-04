const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");

const noTexts = [
  "No 😅",
  "Are you sure? 😳",
  "Think again 🙈",
  "Don't break my heart 💔",
  "Pleaseee 🥺",
  "Last chance 😜",
  "Okay… maybe yes? 😏"
];

let moveCount = 0;

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay!!! 💕🥰<br>You made my day!";
  document.querySelector(".buttons").style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  // Move button
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 240 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Change text
  moveCount++;
  noBtn.innerText = noTexts[moveCount % noTexts.length];
});
