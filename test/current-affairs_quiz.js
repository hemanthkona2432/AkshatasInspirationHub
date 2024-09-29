const quizData = [
    { question: "Who is the current Prime Minister of India (as of 2024)?", a: "Narendra Modi", b: "Rahul Gandhi", c: "Amit Shah", d: "Manmohan Singh", correct: "a" },
    { question: "Which Indian state recently implemented the ‘Ghar Ghar Ration’ scheme?", a: "Madhya Pradesh", b: "Kerala", c: "Punjab", d: "Odisha", correct: "c" },
    { question: "What is the name of the indigenous aircraft carrier launched by India in 2023?", a: "INS Vikrant", b: "INS Vishal", c: "INS Viraat", d: "INS Arihant", correct: "a" },
    { question: "Which country did India sign a comprehensive economic partnership agreement with in 2023?", a: "Australia", b: "Japan", c: "United States", d: "Germany", correct: "a" },
    { question: "What is the theme of the 2024 World Environment Day celebrated in India?", a: "Biodiversity", b: "Pollution Control", c: "Sustainable Living", d: "Climate Action", correct: "d" },
    { question: "Who was awarded the Bharat Ratna in 2024?", a: "Satyajit Ray", b: "Baba Amte", c: "Vikram Sarabhai", d: "Ravi Shankar", correct: "b" },
    { question: "What is the name of India's first semiconductor manufacturing plant inaugurated in 2024?", a: "Semicon India", b: "VLSI Hub", c: "Microchip India", d: "Chip India", correct: "a" },
    { question: "Which Indian athlete won a gold medal at the Tokyo Olympics 2021?", a: "Neeraj Chopra", b: "PV Sindhu", c: "Mary Kom", d: "Sakshi Malik", correct: "a" },
    { question: "Which major initiative did the Indian government launch to promote digital payments in 2023?", a: "Digital India", b: "UPI 2.0", c: "Cashless India", d: "Digital Rupee", correct: "b" },
    { question: "What is the goal of the National Hydrogen Mission launched by India in 2024?", a: "To achieve energy independence", b: "To reduce air pollution", c: "To develop hydrogen fuel technology", d: "All of the above", correct: "d" },
    { question: "Which Indian city is hosting the G20 Summit in 2024?", a: "Mumbai", b: "New Delhi", c: "Bengaluru", d: "Kolkata", correct: "b" },
    { question: "Which Indian company became the world's first to reach a $1 trillion market capitalization?", a: "Reliance Industries", b: "Tata Consultancy Services", c: "HDFC Bank", d: "Infosys", correct: "a" },
    { question: "What is the name of the scheme launched by the Indian government for the welfare of farmers in 2024?", a: "Kisan Samman Nidhi", b: "PM Kisan", c: "Soil Health Card", d: "Krishi Vikas Yojana", correct: "a" },
    { question: "Which Indian city was recognized as a UNESCO World Heritage Site in 2024?", a: "Jaipur", b: "Varanasi", c: "Ahmedabad", d: "Lucknow", correct: "c" },
    { question: "What is the focus of the Pradhan Mantri Awas Yojana launched in 2024?", a: "Providing healthcare", b: "Affordable housing for all", c: "Skill development", d: "Digital literacy", correct: "b" },
    { question: "Which Indian politician recently became the youngest Chief Minister in India?", a: "Yogi Adityanath", b: "Mamata Banerjee", c: "K. Chandrashekar Rao", d: "Bhagwant Mann", correct: "d" },
    { question: "Which Indian movie won the Oscar for Best International Feature Film in 2024?", a: "Gully Boy", b: "RRR", c: "The Lunchbox", d: "Masaan", correct: "b" },
    { question: "What is the new initiative by the Indian government to boost manufacturing in the defense sector?", a: "Make in India", b: "Defense Production Policy", c: "Atmanirbhar Bharat", d: "Defense Innovation Fund", correct: "a" },
    { question: "Which Indian state launched the ‘Digital Education Initiative’ in 2024?", a: "Delhi", b: "Maharashtra", c: "Tamil Nadu", d: "Haryana", correct: "b" },
    { question: "Who is the current President of India (as of 2024)?", a: "Droupadi Murmu", b: "Ram Nath Kovind", c: "Pranab Mukherjee", d: "A.P.J. Abdul Kalam", correct: "a" },
    { question: "Which Indian cricketer recently retired from international cricket in 2024?", a: "Virat Kohli", b: "Rohit Sharma", c: "MS Dhoni", d: "Ravichandran Ashwin", correct: "c" },
    { question: "What is the aim of the National Digital Health Mission launched by India?", a: "Universal healthcare", b: "Health insurance for all", c: "Digitalizing health records", d: "All of the above", correct: "d" },
    { question: "Which Indian space mission was launched in 2023 to explore the Moon?", a: "Chandrayaan-2", b: "Chandrayaan-3", c: "Mangalyaan", d: "Aditya-L1", correct: "b" },
    { question: "What is the theme of the 2024 Republic Day parade in India?", a: "Unity in Diversity", b: "Aatmanirbhar Bharat", c: "Digital India", d: "Sustainable Development", correct: "a" },
    { question: "Which Indian state recently banned the use of single-use plastics?", a: "Kerala", b: "Madhya Pradesh", c: "Uttar Pradesh", d: "Gujarat", correct: "a" },
    { question: "What is the primary goal of the ‘Skill India’ initiative launched by the Indian government?", a: "Employment generation", b: "Digital literacy", c: "Promoting entrepreneurship", d: "Providing vocational training", correct: "d" },
    { question: "Which Indian musician was awarded the Grammy Award in 2024?", a: "A.R. Rahman", b: "Zubin Mehta", c: "Shreya Ghoshal", d: "Neha Kakkar", correct: "a" },
    { question: "Which landmark bill was passed by the Indian Parliament in 2024 related to women’s rights?", a: "Women’s Reservation Bill", b: "Maternity Benefit Bill", c: "Domestic Violence Bill", d: "Sexual Harassment Bill", correct: "a" },
    { question: "Which Indian city is known as the ‘Silicon Valley of India’?", a: "Bengaluru", b: "Hyderabad", c: "Pune", d: "Gurgaon", correct: "a" },
    { question: "Who is the current Chief Justice of India (as of 2024)?", a: "N.V. Ramana", b: "D.Y. Chandrachud", c: "Sharad Arvind Bobde", d: "Ranjan Gogoi", correct: "b" },
    { question: "Which Indian sports event is set to take place in 2024?", a: "Commonwealth Games", b: "Asian Games", c: "Olympics", d: "World Cup", correct: "b" },
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
