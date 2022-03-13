const quizDB = [
    {
        question:"Q1: Which tools should we use when we are crushed by falling objects into works. ",
        a:"Apron",
        b:"Helmet",
        c:"Dusk Mask",
        d:"Respiratory",
        ans:"b"
    },
    {
        question:"Q2: What tools should I use to prevent extreme temperatures?",
        a:"Full body suits",
        b:"Armlets",
        c:"Mitts",
        d:"Welding Goggles  ",
        ans:"a"
    },
    {
        question:"Q3: Which tool should use for chemical splashes and liquid metals in the workshop?",
        a:"Chemical suits",
        b:"Canal caps",
        c:"Safety shoes",
        d:"Safety spectacles",
        ans:"c"
    },
    {
        question:"Q4: Hazard conIn which two objects the length of any object is same?",
        a:"Front view and top view",
        b:"Front view and side view",
        c:"Top view and side view",
        d:"Side view and real view",
        ans:"b"
    },
    {
        question:"Q5: Which view will be drawn to the right side of the image?",
        a:"Top view",
        b:"Left side view",
        c:"Right side view",
        d:"Front view",
        ans:"d"
    }
]
let quizCount = 0;
let score = 0;
const question = document.querySelector(".question");
const a = document.getElementById("option1");
const b = document.getElementById("option2");
const c = document.getElementById("option3");
const d = document.getElementById("option4");

const submit = document.getElementById("submit");
const ans = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");
//console.log(showScore);
const loadQuestion = ()=> {
    let quizNo = quizDB[quizCount];
    //console.log(quizNo);
    question.innerHTML = quizNo.question;
    a.innerHTML = quizNo.a;
    b.innerHTML = quizNo.b;
    c.innerHTML = quizNo.c;
    d.innerHTML = quizNo.d;
}
const getCheckAns = ()=>{
    let answer;
    ans.forEach((curr)=>{
        if(curr.checked){
            answer = curr.id;
        }
    })
    return answer;

}
const DeselectAll = ()=>{
    ans.forEach((curr)=>{
        curr.checked = false;
    })
    
}

loadQuestion();
submit.addEventListener("click",()=>{
    const checked = getCheckAns();

    if(checked=== quizDB[quizCount].ans){
        score++;
    }
    quizCount++;
    DeselectAll();

    if(quizCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `<h3> Your Score ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Retry</button>`
        showScore.classList.remove("showArea");
    }
})