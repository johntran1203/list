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
prepend(data) {
    const n = new Node(data);
    if(this.size === 0) {
        this.header =n;
        this.tail = n;
    } else{
        n.next = this.header;
        this.header =n;
    }
    this.size++
}

printList() {
    let data = "";
    let current = this.header;
    while(current !=null) {
        data = data + current.data +"";
        current = current.next
    }
    return data
}