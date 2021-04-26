import Stack from './stack';
import Queue from './queue';
// Creacion de una pila
let pila = new Stack<string>();
pila.push("Arthur");
pila.push("Darlene");
pila.push("Monica");
pila.push("Sussana");
pila.push("Luciana");
pila.push("Alejandra");
pila.push("Pinky");
pila.push("Liza");
pila.push("Angelika");

console.log(pila.pop()); // Angelika
console.log(pila.peek()); // Liza
console.log(pila.getlength()); // 8
console.log(pila.isEmpty()); // boolean => false

console.log("*********** Empieza la cola ***********");

// Creacion de un cola
let cola = new Queue<string>();
cola.enqueue("Arthur");
cola.enqueue("Leandro");
cola.enqueue("Samuel");
cola.enqueue("Miguel");
cola.enqueue("David");

console.log(cola.first());
console.log(cola.dequeue());
console.log(cola.getlength());
console.log(cola.isEmpty());



