// Implement a search method in the linkedList Class that takes in a value to be searched. You method should return a boolean.
// Include testing code in your submisison

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this,this.size++
};

LinkedList.prototype.search = function (value){
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      
      current = current.next;
    }

    return false;
  }


  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);

  console.log(list.search(3));