//named function
function anything(){
    console.log("nothing")
    console.log(10+13)
}
anything()

//parameterized function
function add(a,b){
    console.log(a+b);
}
add(2,9)

//returned function
function anything(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    return a/b;
}
var res = anything(100,500);
console.log(res)

//anonymouse arrow function
var name=function(){
    console.log("i feel very happy")
}
name()

var add=function(a,b){
   console.log(a+b)

}
add(5,9)

var rever =function(){
    console.log("hi sneha")
    return "hello"
}
console.log(rever())

var place =()=>{
    console.log("goa")
}
place()
function writte(){
    console.log("printing the numbers");

}
function sum(a,b){
    var c=a+b;
    console.log(c);
}
function doublefunction(f){
    console.log(f);
}
doublefunction(writte(),sum(30,10))
//async
//the function with the asnync keyword is know async function 
//syntax:
//async function fun_name(){
//}
//fun_name();
//await:keyword 
//ferch():inbuilt method in js
// async function fetchData(){
//     var persone=await fetch('https://fakestoreapi.com/products/1')
//     var result= await response.json();
//     console.log(result)
// }
// fetchData();


//loops---->controlled statement
// 1.for loop
// syntax:
// for (initialization;condition;increment/decrement)
for(i=10;i<=10;i++){
   console.log(i);
}
for(i=10;i>=0;i--){
    console.log(i)
}
// while loop
// what is the diggerent bettwen foorloop and while loop
// For loop runs a fixed number of times, while while loop runs until a condition becomes false.
// Do-while loop means the loop runs at least once, and then keeps running while the condition is true
// syntax:
// initialize
// while(condition){
// block of code 
// increment/decrement
// }
var i=5;
while (i<=10){
    console.log(i) ;
    i+=2;
}

//do while()
// first atleast one time it will execute the code then it will check the condition
// stntax:
// do{
//     block of code
//     increment/decrement
// }
// while(condition);
var i=1;
do{
    console.log("i like jamu")
    i++;
}while(i<=5)

//ternary operator
var age =18;
age>=18?console.log("eligible to vote"):
console.log("not eligible to vote");