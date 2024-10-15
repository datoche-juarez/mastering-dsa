// October 14th, 2024

// Validate a Binary Search Tree Exercise:

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Time Complexity: O(n)
// Space Complexity: O(h) where h is the height of the tree

// Node Class Implementation
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// BinarySearchTree Class Implementation
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert method to add nodes to the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      // If tree is empty, set root to new node
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        // Go left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // Go right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        // Value already exists in the tree; ignore duplicates
        return this;
      }
    }
  }

  // Other methods like lookup, remove can be added here
}

// isValidBST Function Implementation
function isValidBST(root) {
  return validate(root, -Infinity, Infinity);
}

function validate(node, min, max) {
  if (node === null) {
    // An empty node/subtree is valid
    return true;
  }

  if (node.value <= min || node.value >= max) {
    // Current node's value violates the min/max constraint
    return false;
  }

  // Recursively validate left and right subtrees
  return (
    validate(node.left, min, node.value) &&
    validate(node.right, node.value, max)
  );
}

// Testing the isValidBST Function

// Test Case 1: Valid BST
const validBST = new BinarySearchTree();
validBST.insert(10);
validBST.insert(5);
validBST.insert(15);
validBST.insert(2);
validBST.insert(7);
validBST.insert(12);
validBST.insert(17);

console.log("Is the tree a valid BST? ", isValidBST(validBST.root)); // Should return true

// Test Case 2: Invalid BST (violates BST property)
const invalidBST = new BinarySearchTree();
invalidBST.insert(10);
invalidBST.insert(5);
invalidBST.insert(15);
invalidBST.insert(2);
invalidBST.insert(7);
invalidBST.insert(12);
invalidBST.insert(17);

// Manually create an invalid condition by assigning a wrong value
invalidBST.root.right.left.value = 6; // Setting value to 6 violates the BST property

console.log("Is the tree a valid BST? ", isValidBST(invalidBST.root)); // Should return false
