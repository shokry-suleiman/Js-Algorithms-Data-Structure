class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(this.length ==0){
            this.tail = node;
            this.head = node;
            ++this.length;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        ++this.length;
    }

    pop(){
        if(this.length == 0 )
            return undefined;
        this.tail = this.tail.prev;
        this.tail.next = null;
        --this.length;
    }

    shift(){
        if(this.length == 0) return undefined;
        if(this.length == 1){
            this.tail = null;
            this.head = null;
            --this.length;
            return;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.head.prev = null;
        --this.length;
    }
    
    unShift(val){
        let node = new Node(val);
        if(this.length == 0) {
            this.head = node;
            this.tail = node;
            ++this.length;
            return
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        ++this.length;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        if(index < ( this.length / 2 ) ){
            let i =0;
            let node = this.head;
            while(i != index){
                node = node.next;
                i++;
            }
               
            return node;
        }else {
            let i=this.length-1;
            let node = this.tail
            while(i != index){
                node = node.prev;
                i--;
            }
            return node;
        }
    }

    set(index,val){
        
        let current = this.get(index);
        if(!current)
            return false;
        current.val = val;
        return true;
    }

    insert(index,val){
        if(index < 0 || index > this.length) return false;

        if(index == 0){
            this.unShift(val);
            return true;
        }
        if(index == this.length){
            thiis.push(val);
            return true;
        }

        
        let node = new Node(val);
        let current = this.get(index);
        let temp = current.prev;
        temp.next = node;
        node.prev = temp;
        node.next = current;
        current.prev = node;
        ++this.length;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        let node = this.get(index);

        if(index == 0){
            this.shift();
            return node;
        }

        if(index == this.length-1){
            this.pop();
            return node;
        }

        let temp = node.prev;
        temp.next = node.next;
        node.next.prev = temp;
        node.next =null;
        node.prev = null;
        --this.length;
        return node;
    }

}

var dll = new DLL();
dll.push(1);
dll.push(4);
dll.push(5);
// dll.pop();
// dll.shift();
// dll.shift();
// dll.unShift(3)
// dll.unShift(6)
// dll.set(1,2)
dll.insert(1,2);
dll.insert(2,3);
console.log(dll.remove(5));
console.log(dll);
// console.log(dll.get(1))