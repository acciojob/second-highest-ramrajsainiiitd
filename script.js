//your JS code here. If required.
function SecondHighELement(arr){
   for(i=0;i<2;i++){
    for(j=0;j<arr.length-i;j++){

       if(arr[j]>arr[j+1]){
        temp=arr[j];
        arr[j]= arr[j+1];
        arr[j+1]=temp;
       } 
    }
   }
   return arr[arr.length-2];

}
console.log(SecondHighELement(arr));