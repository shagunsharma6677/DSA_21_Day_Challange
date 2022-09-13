// Max Occurance of number 
let arr = [1,1,1,0,0,0,1,1,1,1,1,1]

let count=0
let max=0
for(let el of arr){
  if(el === 1){
    count++
  } else{
    count=0
  }
  max = Math.max(count, max)
}
console.log(max)