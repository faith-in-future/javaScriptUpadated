let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let caluser = document.querySelector("#score-user")
let calcomp = document.querySelector("#score-comp")
let userwin = true
let msg = document.querySelector(".winner-text")


const GenChoice = ()=>{
    let options = ['rock', 'paper', 'sessior']
    let rdmindx = Math.floor(Math.random() * 3);
    return options[rdmindx];
}

const ShowWineer = (userchoice, compchoice, userwin)=>{
        if(userwin){
            userscore++
            caluser.innerText = userscore
            msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor = "green";
        }else{
            compscore++
            calcomp.innerText = compscore
            msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor = "red";
        }
}

const PlayGame = (userchoice)=>{
    //Genrating computer choice
    let compchoice = GenChoice()
    console.log("user= ",userchoice);
    console.log("cmp= ", compchoice)
    if(userchoice == compchoice){
        console.log("Match is draw")
        msg.innerText = "Match is Draw"
        msg.style.backgroundColor = "green";
    }else{
        if(userchoice == 'rock'){
            userwin = compchoice == 'paper' ? false : true;
        }else if(userchoice == 'paper'){
            userwin = compchoice == 'sessior' ? false : true;
        }else{
            userwin = compchoice == 'rock' ? false : true;
        }
        ShowWineer(userchoice, compchoice, userwin);

    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        PlayGame(userchoice);
    })
})