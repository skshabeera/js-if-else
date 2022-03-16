var sum=0;
for ( let i=50; i>40;i--){
    let num=require("readline-sync"); 
    var num1=num.questionInt("enter the number");
    sum=sum+num1;

}
console.log(sum)