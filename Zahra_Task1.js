const name=(n)=> {
    console.log(n)
}
console.log("Hi! MY Name is Zahra")
name('Zahra')



const num_args=(...args)=>{
let num_args=args.length;    
console.log("args = "+s)
console.log(args)

let even=[]
let odd=[]

for(let i=0;i<args.length;i++){
    if(args[i] %2===0){
        even.push(args[i]); 
    }
    else{
        odd.push(args[i])
    }
}

console.log("Even Args");
console.log("Odd Args");
/* Divide by 2 which gives even values**/ 
console.log("Dividied Even Args by 2")
let new_even=even.map(divide)
function divide(num){
    return num / 2;
}
console.log(new_even)

console.log("Multiplied Odd Args by 2")
let new_odd=odd.map(multiply)
function multiply(num){
    return num *2;
}
console.log(new_odd)

var obj={
    odd_num:odd,
    even_num:even
}
console.log("Object of Odd and Even")
return obj;
}

separate(1,3,2,5,7,8,9)
