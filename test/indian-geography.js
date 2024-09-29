const quizData = [
  { question: "Which one of the following geographical terms refers to the “water-surrounded sliver of sub-continental land”?", a: "Peninsula", b: "The Gulf of Mexico", c: "Strait", d: "Island", correct: "d" },
  { question: "Which one of the following geographical terms describes a body of land that is bordered on three sides by water?", a: "Peninsula", b: "Gulf", c: "Strait", d: "Island", correct: "a" },
  { question: "A naturally produced, narrow, often navigable canal that links two bigger bodies of water is referred to as which of the below geographical terms?", a: "Peninsula", b: "Gulf", c: "Strait", d: "Island", correct: "c" },
  { question: "Which one of the following best describes the term “archipelago”?", a: "A shallow lagoon surrounded by a circular coral reef.", b: "A group of islands or a series of islands.", c: "The earth’s plant and animal life.", d: "None of the preceding", correct: "b" },
  { question: "Which one of the following is the world’s biggest archipelago?", a: "Island of Andaman and Nicobar", b: "Malaysia", c: "Indonesia", d: "Maldives", correct: "c" },
  { question: "Which one of the following is the biggest peninsula on the planet?", a: "India", b: "South Africa", c: "Arabia", d: "Both A & B", correct: "c" },
  { question: "Which one of the following passes connects Manali and Leh by road and cuts across the Pir Panjal range?", a: "Rohtas Pass", b: "Mana Pass", c: "Niti Pass", d: "Nathula Pass", correct: "a" },
  { question: "The Indus River carved out which one of the following passes?", a: "Rohtas Pass", b: "Nathula Pass", c: "Baralacha La Pass", d: "Banihal Pass", correct: "d" },
  { question: "Which passes provide access to the Kailash-Manasarovar land route?", a: "Mana Pass", b: "Rohtas Pass", c: "Nathula Pass", d: "Baralacha La Pass", correct: "a" },
  { question: "Which of these passes connects Srinagar and Leh?", a: "Mana Pass", b: "Rohtas Pass", c: "Nathula Pass", d: "Zoji La Pass", correct: "d" },
  { question: "The gold mining towns of Kalgoorlie and Coolgardie are located in:", a: "Australia", b: "THE USA", c: "England", d: "South Africa", correct: "a" },
  { question: "Tadoba National Park, home to tigers, panthers, and bears, is found in:", a: "Assam", b: "Chandrapur (Maharashtra)", c: "Karnataka", d: "Tamil Nadu", correct: "b" },
  { question: "In geography, who was the first to propose the convectional current hypothesis?", a: "Arthur Holmes", b: "Carl Ritter", c: "Arnaldo Faustini", d: "Immanuel Kant", correct: "a" },
  { question: "The tribes of the Apatanis can be found in:", a: "Himachal Pradesh", b: "Nagaland", c: "Sikkim", d: "Arunachal Pradesh", correct: "d" },
  { question: "Genoa is the most important seaport in the following countries:", a: "Spain", b: "Brazil", c: "Italy", d: "Canada", correct: "c" },
  { question: "In India’s demographic history, the year ___ is known as the Great Divide.", a: "the Year 1901", b: "in the year 1921", c: "In the year 1941", d: "D: 1951", correct: "b" },
  { question: "The UNESCO World Heritage Site of the Willandra Lakes Region is located in:", a: "The United States of America", b: "Australia", c: "The United Kingdom", d: "Germany", correct: "b" },
  { question: "Reliance Petroleum Ltd. has built the sole private sector refinery in the country.", a: "Guwahati", b: "Jamnagar", c: "Bombay", d: "Chennai", correct: "b" },
  { question: "Saffron is exclusively produced in one state in India.", a: "Assam", b: "Himachal Pradesh", c: "Jammu and Kashmir", d: "Meghalaya", correct: "c" },
  { question: "The International Astronomical Union (IAU) has its headquarters in:", a: "Geneva", b: "Mexico City", c: "New York", d: "Paris (France)", correct: "d" },
  { question: "With which nation did India plan to build a solar city in India in 2010?", a: "Japan", b: "The Russian Federation", c: "South Africa", d: "the United States of America", correct: "a" },
  { question: "The Barak River is a well-known river in:", a: "The Western Ghat", b: "Eastern Ghat", c: "Satpura hills", d: "Manipur hills", correct: "d" },
  { question: "Near the Mansarover Lake in the Great Himalayas, three prominent rivers of the Indian subcontinent find their origins. These are the rivers.", a: "Indus, Jhelum and Sutlej", b: "Brahmaputra, Sutlej and Yamuna", c: "Brahmaputra, Indus and Sutlej", d: "Jhelum, Sutlej and Yamuna", correct: "c" },
  { question: "Which river is known as the 'Sorrow of Bihar'?", a: "Ganges", b: "Kosi", c: "Brahmaputra", d: "Yamuna", correct: "b" },
  { question: "The largest desert in India is?", a: "Thar Desert", b: "Kutch Desert", c: "Great Indian Desert", d: "Rann of Kutch", correct: "a" },
  { question: "Which state is known as the 'Land of Five Rivers'?", a: "Punjab", b: "Haryana", c: "Rajasthan", d: "Uttar Pradesh", correct: "a" },
  { question: "The Narmada River flows through which of the following states?", a: "Madhya Pradesh", b: "Maharashtra", c: "Gujarat", d: "All of the above", correct: "d" },
  { question: "The highest peak in India is?", a: "Kangchenjunga", b: "K2", c: "Mount Everest", d: "Nanda Devi", correct: "a" },
  { question: "Which mountain range separates India from Tibet?", a: "Western Ghats", b: "Himalayas", c: "Eastern Ghats", d: "Vindhya Range", correct: "b" },
  { question: "Which of the following states does NOT share a border with Bangladesh?", a: "Tripura", b: "Mizoram", c: "Odisha", d: "West Bengal", correct: "c" },
  { question: "The Andaman and Nicobar Islands are located in which sea?", a: "Arabian Sea", b: "Bay of Bengal", c: "Laccadive Sea", d: "Indian Ocean", correct: "b" },
  { question: "Which state has the longest coastline in India?", a: "Gujarat", b: "Maharashtra", c: "Tamil Nadu", d: "Andhra Pradesh", correct: "a" },
  { question: "The Tropic of Cancer does NOT pass through which of the following states?", a: "Rajasthan", b: "Madhya Pradesh", c: "Maharashtra", d: "Uttar Pradesh", correct: "d" },
  { question: "Which lake is the largest in India?", a: "Dal Lake", b: "Vembanad Lake", c: "Sambhar Lake", d: "Chilika Lake", correct: "b" },
  { question: "The capital city of India, New Delhi, is situated in which part of the country?", a: "North", b: "South", c: "East", d: "West", correct: "a" },
  { question: "Which is the smallest state in India by area?", a: "Goa", b: "Sikkim", c: "Tripura", d: "Nagaland", correct: "a" },
  { question: "Which of the following rivers is NOT a tributary of the Ganges?", a: "Yamuna", b: "Ghaghara", c: "Saraswati", d: "Kosi", correct: "c" },
  { question: "The 'Gateway of India' is located in which city?", a: "Mumbai", b: "Delhi", c: "Kolkata", d: "Chennai", correct: "a" },
  { question: "Which Indian state is known as the 'Spice Garden of India'?", a: "Kerala", b: "Tamil Nadu", c: "Karnataka", d: "Andhra Pradesh", correct: "a" },
  { question: "The largest fresh water lake in India is?", a: "Vembanad", b: "Loktak", c: "Sambhar", d: "Dal", correct: "b" },
  { question: "Which of the following is a type of forest found in India?", a: "Deciduous Forest", b: "Rainforest", c: "Coniferous Forest", d: "All of the above", correct: "d" },
  { question: "The famous hill station 'Munnar' is located in which state?", a: "Karnataka", b: "Kerala", c: "Tamil Nadu", d: "Himachal Pradesh", correct: "b" },
  { question: "Which plateau is known as the 'Roof of the World'?", a: "Deccan Plateau", b: "Tibetan Plateau", c: "Chota Nagpur Plateau", d: "Malwa Plateau", correct: "b" },
  { question: "The Sundarbans delta is formed by the confluence of which rivers?", a: "Ganges and Brahmaputra", b: "Ganges and Yamuna", c: "Brahmaputra and Indus", d: "Godavari and Krishna", correct: "a" },
  { question: "Which state is the leading producer of tea in India?", a: "Assam", b: "West Bengal", c: "Kerala", d: "Tamil Nadu", correct: "a" },
  { question: "The Sunderbans mangrove forest is located in which Indian state?", a: "West Bengal", b: "Odisha", c: "Andhra Pradesh", d: "Gujarat", correct: "a" },
  { question: "The Himalayas are classified into how many ranges?", a: "Two", b: "Three", c: "Four", d: "Five", correct: "b" },
  { question: "Which state is known for its unique desert festival called 'Rajasthani Desert Festival'?", a: "Gujarat", b: "Maharashtra", c: "Rajasthan", d: "Haryana", correct: "c" },
  { question: "Which city is known as the 'City of Lakes'?", a: "Udaipur", b: "Jaipur", c: "Bhopal", d: "Kolkata", correct: "a" },
  { question: "Which state is famous for the 'Khajuraho Temples'?", a: "Madhya Pradesh", b: "Uttar Pradesh", c: "Maharashtra", d: "Rajasthan", correct: "a" },
  { question: "Which plateau is home to the largest number of tigers in India?", a: "Chota Nagpur", b: "Malwa", c: "Deccan", d: "Dharwar", correct: "c" },
  { question: "The Konkan Coast is located in which Indian state?", a: "Goa", b: "Maharashtra", c: "Karnataka", d: "All of the above", correct: "d" },
  { question: "Which mountain pass connects Himachal Pradesh and Ladakh?", a: "Rohtang Pass", b: "Zoji La Pass", c: "Nathula Pass", d: "Khardung La Pass", correct: "d" },
  { question: "Which Indian state is known as 'God's Own Country'?", a: "Goa", b: "Karnataka", c: "Kerala", d: "Maharashtra", correct: "c" },
  { question: "Which river is known for its 'Dudh Sagar' waterfalls?", a: "Mandovi", b: "Mahi", c: "Krishna", d: "Kaveri", correct: "a" },
  { question: "Which of the following is the smallest Union Territory of India by area?", a: "Lakshadweep", b: "Chandigarh", c: "Delhi", d: "Puducherry", correct: "a" }

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
