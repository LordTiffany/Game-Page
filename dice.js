function dice(){
    var win1 = 7;
    var win2 = 11;
    var win3 = 1;
    var lose1 = 2;
    var lose2 = 3;
    var lose3 = 12;
    var repeat = true;
    var roundNumber = 1;
    console.log("in diceRoll");
    while (repeat == true){
        var die1 = Math.floor(Math.random()*6) + 1;
        var die2 = Math.floor(Math.random()*6) + 1;
        var total = die1 + die2;
        if(total == win1 || total == win2 || total == win3){
            document.getElementById("diceOutput").innerHTML="You Rolled a(n) " + total + " on round " + roundNumber + ". You Win!";
            repeat = false;
        }
        else if(total == lose1 || total == lose2 || total == lose3){
            document.getElementById("diceOutput").innerHTML="You Rolled a(n) " + total + " on round " + roundNumber + ". You Lose!";
            repeat = false;
        }
        if(roundNumber == 1){
            win1 = 2;
            win2 = 3;
            win3 = 12;
            lose1 = 7;
            lose2 = 11;
            lose3 = 1;
        }
        roundNumber++;
    }
}
