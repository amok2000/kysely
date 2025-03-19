const quizContainer = document.getElementById("quiz-container");
const checkButton = document.getElementById("check-button");
const resultParagraph = document.getElementById("result");

// Luodaan muuttuja, johon tallennetaan ladatut kysymykset
let questions = [];

// Ladataan JSON-tiedosto fetchillä
// HUOM: Toimii nettipalvelussa (GitHub Pages, Netlify). Paikallisesti
// file:// -polulla ei kaikilla selaimilla toimi ilman pientä palvelinta.
fetch("questions.json")
  .then(response => response.json())
  .then(data => {
    questions = data;
    buildQuiz();
  })
  .catch(err => {
    console.error("Virhe ladattaessa JSONia: ", err);
    resultParagraph.innerHTML = "Virhe ladattaessa kysymyksiä. Tarkista konsoli.";
  });

// Luodaan HTML kaikille kysymyksille
function buildQuiz() {
  // Tyhjennetään varmuuden vuoksi container
  quizContainer.innerHTML = "";

  // Käydään jokainen kysymys läpi
  questions.forEach((q, index) => {
    const li = document.createElement("li");
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
    quizContainer.appendChild(li);
  });
}

// Tarkistusfunktio, kutsutaan nappia painettaessa
function checkAnswers() {
  if (questions.length === 0) {
    // Jos dataa ei ole vielä ladattu, ei voida tarkistaa
    alert("Kysymyksiä ei ladattu vielä. Odota hetki ja yritä uudelleen.");
    return;
  }

  let correctCount = 0;
  let wrongAnswers = [];

  questions.forEach((q, index) => {
    const userAnswer = document.getElementById(`q${index + 1}`).value;
    if (userAnswer === q.correct) {
      correctCount++;
    } else {
      wrongAnswers.push(index + 1);
    }
  });

  let resultText = `Oikeita vastauksia: ${correctCount} / ${questions.length}. `;
  if (wrongAnswers.length > 0) {
    resultText += `Väärin menivät kysymykset: ${wrongAnswers.join(", ")}.`;
  } else {
    resultText += "Kaikki vastaukset oikein!";
  }

  resultParagraph.innerHTML = resultText;
}

// Klikattaessa tarkistuspainiketta, suoritetaan checkAnswers-funktio
checkButton.addEventListener("click", checkAnswers);
