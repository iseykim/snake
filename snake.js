export class Node {
  constructor(key) {
    this.key = key
    this.next = null
    this.prev = null
  }
}

export class Snake {
  constructor(head) {
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

  addHead(node) {
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

function test() {
  const n1 = new Node(1)
  const n2 = new Node(2)
  const n3 = new Node(3)

  // 1 -> 2 -> 3
  const snake = new Snake(n3)
  snake.addHead(n2)
  snake.addHead(n1)

  // Log
  console.log(snake.head.key)
  console.log(snake.head.next.key)
  console.log(snake.head.next.next.key)

  console.log(snake.tail.key)
  console.log(snake.tail.prev.key)
  console.log(snake.tail.prev.prev.key)

  snake.popTail()
  console.log(snake.head.key)
  console.log(snake.head.next.key)
  console.log(snake.head.next.next) // null
}

// test()
