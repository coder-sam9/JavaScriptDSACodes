// search in a rotated array nd using binary search
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  let mid;
  let count = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    // as usual condition of returning the value if the target matches with mid
    if (nums[mid] == target) return mid;
    // here things gets intresting nd ssince it is rotated we first compare if the left part is properly sorted one
    // or unsorted one like it may happen either of the side may have the one on which rotate array 
    // distorted the sorted order
    if (nums[start] <= nums[mid]) {
      // if nums[start ]is less than or equal to mid one then it means its sorted nd we will use normal binary search logic
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } 
    // same as above we are checking is the right one sroted nd then binary search logic
    else if (nums[mid] < nums[end]) {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
console.log("result of search 1", search([4, 5, 6, 7,8,9,10,11, 0, 1, 2,3], 3));
