// 为了时间复杂度，基于对象来实现
export default class Queue {
  constructor() {
    this.items = {}
    this.count = 0  // 末尾(还没有值，可被赋值)
    this.lowerCount = 0  // 开头
  }

  enqueue(item) {
    this.items[this.count] = item
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowerCount]
    delete this.items[this.lowerCount]
    this.lowerCount++
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowerCount]
    return result
  }

  isEmpty () {
    return this.size() === 0
  }

  size() {
    return this.count - this.lowerCount
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowerCount = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let str = this.items[this.lowerCount]
    for (let i = this.lowerCount + 1; i < this.count; i++) {
      str += `,${this.items[i]}`
    }
    return str
  }
}