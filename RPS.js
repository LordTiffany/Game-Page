function RPS(){
    var comp = Math.floor(Math.random()*3)+1;
    var user = document.getElementById("textbox").value;
    var Input = "abc";
    if(comp == 1){
        comp = "rock";
    }
    else if(comp == 2){
        comp = "paper";
    }
    else {
        comp = "scissors";
    }
    Input = document.getElementById("RPSOutput").innerHTML="User: " + user;
    Input += document.getElementById("RPSOutput").innerHTML="\tComputer: " + comp + "\t";
    if(comp == user){
        document.getElementById("RPSOutput").innerHTML=Input +" Tie";
    }
    else if((user == "rock" && comp == "scissors") || (user == "paper" && comp == "rock") || (user == "scissors" && comp == "paper")){
        document.getElementById("RPSOutput").innerHTML=Input +" You Win";
    }
    else {
        document.getElementById("RPSOutput").innerHTML=Input +" You Lose";
    }
}
