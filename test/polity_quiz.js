const quizData = [
    { question: "Which Article of the Indian Constitution provides for the establishment of a Finance Commission?", a: "Article 280", b: "Article 300", c: "Article 275", d: "Article 245", correct: "a" },
    { question: "What is the minimum age for the election of the President of India?", a: "35 years", b: "30 years", c: "40 years", d: "25 years", correct: "a" },
    { question: "Which of the following is a Fundamental Right under the Indian Constitution?", a: "Right to property", b: "Right to education", c: "Right to work", d: "Right to vote", correct: "b" },
    { question: "Who has the power to dissolve the Lok Sabha?", a: "The President", b: "The Prime Minister", c: "The Speaker", d: "The Vice President", correct: "a" },
    { question: "What is the tenure of the Rajya Sabha?", a: "5 years", b: "6 years", c: "Permanent", d: "3 years", correct: "c" },
    { question: "Which Amendment of the Indian Constitution granted the right to vote to all citizens above 18 years of age?", a: "61st Amendment", b: "73rd Amendment", c: "86th Amendment", d: "42nd Amendment", correct: "a" },
    { question: "Who among the following is the Chief Justice of India (as of 2024)?", a: "N.V. Ramana", b: "D.Y. Chandrachud", c: "Sharad Arvind Bobde", d: "Ranjan Gogoi", correct: "b" },
    { question: "Which of the following is NOT a Directive Principle of State Policy?", a: "Right to Work", b: "Right to Education", c: "Right to an adequate means of livelihood", d: "Right to privacy", correct: "d" },
    { question: "How many members are there in the Rajya Sabha?", a: "245", b: "250", c: "230", d: "300", correct: "a" },
    { question: "Which body recommends the distribution of financial resources between the Centre and the States?", a: "Finance Commission", b: "Planning Commission", c: "NITI Aayog", d: "Election Commission", correct: "a" },
    { question: "What is the maximum strength of the Lok Sabha?", a: "552", b: "500", c: "545", d: "600", correct: "c" },
    { question: "Which Article of the Constitution of India deals with the Fundamental Duties?", a: "Article 51A", b: "Article 21", c: "Article 19", d: "Article 14", correct: "a" },
    { question: "The President of India is elected by an electoral college consisting of:", a: "Elected members of both Houses of Parliament and elected members of the Legislative Assemblies of States and Union territories", b: "Only elected members of the Lok Sabha", c: "Only elected members of the Rajya Sabha", d: "None of the above", correct: "a" },
    { question: "Which Schedule of the Indian Constitution contains the list of subjects on which the Parliament can legislate?", a: "Eighth Schedule", b: "Seventh Schedule", c: "Sixth Schedule", d: "Fifth Schedule", correct: "b" },
    { question: "What is the procedure for the removal of the President of India called?", a: "Impeachment", b: "Censure", c: "Motion of no confidence", d: "Resignation", correct: "a" },
    { question: "The Prime Minister of India is appointed by the:", a: "President", b: "Chief Justice", c: "Lok Sabha", d: "Rajya Sabha", correct: "a" },
    { question: "Which of the following is the highest law-making body in India?", a: "Rajya Sabha", b: "Lok Sabha", c: "Parliament", d: "Supreme Court", correct: "c" },
    { question: "Who is responsible for the enforcement of the Directive Principles of State Policy?", a: "Supreme Court", b: "Parliament", c: "State Legislatures", d: "All of the above", correct: "d" },
    { question: "What is the term used for the collective responsibility of the Council of Ministers to the Lok Sabha?", a: "Political accountability", b: "Judicial accountability", c: "Parliamentary accountability", d: "Administrative accountability", correct: "c" },
    { question: "Which Article empowers the Parliament to legislate on matters in the State List in the national interest?", a: "Article 249", b: "Article 356", c: "Article 356", d: "Article 368", correct: "a" },
    { question: "Which of the following is NOT a part of the Constitution of India?", a: "Preamble", b: "Fundamental Rights", c: "Fundamental Duties", d: "Directive Principles of State Policy", correct: "d" },
    { question: "Which constitutional body conducts elections in India?", a: "Election Commission", b: "NITI Aayog", c: "Finance Commission", d: "Parliament", correct: "a" },
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
const userAnswers = [];

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
    userAnswers.push(answer);
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
    resultHTML += `<h3>Correct Answers:</h3><ul>`;

    shuffledQuizData.forEach((data, index) => {
        const userAnswer = userAnswers[index] ? userAnswers[index].toUpperCase() : "Not answered";
        const correctAnswer = data.correct.toUpperCase(); // Ensure correct answer is always uppercase
        const isCorrect = userAnswer === correctAnswer;


        // Create a variable to hold the correct answer option text
        let correctAnswerText = 'No correct answer available.';
        console.log(`Correct Answer for Question ${index + 1}: ${correctAnswer}`);

        switch (correctAnswer) {
            case 'A':
                correctAnswerText = `A: ${data.a}`;
                break;
            case 'B':
                correctAnswerText = `B: ${data.b}`;
                break;
            case 'C':
                correctAnswerText = `C: ${data.c}`;
                break;
            case 'D':
                correctAnswerText = `D: ${data.d}`;
                break;
        }

        resultHTML += `
            <li>
                <strong>${data.question}</strong><br>
                Your Answer: ${userAnswer} <br>
                Correct Answer: ${correctAnswerText}
                <span style="color: ${isCorrect ? 'green' : 'red'};">(${isCorrect ? 'Correct' : 'Wrong'})</span>
            </li>
        `;
    });

    resultHTML += `</ul>`;
    resultHTML += `<button onclick="location.reload()">Reload</button>`;
    quiz.innerHTML = resultHTML;
}
