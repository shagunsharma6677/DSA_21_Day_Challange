//      /\
//     /  \
//    /    \
//   /      \ 


for(let i=0; i<num; i++){
    let  bag=""
      for(let j=0; j<num+i+1; j++){
          if(j==num+i){
              bag+="\\"
          } else if(j== num-i-1){
              bag+="/"
          }else{
              bag+=" "
          }
      }
      console.log(bag)
  }