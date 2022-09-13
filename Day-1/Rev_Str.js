
let str1 = "ABCDE"

function ReverseString (str){
  let last =str[str.length-1]
  let strRev=""

  for (let i =0; i<=str.length-1; i++) {
  
  if(i===0){
    strRev= strRev+last
  } else{
    strRev=strRev+str[i-1]
  }
}
  return strRev
  
}

x =  ReverseString (str1)
console.log(x)