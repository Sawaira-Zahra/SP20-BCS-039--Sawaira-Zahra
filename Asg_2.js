/* question 1 */

let args= [2,3,1,6,7];
let n=0;
let x=parseInt(args[0]);
let y=parseInt(args[1]);
for(let i=0;i<y; i++)
{
    n=args[1]
}
//console.log((y+1), "the digit from last is=" +n);


/* question#2 */
var numbers = 23618;
sum = numbers.toString().split('').map(Number).reduce(function(a,b){return a+b},0);
// console.log(sum); */

/* question#3 */
function evenSum(num){

    arr=[];
    let sum_String = num.toString();
    let sumArr = sum_String.split("");
    for (let i = 0; i <= sumArr.length; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    let sumOfDigits = arr.reduce((a, b) => parseInt(a) + parseInt(b));
    return sumOfDigits;

}
//console.log(evenSum(24317));

/* question#4*/
for(let n=0;n<=10;n++) 
 { 
 //console.log("square"+(n*n)); 
 //console.log("cube"+(n*n*n)); 
 }

 /* question#5 */
 function vowel(str) 
 { 
 var x=str.split(",") 
 console.log(x[0]) 
 } 
 vowel("a,e,i,o,u") 
  
 function reverse_a_number(n) 
 { 
 n = n + ""; 
 return n.split("").reverse().join(""); 
 } 
 //console.log(Number(reverse_a_number(5121472)));

 /*question#6 */
 const number = Math.ceil(Math.random() * 10); 
   
 let guss_num=5; 
 if (guss_num == number) 
 console.log('Matched'); 
 else 
 //console.log('Not matched, the number is '+guss_num);

 /* question#7 */
 function first_last(number) 
 { 
 var ending_position = number.length - 1; 
 if(number.length>=2){ 
 return number[0] == 10 || number[ending_position] == 10; 
  } 
 } 
 //console.log(first_last([10])); 
 //console.log(first_last([1, 3, 5, 10])); 
// console.log(first_last([2, 4, 6]));

 /*question#8 */
 /* string: 'comsats' 
  Output: 'acmost' 
 */ 
 function alphabet_order(str) 
   { 
 return str.split('').sort().join(''); 
   } 
 console.log(alphabet_order("comsats"));




