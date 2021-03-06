/* Sum All Numbers in a RangePassed
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */

function sumAll(arr) {
  let sortedArr;
  let numberArr = [];
  arr[0] > arr[1] ? (sortedArr = [...arr.reverse()]) : (sortedArr = [...arr]);
  let i = sortedArr[0];
  while (i <= sortedArr[1]) {
    numberArr.push(arr[0]++);
    i++;
  }
  // use reduce to give the total
  let returnTotal = numberArr.reduce((a, b) => {
    return a + b;
  }, 0);

  return returnTotal;
}

/* let test1 = sumAll([1, 4]);
let test2 = sumAll([40, 10])
console.log(test1)
console.log(test2)
 */

/*  Diff Two ArraysPassed
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.     */

function diffArray(arr1, arr2) {
  let newArr = [];
  newArr = [...arr1, ...arr2];
  let filtered = newArr.filter((element) => {
    if (arr1.includes(element) && arr2.includes(element)) {
      return;
    } else {
      return element;
    }
  });

  return filtered;
}

/* diffArray([40, 2, 3, 20], [1, 40, 3, 4, 20]);
diffArray([4, 3, 7], [1,2])

 */
/*
Seek and Destroy 
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.


*/

function destroyer(arr) {
  let myArg = [...arguments].splice(1);
  let joinedArray = myArg.concat(arr);

  let finalArr = joinedArray.filter((element) => {
    if (myArg.includes(element)) {
      return;
    } else {
      return element;
    }
  });
  return finalArr;
}

/* destroyer([1, 2, 3, 1, 2, 3], 2, 3); */

/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection 
if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argume

*/

function whatIsInAName(collection, source) {
  let arr = [];
  arr = collection.filter((item) =>
    Object.keys(source).every((el) => source[el] === item[el])
  );
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
//whatIsInAName([{ "apple": 1, "bat":4 }, { "apple": 1 }, { "bat": 2 }], { "apple": 1, "bat":2})

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  let regex = /\s|_/g;
  str = str.replace(regex, "-");

  let indices = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      indices.push(i);
    }
  }

  if (indices[0] !== 0) {
    indices.unshift(0);
  }

  let words = [];
  indices.forEach((item, index) => {
    words.push(str.slice(item, indices[index + 1]));
  });

  str = words.join("-").toLowerCase();
  let regex2 = /-{2,}/g;
  str = str.replace(regex2, "-");

  return str;
}

/* spinalCase('This Is Spinal Tap');
 spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show")
spinalCase("AllThe-small Things")
spinalCase("Teletubbies say Eh-oh")
 */

/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end. */

function translatePigLatin(str) {
  let vowelsRegex = /^[aeoui]/i;
  if (vowelsRegex.test(str.charAt(0))) return (str = str + "way");

  let consonantRegex = /\b[^eaoui]+/g;
  const matchArr = str.match(consonantRegex);
  if (matchArr.length > 0) {
    const beginSentence = str.replace(matchArr.join(""), "");
    str = beginSentence + matchArr.join("") + "ay";

    return str;
  } else {
    return (str = str + "ay");
  }
}

/* translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("glove")
 */

/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).   */

function myReplace(str, before, after) {
  let regex = new RegExp(before, "gi");
  let isMatching = str.match(regex);
  if (
    isMatching.join("").charAt(0) ===
    isMatching.join("").charAt(0).toUpperCase()
  ) {
    let finalAfter = after.replace(
      after.charAt(0),
      after.charAt(0).toUpperCase()
    );

    return (str = str.replace(isMatching.join(""), finalAfter));
  }
  str = str.replace(before, after.toLowerCase());

  return str;
}

//myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");

/*    
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.



*/

function pairElement(str) {
  let finalArr = [];
  for (let i = 0; i < str.length; i++) {
    /*  switch (str[i]) {
           case 'T':
               finalArr.push(["T", "A"])
               break;
           case 'A':
               finalArr.push(['A', 'T'])
               break;

           case 'G':
               finalArr.push(['G', "C"])
               break;
           case 'C' :
               finalArr.push(['C','G'])
           default:
               break;
       } */

    // second solution
    str[i] === "T"
      ? finalArr.push(["T", "A"])
      : str[i] === "A"
      ? finalArr.push(["A", "T"])
      : null;
    str[i] === "C"
      ? finalArr.push(["C", "G"])
      : str[i] === "G"
      ? finalArr.push(["G", "C"])
      : null;
  }

  return finalArr;
}

/* pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA") */

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(str.charAt(0));
  let lastIndex = alphabet.indexOf(str.charAt(str.length));
  let finalAlphabet = alphabet.slice(index, lastIndex - 1);

  if (str === alphabet) {
    return undefined;
  }

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== finalAlphabet.charAt(i)) {
      return (str = finalAlphabet.charAt(i));
    }
  }
}

/* fearNotLetter("abce");
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx")
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))


 */
/* 
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */

function uniteUnique(arr) {
  let allArguments = Array.from(arguments);
  let firstArg = allArguments.shift();
  let secondsArg = [];

  allArguments.forEach((element) => {
    element.filter((val) => {
      if (!firstArg.includes(val)) {
        secondsArg.push(val);
      }
    });
  });

  arr = firstArg.concat(secondsArg);

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  str.includes("& ") ? (str = str.replace(/&/g, "&amp; ")) : (str = str);
  str.includes("<") ? (str = str.replace(/</g, "&lt;")) : (str = str);
  str.includes(">") ? (str = str.replace(/>/g, "&gt;")) : (str = str);
  str.includes('"') ? (str = str.replace(/"/g, "&quot;")) : (str = str);
  str.includes("'") ? (str = str.replace(/'/g, "&apos;")) : (str = str);

  return str;
}

/* convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
convertHTML("<>")
convertHTML('abc')
 */

//Sum All Odd Fibonacci NumbersPassed

function sumFibs(num) {
  if (num === 2 || num === 1) return 1;
  let fiboNumber = [1, 1];
  for (let i = 2; i < num; i++) {
    let value = fiboNumber[i - 2] + fiboNumber[i - 1];
    fiboNumber.push(value);
  }

  let el = fiboNumber
    .filter((el) => el % 2 !== 0 && el <= num)
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return el;
}

/* 

sumFibs(4)
sumFibs(10)
sumFibs(1);

 */

//Sum All PrimesPassed
/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

let checkPrime = (num) => {
  if (num === 2) return true;
  let start = 2;
  let final = Math.ceil(Math.sqrt(num));
  while (start <= final) {
    if (num % start === 0) return 0;
    start++;
  }

  return num > 1;
};

function sumPrimes(num) {
  if (num === 1) return 1;
  let numbersArr = [];
  for (let i = 0; i <= num; i++) {
    if (checkPrime(i)) {
      numbersArr.push(i);
    }
  }

  return numbersArr.reduce((a, b) => a + b, 0);
}

/* sumPrimes(10);
console.log('////////////////////')
sumPrimes(30);
 */

/*  Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.     */

function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  let multiple = max;
  for (let i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max;
    }
  }

  return multiple;
}

//smallestCommons([1, 5]);

/*   Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array */

function dropElements(arr, func) {
  let findFirstItem = arr.find((el) => func(el));
  return findFirstItem ? arr.splice(arr.indexOf(findFirstItem)) : [];
}

/* dropElements([1, 2, 3], function (n) {
  return n < 3;
});
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
}); */

/*  Steamroller
Flatten a nested array. You must account for varying levels of nesting.    */

function steamrollArray(arr) {
  let holdingArr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      holdingArr.push(...steamrollArray(element));
    } else {
      holdingArr.push(element);
    }
  });

  return holdingArr;
}

// steamrollArray([1, [2], [3, [[4]]]]);

// stacks are collections of items that follow LIFO principle
// addition or removals of existing items take place at the same end.
// end is know as the top (newest element) and the opposite side is known as the base (oldest element)

/* Stacks have a variety of applications in real-world problems. They can be used for
backtracking problems to remember tasks or paths visited, and to undo actions   */

/* A queue is an ordered collection of items that follows the FIFO (First In First Out), also
known as the first-come first-served principle. The addition of new elements in a queue is at
the tail, and the removal is from the front  */

let items = [];

function Queue() {
  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.print = function () {
    return items.toString();
  };
}

/* let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("idriss");
queue.enqueue("jack");
queue.dequeue();
console.log(queue.print());
 */

let Queue2 = (function () {
  const items = new WeakMap(); // keeps the properties items private by using weakMap()
  class Queue2 {
    constructor() {
      items.set(this, []);
    }

    enqueue(element) {
      let q = items.get(this);
      let r = q.push(element);
      return r;
    }

    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }

    front() {
      let q = items.get(this);
      return q[0];
    }
    print() {
      let q = items.get(this);

      return q.toString();
    }
  }

  return Queue2;
})();

//learn about priority queue and circular queue similar to the hot potato game
/* Linked lists store a sequential collection of elements; but unlike arrays, in linked lists, the elements are not placed contiguously in memory. Each element consists 
of a node that stores the element itself and also a reference (also known as a pointer or link) that points tothe next element.     */

function LinkedList() {
  let Node = function (element) {
    // helper class needed (item we want to add)
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function (element) {
    let node = new Node(element),
      current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
}

/* A set is a collection of items that are unordered and consists of unique elements (meaning they cannot be repeated).
 This data structure uses the same math concept as finite sets butapplied to a computer science data structure. */

function Set() {
  let items = {};

  this.has = function (value) {
    return value in items;
    // better way to implement could be items.hasOwnProperty(value)
  };

  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }

    return false;
  };

  this.show = function () {
    return items;
  };

  this.clear = function () {
    items = {};
  };

  this.sizeLegacy = function () {
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty(key)) count++;
    }

    return count;
  };

  this.values = function () {
    let values = [];
    for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };
}

let set = new Set();
set.add(2);
set.add(1);

/* console.log(set.show());
console.log(set.sizeLegacy());
console.log(set.values()); */

/* Sets, dictionaries, and hashes store unique values. In a set, we are interested in the value itself as the primary element. 
In a dictionary (or map),
 we store values in pairs as [key,value]. The same goes for hashes (they store values in pairs, such as [key, value]);  */
// creating hash

let HashTable = function () {
  let table = [];

  var loseHash = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // divide by arbitrary numbers to work with lower numbers
  };

  this.put = function (key, value) {
    let position = loseHash(key);
    console.log(position + "-" + key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[loseHash(key)];
  };

  this.remove = function (key) {
    return (table[loseHash(key)] = undefined);
    // not removing position because it will shift array, can stay mark has undefined
  };
};
/* 
let testHash = new HashTable();
testHash.put("idriss", "idriss@awesome.com");
testHash.put("chico", "chico@isaNiceDog");
 */

// Dictionnary implementation

function Dictionnary() {
  let items = {};

  this.set = function (key, value) {
    items[key] = value;
  };

  this.delete = function (key) {
    if (this.has(hey)) {
      delete items[key];
      return true;
    }

    return false;
  };

  this.has = function (key) {
    return key in items;
  };
  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = function () {
    return (items = {});
  };
  this.size = function () {
    let count = 0;
    for (let k in items) {
      if (items.hasOwnProperty(k)) count++;
    }
    return count;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  this.values = function () {
    let values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }

    return values;
  };
}

/* trees

A tree is an abstract model of a hierarchical structure. The most common example of a tree
in real life would be a family tree or a company organizational chart, 

A binary search tree is a binary tree, but it only allows you to store nodes with lesser values
on the left-hand side and nodes with greater values on the right-hand side.
A node in a binary tree has two children at most: one left, one right.
*/

function BinaryTree() {
  let Node = function (key) {
    // key is how a tree is how a tree node is known in tree terminology
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null; // manage root value

  this.insert = function (key) {
    let newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  let insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  // tree traversal visit each node and perform some operations to it

  // in order traversal implementation , visit node from ascending(small to largest)

  this.inOrderTraverse = function (callback) {
    // callback to perform the action to the node(visitor pattern)

    inOrderTraverseNode(root, callback);
  };

  let inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };
  //preorder traversal node is visited before his descedents
  // useful implementation when trying to print a structure document

  this.preOrderTraverseNode = function (callback) {
    preOrderTraversal(root, callback);
  };

  let preOrderTraversal = function (node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraversal(node.left, callback);
      preOrderTraversal(node.right, callback);
    }
  };
  /*A post-order traversal visits the node after it visits its descendants. An application of post-
order traversal could be computing the space used by a file in a directory and its
subdirectories */

  this.postOrderTraversalNode = function (callback) {
    postOrderTraversal(root, callback);
  };

  let postOrderTraversal = function (node, callback) {
    if (node !== null) {
      postOrderTraversal(node.left, callback);
      postOrderTraversal(node.right, callback);
      callback(node.key);
    }
  };

  // find the min
  this.min = function () {
    return findMin(root);
  };

  let findMin = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }
    return null;
  };

  // search for specific value
  this.search = function (key) {
    return searchNode(root, key);
  };

  let searchNode = function (node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };

  this.remove = function (key) {
    root = removeNode(root, key);
  };

  let removeNode = function (node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      // key equal to node key
      // case 1 a leaf node
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // node with only one child
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      // node with two child
      let aux = findMin(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };
}

function printNode(value) {
  console.log(value);
}

let tree = new BinaryTree();

tree.insert(11);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.insert(7);

//tree.inOrderTraverse(printNode);
//tree.preOrderTraverseNode(printNode);
//tree.postOrderTraversalNode(printNode);
//console.log(tree.search(8) ? "Key 8 found." : "Key 8 not found.");

// graphs
/* A graph is an abstract model of a network structure. A graph is a set of nodes (or vertices)
connected by edges. Learning about graphs is important because any binary relationship
can be represented by a graph.
Any social network, such as Facebook, Twitter, and Google+, can be represented by a graph.     */
//Vertices connected by an edge are called adjacent vertices
//A degree of a vertex consists of the number of adjacent vertices

//no correct implementation of a graph

// adjency matrix represent the connectivity between vertices using
//a two-dimensional array, as array[i][j] = = = 1 if there is an edge from the node with index i
//to the node with index j or as array[i][j] = = = 0 otherwise

// creating the graph
function Graph() {
  let vertices = []; // store names of all vertices
  let adjacentList = new Dictionnary(); // adjacent list

  this.addVertex = function (v) {
    vertices.push(v);
    adjacentList.set(v, []);
  };

  this.addEdge = function (v, w) {
    adjacentList.get(v).push(w);
    // working with undirected graph we need to create  an edge from w to v
    adjacentList.get(w).push(v);
  };

  this.toString = function () {
    let string = "";
    for (let i = 0; i < vertices.length; i++) {
      string += vertices[i] + "->";
      let neighbors = adjacentList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        string += neighbors[j] + " ";
      }
      string += "\n";
    }
    return string;
  };

  /*  this.bfs = function (v, callback) {
    let color = initializeColor(),
      queue = new Queue();
    queue.enqueue(v);
    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = adjacentList.get(u);
      color[u] = "grey";
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      if (callback) {
        callback(u);
      }
    }
  }; */

  this.bfs = function (v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = [], //{1}
      pred = []; //{2}
    queue.enqueue(v);
    for (var i = 0; i < vertices.length; i++) {
      //{3}
      d[vertices[i]] = 0; //{4}
      pred[vertices[i]] = null; //{5}
    }
    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjacentList.get(u);
      color[u] = "grey";
      for (i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          d[w] = d[u] + 1; //{6}
          pred[w] = u; //{7}
          queue.enqueue(w);
        }
      }
      color[u] = "black";
    }

    return {
      distances: d,
      predecessors: pred,
    };
  };
}

//testing the result
let graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
//loop through vertices and add edge
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B"); //{9}
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

//console.log(graph.toString());

//There are two
//algorithms that can be used to traverse a graph, called breadth-first search (BFS) and
//depth-first search (DFS)

/* The BFS and DFS algorithms are basically the same with only one difference, which is the
data structure used to store the list of vertices to be visited.    */

// stack for dfs and queue for bfs

//implementation of the bfs algo
let initializeColor = function () {
  let color = [];
  for (let i = 0; i < myVertices.length; i++) {
    color[myVertices[i]] = "white";
  }
  return color;
};
function printNode(value) {
  //{16}
  console.log("Visited vertex: " + value); //{17}
}
//graph.bfs(myVertices[0], printNode);

// check the shorstest path with  second version of bfs

let shortestPath = graph.bfs(myVertices[0]);
console.log(shortestPath);
