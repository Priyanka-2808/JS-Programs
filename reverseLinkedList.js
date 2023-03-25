var assert = require('assert');

function reverseList(head) {
  return head;
}
function Node(val) {
  this.val = val;
  this.next = null;
}
function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}
var list1 = new LinkedListNode(3);
var nodes1 = [4, 5, 6, 7, 8, 9, 10];
createNodes(list1, nodes1);
var list2 = new LinkedListNode(1);
var nodes2 = [2, 3, 4, 5, 6, 7, 8];
createNodes(list2, nodes2);

function createNodes(head, nodes) {
  for (let i = 0; i < nodes.length; i++) {
    var newNode = new LinkedListNode(nodes[i]);
    head.next = newNode;
    head = newNode;
  }
}

try {
  var reversed = reverseList(list1);
  assert.deepEqual(listToString(reversed),
    '10 -> 9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3');

  console.log('PASSED: Reversing linked list `3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10` should return `10 -> 9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3`');
} catch (err) {
  console.log(err);
}

function listToString(head) {
  var toPrint = [];
  var currNode = head;
  while (currNode) {
    toPrint.push(currNode.val);
    currNode = currNode.next;
  }
  return toPrint.join(' -> ');
}

