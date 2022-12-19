// Find the numerical value of roman word 
// str="LVIII"

let s="LVIII"
let roman = {
    "I" :1,
    "V" :5,
    "X" :10,
    "L" :50,
    "C" : 100,
     "D": 500,
     "M": 1000
}
let res=0
for(let i=0; i<=s.length-1; i++){
    let curr=roman[s[i]]
    let next=roman[s[i+1]]
    
    if(curr<next){
    res+= next-curr;
    i++
       }
        else {
           res+= curr
       }
}

console.log(res)