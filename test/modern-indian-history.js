const quizData = [
    { question: "The year of the foundation of the Women’s Indian Association (WIA) is?", a: "1947", b: "1937", c: "1927", d: "1917", correct: "d" },
  { question: "By the Act of 1858, India was to be governed under whom?", a: "By the Company", b: "In the name of the Crown", c: "By a Board of Directors", d: "In the name of Governor-General of India", correct: "b" },
  { question: "The Ghadar Party was founded (November 1913) in San Francisco USA by?", a: "Madam Bhikaji Cama", b: "Lala Har Dayal", c: "Shyamji Krishna Verma", d: "Both (a) and (b)", correct: "b" },
  { question: "The Poona Pact (1932) was an agreement between?", a: "Nehru and Ambedkar", b: "Gandhi and Ambedkar", c: "Malaviya and Ambedkar", d: "Gandhi and Nehru", correct: "b" },
  { question: "Which of the following national leaders did not defend soldiers of the Indian National Army in the 1945 case?", a: "Sir Tej Bahadur Sapru", b: "Bhula Bhai Desai", c: "Rajagopalachari", d: "Jawaharlal Nehru", correct: "c" },
  { question: "Which of the following treaties brought an end to the independent existence of Peshwa Baji Rao-II?", a: "The Treaty of Purandar", b: "Convention of Wadgaon", c: "Treaty of Bassein", d: "Treaty of Salbai", correct: "c" },
  { question: "Who started the first English newspaper in India?", a: "Bal Gangadhar Tilak", b: "Raja Rammohan Roy", c: "J.A. Hickey", d: "Lord William Bentinck", correct: "c" },
  { question: "The first woman to become a Chief Minister of any State in India was?", a: "Nandini Satpathy", b: "Dr. J. Jayalalitha", c: "Sucheta Kripalani", d: "Ms. Mayawati", correct: "c" },
  { question: "Who is the author of Vande Mataram?", a: "Mahatma Gandhi", b: "Rabindranath Tagore", c: "Bankim Chandra Chatterjee", d: "Sarat Chandra Chatterjee", correct: "c" },
  { question: "Who is regarded as the ‘father of modern India’?", a: "Raja Ram Mohan Roy", b: "Swami Dayananda Saraswati", c: "Sri Aurobindo", d: "Bhagat Singh", correct: "a" },
  { question: "The most important feature of the Government of India Act of 1919 was?", a: "Enlargement of Indian Councils", b: "Provision for direct election", c: "Dyarchy in the Provinces", d: "All of the above", correct: "d" },
  { question: "Muslim communalism was lent an impetus by the activities of?", a: "Ashfaqullah", b: "Liaqat Hussain", c: "Maulana Abul Kalam Azad", d: "Sayyid Ahmad Khan", correct: "d" },
  { question: "Who threw two bombs on the Door of the Central Assembly in New Delhi on April 8, 1929?", a: "Bhagat Singh", b: "Batukeshwar Dutt", c: "Raj Guru", d: "Both (a) and (b)", correct: "d" },
  { question: "Noakhali is situated in?", a: "West Bengal", b: "Bangladesh", c: "Tripura", d: "Bihar", correct: "b" },
  { question: "During the first Carnatic War, the French Governor-General of Pondicherry was?", a: "La Bourdonnais", b: "Captain Paradise", c: "Dupleix", d: "Count-de-Lally", correct: "c" },
  { question: "The Prime causes of the 1857 mutiny did not include?", a: "The new system of education", b: "The Widow Remarriage Act", c: "The despatch of Indian Sepoys to Afghanistan", d: "Laws forbidding intermarriages between Indians and the British", correct: "d" },
  {question: "In which year did the British Crown assume direct control of India from the East India Company?",
    a: "1857", 
    b: "1858", 
    c: "1877", 
    d: "1856", 
    correct: "b"
  },
  {
    question: "Who was the Viceroy of India during the partition of Bengal in 1905?",
    a: "Lord Curzon", 
    b: "Lord Ripon", 
    c: "Lord Minto", 
    d: "Lord Hardinge", 
    correct: "a"
  },
  {
    question: "Which Indian leader is associated with the founding of the Indian National Congress in 1885?",
    a: "Bal Gangadhar Tilak", 
    b: "A.O. Hume", 
    c: "Mahatma Gandhi", 
    d: "Dadabhai Naoroji", 
    correct: "b"
  },
  {
    question: "The Montague-Chelmsford reforms were introduced in which year?",
    a: "1909", 
    b: "1919", 
    c: "1935", 
    d: "1947", 
    correct: "b"
  },
  {
    question: "Who among the following was the first Indian to join the Indian Civil Services (ICS)?",
    a: "Satyendranath Tagore", 
    b: "Dadabhai Naoroji", 
    c: "Raja Ram Mohan Roy", 
    d: "Subhas Chandra Bose", 
    correct: "a"
  },
  {
    question: "Which revolutionary was associated with the Kakori conspiracy case in 1925?",
    a: "Bhagat Singh", 
    b: "Chandra Shekhar Azad", 
    c: "Ram Prasad Bismil", 
    d: "Batukeshwar Dutt", 
    correct: "c"
  },
  {
    question: "Who led the Salt Satyagraha (Dandi March) in 1930?",
    a: "Subhas Chandra Bose", 
    b: "Mahatma Gandhi", 
    c: "Jawaharlal Nehru", 
    d: "Sardar Patel", 
    correct: "b"
  },
  {
    question: "The Non-Cooperation Movement was withdrawn after which incident?",
    a: "Jallianwala Bagh Massacre", 
    b: "Chauri Chaura Incident", 
    c: "Simon Commission Protest", 
    d: "Rowlatt Act Protest", 
    correct: "b"
  },
  {
    question: "Who was the founder of the Forward Bloc?",
    a: "Mahatma Gandhi", 
    b: "Subhas Chandra Bose", 
    c: "Jawaharlal Nehru", 
    d: "Sardar Patel", 
    correct: "b"
  },
  {
    question: "Which of the following was the main demand of the Swaraj Party?",
    a: "Complete independence", 
    b: "Council reforms", 
    c: "Abolition of the ICS", 
    d: "Boycott of British goods", 
    correct: "b"
  },
  {
    question: "Who presided over the Lahore Session of the Indian National Congress in 1929, where Purna Swaraj was declared?",
    a: "Subhas Chandra Bose", 
    b: "Jawaharlal Nehru", 
    c: "Mahatma Gandhi", 
    d: "Sardar Patel", 
    correct: "b"
  },
  {
    question: "Who started the newspaper 'Kesari' to promote the nationalist movement?",
    a: "Mahatma Gandhi", 
    b: "Bal Gangadhar Tilak", 
    c: "Bipin Chandra Pal", 
    d: "Lala Lajpat Rai", 
    correct: "b"
  },
  {
    question: "The Simon Commission, appointed in 1927, did not include any:",
    a: "Indian member", 
    b: "British member", 
    c: "American advisor", 
    d: "Women member", 
    correct: "a"
  },
  {
    question: "Who was the first Governor-General of independent India?",
    a: "Lord Mountbatten", 
    b: "C. Rajagopalachari", 
    c: "Dr. Rajendra Prasad", 
    d: "Jawaharlal Nehru", 
    correct: "a"
  },
  {
    question: "The Jallianwala Bagh massacre took place in which year?",
    a: "1919", 
    b: "1920", 
    c: "1915", 
    d: "1918", 
    correct: "a"
  },
  {
    question: "Which party was established by C.R. Das and Motilal Nehru in 1923?",
    a: "Indian National Congress", 
    b: "Swaraj Party", 
    c: "Forward Bloc", 
    d: "Justice Party", 
    correct: "b"
  },
  {
    question: "Who wrote the book 'Hind Swaraj'?",
    a: "Jawaharlal Nehru", 
    b: "Mahatma Gandhi", 
    c: "Bal Gangadhar Tilak", 
    d: "Lala Lajpat Rai", 
    correct: "b"
  },
  {
    question: "The Cabinet Mission came to India in which year?",
    a: "1942", 
    b: "1946", 
    c: "1935", 
    d: "1947", 
    correct: "b"
  },
  {
    question: "Who was the Viceroy of India at the time of the Quit India Movement in 1942?",
    a: "Lord Irwin", 
    b: "Lord Mountbatten", 
    c: "Lord Wavell", 
    d: "Lord Linlithgow", 
    correct: "d"
  },
  {
    question: "In which year did the Battle of Plassey take place?",
    a: "1757", 
    b: "1857", 
    c: "1764", 
    d: "1799", 
    correct: "a"
  },
  {
    question: "Who was the first Indian to win a Nobel Prize?",
    a: "Mahatma Gandhi", 
    b: "Rabindranath Tagore", 
    c: "C.V. Raman", 
    d: "Subhas Chandra Bose", 
    correct: "b"
  },
  {
    question: "The Rowlatt Act of 1919 aimed to?",
    a: "Reform Indian education", 
    b: "Suppress revolutionary activities", 
    c: "Grant self-rule", 
    d: "Promote industrial growth", 
    correct: "b"
  },
  {
    question: "Who led the Champaran Satyagraha in 1917?",
    a: "Jawaharlal Nehru", 
    b: "Subhas Chandra Bose", 
    c: "Mahatma Gandhi", 
    d: "Sardar Patel", 
    correct: "c"
  },
  {
    question: "The Indian Independence Act was passed by the British Parliament in which year?",
    a: "1946", 
    b: "1947", 
    c: "1948", 
    d: "1945", 
    correct: "b"
  },
  {
    question: "Who was the founder of the Indian National Army (INA)?",
    a: "Mahatma Gandhi", 
    b: "Subhas Chandra Bose", 
    c: "Bal Gangadhar Tilak", 
    d: "Lala Lajpat Rai", 
    correct: "b"
  },{question: "The Cripps Mission came to India in which year?",
    a: "1942", 
    b: "1935", 
    c: "1940", 
    d: "1946", 
    correct: "a"
  },
  {
    question: "The historic Khilafat Movement was initiated to support which of the following?",
    a: "Indian Independence", 
    b: "Ottoman Empire", 
    c: "Muslim League", 
    d: "British Raj", 
    correct: "b"
  },
  {
    question: "Which event led to the end of the British Raj in India?",
    a: "World War I", 
    b: "World War II", 
    c: "First War of Independence", 
    d: "Non-Cooperation Movement", 
    correct: "b"
  },
  {
    question: "Who was the first woman president of the Indian National Congress?",
    a: "Sarojini Naidu", 
    b: "Annie Besant", 
    c: "Indira Gandhi", 
    d: "Fatima Sheikh", 
    correct: "b"
  },
  {
    question: "In which year was the Poona Pact signed?",
    a: "1930", 
    b: "1932", 
    c: "1935", 
    d: "1940", 
    correct: "b"
  },
  {
    question: "The 'Quit India Resolution' was passed in which session of the Indian National Congress?",
    a: "Bombay Session, 1942", 
    b: "Lahore Session, 1929", 
    c: "Calcutta Session, 1920", 
    d: "Lucknow Session, 1916", 
    correct: "a"
  },
  {
    question: "Who was the leader of the Jat movement in India during the late 19th century?",
    a: "B.R. Ambedkar", 
    b: "Lala Lajpat Rai", 
    c: "Vallabhbhai Patel", 
    d: "Gopal Krishna Gokhale", 
    correct: "b"
  },
  {
    question: "The 'Simon Go Back' slogan was raised during protests against which commission?",
    a: "Montague-Chelmsford", 
    b: "Simon Commission", 
    c: "Cripps Mission", 
    d: "Royal Commission", 
    correct: "b"
  },
  {
    question: "Who authored the book 'The Discovery of India'?",
    a: "Jawaharlal Nehru", 
    b: "Mahatma Gandhi", 
    c: "S. Radhakrishnan", 
    d: "B. R. Ambedkar", 
    correct: "a"
  },
  {
    question: "Which movement is known for the slogan 'Do or Die'?",
    a: "Non-Cooperation Movement", 
    b: "Civil Disobedience Movement", 
    c: "Quit India Movement", 
    d: "Swaraj Movement", 
    correct: "c"
  },
  {
    question: "The first round table conference was held in which year?",
    a: "1929", 
    b: "1930", 
    c: "1931", 
    d: "1932", 
    correct: "a"
  },
  {
    question: "Which was the first province to be transferred to Indian control after independence?",
    a: "Bengal", 
    b: "Punjab", 
    c: "Bihar", 
    d: "West Bengal", 
    correct: "a"
  },
  {
    question: "The First War of Independence in 1857 is also known as?",
    a: "The Sepoy Mutiny", 
    b: "The First National Movement", 
    c: "The Indian National Movement", 
    d: "The Great Revolt", 
    correct: "a"
  },
  {
    question: "Who was the leader of the Ghadar Party?",
    a: "Bhagat Singh", 
    b: "Lala Hardayal", 
    c: "Subhas Chandra Bose", 
    d: "Rani Jhansi", 
    correct: "b"
  },
  {
    question: "In which year was the first all-India census conducted?",
    a: "1881", 
    b: "1901", 
    c: "1911", 
    d: "1931", 
    correct: "a"
  },
  {
    question: "Who was the first to propose the idea of a separate nation for Muslims in India?",
    a: "Allama Iqbal", 
    b: "Muhammad Ali Jinnah", 
    c: "Syed Ahmad Khan", 
    d: "Liaquat Ali Khan", 
    correct: "a"
  },
  {
    question: "Which act provided for the establishment of a federal structure in India?",
    a: "Government of India Act, 1919", 
    b: "Government of India Act, 1935", 
    c: "Indian Independence Act, 1947", 
    d: "Montagu-Chelmsford Reforms", 
    correct: "b"
  },
  {
    question: "Who was the prominent figure behind the Swadeshi Movement?",
    a: "Bal Gangadhar Tilak", 
    b: "Mahatma Gandhi", 
    c: "Subhas Chandra Bose", 
    d: "Bipin Chandra Pal", 
    correct: "a"
  },
  {
    question: "Which revolutionary organization was founded by Bhagat Singh?",
    a: "Hindustan Socialist Republican Association", 
    b: "Ghadar Party", 
    c: "Jugantar Party", 
    d: "Anushilan Samiti", 
    correct: "a"
  },
  {
    question: "The term 'Covenant' in the context of Indian nationalism refers to?",
    a: "The Indian National Congress", 
    b: "The Cripps Mission", 
    c: "The Lucknow Pact", 
    d: "The Ghadar Movement", 
    correct: "c"
  },
  {
    question: "Who was the last Governor-General of India?",
    a: "Lord Mountbatten", 
    b: "Lord Wavell", 
    c: "Lord Linlithgow", 
    d: "C. Rajagopalachari", 
    correct: "a"
  },
  {
    question: "The famous slogan 'Inquilab Zindabad' was popularized by?",
    a: "Mahatma Gandhi", 
    b: "Bhagat Singh", 
    c: "Subhas Chandra Bose", 
    d: "Sardar Patel", 
    correct: "b"
  }

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
