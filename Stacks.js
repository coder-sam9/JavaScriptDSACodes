// var MinStack = function() {
//     this.topMost=-1;
//     this.stack=[];
//     this.minValTop=-1
//     this.minVal=[];

// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     this.stack.push(val)
//     if (this.minValTop==-1) {
//         this.minVal.push(val);
//     }else if(this.minVal[this.minValTop]>val){
//         this.minVal.push(val)
//     }
//     this.topMost=this.topMost+1;
//     this.minValTop=this.minValTop+1;

// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     if(this.topMost==-1){ console.error("Can't perform the pop operation on an empty stack")}
//     if (this.minVal[this.minValTop]==this.stack[this.topMost]) {
//         this.minVal.pop()
//     }
//     this.stack.pop()
//     this.topMost=this.topMost-1;
//     this.minValTop=this.minValTop-1;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     console.log(this.topMost)
//     return this.stack[this.topMost];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.minVal[this.minValTop];
// };

// var obj = new MinStack()
// obj.push(19)
// obj.push(-1)
// obj.push(20)
// obj.pop()
// var param_3 = obj.top()
// var param_4 = obj.getMin()
//  console.log(obj,param_3,param_4)

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   if (s.length % 2 != 0) return false;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (stack.length == 0) {
//       if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
//         stack.push(s[i]);
//       } else {
//         console.log(
//             "from the top if",
//             stack,
//             `${stack[stack.length - 1]}${s[i]}`
//           );
//         return false;
//       }
//     } else {
//       if (
//         s[i] == ")" || s[i] == "}" || s[i] == "]"

//       ) {if(`${stack[stack.length - 1]}${s[i]}` == "()" ||
//         `${stack[stack.length - 1]}${s[i]}` == "[]" ||
//         `${stack[stack.length - 1]}${s[i]}` == "{}") {
//         stack.pop()
//       } else{
//         return false;
//       }} else{
//         stack.push(s[i])
//       }
//     }
//   }
//   console.log(stack);
//   return stack.length==0;
// };
// console.log(isValid("[({)]}"));

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// var validateStackSequences = function(pushed, popped) {
//   if(pushed.length==0 && popped.length==0) return true;
//   if(pushed.length!=popped.length) return false;
//   const n =pushed.length;
//   let stackArr=[];
//   let i = 0,  poppedIndex=0;
//   let count=0
//     while ( poppedIndex <n ) {
//       console.log(poppedIndex)
//       if (stackArr. length==0 ) {
//           stackArr.push(pushed[i])
//           i++;
//       } else if (popped[poppedIndex]==stackArr[stackArr.length-1]) {
//         stackArr.pop();
//         poppedIndex++;
//       } else if (i>=n) {
//         return false;
//       }else{
//         stackArr.push(pushed[i++])
//       }

//     }
//     console.log(stackArr)
//     return stackArr.length==0
// };
// console.log(validateStackSequences([1,2,3],[3,1,2]))

/**
 * @param {string} s
 * @return {string}
 */
// var removeDuplicates = function(s) {
//     let charStack=[];
//     for ( char of s ) {
//      if (charStack.length==0 || char!=charStack[charStack.length-1]) {
//       charStack.push(char);
//      }else{
//     charStack.pop()
//      }
//     }
//     return charStack.join("");
// };
// console.log(removeDuplicates("abbcc"));

/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function(s) {
//   let stack=[];
//   let decodedString="";
//   let lastNumber=0;
//   for (const char of s) {
//       if (/\d/.test(char)) {
//           lastNumber=lastNumber*10+parseInt(char,10)
//       }else if (char=='[') {
//         stack.push([decodedString,lastNumber])
//         lastNumber=0;
//         decodedString="";
//       }
//       else if (char==']') {
//         const temp=stack.pop()
//         /**
//         in place of using our manual function of makeSubString we can also
//         use the string.repeat(numberofRepeatetion) inbuilt
//         to get the same results
//         **/
//           decodedString=temp[0]+makeSubString(decodedString,temp[1])
//       } else{
//           decodedString=decodedString+char
//       }
//   }
//   function makeSubString(text,count) {
//       let subString="";
//       for (let i = 0; i < count; i++) {
//           subString=subString+text;

//       }
//       return subString;
//   }
//   return decodedString
// };
// console.log(decodeString("2[a]3[b]4[c]"));
// console.log(decodeString("3[ab2[c]3[d]f]"));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement1 = function(nums1, nums2) {
//   if(nums1.length==0) return []
//   let greaterMap={};
//   let stack=[];
//   let i=nums2.length-1;
//   while(i>=0){
//     if(stack.length==0){
//       stack.push(nums2[i]);
//       greaterMap[nums2[i]]=-1
//       i--;
//     }
//     if (stack[stack.length-1]>nums2[i]) {
//       greaterMap[nums2[i]]=stack[stack.length-1]
//       stack.push(nums2[i]);
//       i--;
//     }else{
//       stack.pop()
//     }
//   }
//   // ans=[];
//   // for (const element of nums1) {
//   //   ans.push(greaterMap.get(element))
//   // }

//   return nums1.map(num=>greaterMap[num])
// };
// console.log(nextGreaterElement1([4,1,2],[1,3,4,2]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var nextGreaterElement2 = function (nums) {
//   let n = nums.length;
//   let ans = new Array(n).fill(-1);
//   let stack = [];
//   let i = n * 2 - 1;
//   while (i >= 0) {
//     if (i < n) {
//       if (stack.length == 0) {
//         stack.push(nums[i]);
//         i--;
//         ans[i]=-1;
//       } else if (stack[stack.length - 1] <= nums[i]) {
//         stack.pop();
//       } else {
//         ans[i]=stack[stack.length - 1];
//         stack.push(nums[i]);
//         i--;
//       }
//     } else {
//       if (stack.length == 0) {
//         stack.push(nums[i % n]);
//         i--;
//       } else if (stack[stack.length - 1] <= nums[i % n]) {
//         stack.pop();
//       } else {
//         stack.push(nums[i % n]);
//         i--;
//       }
//     }
//   }
//   return ans;
// };
// console.log(nextGreaterElement2([1,2,3,4,5,6,5,4,5,1,2,3]));



// var StockSpanner = function() {
//   this.stack=[];
    
// };

/** 
 * @param {number} price
 * @return {number}
 */
// StockSpanner.prototype.next = function(price) {
//   let span=1;
//   while(this.stack.length>0 ){
//   if (this.stack[this.stack.length-1][0]>price) {
//     this.stack.push([price,span])
//     console.log("span for",price,"is",span);
    
//     return span
//   } else{span=this.stack[this.stack.length-1][1]+span
//     this.stack.pop()
//   }
// }
// this.stack.push([price,span])
// console.log("span for",price,"is",span);
//   return span
// };

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
*/
//  var obj = new StockSpanner()
//  var param_1 = obj.next(100)
//  var param_2 = obj.next(80)
//  var param_3 = obj.next(60)
//  var param_4 = obj.next(70)
//  var param_5 = obj.next(60)
//  var param_6 = obj.next(75)
//  var param_7 = obj.next(85)
//  console.log(param_1,param_2,param_3,param_4,param_5,param_6,param_7)


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let n=height.length-1;
  let left=[];
  let right=[];
  let leftMax=0,rightMax=0;
  let totalWater=0;
  for (let i = 0; i < height.length; i++) {
    if (leftMax<height[i]) {
      leftMax=height[i]
    }
    if (rightMax<height[n-i]) {
      rightMax=height[n-i]
    }
    left[i]=leftMax;
    right[n-i]=rightMax
  }
  for (let j = 0; j < height.length; j++) {
    const element = height[j];
    totalWater=totalWater+ Math.min(left[j],right[j])-element;
  }
  return totalWater
};
console.log(trap([4,2,0,3,0,5]));
