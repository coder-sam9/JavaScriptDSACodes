// var twoSum = function(nums, target) {
//     let ans=[];
//       var indexes = new Map();
//     for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     const searchElement=target-element;
//     if (indexes.has(searchElement)) {
//         return [indexes.get(searchElement), index];
//     }
//         indexes.set(element, index);

//   }

// };
// console.log(twoSum([-3,4,3,90], 0));

/**
 * @param {number[]} arr
 * @return {number}
 */
// var findLucky = function(arr) {
//     let counting=new Map();
//     let ans=-1;
//     if(arr.length==0) return ans;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (counting.has(element)) {
//             counting.set(element,counting.get(element)+1);
//         }
//         else {
//             counting.set(element,1);
//         }

//     }
//    for(let [key,value] of counting){
//     if(key==value){
//         if(ans==-1 || ans<value)ans=value
//     }
//    }
//     return ans;
// };
// console.log(findLucky([5,8,10,9,8,10,9,6,6,7,10,8,10,10,9,4,6,2,10,3,5,10,2,6,4,8,7,3,9,9,5,7,8,7,11,9,3,1,5,11,9,5,8,10,8,4,9,7,6,7,10,9,7,8,6,10,4]))

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function(n) {
//     if(n<2) return 0
//     let numbers=new Array(n).fill(true);
//     let count=0;
//     for(let i=2;i<n/2;i++){
//         if(numbers[i]==false) continue;
//         else{
//             for(let j=2;i*j<n;j++){
//                 numbers[i*j]=false;
//             }
//         }

//     }
//     for(let i=2;i<n;i++){
//         if(numbers[i]==true){count++; console.log("prime number iss",i)}
//     }
//     console.log(numbers);
//     return count
// };
// console.log(countPrimes(20));

// class Solution {
  // Function to check whether there is a subarray present with 0-sum or not.
//   var subArrayExists= function(arr) {
//     // code here
//     let prefixSum = new Set();
//     let sum = 0;
    
//     prefixSum.add(sum);
//     for(let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//       if (prefixSum.has(sum)){ return true;}
//       else{ prefixSum.add(sum);}
//     }
//     return false;
//   }
// // }
// // let obj = new Solution();
// console.log(subArrayExists([5, 4, 2, -3, 1, 6]));
function minSwaps(arr) {
  // code here
 let sortIndex=new Map();
 let swaps=0
 let arr2=[...arr].sort((a,b)=>a-b);
 let i=0;
 for(let i=0;i<arr.length;i++){
   sortIndex.set(arr[i],i)
  }
  while(i<=arr.length-1){
    if (arr[i]==arr2[i]) {
      i++;
    }else{
      let Stacck= new Sta
      swaps++
      const temp =arr[i];
      const swappingIndex=sortIndex.get(arr2[i]);
   
      arr[i]=arr[swappingIndex];
      arr[swappingIndex]=temp;
      sortIndex.set(temp, swappingIndex);
      sortIndex.set(arr[i], i);
    }
  }
}
minSwaps([10, 19, 6, 5, 3])
