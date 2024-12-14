// Definition for singly-linked list
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(-1);
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

// Helper function to convert linked list to array (for visualization)
function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Function to remove elements from the linked list
// var removeElements = function(head, val) {
//     // Create a dummy node to handle edge cases
//     let dummy = new ListNode(-1);
//     dummy.next = head;

//     // Initialize a pointer starting at the dummy node
//     let current = dummy;

//     // Traverse the list
//     while (current.next !== null) {
//         if (current.next.val === val) {
//             // Skip the node with the target value
//             current.next = current.next.next;
//         } else {
//             // Move to the next node
//             current = current.next;
//         }
//     }

//     // Return the new head (skipping the dummy node)
//     return dummy.next;
// };
// Example Usage
// let inputArray = [6, 1, 2, 3, 6, 4, 5]; // Input linked list as array
// let targetVal = 6; // Value to remove

// Create the linked list
// let head = createLinkedList(inputArray);

// Debugging: Set a breakpoint here to inspect the linked list before modification
// console.log("Original List:", linkedListToArray(head));

// Remove target value
// head = removeElements(head, targetVal);

// Debugging: Set a breakpoint here to inspect the final linked list
// console.log("Modified List:", linkedListToArray(head));

// reverse linked list
// var reverseList = function(head) {
//     let prev=null;
//     let curr=head;
//     while(curr!==null){
//         let temp=curr.next;
//         curr.next=prev;
//         prev=curr;
//         curr=temp
//     }
//     return prev;
// };
// Create the linked list
// let head = createLinkedList([1,2,3,4,5]);

// Debugging: Set a breakpoint here to inspect the linked list before modification
// console.log("Original List:", linkedListToArray(head));

// Remove target value
// head = reverseList(head);

// Debugging: Set a breakpoint here to inspect the final linked list
// console.log("Modified List:", linkedListToArray(head));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// this code is correct but the above code is for proper visualisation
// var removeElements = function(head, val) {
//     let node=head;
//     let newHead=head;
//     if(head==null) return head
//     if(head.next!=null && head.val==val){
//         newHead=head;
//     }
//     while(node.next!=null && node.next.next!=null){
//         if(node.next.val==val){
//             node.next=node.next.next;
//         }else{
//         node=node.next}
//     }
//     if(node.next!=null && node.next.val==val && node.next.next==null) node.next=null
//     return newHead.val==val? newHead.next:newHead;
// };
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let current = list1;
  let current2 = list2;
  let newList = new ListNode(-1);
  let tail = newList;
  while (current && current2) {
    if (current.val < current2.val) {
      tail.next = current;
      current = current.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }
  if (current) {
    tail.next = current;
  }
  if (current2) {
    tail.next = current2;
  }
  return newList.next;
};

// Create the linked list
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 5, 6]);

// Debugging: Set a breakpoint here to inspect the linked list before modification
console.log("Original List1:", linkedListToArray(list1));
console.log("Original List2:", linkedListToArray(list2));

// Debugging: Set a breakpoint here to inspect the final linked list
console.log("Merge List:", linkedListToArray(mergeTwoLists(list1, list2)));
