let n=require("readline-sync")
var userChance=n.questionInt("enter the how many numbers you want to guess the number  ")
let radmns=Math.floor(Math.random()*10)
var chance=userChance
console.log(radmns)
for (let i=chance;i>0;i--){
    userGuess=n.questionInt("enter the your guessing number")
    if (userGuess==radmns){
        console.log("congrats!","your guessing number is correct")
        break
    }
    else if (userGuess<radmns){
        console.log(" number is greater")
    }
    else if (userGuess>radmns){
        console.log("number is lower")
    }
    else
        console.log("loose!","you loose the game")
    }
}
// let randomNumber= Math.floor(Math.random()*10);