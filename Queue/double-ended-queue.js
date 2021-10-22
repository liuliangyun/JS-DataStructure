export default class Queue {
  constructor() {
    this.items = {}
    this.count = 0  // 末尾(还没有值，可被赋值)
    this.lowerCount = 0  // 开头
  }

  addFront(item) {
    if (this.isEmpty()) {
      this.addBack(item)
    } else {
      this.lowerCount--
      this.items[this.lowerCount] = item
    }
  }

  addBack(item) {
    this.items[this.count] = item
    this.count++
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowerCount]
    delete this.items[this.lowerCount]
    this.lowerCount++
    return result
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowerCount]
    return result
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1]
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