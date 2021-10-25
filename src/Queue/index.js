import Queue from './queue'
import Deque from './double-ended-queue'

// const queue = new Queue()
// queue.enqueue('John')
// queue.enqueue('lly')
// queue.enqueue('lyliu')
//
// console.log(queue.size())
// console.log(queue.isEmpty())
// console.log(queue.toString())
// console.log(queue.dequeue())
// console.log(queue.toString())
//
// console.log('-----------我是友好的分割线-------------')
//
// const deque = new Deque()
// console.log(deque.isEmpty())
// deque.addBack('john')
// deque.addBack('jack')
// deque.addBack('lly')
// console.log(deque.toString())
// console.log(deque.size())
// deque.removeFront()
// console.log(deque.toString())
// console.log(deque.size())
// deque.removeFront()
// console.log(deque.toString())
// console.log(deque.size())
// deque.addFront('mary')
// console.log(deque.toString())
// console.log(deque.size())
// deque.removeBack()
// console.log(deque.toString())
// console.log(deque.size())
// deque.removeFront()
// console.log(deque.toString())
// console.log(deque.size())


// 击鼓传花（队列）
const hotPotato = (elements, number) => {
  const queue = new Queue()
  for (let i = 0; i < elements.length; i++) {
    queue.enqueue(elements[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < number; i++) {
      queue.enqueue(queue.dequeue())
    }
    console.log(queue.dequeue(), '淘汰')
  }

  console.log(queue.peek(), '是赢家')
}

hotPotato(['john', 'jack', 'camila', 'ingrid', 'carl'], 7)

console.log('--------------------我是友好的分割线----------------------')


const palindromeChecker = (aString) => {
  if (!aString) {
    return false
  }

  let result = true
  let formatString = aString.toLocaleLowerCase().split(' ').join('')  // 去除空格，大写转小写
  let frontElement = ''
  let backElement = ''

  const deque = new Deque()
  for (const letter of formatString) {
    deque.addBack(letter)
  }
  while (deque.size() > 1) {
    frontElement = deque.removeFront()
    backElement = deque.removeBack()
    if (frontElement !== backElement) {
      result = false
      break
    }
  }
  return result
}

console.log(palindromeChecker('a'))
console.log(palindromeChecker('aa'))
console.log(palindromeChecker('kayak'))
console.log(palindromeChecker('Was it a Car or a cat I saw'))
console.log(palindromeChecker('Was it a Car or a cat I saw.'))