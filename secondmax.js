function secondmax(arr) {
        // Code Here
    let firstMax = Number.MIN_SAFE_INTEGER;
    let secondMax = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++){
        const ele = arr[i];
        if (ele > firstMax) {
            secondMax=firstMax;
            firstMax=ele
        }
        else if (ele > secondMax && ele < firstMax) {
            secondMax=ele
        }
    }
        
            //Write your code here
            //return the mazimum number
            if(secondMax===Number.MIN_SAFE_INTEGER){
                secondMax=-1
            }
    return secondMax;
}
const arr=[1,4,5,2];
console.log("the second max of ",arr,"is ",secondmax(arr))