const quizData = [
    { question: "Which of the accompanying destinations of the Indus Valley Civilization, a dirt model of the furrow, has been found?", a: "Rakhigarhi", b: "Banawali", c: "Kalibangam", d: "Mitahal", correct: "b" },
    { question: "Which of the accompanying lords wore the title of 'Avanisimha'?", a: "Simhavarman", b: "Simhavishnu", c: "Mahendravarman I", d: "Shiva Skanda Varma", correct: "b" },
    { question: "Who composed Rasaratnakara?", a: "Sridhara", b: "Madhavakar", c: "Nagarjuna", d: "None of the above", correct: "c" },
    { question: "The Rashtrakutas were involved persistently in the battle against which rulers?", a: "Pallavas of Kanchi", b: "Pandyas of Madurai", c: "Eastern Chalukyas of Vengi", d: "All of the above", correct: "d" },
    { question: "Who established the Rashtrakutas Realm?", a: "Krishna I", b: "Amoghavarsha I", c: "Dantidurga", d: "Dhruva", correct: "c" },
    { question: "What is the ruling period of Pulkeshin I?", a: "c. 5175 – 546 CE", b: "c. 5305 – 556 CE", c: "c. 535 – 566 CE", d: "c. 515 – 536 CE", correct: "c" },
    { question: "Who captured Madurai and took the title of Madurantakam and Maduraikonda?", a: "Aditya I", b: "Parantaka I", c: "Parantaka II", d: "Vijayalaya", correct: "b" },
    { question: "Which is the Neolithic site of North-East India?", a: "Chirand", b: "Senuar", c: "Sarutaru", d: "Taradih", correct: "c" },
    { question: "What is the Upveda of the Yajur Veda?", a: "Dhanurveda", b: "Gandharva", c: "Shilpa Veda", d: "Ayurveda", correct: "a" },
    { question: "The expression 'Satyamev jayate' is mentioned in which of the following Upanishads?", a: "Katho Upanishad", b: "Mandukya Upanishad", c: "Chandogya Upanishad", d: "None of the above", correct: "b" },
    { question: "Which of the following was viewed as the Divine force of the Shudras?", a: "Rudra", b: "Vishnu", c: "Pushan", d: "Indra", correct: "c" },
    { question: "Who is known as the father of Indian archaeology?", a: "Robert Seawell", b: "John Marshal", c: "Colonel Mackenzie", d: "Alexander Cunningham", correct: "d" },
    { question: "In which of the accompanying spots is Ochre Coloured Pottery culture (OCP) found?", a: "Bihar", b: "Eastern UP", c: "Western UP", d: "Bengal", correct: "c" },
    { question: "Which among the following is one of the realms of 'being' as stated by Buddhism?", a: "Prani", b: "Preta", c: "Asura", d: "Bodhisattva", correct: "c" },
    { question: "Who composed the renowned book 'Brihat Katha'?", a: "Gunadhya", b: "Sarva Varman", c: "Panini", d: "Radhagupt", correct: "a" },
    { question: "Which of the following dynasties did 'Mahamaya', Gautama Buddha's mother, belong to?", a: "Shakya", b: "Koliyan", c: "Lichchavi", d: "Maurya", correct: "b" },
    { question: "Which of the following rulers' silver coins had portraits and multilingual legends influenced by the Kshatrapa types?", a: "Satavahanas", b: "Kushanas", c: "Guptas", d: "Mauryas", correct: "a" },
    { question: "Which of these is Katyotsarga's posture gesture?", a: "Shiva", b: "Vishnu", c: "Gautam Buddha", d: "Mahavira", correct: "d" },
    { question: "The Gandhara school of art belongs to which dynasty?", a: "Kushanas", b: "Shakas", c: "Greeks", d: "Guptas", correct: "a" },
    { question: "Which one of the following committees in the Mauryan administration looked after foreigners?", a: "Foreigners", b: "Foreign Affairs", c: "Vital Statistics", d: "Home Affairs", correct: "a" },
    { question: "Which of the following is the oldest known civilization in the Indian subcontinent?", a: "Maurya", b: "Gupta", c: "Indus Valley", d: "Kushana", correct: "c" },
  { question: "Who was the first ruler of the Mauryan Empire?", a: "Ashoka", b: "Chandragupta Maurya", c: "Bindusara", d: "Kanishka", correct: "b" },
  { question: "Which of the following texts is considered the earliest literary source of the Vedic period?", a: "Ramayana", b: "Mahabharata", c: "Rig Veda", d: "Arthashastra", correct: "c" },
  { question: "The Great Bath was discovered in which ancient Indus Valley city?", a: "Harappa", b: "Mohenjo-Daro", c: "Dholavira", d: "Lothal", correct: "b" },
  { question: "Which Mauryan emperor embraced Buddhism after the Kalinga War?", a: "Ashoka", b: "Bindusara", c: "Chandragupta Maurya", d: "Ajatashatru", correct: "a" },
  { question: "The Ajanta Caves are associated with which religion?", a: "Buddhism", b: "Hinduism", c: "Jainism", d: "Islam", correct: "a" },
  { question: "Which of the following rulers is known as the 'Napoleon of India'?", a: "Harsha", b: "Samudragupta", c: "Ashoka", d: "Kanishka", correct: "b" },
  { question: "The ancient port city of Lothal was part of which civilization?", a: "Indus Valley Civilization", b: "Gupta Empire", c: "Mauryan Empire", d: "Chola Empire", correct: "a" },
  { question: "Which text is known as the first complete treatise on statecraft and economics in ancient India?", a: "Arthashastra", b: "Ramayana", c: "Mahabharata", d: "Manusmriti", correct: "a" },
  { question: "Which emperor built the Sanchi Stupa?", a: "Bindusara", b: "Ashoka", c: "Chandragupta II", d: "Kanishka", correct: "b" },
  { question: "The term 'Sangam' refers to what in ancient Tamil literature?", a: "A religious ceremony", b: "A collection of poems", c: "A court assembly", d: "A trading guild", correct: "b" },
  { question: "Which Gupta ruler is known for his military conquests and expansion of the Gupta Empire?", a: "Skandagupta", b: "Chandragupta I", c: "Samudragupta", d: "Vishnugupta", correct: "c" },
  { question: "In which Vedic text is the Varna system first mentioned?", a: "Rig Veda", b: "Yajur Veda", c: "Sama Veda", d: "Atharva Veda", correct: "a" },
  { question: "Who founded the Saka Era in ancient Indian history?", a: "Vikramaditya", b: "Kanishka", c: "Ashoka", d: "Chandragupta I", correct: "b" },
  { question: "The famous Iron Pillar near Qutub Minar belongs to which period?", a: "Maurya", b: "Gupta", c: "Kushan", d: "Harappan", correct: "b" },
  { question: "Which ruler of the Kushan Empire is known for his patronage of Buddhism?", a: "Vasudeva I", b: "Kanishka", c: "Huvishka", d: "Kadphises I", correct: "b" },
  { question: "The Edicts of Ashoka were inscribed in which script?", a: "Brahmi", b: "Kharosthi", c: "Devanagari", d: "Tamil", correct: "a" },
  { question: "Which of the following ancient texts provides a detailed account of Alexander’s invasion of India?", a: "Indica", b: "Mahabharata", c: "Ramayana", d: "Arthashastra", correct: "a" },
  { question: "Which emperor built the Nalanda University?", a: "Harsha", b: "Kumaragupta I", c: "Chandragupta II", d: "Samudragupta", correct: "b" },
  { question: "The temple at Bhitargaon is an example of architecture from which period?", a: "Maurya", b: "Gupta", c: "Sunga", d: "Pala", correct: "b" },
  { question: "Who was the court poet of Samudragupta?", a: "Banabhatta", b: "Kalidasa", c: "Harishena", d: "Vishakhadatta", correct: "c" },
  { question: "The famous city of Pataliputra was the capital of which empire?", a: "Gupta", b: "Maurya", c: "Kushan", d: "Chola", correct: "b" },
  { question: "Which emperor is credited with spreading Buddhism to Sri Lanka?", a: "Ashoka", b: "Samudragupta", c: "Chandragupta Maurya", d: "Harsha", correct: "a" },
  { question: "Which dynasty ruled the Deccan region during the ancient period?", a: "Satavahanas", b: "Mauryas", c: "Cholas", d: "Palas", correct: "a" },
  { question: "The Rathas of Mahabalipuram were built during the reign of which dynasty?", a: "Chola", b: "Pallava", c: "Gupta", d: "Kushana", correct: "b" },
  { question: "Who was the first ruler to unify most of the Indian subcontinent?", a: "Ashoka", b: "Samudragupta", c: "Chandragupta Maurya", d: "Harsha", correct: "c" },
  { question: "The Harappan civilization was contemporary with which of the following?", a: "Roman Empire", b: "Ancient Egypt", c: "Gupta Empire", d: "Han Dynasty", correct: "b" },
  { question: "Which of the following kings was a patron of Jainism?", a: "Chandragupta Maurya", b: "Samudragupta", c: "Ashoka", d: "Kanishka", correct: "a" },
  { question: "The Upanishads belong to which Vedic literature category?", a: "Samhitas", b: "Brahmanas", c: "Aranyakas", d: "Philosophical texts", correct: "d" },
  { question: "Who was the founder of the Chola dynasty?", a: "Vijayalaya", b: "Rajaraja I", c: "Rajendra I", d: "Parantaka I", correct: "a" }

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
