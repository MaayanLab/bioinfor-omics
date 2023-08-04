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
    {question: "What was one of the main differences between lncHUB and lncHUB2?",
    answers: [
        "lncHUB only provided information on the effect of small molecules on lncRNAs",
        "lncHUB made predictions from only 3 gene set libraries and ~4,000 human lncRNAs",
        "lncHUB made predictions from 10 gene set libraries",   
        "lncHUB only provided information on the effect of drugs on lncRNAs",
        "lncHUB did not provide information on transcription factors on lncRNAs"],
    correct_answer: "lncHUB made predictions from only 3 gene set libraries and ~4,000 human lncRNAs"},
    {question: "Why are lncRNAs important to study?" ,
    answers: [
        "They directly take part in regulating translation", 
        "They are the only non-coding RNAs humans and mice have in common",
        "They represent the largest group of non-coding RNAs",
        "They only play a role in epigenetics",
        "They are the only non-coding RNAs"],
    correct_answer: "They represent the largest group of non-coding RNAs"}, 
    {question:"What  are some predictions that lncHUB2 can provide?",
    answers: [
        "Expression of lncRNAs across tissues in model organisms",
        "Prioritization of CRISPR knockout (CRISPR-KO) genes and small molecules based on their likelihood to up- or down regulate the expression of the lncRNA",
        "How the lncRNA is likely to be affected as the patient ages",
        "Both a and b",
        "Both a and c"],
    correct_answer: "Prioritization of CRISPR knockout (CRISPR-KO) genes and small molecules based on their likelihood to up- or down regulate the expression of the lncRNA"},  
    {question:"What is a limitation of lncHUB2?",
    answers: [
        "It can only visualize the primary structure of a lncRNA",
        "It only makes predictions from mouse lncRNAs",
        "It cannot produce a co-expression matrix",
        "It only makes predictions about lncRNA function by calculating the mean PCC between a lncRNA and gene sets",
        "None of the above"],
    correct_answer: "It only makes predictions about lncRNA function by calculating the mean PCC between a lncRNA and gene sets "},
    {question: "How many human and mouse lncRNAs does lncHUB2 make predictions with?",
    answers: [ 
        "~9,000 human; ~7,000 mouse",
        "No human; ~4,000 mouse",
        "~12,000 human; ~10,000 mouse",
        "~19,000 human; ~11,000 mouse",
        "~12,000 human; ~13,000 mouse"],
    correct_answer: "~19,000 human; ~11,000 mouse"},
    {question: "What information does lncAtlas provide?",
    answers: [
        "Where lncRNAs are localized in the body",  
        "Where lncRNAs are localized in the cell", 
        "The relative stability of lncRNAs", 
        "Both a and b",
        "All of the above",
        ],
    correct_answer: "Where lncRNAs are localized in the cell"}, 
    {question: "What is a limitation of the subcellular-specific lncHUB2 predictions?",
    answers: [
        "It relies on a global gene co-expression matrix and is not context specific",
        "It relies on a hyper-specific gene co-expression matrix and is not general enough", 
        "The co-expression matrix does not pick up on small molecules",
        "It relies on a hyper-specific gene co-expression matrix, and therefore some predictions are not accurate",
        "The predictions are unable to be leveraged by PrismEXP"],
    correct_answer: "It relies on a global gene co-expression matrix and is not context specific"},
{question:"What can a correlation with a gene reveal about a lncRNA?",
    answers: [
        "That lncRNA may have a role in the diseases associated with the gene",
        "Experimental research is needed to further elucidate the relationship between the two molecules",
        "The lncRNA directly affects the function of the gene", 
        "Both a and b",
        "All of the above "],
    correct_answer: "Both a and b" },
    {question:"Why are lncRNAs important disease biomarkers?",
     answers: [
        "They cause the transcription of common disease biomarkers",  
        "They are easily degraded by disease biomarkers",
        "They play a huge role in viral propagation",  
        "They are often produced at the same time as other disease biomarkers", 
        "They are very stable"],
    correct_answer: "They are very stable" },
    {question: " How many correlated genes does the interactive network visualization feature show?",
    answers: [
        "The top 20",
        "The top 50", 
        "The top 100",
        "The top 125",
        "The top 150"],
    correct_answer: "The top 100"}
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



