let answers={
    Answer:['Blue Whale','Vatican City','Sahara','Australia']
};
let score=0;
function correctAnswer(button){
    let answer = button.value.trim();
    if(answers.Answer.includes(answer)){
        button.style.backgroundColor ='#98FB98';
        score++;
    }
    else{
        button.style.backgroundColor ='#ff5757';
    }
}
function goToResetPage1() {
    window.location.href = "index.html";
}
function goToNextPage1() {
    window.location.href = "question-2.html";
}
function goToNextPage2() {
    window.location.href = "question-3.html";  
}
function goToNextPage3() {
    window.location.href = "question-4.html";
}
function goToNextPage4() {
    window.location.href = "finalScore.html";
}

