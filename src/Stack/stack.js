export default class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.count === 0
  }
  push(item) {
    this.items[this.count] = item
    this.count++
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  clear() {
    this.count = 0
    this.items = {}
  }
}