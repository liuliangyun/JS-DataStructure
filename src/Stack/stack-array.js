export default class Stack {
  constructor() {
    this.items = []
  }
  size() {
    return this.items.length
  }
  isEmpty() {
    return this.items.length === 0
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  clear() {
    this.items = []
  }
}