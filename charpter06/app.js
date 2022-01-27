
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

const doublyList = new DoublyLinkedList()
doublyList.push(1)
doublyList.push(2)
doublyList.push(3)
console.log(doublyList.toString())
console.log(doublyList.getTail())