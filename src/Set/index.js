import Set from './set'

const set = new Set()
set.add(1)
console.log(set.values())
console.log(set.has(1))
console.log(set.size())

set.add(2)
console.log(set.values())
console.log(set.has(2))
console.log(set.size())

set.delete(1)
console.log(set.values())

set.delete(2)
console.log(set.values())



console.log('--------------------我是友好的分割线----------------------')


const setA = new Set()
setA.add(1)
setA.add(2)

const setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)

const setC = new Set()
setC.add(2)
setC.add(3)
setC.add(4)

console.log(setA.union(setB))
console.log(setA.intersection(setB))
console.log(setA.difference(setB))
console.log(setB.difference(setA))
console.log(setA.isSubSetOf(setB))
console.log(setA.isSubSetOf(setC))