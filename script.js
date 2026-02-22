let playerVotes = 0;
let cpuVotes = 0;
let usedStates = [];
let currentQuestion = 0;
let timer;
let timeLeft = 15;

function startGame(){
    playerVotes = 0;
    cpuVotes = 0;
    currentQuestion = 0;
    usedStates = [];
    nextQuestion();
}

function randomState(){
    let available = states.filter(s=>!usedStates.includes(s.name));
    let state = available[Math.floor(Math.random()*available.length)];
    usedStates.push(state.name);
    return state;
}

function nextQuestion(){

    if(currentQuestion >= questions.length){
        endGame();
        return;
    }

    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.q;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML="";

    q.a.forEach((ans,i)=>{
        let btn=document.createElement("button");
        btn.innerText=ans;
        btn.onclick=()=>answer(i);
        answersDiv.appendChild(btn);
    });

    startTimer();
}

function startTimer(){
    clearInterval(timer);
    timeLeft=15;
    document.getElementById("timer").innerText="Time: "+timeLeft;

    timer=setInterval(()=>{
        timeLeft--;
        document.getElementById("timer").innerText="Time: "+timeLeft;

        if(timeLeft<=0){
            clearInterval(timer);
            cpuWinsState();
        }
    },1000);
}

function answer(choice){
    clearInterval(timer);

    let q = questions[currentQuestion];
    let state = randomState();

    if(choice===q.correct){
        playerVotes+=state.votes;
        document.getElementById("status").innerText=
        `✅ You won ${state.name} (${state.votes} EV)`;
    }else{
        cpuVotes+=state.votes;
        document.getElementById("status").innerText=
        `❌ Opponent wins ${state.name}`;
    }

    updateScore();
    currentQuestion++;
    setTimeout(nextQuestion,2000);
}

function cpuWinsState(){
    let state=randomState();
    cpuVotes+=state.votes;
    document.getElementById("status").innerText=
    `⏰ Time expired! Opponent wins ${state.name}`;
    updateScore();
    currentQuestion++;
    setTimeout(nextQuestion,2000);
}

function updateScore(){
    document.getElementById("playerVotes").innerText=playerVotes;
    document.getElementById("cpuVotes").innerText=cpuVotes;
}

function endGame(){

    let result="";

    if(playerVotes>=270){
        result="🎉 YOU WON THE WHITE HOUSE!";
    }
    else if(cpuVotes>=270){
        result="Opponent wins the election.";
    }
    else if(playerVotes>cpuVotes){
        result="You win by electoral vote!";
    }
    else{
        result="Election tie!";
    }

    document.getElementById("question").innerText=result;
    document.getElementById("answers").innerHTML="";
}

