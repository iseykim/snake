// Node
class Node {
  constructor(key) {
    this.key = key
    this.next = null
    this.prev = null
  }
}

class Snake {
  constructor(head) {
    this.head = head
    this.tail = head
  }

  // pop the tail, do we need to keep it doubly linked?
  popTail() {
    const oldTail = this.tail
    // tail should point to the parent, so we do need double
    this.tail = nnew
  }

  addHead(node) {
    // if empty, head is simply the node
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      // x -> new head
      const oldHead = this.head
      this.head = node
      node.next = oldHead
      oldHead.prev = node
    }
  }
}

/* Makeshift Test */
const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)

const snake = new Snake(n3)
snake.addHead(n2)
snake.addHead(n1)

console.log(snake.head)
console.log(snake.head.next)
console.log(snake.head.next.next)

console.log(snake.tail)
console.log(snake.tail.prev)
console.log(snake.tail.prev.prev)