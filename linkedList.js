class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
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
    let newNode = new Node(val);

    if (!this.head) {
        // linked list is empty
        this.head = newNode;
        this.tail = this.head;
    } else {
        const current = this.head;
        this.head = newNode;
        newNode.next = current;
    }

    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    // check if the list has elements
    // if no elements then just add at 1st element
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
        this.length++;
    } else {
        const currentTail = this.tail;

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
        currentTail.next = newNode;
        this.length++;
    }
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
    let newNode = new Node(val);
    if (!this.head) {
        // linked list is empty so add index at start
        this.head = newNode;
        this.tail = this.head;
        this.length++;
        return;
    } else if (this.length === index) {
        // index is same length as linked list so add new value to the end
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
        this.length++;
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
            const current = this.head;
            this.head = newNode;
            newNode.next = current;
            this.length++;
            return;
        }
        previous.next = newNode;
        newNode.next = current;
        this.length++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    // if index > than size of list return
    if (index >= this.length || index < 0 || !this.head) {
        console.log("deleteAtIndex - index >= length");
        return;
    }

    // if index is zero and list only has one element then delete that one element
    if (index === 0 && this.length === 1) {
        // only one value in the list
        this.head = null;
        this.tail = null;
        this.length--;
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
        this.head = current.next;
        this.length--;
        return;
    }

    // means we want to remove the final element in the list.
    if (current === null || current.next === null) {
        this.tail = previous;
    }

    previous.next = current.next;
    this.length--;
};

// Example usage:
// var obj = new MyLinkedList();
// obj.addAtTail(1);
