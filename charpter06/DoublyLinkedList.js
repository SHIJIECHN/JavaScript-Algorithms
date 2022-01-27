import LinkedList from "./LinkedList.js";
import { DoublyNode } from "./models/linked-list-models.js";
import { defaultEquals } from "./utils/defaultEquals.js";

export default class DoublyLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals){
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index){
    if(index >= 0 && index < this.count){
      let node = new DoublyNode(element);
      let current = this.head;
      if(index === 0){
        if(this.head == null){
          this.head = node;
          this.tail = node;
        }else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      }else if(index === this.count){
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      }else{
        const previous = current.prev;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
    
  }

  getTail(){
    return this.tail;
  }
}