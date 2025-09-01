// ==========================
// QUIZ APP
// ==========================
const quizData = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { question: "Which language runs in a browser?", options: ["Python", "JavaScript", "C++"], answer: "JavaScript" },
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax"], answer: "Cascading Style Sheets" }
];

const quizContainer = document.getElementById("quiz");

quizData.forEach((q, index) => {
  let optionsHTML = q.options.map(opt =>
    `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
  ).join("");
  quizContainer.innerHTML += `<div><h3>${q.question}</h3>${optionsHTML}</div>`;
});

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  document.getElementById("result").innerText = `✅ You scored ${score}/${quizData.length}`;
}

// ==========================
// API FETCH (JOKE GENERATOR)
// ==========================
async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    document.getElementById("joke").innerText = "❌ Failed to load joke. Try again!";
  }
}
