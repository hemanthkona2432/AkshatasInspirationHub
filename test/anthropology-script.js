const quizData = [
    { question: "Which of the following is not a part of the anthropological perspective?", a: "Holism", b: "Cultural relativism", c: "Ethnocentrism", d: "Cross-culture study", correct: "c" },
    { question: "The notion or concept that all cultures are read in correlation with one another is _____________.", a: "Holism", b: "Cultural relativism", c: "Ethnocentrism", d: "Glocalization", correct: "a" },
    { question: "The research description produced by a scientist regarding the religion and its religious practices at a place is called ___________.", a: "Ethnocentrism", b: "Ethnicity", c: "Ethnocide", d: "Ethnography", correct: "d" },
    { question: "Understanding other cultures from the perspective of your culture is called ____________.", a: "Ethnocentrism", b: "Ethnicity", c: "Cultural relativism", d: "Cultural anthropology", correct: "a" },
    { question: "Who said, “Ideas about race, culture, and peoplehood or ethnicity have long served to orient anthropology’s inquiries”?", a: "Bartholin’s", b: "Otto Gassmann", c: "Eric R. Wolf", d: "Magnus Hundt", correct: "c" },
    { question: "During the Cultural Renaissance in Germany, whose work did the word archaeology first appear?", a: "Bartholin’s", b: "Otto Gassmann", c: "Eric R. Wolf", d: "Both a and b", correct: "d" },
    { question: "Anthropology is defined as the science that treats man and is divided into Anatomy and Psychology. Who coined this definition?", a: "Paul Broca", b: "Charles Darwin", c: "Bartholin’s", d: "Magnus Hundt", correct: "c" },
    { question: "A neurosurgeon who did impressive work in anthropological research and gave us unique concepts is __________.", a: "Paul Broca", b: "Charles Darwin", c: "Bartholin’s", d: "Magnus Hundt", correct: "a" },
    { question: "During the early 20th century, the four field approaches to understanding anthropology were advised by __________?", a: "Franz Boas", b: "Adam F. Kollar", c: "Bartholin’s", d: "Magnus Hundt", correct: "a" },
    { question: "The term 'ethnology' was coined and defined by __________?", a: "Étienne Serres", b: "Charles Darwin", c: "Adam F. Kollár", d: "Franz Boas", correct: "c" },
    { question: "What is the nature of the strategy for survival?", a: "Association", b: "Artificial selection", c: "Rejection", d: "Adaptation", correct: "d" },
    { question: "Medical anthropology is a study about __________.", a: "Health", b: "Disease", c: "Mental health", d: "Forensics", correct: "a" },
    { question: "What is the term used to call the leaders of military, religious, and political organizations?", a: "Chief", b: "Dictator", c: "King", d: "Big man", correct: "a" },
    { question: "In the caste or society of common trait, people doing common occupations with similar characteristics are called __________.", a: "Clean", b: "Purity", c: "Impurity", d: "None of the above", correct: "b" },
    { question: "The notion that defines the maximum biological number of births is __________.", a: "Birth rate", b: "Fecundity", c: "Sex ratio", d: "Fertility", correct: "b" },
    { question: "The system where a hierarchical female heir inherits power to the throne is called __________.", a: "Patriarchy", b: "Matriarchy", c: "Patrilineal", d: "Matrilineal", correct: "d" },
    { question: "The evolving process of Cultural ecology is called __________.", a: "Human nature", b: "Human adaptation", c: "Human culture", d: "Human behaviour", correct: "b" },
    { question: "Who noted that capitalism is the product of one sector of people in Christianity?", a: "Spencer", b: "Karl Marx", c: "Emil Durkheim", d: "Max Weber", correct: "d" },
    { question: "The process of spreading a Cultural trait from one group to another is called __________.", a: "Folkways", b: "Cultural diffusion", c: "Counter culture", d: "Cultural complexes", correct: "b" },
    { question: "Define an illiterate person.", a: "A person who can read", b: "A person who can read and write", c: "A person who can only write", d: "None of these", correct: "b" },
    { question: "Who is considered the father of modern anthropology?", a: "Bronislaw Malinowski", b: "Franz Boas", c: "Claude Lévi-Strauss", d: "E. B. Tylor", correct: "b" },
    { question: "Which term refers to the study of human societies and cultures and their development?", a: "Ethnology", b: "Sociology", c: "Anthropometry", d: "Ethnography", correct: "a" },
    { question: "The concept of 'survival of the fittest' was first proposed by?", a: "Herbert Spencer", b: "Charles Darwin", c: "Jean-Baptiste Lamarck", d: "Alfred Russel Wallace", correct: "a" },
    { question: "Which of the following is not a tool used in ethnographic research?", a: "Participant observation", b: "Surveys", c: "Statistical analysis", d: "Archaeological excavation", correct: "d" },
    { question: "Which branch of anthropology studies past human societies through their material remains?", a: "Cultural anthropology", b: "Archaeology", c: "Biological anthropology", d: "Linguistic anthropology", correct: "b" },
    { question: "Which of the following theories deals with the evolution of societies and cultures?", a: "Cultural diffusion", b: "Functionalism", c: "Social Darwinism", d: "Structuralism", correct: "c" },
    { question: "The concept of 'cultural relativism' was popularized by?", a: "Margaret Mead", b: "Franz Boas", c: "Lewis Henry Morgan", d: "Ruth Benedict", correct: "b" },
    { question: "Which of the following is a method used in physical anthropology?", a: "Radiocarbon dating", b: "Kinship analysis", c: "Cultural immersion", d: "Interviews", correct: "a" },
    { question: "What is the study of primates, including humans, known as?", a: "Ethnography", b: "Primatology", c: "Linguistic anthropology", d: "Paleoanthropology", correct: "b" },
    { question: "Which of these scholars is associated with the concept of 'structuralism'?", a: "Claude Lévi-Strauss", b: "Bronislaw Malinowski", c: "Alfred Radcliffe-Brown", d: "Edward Tylor", correct: "a" },
    { question: "What is the term used for a kinship system in which descent is traced through the mother?", a: "Patrilineal", b: "Matrilineal", c: "Bilateral", d: "Unilineal", correct: "b" },
    { question: "Which theory suggests that human societies evolve in a linear progression from simple to complex forms?", a: "Diffusionism", b: "Cultural relativism", c: "Unilineal evolution", d: "Symbolic anthropology", correct: "c" },
    { question: "The study of language in its social and cultural context is known as?", a: "Linguistic anthropology", b: "Sociolinguistics", c: "Phonology", d: "Semantics", correct: "a" },
    { question: "Who is known for developing the method of participant observation in anthropology?", a: "E. B. Tylor", b: "Bronislaw Malinowski", c: "Franz Boas", d: "Clifford Geertz", correct: "b" },
    { question: "Which anthropologist is known for the study of the Trobriand Islanders and the Kula ring?", a: "Bronislaw Malinowski", b: "Claude Lévi-Strauss", c: "Margaret Mead", d: "Ruth Benedict", correct: "a" },
    { question: "What does the term 'ethnocentrism' refer to?", a: "The study of different ethnic groups", b: "The belief in the superiority of one's own culture", c: "The practice of preserving endangered cultures", d: "The integration of cultural practices", correct: "b" },
    { question: "Which anthropologist is associated with the concept of cultural materialism?", a: "Marvin Harris", b: "Ruth Benedict", c: "Claude Lévi-Strauss", d: "Alfred Radcliffe-Brown", correct: "a" },
    { question: "Which method is commonly used in archaeological research to determine the age of an artifact?", a: "Carbon dating", b: "Thermoluminescence", c: "Dendrochronology", d: "All of the above", correct: "d" },
    { question: "What is the term for the system of exchange in traditional societies involving gift-giving without explicit agreement for immediate return?", a: "Market economy", b: "Reciprocity", c: "Redistribution", d: "Barter", correct: "b" },
    { question: "Which anthropologist is famous for her work on gender roles and adolescence in Samoa?", a: "Ruth Benedict", b: "Franz Boas", c: "Margaret Mead", d: "Zora Neale Hurston", correct: "c" }
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
