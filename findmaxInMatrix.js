function runningSum(arr) {

    let max=arr[i][j]
    for ( let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr[i].length; j++) {
            const element = arr[i][j];
            if(element>max){
                max=element
            }
            
        }
        
    }
    return max
    
}
console.log(runningSum([[1,3,5,7],[10,11,16,20],[23,30,34,60]]));