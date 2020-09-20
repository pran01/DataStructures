class Stack {
  constructor() {
    this.elements = [];
    this.top = -1;
  }

  //Inserting a number at the top of stack.
  push(num) {
    this.top++;
    this.elements[this.top] = num;
  }

  //Return and remove the element at top.
  //return undefinned if stack is empty.
  pop() {
    if (this.top == -1) return undefined;
    let num = this.elements[this.top];
    this.top--;
    return num;
  }

  //prints the element at top
  peek() {
    if (this.top == -1) {
      console.log("Stack Empty");
    } else
      console.log(
        `The element at the top of stack: ${this.elements[this.top]}`
      );
  }

  //Check if the stack is empty.
  isEmpty() {
    if (this.top == -1) {
      console.log(`The stack is empty`);
      return true;
    } else {
      console.log(`The stack is not empty.`);
      return false;
    }
  }

  //Print the size of Stack.
  size() {
    console.log(`Size of the stack: ${this.top + 1}`);
  }

  //Display the elements of stack.
  display() {
    let str = "";
    for (let i = 0; i <= this.top; i++) {
      str += this.elements[i] + " ";
    }
    console.log(`Elements in the stack: ${str}`);
  }

  //Clear the whole stack.
  clear() {
    this.elements = [];
    this.top = -1;
    console.log(`Stack Cleared`);
  }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.display();
s.pop();
s.peek();
s.isEmpty();
s.size();
s.display();
s.clear();
s.size();
s.isEmpty();
