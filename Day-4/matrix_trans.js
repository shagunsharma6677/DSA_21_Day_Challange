// Transverse through like a Z letter 

let arr=[[a,b,c],[d,e,f],[g,h,i]]
let row=arr.length
let col = arr[0].length

for(let i=0; i<=row-1; i++){
    for(let j=0; j<=col-1; j++){
        if(i=0){
            console.log(arr[i][j])
        } else if(i==j){
            console.log(arr[i][j])
        } else if(i=2){
            console.log(arr[i][j])
        }
    }
}