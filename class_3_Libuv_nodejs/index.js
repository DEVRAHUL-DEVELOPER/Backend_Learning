// setTimeout(()=>{
//     consoloe.log('Hello world');
// },3000)

const fs =require('fs');
fs.readFile('./data.json','utf-8',(err,res)=>{
    console.log(res);
})

let a= 10;
let b=20;

console.log(b);

setTimeout(()=>{
    console.log(a);
},2000)

console.log('Hello world');
console.log('second line');

