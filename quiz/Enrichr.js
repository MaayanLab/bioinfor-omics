// define containers
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

// define questions
let questions = [
    {question: "What is Enrichr?",
    answers: [
        "A database of peer-reviewed gene enrichment analysis papers",
        "A gene set search engine which returns annotated gene sets",
        "A database of peer-reviewed protein enrichment analysis papers", 
        "A database which generates PPIs",
        "A database which generates a KG of literature on a given topic"],
    correct_answer: "A gene set search engine which returns annotated gene sets"},
    {question: " What sort of information can Enrichr provide?" ,
    answers: [
        "Synthesized information on mammalian genes and gene sets",
        "Various ways to compute gene set enrichment and visualize the results",
        "Synthesized information on Drosophila genes and gene sets", 
        "Both a and b", 
        "None of the above"],
    correct_answer: "Both a and b"}, 
    {question:"What separates Enrichr from other gene set enrichment analysis tools?",
    answers: [
        "Ease of use and interactive visualization of results",  
        "Enrichr also contains Drosophila genes", 
        "Enrichr also contains Xenopus genes",
        "Enrichr can make predictions about drug repositioning",
        "Enrichr is the most flexible of all tools"],
    correct_answer: "Ease of use and interactive visualization of results"},  
    {question:"From what type of data does Enrichr analyze lists of differentially expressed genes?",
    answers: [
        "Transcriptomics",
        "Proteomics", 
        "Phosphoproteomics",
        "Only b",
        "All of the above"],
    correct_answer: "All of the above"},
    {question: " Which of the following is not a feature of Enrichr?",
    answers: [ 
        "Searching Enrichr by a single gene or key search term",
        "Using Enrichr in Geneshot",
        "Generating PPIs",
        "Using Enrichr in ARCHS4"],
    correct_answer: " Generating PPIs"},
    {question: "What is the maximum amount of relevant genes Enrichr can include?",
    answers: [
        "100",
        "200",
        "450",
        "500",
        "800"],
    correct_answer: "500"}, 
    {question: "Which of the following is not an available method of visualizing the enrichment analysis?",
    answers: [
        "Bar graph",
        "Pie chart", 
        "Table", 
        "Clustergram", 
        "Appyter"],
    correct_answer: "Pie chart"},
{question:"What enrichment scores does Enrichr use to assess the significance of overlap between gene lists?",
    answers: [
        "the Fisher exact test", 
        "the z-score of the deviation from the expected rank by the Fisher exact test",
        "a combined score that multiplies the log of the p-value computed with the Fisher exact test by the z-score",
        "Only b and c",
        "a, b, and c"],
    correct_answer: "a, b, and c" },
    {question:"Why are lncRNAs How many gene set libraries does Enrichr contain?",
     answers: [
        "120", 
        "146",
        "150",
        "172",
        "190"],
    correct_answer: "172" },
    {question: "How many annotated gene sets can be exported after performing a metadata search using the Term search?",
    answers: [
        "100",
        "150",
        "75",
        "50",
        "25"],
    correct_answer: "100"}
]



// assigns letter ("a","b","c", or "d") to each answer
function assignLet(){
    for(var i = 0; i < questions.length; i++){
        if (questions[i].correct_answer == questions[i].answers[0]){
            questions[i].correct_answer = "a";
        }
        else if(questions[i].correct_answer == questions[i].answers[1]){
            questions[i].correct_answer = "b";
        }
        else if(questions[i].correct_answer == questions[i].answers[2]){
            questions[i].correct_answer = "c";
        }
        else if(questions[i].correct_answer == questions[i].answers[3]){
            questions[i].correct_answer = "d";
        }
        else {
            questions[i].correct_answer = "e";
        }
    }
}


// get question
const totalQuestions = questions.length - 1;
let currentQuestion = 0;

 function showQ(){
    let q = questions[currentQuestion];
     question.innerHTML = "<p>"+ q.question +"</p>"
     choiceA.innerHTML = q.answers[0]
     choiceB.innerHTML = q.answers[1]
     choiceC.innerHTML = q.answers[2]
     choiceD.innerHTML = q.answers[3]
     choiceE.innerHTML = q.answers[4]
 }

// get countdown timer 
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

// gets score 
 function showScore(){
 results.style.display = "block"   
 scoreFrac = score + '/' + questions.length
 results.innerHTML = "<p>"+ "Your score = " + scoreFrac +"</p>"
 }

// checks the question answer, and goes to next question when answered, ends quiz when questions are done
 let score = 0;

 function check(response){
     if (response == questions[currentQuestion].correct_answer){
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

// will start the quiz upon click 
start.addEventListener("click", startQuiz)

function startQuiz(){
assignLet();
start.style.display = "none";
showQ();
quiz.style.display = "block";
showTime();
count = setInterval(showTime, 1000)
}



