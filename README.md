# Snake

Classic Snake game built with vanilla JavaScript

The snake is implemented as a doubly linked list. On each interval, the tail is popped and head is added in constant time. A set is used to store the snake's coordinates, allowing for constant time collision/apple check.  

## Directions

- <kbd>h</kbd>: left
- <kbd>j</kbd>: down
- <kbd>k</kbd>: up
- <kbd>l</kbd>: right
- <kbd>i</kbd>: start/restart