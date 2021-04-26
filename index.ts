import Stack from './stack';
import Queue from './queue';
import BinaryTree from './BinaryTree';
import BinaryTreeNode from './BinaryTreeNode';

console.log("*********** Creating a stack ***********");

let pila = new Stack<string>();
pila.push("Arthur"); // 0
pila.push("Andrea");
pila.push("Angel");
pila.push("Briggtte");
pila.push("Caroline");
pila.push("Cesar");
pila.push("Diego");
pila.push("Gerardo");
pila.push("Jair"); // 8

console.log(pila.pop()); // Jair
console.log(pila.peek()); // Gerardo
console.log(pila.getlength()); // 8
console.log(pila.isEmpty()); // boolean => false

console.log("*********** Queue creation ***********");

// Creacion de un cola
let cola = new Queue<string>();
cola.enqueue("Jonathan");
cola.enqueue("Juan");
cola.enqueue("Luis");
cola.enqueue("Marcos");
cola.enqueue("Niel");
cola.enqueue("Rocio");
cola.enqueue("Yessenia");

console.log(cola.first()); //Jonathan
console.log(cola.dequeue()); //Jonathan
console.log(cola.getlength()); // 6
console.log(cola.isEmpty()); // false

console.log("*********** Binary Tree creation ***********");

let tree = new BinaryTree();
tree.root = new BinaryTreeNode(8);

tree.root.left = new BinaryTreeNode(5);
tree.root.right = new BinaryTreeNode(4);

tree.root.left.left = new BinaryTreeNode(9);
tree.root.left.right = new BinaryTreeNode(7);

tree.root.left.right.left = new BinaryTreeNode(1);
tree.root.left.right.right = new BinaryTreeNode(12);
tree.root.left.right.right.left = new BinaryTreeNode(2);

tree.root.right.right = new BinaryTreeNode(11);
tree.root.right.right.left = new BinaryTreeNode(3);

console.log("PreOrder");
console.log(tree.preOrder());

console.log("InOrder");
console.log(tree.inOrder());

console.log("PostOrder");
console.log(tree.postOrder());























