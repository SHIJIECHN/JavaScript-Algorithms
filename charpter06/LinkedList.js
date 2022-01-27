import { Node } from "./models/linked-list-models.js";
import { defaultEquals } from "./utils/defaultEquals.js";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined; // 保存第一个元素的引用
    this.equalsFn = equalsFn
  }
  // 向链表尾部添加元素
  push(element) {
    const node = new Node(element); // 创建node
    let current;
    // 如果head元素为undefined或null，则列表为空
    if (this.head == null) {
      this.head = node;
    } else { // 
      current = this.head; // 第一个元素的引用
      while (current.next != null) { // 获得最后一项
        current = current.next;
      }
      // 将其next赋为新元素，建立链接
      current.next = node;
    }
    this.count++;
  }

  getElementAt(index){
    if(index >= 0 && index <= this.count){
      let current = this.head;
      for(let i = 0; i < index && current != null; i++){
        current = current.next;
      }
      return current;
    }
    return undefined
  }

  removeAt(index) {
    // index是否是有效的
    if (index >= 0 && index < this.count) {
      let current = this.head;

      // 移除第一项
      // if (index === 0) {
      //   current = current.next;
      // } else {
      //   let pre;
      //   for (let i = 0; i < index; i++) {
      //     pre = current;
      //     current = current.next;
      //   }
      //   // pre与current的下一项链接起来：跳过current，从而移除它
      //   pre.next = current.next;
      // }
      if(index === 0){
        current = current.next;
      }else {
        let pre = this.getElementAt(index - 1);
        current = pre.next;
        pre.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined
  }

  // remove(element) {
  //   if (this.count > 0) {
  //     let current = this.head;

  //     if (current.element === element) {
  //       current = current.next;
  //     } else {
  //       let pre;
  //       for (let i = 0; i < this.count; i++) {
  //         pre = current;
  //         current = current.next;
  //         if (current.element === element) {
  //           pre.next = current.next;
  //           return current.element;
  //         }
  //       }
  //     }
  //   }
  //   return undefined
  // }

  // 插入
  insert(element, index) {
    if(index >= 0 && index <= this.count){
      let node = new Node(element);
      if (this.head != null) {
        if (index === 0) {
          let current = this.head;
          node.next = current;
          this.head = node;
        } else {
          let pre = this.getElementAt(index - 1);
          let current = pre.next;
          node.next = current;
          pre.next = node;
        }
        this.count++;
        return true;
  
      } else {
        this.head = node;
      }
    }
    return false;
  }

  indexOf(element) {
    if (this.count) {
      let current = this.head;
      if (current.element == element) {
        current = current.next;
      } else {
        for (let i = 0; i < this.count && current != null; i++) {
          if (this.equalsFn(element, current.element)) {
            return i;
          }
          current = current.next
        }
      }
    }
    return -1;
  }

  remove(element){
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size(){
    return this.count;
  }

  isEmpty(){
    return this.size === 0;
  }

  getHead(){
    return this.head;
  }

  toString(){
    if(this.head == null){
      return ''
    }

    let objStr = this.head.element;
    let current = this.head.next;
    for(let i = 0; i < this.count && current != null; i++){
      objStr = `${objStr}, ${current.element}`;
      current = current.next;
    }
    return objStr;
  }





}

