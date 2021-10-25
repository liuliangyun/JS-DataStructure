import LinkedList from "./linked-list";
import {defaultEquals, defaultCompares} from "../../util";

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompares) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  // 为了复用之前的insert方法的定义， 给一个默认的index值，但其实不允许在任意位置插入元素，而是按照从小到大排列的逻辑
  insert(element, index = 0) {
    if (this.count === 0) {
      return super.insert(element, index)
    }
    const position = this.getElementIndexOfSortedList(element)
    return super.insert(element, position)
  }

  getElementIndexOfSortedList(element) {
    let current = this.head
    for (let i = 0; i < this.count && current; i++) {
      if (this.compareFn(current.element, element) > 0) {
        return i
      }
      current = current.next
    }
    return this.count;
  }
}