const initGame = () => {
    const yOn = confirm("Start Game???");
    if(yOn === false){
        alert("Good bay!")
        return setTimeout();
    } 
    startGame();
}

const randNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = () => {
    let cash = 300;
    let bet = 20;

    youBet = () => {
        let selectBet = Number(prompt("Make a bet", "10-300"));
            bet = selectBet;
        if (selectBet === 0){
            const exitGame = confirm("Do you want to continue the game?");
            if(exitGame === false){
                alert("Good Bay!!");
                prompt("Your bank", cash)
                return setTimeout();
            }
            else{
                return youBet();
            }
        }
        if(cash < bet){
            alert("Not enough money!");
            return youBet();
        }
        if(selectBet < 10 || selectBet > 300 || selectBet === NaN ){
            alert("The bid does not match the range!!");
            return youBet();
        }           
        enterNumber();
    }

    const enterNumber = () => {
        const corectNumber = Number(prompt("Enter number", "1-5"));
        if(corectNumber < 1 || corectNumber > 5 ){
            if(corectNumber === 0){
                const exitGame = confirm("Do you want to continue the game?");
                if(exitGame === false){
                    alert("Good Bay!!");
                    prompt("Your bank", cash)
                    return setTimeout();
                }
                else{
                    return enterNumber();
                }
            }
            alert("Not a valid number!")
            return enterNumber();
        }   
        const ranNumber = randNumber(1, 5);
        if(corectNumber  === ranNumber){
            alert("You Win!!!")
            cash = cash + bet;
            const exitGame = confirm("Do you want to continue the game?")
            if(exitGame == false){
                alert("Good Bay!!");
                prompt("Your bank", cash)
                return setTimeout();
            }
            youBet();    
        }
        else{
            alert("You Lost!!");
            cash = cash - bet;
            const exitGame = confirm("Do you want to continue the game?")
            if(exitGame == false){
                alert("Good Bay!!");
                prompt("Your bank", cash)                
                return setTimeout();
            }
            youBet();
        }
        
    }
    youBet();   
}


initGame();