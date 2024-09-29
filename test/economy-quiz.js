const quizData = [
    { question: "What is the fiscal deficit?", a: "Total government expenditure", b: "Government income", c: "Excess of expenditure over income", d: "Tax deficit", correct: "c" },
    { question: "Which Article of the Indian Constitution deals with the election of the President?", a: "Article 52", b: "Article 54", c: "Article 56", d: "Article 58", correct: "b" },
    { question: "What does the term 'Balance of Payments' refer to?", a: "Total imports and exports of a country", b: "The difference between a country's exports and imports", c: "The record of all economic transactions between residents of a country and the rest of the world", d: "None of the above", correct: "c" },
    { question: "Who was the first woman judge of the Supreme Court of India?", a: "Fathima Beevi", b: "R. Banumathi", c: "Indu Malhotra", d: "Leila Seth", correct: "a" },
    { question: "The Union Budget is presented under which Article of the Constitution?", a: "Article 110", b: "Article 112", c: "Article 265", d: "Article 300", correct: "b" },
    { question: "Which organization publishes the World Economic Outlook report?", a: "World Bank", b: "International Monetary Fund (IMF)", c: "World Economic Forum", d: "Asian Development Bank", correct: "b" },
    { question: "What is the primary function of the Reserve Bank of India (RBI)?", a: "Issue currency notes", b: "Regulate foreign exchange", c: "Control monetary policy", d: "All of the above", correct: "d" },
    { question: "Which of the following is a greenhouse gas?", a: "Carbon dioxide", b: "Oxygen", c: "Nitrogen", d: "Helium", correct: "a" },
    { question: "Which schedule of the Indian Constitution deals with the allocation of powers between the Union and States?", a: "Seventh Schedule", b: "Fifth Schedule", c: "Eighth Schedule", d: "Tenth Schedule", correct: "a" },
    { question: "Which is the largest state in India by area?", a: "Madhya Pradesh", b: "Maharashtra", c: "Rajasthan", d: "Uttar Pradesh", correct: "c" },
    { question: "Which Indian state has the longest coastline?", a: "Gujarat", b: "Tamil Nadu", c: "Maharashtra", d: "Andhra Pradesh", correct: "a" },
    { question: "Who is known as the 'Father of the Indian Constitution'?", a: "Mahatma Gandhi", b: "Jawaharlal Nehru", c: "Dr. B.R. Ambedkar", d: "Sardar Patel", correct: "c" },
    { question: "Which of the following is a renewable source of energy?", a: "Coal", b: "Natural gas", c: "Solar energy", d: "Nuclear energy", correct: "c" },
    { question: "What does GDP stand for?", a: "Gross Domestic Product", b: "Gross Development Policy", c: "Global Domestic Production", d: "General Duty Proclamation", correct: "a" },
    { question: "Which of the following is part of India's 'triple talaq' ruling?", a: "Criminalizes instant triple talaq", b: "Allows triple talaq in civil matters", c: "Restricts verbal talaq only", d: "Allows triple talaq through email or SMS", correct: "a" },
    { question: "What does the term 'Repo Rate' refer to?", a: "The rate at which banks borrow money from the RBI", b: "The interest rate paid on savings", c: "The rate at which banks lend to the public", d: "None of the above", correct: "a" },
    { question: "The World Health Organization (WHO) is headquartered in which city?", a: "New York", b: "Geneva", c: "Paris", d: "London", correct: "b" },
    { question: "Which of the following is the first artificial satellite launched by India?", a: "INSAT-1A", b: "Aryabhata", c: "Bhaskara-I", d: "Rohini", correct: "b" },
    { question: "Which country is known as the 'Land of the Rising Sun'?", a: "China", b: "Thailand", c: "South Korea", d: "Japan", correct: "d" },
    { question: "Which Indian classical dance form is associated with Tamil Nadu?", a: "Kathak", b: "Odissi", c: "Bharatanatyam", d: "Kathakali", correct: "c" },
    { question: "What does the term 'carbon footprint' refer to?", a: "The amount of carbon dioxide emitted due to human activities", b: "The amount of carbon stored in forests", c: "The impact of deforestation on wildlife", d: "The energy consumption of a country", correct: "a" },
    { question: "Which Article of the Indian Constitution prohibits discrimination on grounds of religion, race, caste, sex or place of birth?", a: "Article 15", b: "Article 19", c: "Article 21", d: "Article 23", correct: "a" },
    { question: "Who is the current Secretary-General of the United Nations (as of 2024)?", a: "Antonio Guterres", b: "Ban Ki-moon", c: "Kofi Annan", d: "Nikki Haley", correct: "a" },
    { question: "Which country is the largest producer of crude oil in the world?", a: "United States", b: "Russia", c: "Saudi Arabia", d: "Iran", correct: "a" },
    { question: "Which movement in Indian history is associated with the slogan 'Do or Die'?", a: "Non-Cooperation Movement", b: "Swadeshi Movement", c: "Quit India Movement", d: "Civil Disobedience Movement", correct: "c" },
    { question: "Which Indian state has the highest literacy rate?", a: "Kerala", b: "Tamil Nadu", c: "Goa", d: "Maharashtra", correct: "a" },
    { question: "In which year was the Goods and Services Tax (GST) introduced in India?", a: "2015", b: "2016", c: "2017", d: "2018", correct: "c" },
    { question: "What is the full form of NITI Aayog?", a: "National Institution for Transforming India", b: "National Integration and Trade Institute", c: "National Indian Trade Initiative", d: "None of the above", correct: "a" },
    { question: "Which Indian scientist is known as the 'Missile Man of India'?", a: "Vikram Sarabhai", b: "Homi Bhabha", c: "A.P.J. Abdul Kalam", d: "C.V. Raman", correct: "c" },
];

const quiz = document.getElementById('quiz-box');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// Shuffle the quizData and select the first 10 questions
const shuffledQuizData = quizData.sort(() => 0.5 - Math.random()).slice(0, 10);
const userAnswers = []; // To store user answers

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = shuffledQuizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    userAnswers[currentQuiz] = answer; // Store user's answer
    if(answer) {
        if(answer === shuffledQuizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < shuffledQuizData.length) {
            loadQuiz();
        } else {
            displayResults();
        }
    }
});

function displayResults() {
    let resultHTML = `<h2>You answered ${score}/${shuffledQuizData.length} questions correctly!</h2>`;
    resultHTML += `<h3>Your Answers:</h3><ul>`;
    
    shuffledQuizData.forEach((item, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = item.correct;
        const isCorrect = userAnswer === correctAnswer;

        // Get the answer text from the labels
        const userAnswerText = userAnswer ? document.querySelector(`label[for="${userAnswer}"]`).innerText : "Not answered";
        const correctAnswerText = document.querySelector(`label[for="${correctAnswer}"]`).innerText;

        resultHTML += `
            <li>
                Q${index + 1}: ${item.question}<br>
                Your Answer: ${userAnswerText}<br>
                Correct Answer: ${correctAnswerText}
                <span style="color: ${isCorrect ? 'green' : 'red'};">(${isCorrect ? 'Correct' : 'Wrong'})</span>
            </li>
        `;
    });

    resultHTML += `</ul><button onclick="location.reload()">Reload</button>`;
    quiz.innerHTML = resultHTML;
}

