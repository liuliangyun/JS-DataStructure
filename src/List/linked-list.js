import Node from './models/Node'
import {defaultEquals} from '../../util'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.head = undefined
    this.count = 0
    this.equalFn = equalsFn
  }

  //向链表尾部添加元素
  push(element) {
    const node = new Node(element)
    if (this.count === 0) {
      this.head = node
    } else {
      let current = this.getElementAt(this.count - 1)
      current.next = node
    }
    this.count++
  }

  // 在指定位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)

      // 在第一个元素插入
      if (index === 0) {
        node.next = this.head
        this.head = node
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

  // 读取指定位置的元素
  getElementAt(index) {
    // 检查index是否有效
    if (index >= 0 && index < this.count) {
      let current = this.head
      for (let i = 1; i <= index && current; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  // 移除指定位置的元素
  removeAt(index) {
    // 检查index是否有效
    if (index >= 0 && index < this.count) {
      let current = this.head

      // 移除第一个元素
      if (index === 0) {
        this.head = current.next
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

  // 获取某个元素的索引
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current; i++) {
      if (this.equalFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  // 移除指定值
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 获取链表的长度
  size() {
    return this.count
  }

  // 判断链表是否为空链表
  isEmpty() {
    return this.count === 0
  }

  // 获取表示整个链表的字符串
  toString() {
    if (this.count === 0) {
      return ''
    }
    let current = this.head
    let str = `${current.element}`
    // 遍历直到最后一个节点
    for (let i = 1; i < this.count && current; i++) {
      current = current.next
      str += `, ${current.element}`
    }
    return str
  }
}