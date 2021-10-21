import Stack from './stack-array'

const converter = (decNumber) => {
  let binaryString = ''

  let stack = new Stack()
  let number = decNumber
  while (number > 0) {
    stack.push(Math.floor(number % 2))
    number = Math.floor(number / 2)
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }

  return binaryString
}

let number1 = 233
console.log(converter(number1))

const baseConverter = (decNumber, base) => {
  // 进制只有2 ~ 36
  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  let baseString = ''
  let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let stack = new Stack()
  let number = decNumber
  while (number > 0) {
    stack.push(Math.floor(number % base))
    number = Math.floor(number / base)
  }

  while (!stack.isEmpty()) {
    // 需要转换成对应的字符
    baseString += digits[stack.pop()]
  }

  return baseString
}

let number2 = 100345
let base = 16
console.log(baseConverter(number2, base))

