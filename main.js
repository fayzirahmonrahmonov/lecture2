//Task 13

function maxDigit(x){
    let max=0
   for(let i=x;i>0;i=Math.floor(i/10)){
       let remainder=i%10
       if(max<remainder){
        max=remainder
       }
   }
   return max
}
console.log(maxDigit(234587));
