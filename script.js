function SecondHighElement(arr){
   for(let i=0;i<2;i++){
    for(let j=0;j<arr.length-i-1;j++){
       if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]= arr[j+1];
        arr[j+1]=temp;
       } 
    }
   }
   return arr[arr.length-2];
}
console.log(SecondHighElement(arr));