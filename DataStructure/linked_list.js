// Linked list
function LinkedList() {
	let Node = function(element) {
		// Node class represents the item we want to add to the list
		this.element = element;
		this.next = null;
	};

	let length = 0;
	let head = null; // reference for first node

	this.append = function(element) {
		let node = new Node(element),
			current;

		if (head === null) {
			// first node on list
			head = node;
		} else {
			current = head;

			//loop the list until find last item
			while (current.next) {
				current = current.next;
			}

			//get last item and assign next to node to make the link
			current.next = node;
		}

		length++;
	};

	this.insert = function(position, element) {
		//check for out of bounds values
		if (position >= 0 && position <= length) {
			let node = new Node(element),
				current = head,
				previous,
				index = 0;

			if (position === 0) {
				node.next = current;
				head = node;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}

			length++;

			return true;
		} else {
			return false;
		}
	};

	this.removeAt = function(position) {
		//check for out-of-bounds values
		if (position > -1 && position < length) {  // 1 checking if the position is a valid one
			let current = head, // 2
				previous, //3
				index = 0; // 4

			//removing first item
			if (position === 0) { // 5 Remove first element from list,
				head = current.next;
			} else {
				while (index++ < position) { // 6 If its removing last element, we iterate till the position
					previous = current; // 7
					current = current.next; // 8
				}
				//link previous with current's next: skip it to remove, will be lost in computer memory
				previous.next = current.next; // 9
			}

			length--; // 10

			return current.element;
		} else {
			return null; // 11
		}
	};

	this.remove = function(element) {
		let index = this.indexOf(element);
		return this.removeAt(index);
	};

	this.indexOf = function(element) {
		let current = head,
			index = -1;

		while (current) {
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}

		return -1;
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {};

	this.toString = function() {
		let current = head,
			string = '';

		while (current) {
			string = current.element;
			current = current.next;
		}
		return string;
	};

	this.print = function() {};
}
