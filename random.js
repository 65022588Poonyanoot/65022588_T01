let randNum = Math.floor(Math.random() * 101);
var clicks = 0;


function GN() {
    clicks += 1;
    const Guess_Number = document.getElementById('G_N').value;
    if (Guess_Number == randNum){
        alert("Correct!! You've guessed "+clicks+" times");
    }else if (Guess_Number > randNum){
        alert("มากกว่า");
    }else if (Guess_Number < randNum){
        alert("น้อยกว่า");
    }
    
}