function sortTheArray(arr) {
    for(let i=1;i<arr.length;i++){
let j=i;
while(j>0 && arr[j-1]>arr[j]){
    const temp=arr[j-1];
    arr[j-1]=arr[j];
    arr[j]=temp;
    j--;
}
    }
return arr
}
let arr = [8, 4, 3, 7, 6, 5, 2,9,12,-1];
console.log(sortTheArray(arr))