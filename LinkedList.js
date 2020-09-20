class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }
  //To insert a node at head
  insertAtHead(data) {
    this.head = new node(data, this.head);
  }
  //To insert a node at tail
  insertAtTail(data) {
    if (this.head == null) {
      this.head = new node(data);
    } else {
      let n = this.head;
      while (n.next != null) {
        n = n.next;
      }
      n.next = new node(data);
    }
  }
  //To insert a node at index n
  insertAtIndex(data, n) {
    if (this.head == null) {
      if (n == 0) this.insertAtHead(data);
      else
        console.log(`Can't insert ${data} at index ${n} as the list is empty`);
    } else {
      let idx = 0;
      let temp = this.head;
      while (temp.next != null && idx != n - 1) {
        temp = temp.next;
        idx++;
      }
      if (temp.next.next == null) this.insertAtTail(data);
      else {
        temp.next = new node(data, temp.next);
      }
    }
  }
  //To display the elements in linked list.
  display() {
    let str = "";
    let n = this.head;
    while (n.next != null) {
      str += n.data + " ";
      n = n.next;
    }
    str += n.data + " ";
    console.log(`Items in linked list: ${str}`);
  }
}

let ll = new linkedList();
ll.insertAtTail(1);
ll.insertAtTail(2);
ll.insertAtTail(3);
ll.insertAtTail(4);
ll.insertAtTail(5);
ll.insertAtTail(6);
ll.insertAtIndex(8, 2);
ll.display();
