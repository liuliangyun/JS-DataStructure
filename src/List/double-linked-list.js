import LinkedList from "./linked-list";
import {defaultEquals} from "../../util";
import Node from "./models/DoubleNode";

export default class DoubleLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  //向链表尾部添加元素（有修改，因为要修改tail和prev）
  push(element) {
    const node = new Node(element)
    if (this.count === 0) {
      this.head = node
      this.tail = node
    } else {
      // 找到最后一个节点
      const current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    }
    this.count++
  }

  // 在指定位置插入元素（有修改，因为要修改tail和prev）
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)

      let current = this.head

      // 在第一个元素插入
      if (index === 0) {
        if (this.count === 0) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      }
      // 在最后插入
      else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      }
      else {
        const prevNode = this.getElementAt(index - 1)
        current = prevNode.next
        node.next = current
        current.prev = node
        prevNode.next = node
        node.prev = prevNode
      }
      this.count++
      return true
    }
    return false
  }

  // 移除指定位置的元素（有修改，因为要修改tail和prev）
  removeAt(index) {

    // 检查index是否有效
    if (index >= 0 && index < this.count) {
      let current = this.head

      // 移除第一个元素
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      }
      // 移除最后一个元素
      else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      }
      else {
        const prevNode = this.getElementAt(index - 1)
        current = prevNode.next
        const nextNode = current.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
      }
      this.count--
      return current.element
    }
    return undefined
  }
}