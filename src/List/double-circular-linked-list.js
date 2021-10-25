import DoubleLinkedList from "./double-linked-list";
import {defaultEquals} from "../../util";
import Node from "./models/DoubleNode";

export default class DoubleCircularLinkedList extends DoubleLinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  //向链表尾部添加元素（有修改，要修改head.prev指针指向tail，要修改tail.next指向head）
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
    this.head.prev = this.tail
    this.tail.next = this.head
    this.count++
  }

  // 在指定位置插入元素（有修改，当在第一个元素或者最后一个插入时，要修改head.prev指针指向tail，要修改tail.next指向head）
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
      this.head.prev = this.tail
      this.tail.next = this.head
      this.count++
      return true
    }
    return false
  }

  // 移除指定位置的元素（有修改，当移除第一个元素或者最后一个元素时，要修改head.prev指针指向tail，要修改tail.next指向head）
  removeAt(index) {

    // 检查index是否有效
    if (index >= 0 && index < this.count) {
      let current = this.head

      // 移除第一个元素
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined
          this.tail = undefined
        } else {
          this.head = current.next
          this.head.prev = this.tail
          this.tail.next = this.head
        }
      }
      // 移除最后一个元素
      else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.head.prev = this.tail
        this.tail.next = this.head
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