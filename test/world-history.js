const quizData = [
    { question: "Which civilisation is the oldest in the world?", a: "Egyptian Civilization", b: "Mesopotamian Civilization", c: "Chinese Civilization", d: "Indus Valley Civilization", correct: "b" },
    { question: "Egypt is also called what?", a: "Gift of Nile", b: "Gift of the World", c: "Gift of Sun", d: "Gift of Sphinx", correct: "a" },
    { question: "The potter’s wheel was first used in this civilisation.", a: "Harappan Civilization", b: "Chinese Civilization", c: "Indus Valley Civilization", d: "Mesopotamian Civilization", correct: "d" },
    { question: "The first Olympic Games were held in?", a: "776 BC", b: "745 BC", c: "779 BC", d: "749 BC", correct: "a" },
    { question: "Who is known as the father of History?", a: "Sophocles", b: "Homer", c: "Herodotus", d: "Aristophanes", correct: "c" },
    { question: "The ‘Age of Renaissance’ started in which century?", a: "16th Century", b: "15th Century", c: "14th Century", d: "19th Century", correct: "a" },
    { question: "When did the Reformation movement start?", a: "1516", b: "1518", c: "1519", d: "1517", correct: "d" },
    { question: "What was the Reformation movement?", a: "A revolt against King Henry VIII.", b: "The rise of the Church’s control over Rome.", c: "A revolt against the Pope and the letter of Indulgence.", d: "A movement to reform art and literature.", correct: "c" },
    { question: "The Industrial Revolution started in?", a: "1760", b: "1764", c: "1761", d: "1762", correct: "a" },
    { question: "Where did the Industrial Revolution first start?", a: "Great Britain", b: "France", c: "Rome", d: "America", correct: "a" },
    { question: "Which year did Christopher Columbus discover America?", a: "1490", b: "1492", c: "1491", d: "1494", correct: "b" },
    { question: "What is the Magna Carta or the Great Charter of 1215?", a: "A Charter to increase the power of the king.", b: "The foundation of ending the tax system in England.", c: "The foundation of Rights and Liberties of English people.", d: "The setting stone for the king to rule over the Pope.", correct: "c" },
    { question: "The Reformation Movement was started by whom?", a: "King Henry VIII.", b: "Martin Luther.", c: "John Calvin.", d: "William Tyndale.", correct: "b" },
    { question: "The American war of Independence was fought from _____ to _____?", a: "1775 – 1784", b: "1777 – 1783", c: "1775 – 1783", d: "1770 – 1780", correct: "c" },
    { question: "What is the idea behind the Boston Tea Party?", a: "Protest against the tax imposed on tea.", b: "Protest against the British rulers in the American colonies.", c: "Protest against ending the taxation imposed by the Britishers.", d: "Protest against the difficult conditions of tea plantation workers.", correct: "a" },
    { question: "When did Americans gain independence?", a: "4th July 1773", b: "4th July 1774", c: "4th July 1771", d: "4th July 1775", correct: "d" },
    { question: "What is the duration of the French Revolution?", a: "1788 – 1792", b: "1789 – 1799", c: "1781 – 1790", d: "1790 – 1800", correct: "b" },
    { question: "What was the slogan for the French Revolution?", a: "Liberty, Equality, Fraternity", b: "Liberty, Equality, Reform", c: "Liberty, Revolution, Equality", d: "Revolution, Reform, Fraternity", correct: "a" },
    { question: "The Thirty Years' War was fought from _____ to _____?", a: "1618 – 1648", b: "1620 – 1640", c: "1629 – 1649", d: "1619 – 1649", correct: "a" },
    { question: "Whose reign was the king during the French Revolution?", a: "Louis XVI", b: "Louis XV", c: "Napoleon", d: "Louis XIV", correct: "a" },
    { question: "Which treaty acknowledges the Independence of America?", a: "Treaty of France", b: "Treaty of America", c: "Treaty of Paris", d: "Treaty of Versailles", correct: "c" },
    { question: "What was the purpose behind the Treaty of Westphalia?", a: "Brought an end to the Eighty Years War between Spain and the Dutch.", b: "Brought an end to the Thirty Years’ War between the Dutch and Germans.", c: "Brought an end to both the Thirty Years' War and The Eighty Years' War.", d: "None of the above.", correct: "c" },
    { question: "The Soviet Union was made up of how many republics?", a: "20", b: "10", c: "17", d: "15", correct: "d" },
    { question: "The Unification of Italy happened in?", a: "1848 – 1870", b: "1848 – 1871", c: "1848 – 1872", d: "1849 – 1870", correct: "b" },
    { question: "Who was the revolutionary behind the Unification of Italy?", a: "Guiseppe Garibaldi", b: "Victor Emmanuel II", c: "Felice Orsini", d: "Victor Emmanuel III", correct: "a" },
    { question: "When did World War I start?", a: "July 28, 1914", b: "July 28, 1915", c: "July 25, 1914", d: "July 28, 1920", correct: "a" },
    { question: "World War I ended?", a: "November 10, 1918", b: "November 11, 1918", c: "November 11, 1919", d: "November 10, 1919", correct: "b" },
    { question: "What was the policy used by Bismark during the Unification of Germany?", a: "Blood and Iron", b: "Blood and Sweat", c: "Iron and Steel", d: "Patriotism and Blood", correct: "a" },
    { question: "Which nation was standing neutral during the First World War?", a: "Italy", b: "Germany", c: "Prussia", d: "Norway", correct: "d" },
    { question: "When was the Treaty of Versailles imposed upon the nations?", a: "10 January 1920", b: "10 January 1921", c: "11 January 1920", d: "11 January 1921", correct: "a" }

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
