const quizData = [
    { question: "Which country is a permanent member of the United Nations Security Council?", a: "Germany", b: "Japan", c: "Russia", d: "India", correct: "c" },
    { question: "What is the main purpose of NATO?", a: "Economic cooperation", b: "Military alliance", c: "Environmental protection", d: "Cultural exchange", correct: "b" },
    { question: "The term 'soft power' was coined by which political scientist?", a: "Joseph Nye", b: "Samuel Huntington", c: "Zbigniew Brzezinski", d: "Henry Kissinger", correct: "a" },
    { question: "Which international organization focuses on promoting global trade?", a: "World Health Organization", b: "International Monetary Fund", c: "World Trade Organization", d: "United Nations", correct: "c" },
    { question: "What does the acronym BRICS stand for?", a: "Brazil, Russia, India, China, South Africa", b: "Bahrain, Russia, India, China, South Africa", c: "Bangladesh, Russia, India, China, Singapore", d: "Brazil, Russia, India, Canada, South Africa", correct: "a" },
    { question: "Which treaty ended the First World War?", a: "Treaty of Versailles", b: "Treaty of Paris", c: "Treaty of Trianon", d: "Treaty of Saint-Germain", correct: "a" },
    { question: "What is the primary goal of the United Nations?", a: "Promote economic growth", b: "Maintain international peace and security", c: "Encourage cultural exchange", d: "Support environmental sustainability", correct: "b" },
    { question: "Which country was the first to recognize the independence of the United States?", a: "France", b: "Spain", c: "Great Britain", d: "Netherlands", correct: "a" },
    { question: "Who is the current Secretary-General of the United Nations (as of 2024)?", a: "António Guterres", b: "Ban Ki-moon", c: "Kofi Annan", d: "Nikki Haley", correct: "a" },
    { question: "What is the concept of 'deterrence' in international relations?", a: "Building alliances", b: "Preventing aggression through threat of retaliation", c: "Promoting economic cooperation", d: "Engaging in diplomatic negotiations", correct: "b" },
    { question: "The 'Cold War' was primarily a conflict between which two superpowers?", a: "USA and Japan", b: "USA and USSR", c: "USA and China", d: "USA and India", correct: "b" },
    { question: "What does the term 'diplomatic immunity' refer to?", a: "Exemption from taxes", b: "Protection from prosecution", c: "Freedom of speech", d: "Right to vote", correct: "b" },
    { question: "Which organization was established to promote regional cooperation in South Asia?", a: "ASEAN", b: "SAARC", c: "EU", d: "NATO", correct: "b" },
    { question: "What is the primary focus of the International Criminal Court?", a: "Environmental protection", b: "Human rights violations", c: "War crimes and genocide", d: "Economic disputes", correct: "c" },
    { question: "Which country is known for its policy of non-alignment?", a: "India", b: "USA", c: "China", d: "Russia", correct: "a" },
    { question: "What does the acronym G7 stand for?", a: "Group of 7 industrialized nations", b: "Group of 7 developing nations", c: "Group of 7 largest economies", d: "Group of 7 countries in Asia", correct: "a" },
    { question: "The term 'realism' in international relations emphasizes what?", a: "Cooperation between states", b: "Power and security", c: "Economic interdependence", d: "Cultural exchanges", correct: "b" },
    { question: "Which of the following is a major international environmental agreement?", a: "Montreal Protocol", b: "NATO Treaty", c: "Geneva Conventions", d: "Treaty of Versailles", correct: "a" },
    { question: "What does the term 'humanitarian intervention' refer to?", a: "Military intervention for humanitarian purposes", b: "Economic aid during crises", c: "Cultural exchanges", d: "Diplomatic negotiations", correct: "a" },
    { question: "Which country is a member of both the G20 and BRICS?", a: "Argentina", b: "South Africa", c: "Mexico", d: "Indonesia", correct: "b" },
    { question: "Which historical event is associated with the establishment of the United Nations?", a: "Cold War", b: "World War II", c: "Vietnam War", d: "Korean War", correct: "b" },
    { question: "What is the significance of the 'UN Security Council'?", a: "It manages international trade", b: "It oversees environmental policies", c: "It maintains international peace and security", d: "It promotes cultural understanding", correct: "c" },
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
const userAnswers = []; // To store user answers

// Shuffle the quizData and select the first 10 questions
const shuffledQuizData = quizData.sort(() => 0.5 - Math.random()).slice(0, 10);

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
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    userAnswers[currentQuiz] = answer; // Store user's answer
    if (answer) {
        if (answer === shuffledQuizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < shuffledQuizData.length) {
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
