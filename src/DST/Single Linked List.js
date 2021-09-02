class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList{

    constructor(){
        this.head = null;
        this.tail = null
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        ++ this.length;
    }

    pop(){
        if(this.head == null)
            return undefined;
        let current = this.head;
        while(current.next != this.tail){
            current = current.next;
        }
        
        current.next = null;
        this.tail =current;
        --this.length;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
    }

    shift(){
        if(this.head == null)
            return undefined
        let current = this.head;
        this.head = this.head.next;
        --this.length;
    }

    unShift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            ++this.length;
            return this;
        }
        let current = this.head;
        this.head = node;
        this.head.next = current;
        ++this.length;
    }

    get(index){
        if(index < 0 || index > this.length) return null;
        let i = 0;
        let current = this.head;
        while(i < index){
            current = current.next;
            ++i;
        }

        return current;
    }

    set(index,val){
        let current = this.get(index);
        if(!current)
            return false;
        current.val = val;
        return true;
    }

    insert(index,val){
        if(index == 0){
            this.unShift(val);
            return true;
        }

        if(index == this.length){
            this.push(val);
            return true;
        }

        let node = new Node(val);
        let current = this.get(index-1);
        
        if(!current)return false;
        let temp = current;
        node.next = temp.next;
        current.next = node;
        ++this.length;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        let node = this.get(index);

        if(index == 0){
            this.shift();
            return node.val;
        }

        if(index == this.length-1 ){
            this.pop();
            return node.val
        }

        let current = this.get(index-1);

        if(!current) return null;
        current.next = node.next;
        --this.length;
        return node.val;
    }

    reverse(){
        let root = this.head;
        this.head = this.tail;
        this.tail = root;
        let current = root;
        let prev = null;
        let next = null;
        console.log('current',current);
        console.log('prev',prev);
        console.log(next)
        let i =0;
        while(i<this.length){
            console.log('curr',current)
            next = current.next;
            current.next = prev
            prev = current;
            current = next
            ++i;
        }
        // this.head.next = prev
    }
}

let SLL = new SingleLinkedList();
SLL.push(1);
SLL.push(2);
SLL.push(3);
SLL.push(4);
console.log('before')
console.log(SLL);
SLL.reverse();
console.log('after')
console.log(SLL)

// SLL.pop();
// SLL.shift();
// SLL.unShift(5);
// console.log(SLL);
// console.log(SLL.get(2))
// console.log(SLL.set(2,9))
// console.log(SLL.insert(0,3));
// console.log(SLL);
// console.log(SLL.remove(1));
// console.log(SLL);
