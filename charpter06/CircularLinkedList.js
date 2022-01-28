import LinkedList from "./LinkedList.js";
import { Node } from "./models/linked-list-models.js";
import { defaultEquals } from "./utils/defaultEquals.js";

export class CricularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.getElementAt(this.size() - 1);
      current.next = node;
    }
    node.next = this.head; // new
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) { // 头部
        if (this.head == null) {
          // if no node  in list
          this.head = node;
          node.next = this.head; // new
        } else {
          node.next = current;
          current = this.getElementAt(this.size() - 1);
          // update last element
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index){
    if(index >= 0 && index < this.count){
      let current = this.head;
      if(index === 0){
        if(this.size() === 1){ // 只有一个元素
          this.head = undefined
        }else {
          const removed = this.head;
          current = this.getElementAt(this.size()); // new
          this.head = this.head.next;
          current.next = this.head;
          current = removed // 为了获得删除的元素的返回值
        }
      }else {
        // 不需要修改循环链表最后一个元素
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }
    return undefined
  }





}