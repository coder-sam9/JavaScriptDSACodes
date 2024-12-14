function MaxSumSubArray(arr) {
    let max=0;
    let start,end;
    let i,j;
    for (i = 0; i < arr.length; i++) {
        let sum=0;
        let str='';
        for (j = i; j <arr.length; j++) {
            sum+=arr[j]

        }
        // console.log(str)
        if (sum>=max) {
            max=sum;
            start=i;
            end=j;
        }
        
    }
    return [max,start,end];
}
const arr=[5,2,-4,-5, 3,-1,2,3,1]
console.log(MaxSumSubArray(arr))