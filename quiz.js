const button = document.getElementById("start-quiz-button");

function startQuiz(){
const questions = [
  {
    prompt: "Which animal invites the mouse for tea?\n(a) Snake\n(b) Owl\n(c) Fox\n\
(d) Gruffalo",
    answer: "b"
  },
  {
    prompt: "What adjective is used to describe the Gruffalo's eyes?\n(a) Black\n\
(b) Orange\n(c) Pink\n(d) Cream",
    answer: "b"
  },
  {
    prompt:"How many characters are in the book?\n(a) One\n(b) Three\n(c) Five",
    answer: "c"
  },
  {
    prompt:"Where does the snake live?\n(a) Underground house\n(b) Treetop house\n\
(c) Log pile house",
    answer: "c"
  },
  {
    prompt:"Which of the following is an example of aliteration used in the story?\n\
(a) Terrible Tusk\n(b) Terrible Jaws\n(c) Old Fox",
    answer: "a"  
  },
]


let score = 0;

for(let i = 0; i < questions.length; i++){
  let response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer){
    score++;
    alert("Correct!"); 
  } else {
    alert("Wrong!");
  }
}
alert("You scored" + score + "/" + questions.length);  
}

button.addEventListener("click", startQuiz)
