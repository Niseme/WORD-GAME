const scoreDispaly = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions = [
    {
        quiz: ['Dalia Asanavičiūtė', 'Rasa Budbergytė', 'Goda Barokienė'],
        options: [1, 2, 3],
        correct: 3
    },
    {
        quiz: ['Vytautas Bakas', 'Rima Bakienė', 'Kristijonas Bartoševičius'],
        options: [1, 2, 3],
        correct: 2
    },
    {
        quiz: ['Liuda Pupinienė', 'Ieva Pakarklytė', 'Monika Ošmianskienė'],
        options: [1, 2, 3],
        correct: 1
    },
    {
        quiz: ['Beata Petkevič', 'Vilija Targamadzė', 'Statys Pataisys'],
        options: [1, 2, 3],
        correct: 3
    },
    {
        quiz: ['Aidas Gedvilas', 'Aistė Gedvilienė', 'Dainius Gegužinis'],
        options: [1, 2, 3],
        correct: 3
    },
]

let score = 0;
let clicked = []
scoreDispaly.textContent = score;


function populateQuestions() {
    questions.forEach(question => {
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');

        const logoDisplay = document.createElement('h1');
        logoDisplay.textContent = '💡';
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
            const tipText = document.createElement('p');
            questionBox.append(tipText);
            tipText.textContent = tip;
        })

        const questionButtons = document.createElement('div');
        questionButtons.classList.add('question-buttons');
        questionBox.append(questionButtons);

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button');
            questionButton.classList.add('question-button');
            questionButton.textContent = option;
            questionButton.addEventListener('click', () => checkAnswer(questionButton, answerDisplay, option, optionIndex + 1, question.correct))
            questionButtons.append(questionButton);
        })

        const answerDisplay = document.createElement('div');
        answerDisplay.classList.add('answer-display');

        questionBox.append(answerDisplay);
        questionDisplay.append(questionBox);
    })
}

populateQuestions()

function checkAnswer(questionButton, answerDisplay, option, optionIndex, correctAnswer) {
    console.log('option', option);
    console.log('optionIndex', optionIndex);
    if (optionIndex === correctAnswer) {
        score++;
        scoreDispaly.textContent = score;
        addResults(answerDisplay, 'Correct!', 'correct')
    } else {
        score--;
        scoreDispaly.textContent = score;
        addResults(answerDisplay, 'Wrong!', 'wrong')
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}

function addResults(answerDisplay, answer, className) {
    answerDisplay.classList.remove('correct');
    answerDisplay.classList.remove('wrong');
    answerDisplay.classList.add(className);

    answerDisplay.textContent = answer;
}