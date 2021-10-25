// 用列表实现的栈
// 栈是后进先出，双向链表有头尾指针，可以直接获取头尾的元素，于是采用双向链表数据结构更合适，时间复杂度为O(1)

import DoubleLinkedList from "./double-linked-list";

export default class StackLinkedList {
  constructor() {
    this.items = new DoubleLinkedList()
  }

  push(element) {
    this.items.push(element)
  }

  peek() {
    if (!this.items.isEmpty()) {
      return this.items.tail.element
    }
    return undefined
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.removeAt(this.size() - 1)
    }
    return undefined
  }

  size() {
    return this.items.size()
  }

  isEmpty() {
    return this.items.isEmpty()
  }

  toString() {
    return this.items.toString()
  }
}
