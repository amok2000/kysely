// Etsitään HTML:stä tarvittavat elementit
const quizContainer = document.getElementById("quiz-container");
const checkButton = document.getElementById("check-button");
const resultParagraph = document.getElementById("result");

// Luodaan jokainen kysymys HTML:ään
questions.forEach((q, index) => {
  // Luodaan <li>-elementti
  const li = document.createElement("li");

  // Muodostetaan pudotusvalikko (select) HTML-stringinä
  // Kullekin vaihtoehdolle (A, B, C, D) generoidaan <option>
  li.innerHTML = `
    ${q.text}<br>
    <select id="q${index + 1}">
      <option value="">Valitse</option>
      <option value="A">${q.options[0]}</option>
      <option value="B">${q.options[1]}</option>
      <option value="C">${q.options[2]}</option>
      <option value="D">${q.options[3]}</option>
    </select>
  `;

  // Lisätään listan (ol) sisälle
  quizContainer.appendChild(li);
});

// Määritellään tarkistustoiminto
function checkAnswers() {
  let correctCount = 0;
  let wrongAnswers = [];

  // Käydään läpi jokainen kysymys
  questions.forEach((q, index) => {
    // Haetaan käyttäjän valinta
    const userAnswer = document.getElementById(`q${index + 1}`).value;
    // Vertailu
    if (userAnswer === q.correct) {
      correctCount++;
    } else {
      wrongAnswers.push(index + 1); // Tallenna väärän kysymyksen numero
    }
  });

  // Tulostetaan lopputulos
  let resultText = `Oikeita vastauksia: ${correctCount} / ${questions.length}. `;
  if (wrongAnswers.length > 0) {
    resultText += `Väärin menivät kysymykset: ${wrongAnswers.join(", ")}.`;
  } else {
    resultText += "Kaikki vastaukset oikein!";
  }

  resultParagraph.innerHTML = resultText;
}

// Lisätään tapahtumankäsittelijä painikkeelle
checkButton.addEventListener("click", checkAnswers);
