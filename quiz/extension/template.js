
const start = document.getElementById("start")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const choiceA = document.getElementById("a")
const choiceB = document.getElementById("b")
const choiceC = document.getElementById("c")
const choiceD = document.getElementById("d")
const choiceE = document.getElementById("e")
const results = document.getElementById("score")
const countdown  = document.getElementById("countdown")


// Write your question bank into this dictionary, each question should follow the format below 
let questions = [
    {question: "YOUR QUESTION" ,
    answers: [
        "ANSWER A",
        "ANSWER B", 
        "ANSWER C",
        "ANSWER D",
        "ANSWER E" ],
    correct_answer: "CORRECT ANSWER" },  
   
]

let quest = []
const shuffledArr = questions.sort(() => Math.random() - 0.5);

for(var i = 0; i < 10; i++){
    quest[i] = shuffledArr.pop()
}

function assignLet(){
    for(var i = 0; i < quest.length; i++){
        if (quest[i].correct_answer == quest[i].answers[0]){
            quest[i].correct_answer = "a";
        }
        else if(quest[i].correct_answer == quest[i].answers[1]){
            quest[i].correct_answer = "b";
        }
        else if(quest[i].correct_answer == quest[i].answers[2]){
            quest[i].correct_answer = "c";
        }
        else if(quest[i].correct_answer == quest[i].answers[3]){
            quest[i].correct_answer = "d";
        }
        else {
            quest[i].correct_answer = "e";
        }
    }
}



const totalQuestions = quest.length - 1;
let currentQuestion = 0;

 function showQ(){
    let q = quest[currentQuestion];
     question.innerHTML = "<p>"+ q.question +"</p>"
     choiceA.innerHTML = q.answers[0]
     choiceB.innerHTML = q.answers[1]
     choiceC.innerHTML = q.answers[2]
     choiceD.innerHTML = q.answers[3]
     choiceE.innerHTML = q.answers[4]
 }


 let timeleft = 20;
 const done = 0;
 let count;
 const gWidth = 150;
 const gUnit = gWidth/timeleft


 function showTime(){    
     if(timeleft >= done) {
         countdown.innerHTML = timeleft;
         timeleft--;
     }
     else {
         timeleft = 20;
         if(currentQuestion < totalQuestions){
             currentQuestion++;
             showQ();
         }
         else {
             clearInterval(count);
             countdown.style.display = 'none'
             showScore();
         }
     }
 }

 
 function showScore(){
 results.style.display = "block"   
 scoreFrac = score + '/' + quest.length
 results.innerHTML = "<p>"+ "Your score = " + scoreFrac +"</p>"
 }

 let score = 0;

 function check(response){
     if (response == quest[currentQuestion].correct_answer){
        score++;
         timeleft = 20;
         if(currentQuestion < totalQuestions){
             currentQuestion++;
             showQ();
         }
         else {
             clearInterval(count);
             countdown.style.display = 'none'
             showScore();
        }
     }
     else{ 
         timeleft = 20;
         if(currentQuestion < totalQuestions){
             currentQuestion++;
             showQ();
         }
         else {
             clearInterval(count)
             countdown.style.display = 'none'
            showScore();
         }
     }
 }


start.addEventListener("click", startQuiz)

function startQuiz(){
assignLet();
start.style.display = "none";
showQ();
quiz.style.display = "block";
showTime();
count = setInterval(showTime, 1000)
}









