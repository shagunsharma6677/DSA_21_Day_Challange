// Output= [0,1,2,3,5.......]

let a=0
let b=1
let empty=[0,1]
for(let i=0; i<=10; i++){
    temp=a+b
    empty.push(temp)
    a=b
    b=temp
}
console.log(empty)