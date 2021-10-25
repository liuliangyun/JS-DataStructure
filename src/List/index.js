import LinkedList from "./linked-list";
import DoubleLinkedList from "./double-linked-list";
import CircularLinkedList from "./circular-linked-list";
import DoubleCircularLinkedList from "./double-circular-linked-list";
import SortedLinkedList from "./sorted-linked-list";
import StackLinkedList from "./stack-linked-list";

const list = new LinkedList()
console.log(list.size())
console.log(list.isEmpty())

list.push(1)
list.push(2)
list.push(3)
console.log(list.size())
console.log(list.isEmpty())
console.log(list.toString())

list.insert(4, 0)
list.insert(5, 3)
list.insert(6, 5)
console.log(list.size())
console.log(list.isEmpty())
console.log(list.toString())

list.removeAt(0)
list.removeAt(2)
console.log(list.size())
console.log(list.isEmpty())
console.log(list.toString())

console.log(list.indexOf(3))
console.log(list.indexOf(4))

list.remove(2)
list.remove(4)
console.log(list.size())
console.log(list.isEmpty())
console.log(list.toString())


console.log('--------------------我是友好的分割线----------------------')



const doubleList = new DoubleLinkedList()
doubleList.push(2)
doubleList.push(3)
doubleList.push(1)
console.log(doubleList.size())
console.log(doubleList.isEmpty())
console.log(doubleList.toString())

doubleList.insert(6, 0)
doubleList.insert(7, 3)
doubleList.insert(8, 5)
console.log(doubleList.size())
console.log(doubleList.isEmpty())
console.log(doubleList.toString())

doubleList.removeAt(0)
doubleList.removeAt(4)
doubleList.removeAt(2)
console.log(doubleList.size())
console.log(doubleList.isEmpty())
console.log(doubleList.toString())


console.log('--------------------我是友好的分割线----------------------')


const circularList = new CircularLinkedList()
circularList.push(1)
circularList.push(2)
circularList.push(3)
console.log(circularList.size())
console.log(circularList.isEmpty())
console.log(circularList.toString())

circularList.insert(9, 0)
circularList.insert(8, 1)
circularList.insert(7, 4)
console.log(circularList.size())
console.log(circularList.isEmpty())
console.log(circularList.toString())

circularList.removeAt(0)
console.log(circularList.toString())
circularList.removeAt(4)
console.log(circularList.toString())
circularList.removeAt(2)
console.log(circularList.size())
console.log(circularList.isEmpty())
console.log(circularList.toString())


console.log('--------------------我是友好的分割线----------------------')


const doubleCircularList = new DoubleCircularLinkedList()
doubleCircularList.push(1)
doubleCircularList.push(2)
doubleCircularList.push(3)
doubleCircularList.push(4)
console.log(doubleCircularList.size())
console.log(doubleCircularList.isEmpty())
console.log(doubleCircularList.toString())
console.log(doubleCircularList.getElementAt(3).next.element)
console.log(doubleCircularList.getElementAt(3).prev.element)

doubleCircularList.insert(10, 0)
doubleCircularList.insert(9, 2)
doubleCircularList.insert(8, 6)
console.log(doubleCircularList.size())
console.log(doubleCircularList.isEmpty())
console.log(doubleCircularList.toString())
console.log(doubleCircularList.getElementAt(0).next.element)
console.log(doubleCircularList.getElementAt(0).prev.element)
console.log(doubleCircularList.getElementAt(6).next.element)
console.log(doubleCircularList.getElementAt(6).prev.element)

doubleCircularList.removeAt(0)
doubleCircularList.removeAt(2)
doubleCircularList.removeAt(4)
console.log(doubleCircularList.size())
console.log(doubleCircularList.isEmpty())
console.log(doubleCircularList.toString())
console.log(doubleCircularList.getElementAt(0).next.element)
console.log(doubleCircularList.getElementAt(0).prev.element)
console.log(doubleCircularList.getElementAt(3).next.element)
console.log(doubleCircularList.getElementAt(3).prev.element)


console.log('--------------------我是友好的分割线----------------------')


const sortedList = new SortedLinkedList()
sortedList.insert(2)
sortedList.insert(5)
sortedList.insert(9)
sortedList.insert(1)
sortedList.insert(4)
sortedList.insert(2)
console.log(sortedList.size())
console.log(sortedList.isEmpty())
console.log(sortedList.toString())


console.log('--------------------我是友好的分割线----------------------')


const stackList = new StackLinkedList()
stackList.push(1)
stackList.push(12)
stackList.push(123)
console.log(stackList.toString())
stackList.pop()
console.log(stackList.toString())
console.log(stackList.peek())