class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
// }

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    // let newList = new LinkedList();
    this.length = 0;
    this.head = null;
    this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    console.log("get - index: ", index);
    if (index < 0 || index >= this.length) return -1;

    var counter = 0;
    var current = this.head;
    while (counter != index) {
        current = current.next;
        counter++;
    }

    return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion,
 * the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    console.log("addAtHead - val: ", val);
    let newNode = new Node(val);

    if (!this.head) {
        console.log("addAtHead - head is empty");
        // linked list is empty
        this.head = newNode;
        this.tail = this.head;
    } else {
        console.log("addAtHead - head is not empty");
        const current = this.head;
        this.head = newNode;
        newNode.next = current;
    }

    this.length++;
    console.log("this.length inside addAtHead", this.length);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    console.log("addAtTail - val: ", val);
    let newNode = new Node(val);
    // check if the list has elements
    // if no elements then just add at 1st element
    if (!this.head) {
        console.log("addAtTail - head is empty");
        this.head = newNode;
        this.tail = this.head;
        this.length++;
    } else {
        console.log("addAtTail - head not empty adding at tail");
        const currentTail = this.tail

        if (currentTail === null) {
            // means we haven't assigned any value to tail yet. The tail is empty
            // Make tail point to new node
            this.tail = newNode;
            // have head now point to new node
            this.head.next = newNode;
            this.length++;
            return;
        }

        // Otherwise tail is not empty
        // Have tail point to new node
        this.tail = newNode;
        // have previous tail value point to new tail value
        currentTail.next = newNode
        this.length++;
    }


    console.log("this.length inside addAtTail", this.length);
};

/**
 * Add a node of value val before the index-th node in the linked list.
 * If index equals to the length of linked list, the node will be appended to the end of linked list.
 * If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    console.log("addAtIndex - index: ", index);
    console.log("addAtIndex - val: ", val);
    let newNode = new Node(val);
    if (!this.head) {
        // linked list is empty so add index at start
        console.log("the linked list is empty adding new value to start");
        this.head = newNode;
        this.tail = this.head;
        this.length++;
        console.log("this.length inside addAtIndex", this.length);
        return;
    } else if (this.length === index) {
        // index is same length as linked list so add new value to the end
        console.log(
            "the index is same length as the linked list adding new value to end of list"
        );

        let counter = 0;
        let current = this.head;
        let previous = null;

        while (counter != index) {
            previous = current;
            current = current.next;
            counter++;
        }

        previous.next = newNode;
        this.tail = newNode;
        // this.head.next = newNode;
        // this.tail.next = null;
        this.length++;
        console.log("this.length inside addAtIndex", this.length);
        return;
    } else if (index > this.length) {
        // index is greater than size of linked list don't add it
        console.log("the index is greater than the length of the linked list");
        return;
    } else {
        // add index at the element requested

        var counter = 0;
        var current = this.head;
        var previous = null;

        while (counter != index) {
            previous = current;
            current = current.next;
            counter++;
        }

        // means we want to add at index value zero and linked list has > 1 element
        if (previous === null) {
            console.log("addAtIndex - adding at zero linkedList > 1");
            const current = this.head;
            this.head = newNode;
            newNode.next = current;
            this.length++;
            console.log("this.length inside addAtIndex", this.length);
            return;
        }
        console.log("the value is being added to requested index");
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        console.log("this.length inside addAtIndex", this.length);
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    console.log("deleteAtIndex: ", index);
    // if index > than size of list return
    if (index >= this.length || index < 0 || !this.head) {
        console.log("deleteAtIndex - index >= length");
        return;
    }

    // if index is zero and list only has one element then delete that one element
    if (index === 0 && this.length === 1) {
        console.log(
            "deleteAtIndex - linkedList only has 1 element removing 1st element"
        );
        // only one value in the list
        this.head = null;
        this.tail = null;
        this.length--;
        console.log("this.length inside deleteAtIndex", this.length);
        return;
    }

    // loop through list and get preious index current index, and next index
    var counter = 0;
    var previous = null;
    var current = this.head;

    while (counter != index) {
        previous = current;
        current = current.next;
        counter++;
    }

    // means we want to remove index value zero and linked list has > 1 element
    if (previous === null) {
        console.log("deleteAtIndex - removed val previous = null");
        this.head = current.next;
        this.length--;
        console.log("this.length inside deleteAtIndex", this.length);
        return;
    }

    // means we want to remove the final element in the list.
    if (current === null || current.next === null) {
        console.log("hereeee");
        this.tail = previous;
    }

    console.log("deleteAtIndex - deleting at exact position");
    previous.next = current.next;
    this.length--;

    console.log("this.length inside deleteAtIndex", this.length);
};

// Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();

obj.addAtTail(1);

const a = obj.get(0);
console.log('a: ', a)

// obj.addAtIndex(3, 0);
// obj.deleteAtIndex(2);

// obj.addAtTail(2);
// obj.addAtTail(39);
// obj.deleteAtIndex(1);

// const b = obj.get(1);
// console.log('b: ', b)


// obj.addAtTail(42);
// obj.deleteAtIndex(1);
// obj.addAtIndex(1, 80);
// obj.addAtIndex(1, 8);
// obj.addAtHead(14);
// obj.deleteAtIndex(3);
// obj.addAtHead(1);
// obj.addAtTail(53);
// obj.addAtTail(98);
// obj.addAtTail(19);
// obj.addAtTail(12);
// obj.get(2);
// obj.addAtHead(16);
// obj.addAtHead(33);
// obj.addAtIndex(4, 17);
// obj.addAtIndex(6, 8);
// obj.addAtHead(37);
// obj.addAtTail(43);
// obj.deleteAtIndex(11);
// obj.addAtHead(80);
// obj.addAtHead(31);
// obj.addAtIndex(13, 23);
// obj.addAtTail(17);
// obj.get(4);
// obj.addAtIndex(10, 0);
// obj.addAtTail(21);
// obj.addAtHead(73);
// obj.addAtHead(22);
// obj.addAtIndex(24, 37);
// obj.addAtTail(14);
// obj.addAtHead(97);
// obj.addAtHead(8);
// obj.get(6);
// obj.deleteAtIndex(17);
// obj.addAtTail(50);
// obj.addAtTail(28);
// obj.addAtHead(76);
// obj.addAtTail(79);
// obj.get(18);
// obj.deleteAtIndex(30);
// obj.addAtTail(5);
// obj.addAtHead(9);
// obj.addAtTail(83);
// obj.deleteAtIndex(3);
// obj.addAtTail(40);
// obj.deleteAtIndex(26);
// obj.addAtIndex(20, 90);
// obj.deleteAtIndex(30);

console.log('obj: ', obj)

// [

//     "deleteAtIndex",
// ][
//     (

//     [30])
// ];
