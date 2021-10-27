export default class Set {
  constructor() {
    this.items = {}
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  values() {
    // 任何版本浏览器都兼容
    // let result = []
    // for (let key in this.items) {
    //   if (this.has(key)) {
    //     result.push(key)
    //   }
    // }
    // return result

    // ES2017
    return Object.values(this.items)
  }

  clear() {
    this.items = {}
  }

  size() {
    return this.values().length
  }

  // 拓展的集合运算
  // 并集
  union(otherSet) {
    let resultSet = new Set()
    this.values().forEach(value => resultSet.add(value))
    otherSet.values().forEach(value => resultSet.add(value))
    return resultSet
  }

  // 交集
  intersection(otherSet) {
    let resultSet = new Set()
    let smallValues = this.values()
    let bigValues = otherSet.values()
    if (this.size() > otherSet.size()) {
      [smallValues, bigValues] = [bigValues, smallValues]
    }

    smallValues.forEach(value => {
      if (bigValues.includes(value)) {
        resultSet.add(value)
      }
    })
    return resultSet
  }

  // 差集
  difference(otherSet) {
    let resultSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        resultSet.add(value)
      }
    })
    return resultSet
  }

  // 是否是子集
  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    return this.values().every(value => otherSet.has(value))
  }
}