document.addEventListener("DOMContentLoaded", function() {
    function creatbtn(){
        var btn = document.createElement("button");
        btn.innerText = "Think you understand the paper? Take this quiz to find out!";
        btn.role = "button";
        btn.className = "quiz-button";
        btn.classList.add("quiz-button");
        document.querySelector("#main-content > aside > div > section:nth-child(2) > ul > li:nth-child(1) > button").appendChild(button);
        }
        
        //function redirect(){
        //  window.location.replace('http://127.0.0.1:5500/quiz/index.html');
        //}
        
        creatbtn();
});