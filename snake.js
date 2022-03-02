export class Node {
  constructor(key) {
    this.key = key
    this.next = null
    this.prev = null
  }
}

export class Snake {
  constructor(head = null) {
    this.head = head
    this.tail = head
  }

  popTail() {
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      const oldTail = this.tail
      this.tail = oldTail.prev
      oldTail.prev = null
      this.tail.next = null
    }
  }

  addHead(key) {
    const node = new Node(key)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      const oldHead = this.head
      this.head = node
      node.next = oldHead
      oldHead.prev = node
    }
  }
}

export function test() {
  const snake = new Snake()
  snake.addHead(3)
  snake.addHead(2)
  snake.addHead(1)

  console.log('Snake from head: 1 -> 2 -> 3')
  console.log(snake.head.key)
  console.log(snake.head.next.key)
  console.log(snake.head.next.next.key)

  console.log('Snake from tail: 3 -> 2 -> 1')
  console.log(snake.tail.key)
  console.log(snake.tail.prev.key)
  console.log(snake.tail.prev.prev.key)

  snake.popTail()
  console.log('Snake from head: 1 -> 2 -> null')
  console.log(snake.head.key)
  console.log(snake.head.next.key)
  console.log(snake.head.next.next)
}