import LinkedList from "./LinkedList.js";
import { DoublyNode } from "./models/linked-list-models.js";
import { defaultEquals } from "./utils/defaultEquals.js";

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node; // 新增
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1)
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

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) { // 头部移除
        this.head = current.next;
        // 只有一个元素，更新tail 
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) { // 尾部移除
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else { // 中间移除
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element
    }
    return undefined
  }

  getTail() {
    return this.tail;
  }
}