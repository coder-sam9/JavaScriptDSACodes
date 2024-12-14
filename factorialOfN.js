// function fibonacciSumToN(n){
// if(n==0){
//     return 0;
// }
// if(n==1){
//     return 1;
// }
// else {
//     let temp= fibonacciSumToN(n-1)+fibonacciSumToN(n-2)
//     return temp
// }
// }
// console.log(fibonacciSumToN(4))

// function printToN(n) {
//     if(n===6){
//         return 0
//     } else{
//         printToN(n+1)
//         console.log(n)

//     }
// }
// console.log(printToN(1))
// function sumToN(n) {
//   if (n == 0) {
//     return 0;
//   } else {
//     return n + sumToN(n - 1);
//   }
// }

// const n = 6;

// console.log(`Sum of numbers from 0 to ${n} is`, sumToN(n));

// function factorialOfN(n) {
//     if (n===1) {
//         return 1;
//     } else {
//         return n* factorialOfN(n-1)
//     }
// }
// console.log(factorialOfN(5));

// function isPalindrome(str){
//         if (str.length<=1) {
//             return true;
//         }
//         if (str[0]!=str[str.length-1]) {
//             return false
//         }
//         return isPalindrome(str.substring(1,str.length-1))
// }
// console.log(isPalindrome("malayalam"));
// function reverseString(str) {
//     if (str.length<=1) {
//         return str;
//     }

//     return reverseString(str.substring(1)) + str[0];
// }
// console.log(reverseString("abcdf",0));

// function stringLength(str,i=0) {
//     if (str.length==i) {
//         return i;
//     }
//     return stringLength(str,i+1)
// }

// console.log(stringLength("abcddfdfe"));

// function fibonacciSeries(n,i=0) {
//     if (i==3) {
//         return 1;
//     }
//     let temp=fibonacciSeries(n-1,)+fibonacciSeries(n-2,);
//     return temp
// }
// console.log(fibonacciSeries(100));


// 'use strict';

// process.stdin.setEncoding('utf-8');

// function stringPermutation(str = "", ans = "", answer = []) {
//     if (str == "") {
//         answer.push(ans);
//         return;
//     } else {
//         for (let i = 0; i < str.length; i++) {
//             const element = str[i];
//             let newStr = str.substring(0, i) + str.substring(i + 1);
//             stringPermutation(newStr, ans + element, answer);
//         }
//     }
//     return answer;
// }

// async function readInput() {
//     let inputString = '';
//     console.log("Enter the string to find permutations:");
//     process.stdin.on('data', (inputStdin) => {
//         inputString = inputStdin.trim(); // Get input and remove any extra spaces or newlines
//         const permutations = stringPermutation(inputString); // Generate permutations
//         console.log(`The possible permutations of "${inputString}" are:`, permutations);
//         process.exit(); // Exit after displaying the result
//     });
// }

// readInput();

// function subSequences(arr,current=[],ans=[],i=0) {
    
//     if (arr.length==i) {
//         ans.push([...current])
//         return 
//     }
//         subSequences(arr,current,ans,i+1)
//         current.push(arr[i])
//         subSequences(arr,current,ans,i+1)
//         current.pop()
//     return ans
// }
// let arr=subSequences([1,2,3])
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }
function mergeSort(nums) {
    let mid=Math.floor(nums.length/2);
    
    if(nums.length<=1){
        return nums;
    }
   let left= mergeSort(nums.slice(0,mid));
   let right= mergeSort(nums.slice(mid));
    return merge(left,right)
    function merge(left,right) {
        let sorted=[];
        let i=0,j=0;
        while (i<left.length&& j<right.length) {
            if(left[i]<right[j]) {
                sorted.push(left[i]);
                i++
            }else {
                sorted.push(right[j]);
                j++;
            }
        }
        while (i<left.length) {
            sorted.push(left[i]);
            i++
        }
        while (j<right.length) {
            
           sorted.push(right[j]);
           j++
        }
        return sorted
        
    }
}
console.log(mergeSort([5,2,3,1]));
