// Implement a search method in the linkedList Class that takes in a value to be searched. You method should return a boolean. 
// Include testing code in your submisison

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