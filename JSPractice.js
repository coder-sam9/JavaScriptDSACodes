function reverseArray(arr,start,end){
    console.log("start",arr,"start index=",start,"end index=",end)
    while(start<=end){
        const temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
        console.log(arr);
    }
    console.log("end",arr)
    return 'executed';
}
const nums=[1,2,3,4,5,6,7]
const k=2
const rot=k%nums.length;
const n=nums.length
console.log(reverseArray(nums,0,n-rot-1))
console.log(reverseArray(nums,n-rot,n-1))
console.log(reverseArray(nums,0,n-1))