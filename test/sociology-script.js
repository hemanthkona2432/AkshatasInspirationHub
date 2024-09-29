const quizData = [
    { question: "The system under which boys and girls are allowed to mix with each other and are given maximum permissible mixing facility by society before marriage is known as:", a: "probationary marriage", b: "experimental marriage", c: "companionate marriage", d: "none of these", correct: "a" },
    { question: "Who said, 'Man is a Social Animal'?", a: "Aristotle", b: "Comte", c: "Plato", d: "Socrates", correct: "a" },
    { question: "When was the term sociology coined?", a: "1838", b: "1732", c: "1835", d: "1650", correct: "a" },
    { question: "What is the meaning of logos in the term sociology?", a: "Science/Study", b: "social", c: "Society", d: "Companion", correct: "a" },
    { question: "Wright Mills was a …………….. sociologist.", a: "American", b: "British", c: "Russian", d: "French", correct: "a" },
    { question: "Who authored the book 'Social Organization: A Study of the Larger Mind'?", a: "Charles Cooley", b: "E. B. Tylor", c: "F. Tonnies", d: "F D Saussure", correct: "a" },
    { question: "What is the type of control organized through bureaucracy?", a: "officials", b: "informal", c: "Formal", d: "Court", correct: "c" },
    { question: "Who defined 'joint family' as a group of people who generally live under one roof, who eat food cooked at one hearth, who hold property in common and who participate in common worship and are related to each other as some particular type of kindred?", a: "Nimcoff", b: "Karve", c: "Cooley", d: "Sriniva", correct: "b" },
    { question: "Who authored the book 'The Psychology of Social Norms'?", a: "Robert Bierstadt", b: "M F Nimkoff", c: "Muzafer Sherif", d: "W G Ogburn", correct: "c" },
    { question: "Who wrote the book 'Mind, Self and Society'?", a: "Homans", b: "Giddens", c: "Mead", d: "Gramsci", correct: "c" },
    { question: "Who wrote the famous book 'Folkways'?", a: "Merton", b: "MacIver", c: "Sumner", d: "Albert", correct: "c" },
    { question: "Which theory analyzes the concepts like personal troubles of milieu and public issues of social structure?", a: "Sociological Imagination", b: "Chicago School", c: "Synthetic School", d: "Formalistic School", correct: "a" },
    { question: "When was the book 'The Sociological Imagination' published?", a: "1959", b: "1911", c: "1905", d: "1922", correct: "a" },
    { question: "Which sociologist is known for the theory of symbolic interactionism?", a: "Max Weber", b: "Erving Goffman", c: "Herbert Blumer", d: "Talcott Parsons", correct: "c" },
  { question: "The concept of 'anomie' was introduced by which sociologist?", a: "Durkheim", b: "Marx", c: "Weber", d: "Simmel", correct: "a" },
  { question: "Who is considered the father of sociology?", a: "Emile Durkheim", b: "Auguste Comte", c: "Karl Marx", d: "Herbert Spencer", correct: "b" },
  { question: "Which sociologist emphasized the role of conflict in social change?", a: "Comte", b: "Weber", c: "Marx", d: "Parsons", correct: "c" },
  { question: "What term describes the unwritten rules that govern social behavior?", a: "Norms", b: "Values", c: "Beliefs", d: "Roles", correct: "a" },
  { question: "Which of the following is a primary group?", a: "Colleagues at work", b: "Friends", c: "Social club members", d: "Acquaintances", correct: "b" },
  { question: "What is the primary focus of the Chicago School of Sociology?", a: "Structural functionalism", b: "Social ecology", c: "Symbolic interactionism", d: "Conflict theory", correct: "b" },
  { question: "Which sociologist coined the term 'the looking-glass self'?", a: "George Herbert Mead", b: "Charles Horton Cooley", c: "Erving Goffman", d: "Talcott Parsons", correct: "b" },
  { question: "What does the term 'socialization' refer to?", a: "Economic development", b: "Cultural transmission", c: "Political engagement", d: "Technological advancement", correct: "b" },
  { question: "Who is known for the study of suicide and its social factors?", a: "Talcott Parsons", b: "Emile Durkheim", c: "Karl Marx", d: "Max Weber", correct: "b" },
  { question: "Which theory focuses on the interpretation of symbols in social interactions?", a: "Functionalism", b: "Conflict theory", c: "Symbolic interactionism", d: "Structuralism", correct: "c" },
  { question: "Which sociologist proposed the concept of the 'protestant ethic'?", a: "Karl Marx", b: "Max Weber", c: "Emile Durkheim", d: "August Comte", correct: "b" },
  { question: "What is the term for the process by which people learn and internalize the values and norms of their culture?", a: "Socialization", b: "Assimilation", c: "Acculturation", d: "Integration", correct: "a" },
  { question: "The theory that social structures influence individual behaviors and outcomes is known as?", a: "Social constructionism", b: "Structural functionalism", c: "Social determinism", d: "Symbolic interactionism", correct: "c" },
  { question: "Which of the following is NOT a characteristic of a bureaucracy?", a: "Hierarchy", b: "Formal rules", c: "Personal relationships", d: "Specialization", correct: "c" },
  { question: "What is the term for a group of people who share a common culture and identity?", a: "Community", b: "Society", c: "Social group", d: "Collective", correct: "a" },
  { question: "Which sociological perspective focuses on the role of power and inequality in society?", a: "Functionalism", b: "Conflict theory", c: "Symbolic interactionism", d: "Postmodernism", correct: "b" },
  { question: "The concept of 'cultural lag' was introduced by which sociologist?", a: "William Fielding Ogburn", b: "Edward Sapir", c: "Karl Marx", d: "Emile Durkheim", correct: "a" },
  { question: "Who studied the 'theory of planned behavior'?", a: "Ajzen", b: "Fishbein", c: "Cialdini", d: "Becker", correct: "a" },
  { question: "What is the main focus of feminist theory in sociology?", a: "Gender inequality", b: "Economic systems", c: "Cultural norms", d: "Political structures", correct: "a" },
  { question: "Which term refers to the loss of traditional values in modern society?", a: "Anomie", b: "Cultural relativism", c: "Globalization", d: "Modernization", correct: "a" },
  { question: "The process of adapting to a new culture while maintaining one's own cultural identity is known as?", a: "Assimilation", b: "Acculturation", c: "Integration", d: "Multiculturalism", correct: "b" },
  { question: "Who developed the concept of the 'ideal type'?", a: "Max Weber", b: "Emile Durkheim", c: "Talcott Parsons", d: "George Simmel", correct: "a" },
  { question: "Which concept refers to the social norms that govern behavior in a given situation?", a: "Social roles", b: "Social scripts", c: "Cultural norms", d: "Social codes", correct: "b" },
  { question: "Which term refers to the study of the social aspects of human behavior?", a: "Sociology", b: "Psychology", c: "Anthropology", d: "Economics", correct: "a" },
  { question: "Who argued that social behavior is primarily a result of social interaction?", a: "Charles Cooley", b: "George Mead", c: "Erving Goffman", d: "Max Weber", correct: "b" },
  { question: "What is the term for a social system in which men hold primary power?", a: "Matriarchy", b: "Patriarchy", c: "Meritocracy", d: "Oligarchy", correct: "b" },
  { question: "Who is known for his work on 'The Presentation of Self in Everyday Life'?", a: "Erving Goffman", b: "Talcott Parsons", c: "Emile Durkheim", d: "Max Weber", correct: "a" },
  { question: "What type of society is characterized by a reliance on agriculture?", a: "Hunting and gathering", b: "Industrial", c: "Post-industrial", d: "Agrarian", correct: "d" },
  { question: "Which term refers to the economic system where the means of production are owned and controlled by private individuals?", a: "Socialism", b: "Capitalism", c: "Communism", d: "Feudalism", correct: "b" },
  { question: "The term 'social stratification' refers to?", a: "The social hierarchy in a society", b: "The process of socialization", c: "The impact of culture on society", d: "The economic system of a society", correct: "a" },
  { question: "What is the primary focus of cultural sociology?", a: "Economic factors", b: "Cultural symbols and meanings", c: "Political institutions", d: "Social structures", correct: "b" },
  { question: "Which sociologist emphasized the importance of verstehen (understanding) in social research?", a: "Max Weber", b: "Emile Durkheim", c: "Talcott Parsons", d: "Karl Marx", correct: "a" },
  { question: "Who argued that society is a product of social interactions?", a: "Karl Marx", b: "Emile Durkheim", c: "George Herbert Mead", d: "Max Weber", correct: "c" },
  { question: "What is the primary concern of deviance in sociology?", a: "Social conformity", b: "Criminal behavior", c: "Norm violation", d: "Economic status", correct: "c" },
  { question: "Which of the following is an example of a subculture?", a: "Mainstream culture", b: "Youth culture", c: "Global culture", d: "Universal culture", correct: "b" },
  { question: "The concept of 'social contract' was popularized by which philosopher?", a: "John Locke", b: "Thomas Hobbes", c: "Jean-Jacques Rousseau", d: "Karl Marx", correct: "c" },
  { question: "What term describes the process of breaking away from traditional practices?", a: "Ritualization", b: "Secularization", c: "Modernization", d: "Globalization", correct: "c" },
  { question: "Who studied the relationship between social change and mental health?", a: "Robert Merton", b: "Emile Durkheim", c: "Talcott Parsons", d: "Herbert Spencer", correct: "b" },
  { question: "Which theory focuses on the role of symbols and language in the construction of social reality?", a: "Structural functionalism", b: "Symbolic interactionism", c: "Conflict theory", d: "Behaviorism", correct: "b" },
  { question: "What does the term 'social mobility' refer to?", a: "Movement between social classes", b: "Change in social norms", c: "Shifts in cultural practices", d: "Economic transitions", correct: "a" },
  { question: "Which sociological approach emphasizes the importance of context in understanding social phenomena?", a: "Structuralism", b: "Contextualism", c: "Functionalism", d: "Positivism", correct: "b" },
  { question: "The term 'collective conscience' was introduced by which sociologist?", a: "Emile Durkheim", b: "Karl Marx", c: "Talcott Parsons", d: "Max Weber", correct: "a" }
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
