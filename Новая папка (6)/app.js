setInterval(function(){
    console.log ("Hello world");
    }, 150)
console.log("2");
console.log("4");
console.log("6");
console.log("8");
console.log("10");
console.log("12");
console.log("14");
console.log("16");
console.log("18");
console.log("20"); 
function getArgument(arg){
    if (arg>0) {
        console.log("Hello");
    } else {
        console.log("olleH");
    }
}

getArgument(9)
getArgument('232')
getArgument(-99) 


const fs = require('fs');
let text = fs.readFileSync('lapa.txt', 'utf-8')
console.log(text)
function getArgument(arg1,arg2) {
    let result = arg1*arg2;
    fs.writeFileSync('lapa.txt', text + result)
}
 
getArgument(4,5)