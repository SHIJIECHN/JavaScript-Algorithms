
import { CricularLinkedList } from "./CircularLinkedList.js";
import DoublyLinkedList from "./DoublyLinkedList.js";
import LinkedList from "./LinkedList.js";

const list = new LinkedList()
list.push(15)
list.push(10)
list.push(6)
list.push(9)
list.push(2)
list.push(23)
list.push(7)
list.removeAt(2)
list.insert(4, 5)
console.log(`size: ${list.size()}`)
console.log(`isEmpty: ${list.isEmpty()}`)
console.log(`getHead: ${list.getHead().element}`)
console.log(`indexOf: ${list.indexOf(2)}`)
console.log(list.toString())
console.log('**************doublyList******************')
const doublyList = new DoublyLinkedList()
doublyList.push(1)
doublyList.push(2)
doublyList.push(3)
doublyList.push(4)
doublyList.push(5)
doublyList.push(6)
console.log(`toString: ${doublyList.toString()}`)
console.log(`size: ${doublyList.size()}`)
// console.log(`remove: ${doublyList.removeAt(0)}`)
console.log(`insert: ${doublyList.insert(7, 6)}`)
console.log(`getTail: ${doublyList.getTail().element}`)
console.log(`toString: ${doublyList.toString()}`)
console.log('****************circularList****************')
const circularList = new CricularLinkedList()
circularList.push(9);
circularList.push(20)
circularList.push(30)
console.log(`toString: ${circularList.toString()}`)
console.log(`size: ${circularList.size()}`)
console.log(`remove: ${circularList.removeAt(0)}`)
console.log(`insert: ${circularList.insert(19, 0)}`)
console.log(`toString: ${circularList.toString()}`)