const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-answer'))

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//** array of questions */
let questions = [
    {
        question: '"The beautiful lake." Which grammatical feature is this an example of?',
        choice1: 'A fronted adverbial',
        choice2: 'An expanded noun phrase',
        choice3: 'A subordinating conjunction',
        choice4: 'An adverb',
        answer: 2 
},
{
    question: 'Who was killed at the Battle of Hastings?',
    choice1: 'Edward The Confessor',
    choice2: 'Harald Hardrada',
    choice3: 'Harold Godwinson',
    choice4: 'William the Conqueror',
    answer:3
},
{
    question:'Which of these animals would you NOT find in the Arctic',
    choice1: 'Penguin',
    choice2: 'Lemming',
    choice3: 'Snowy Owl',
    choice4: 'polar Bear',
    answer: 1
},

{
    question: 'Can you crack this calculation? 20 - 5 × 4 ÷ 2 + 12 =',
    choice1:'-2',
    choice2: '22',
    choice3: '42',
    choice4: '56',
    answer: 2
},
{
question: 'Which of these sentences has the correct use of homophones?',
choice1: "They're on there toys. ",
choice2: "They're on their toys. ",
choice3: "There on their toys.",
choice4: "Their on there toys.",
answer: 2
},

{
 question: 'What does ‘Viking’ translate to in Old Norse?',
 choice1: 'A Pirate Raid',
 choice2: 'Water Traders',
 choice3: 'A fierce sea',
 choice4: 'fierce warriors',
 answer:1
},
{
    question: 'How many planets are there in our Solar System?',
    choice1: '5',
    choice2: '9',
    choice3: '6',
    choice4: '8',
    answer: 4
},
{
    question: 'Susie the Stegosaurus eats 200 kg of plant material each week. She calculates that 80% of her diet is from eating shrubs and bushes. How many kilograms is this?',
    choice1: '120 kg',
    choice2: '140 kg',
    choice3: '160 kg',
    choice4: '180 kg',
    answer: 3
},

{
    question: 'What type of story is the Banshee?',
    choice1: 'myth',
    choice2: 'legend',
    choice3: 'fable',
    choice4: 'folktale',
    answer: 1

},

{
    question: 'Who was the Roman God of War ?',
    choice1: 'Jupiter',
    choice2: 'Juno',
    choice3: 'Apollo',
    choice4: 'Mars',
    answer: 4
},
{
    question: 'What is the name of a triangle with all equal sides and angles',
    choice1: 'Scalene',
    choice2: 'Isosceles',
    choice3: 'Right Angled',
    choice4: 'Equilateral',
    answer: 4

}

]

// constants /

const CORRECT_SCORE = 5;
const MAX_QUESTIONS = 8;

// start game function /

function runGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    newQuestion()
}

// question selection and ramomizer /
function newQuestion () {
    questionCounter++
    //randomise questions 
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question;
  
 //for loop test   
 //for (let i = 0; i < choices.length; i++) {
   //  const number = choice.dataset['number'];
     //choice.innerText = currentQuestion ['choice' + number];
     
///}

choices.forEach(choice =>{
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion ['choice' + number];
});
availableQuestions.splice(questionIndex,1);
acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener("click", Event => {
        
        if (!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = Event.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer)
        newQuestion();

    })
})

runGame();