import LinkedList from "./linked-list";
import {defaultEquals} from "../../util";
import Node from "./models/Node";

export default class CircularLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  //向链表尾部添加元素（有修改，要修改node.next指针指向head）
  push(element) {
    const node = new Node(element)
    if (this.count === 0) {
      this.head = node
    } else {
      let current = this.getElementAt(this.count - 1)
      current.next = node
    }
    node.next = this.head
    this.count++
  }

  // 在指定位置插入元素（有修改，当在第一个元素插入时，最后一个节点的next需要修改为新的head）
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)

      // 在第一个元素插入
      if (index === 0) {
        if (this.count === 0) {
          this.head = node
          node.next = this.head  // 这一句和上一句顺序不能反
        } else {
          node.next = this.head
          const lastNode = this.getElementAt(this.count - 1)  // 这一句和下一句顺序不能反，不然this.count不对
          this.head = node
          lastNode.next = this.head
        }
      }
      else {
        const prevNode = this.getElementAt(index - 1)
        node.next = prevNode.next
        prevNode.next = node
      }
      this.count++
      return true
    }
    return false
  }

  // 移除指定位置的元素（有修改，当移除第一个元素时，最后一个节点的next需要修改为新的head）
  removeAt(index) {
    // 检查index是否有效
    if (index >= 0 && index < this.count) {
      let current = this.head

      // 移除第一个元素
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined
        } else {
          this.head = current.next
          const lastNode = this.getElementAt(this.count - 1)
          lastNode.next = this.head
        }
      }
      else {
        const prevNode = this.getElementAt(index - 1)
        current = prevNode.next
        prevNode.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}