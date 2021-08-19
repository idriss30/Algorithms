/* Sum All Numbers in a RangePassed
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */


function sumAll(arr) {
  let sortedArr;
  let numberArr = [];
  arr[0] > arr[1] ? sortedArr = [...arr.reverse()] : sortedArr = [...arr];
  let i = sortedArr[0]
  while( i <= sortedArr[1]){
    numberArr.push(arr[0]++)
    i++
  }
  // use reduce to give the total
  let returnTotal = numberArr.reduce((a,b)=>{
      return a + b
  },0)

  return returnTotal
  
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
    let newArr = []
    newArr = [...arr1, ...arr2]
    let filtered = newArr.filter(element => {
        if(arr1.includes(element) && arr2.includes(element)){
            return
        }
        else{
            return element
        }
    })
    
  return  filtered
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
  let myArg= [...arguments].splice(1,)
  let joinedArray = myArg.concat(arr)
  
  let finalArr = joinedArray.filter(element => {
      if(myArg.includes(element)){
          return;
      }
      else{
          return element
      }
  } )
  return finalArr
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
  
  let arr = []
   arr = collection.filter(item => Object.keys(source).every(el => source[el] === item[el]))
   return arr
  
 
}


whatIsInAName([
 { first: "Romeo", last: "Montague" },
 { first: "Mercutio", last: null },
 { first: "Tybalt", last: "Capulet" }],
 { last: "Capulet" }
);
 //whatIsInAName([{ "apple": 1, "bat":4 }, { "apple": 1 }, { "bat": 2 }], { "apple": 1, "bat":2})



 //Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
let regex = /\s|_/g
 str = str.replace(regex, "-")

let indices = []
for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === str.charAt(i).toUpperCase()){
        indices.push(i)
    }
}

 if(indices[0]!== 0){
        indices.unshift(0)
}

let words = []
indices.forEach((item, index)=>{
  
   words.push(str.slice(item, indices[index+1]))
})

str = words.join('-').toLowerCase();
let regex2 = /-{2,}/g
str = str.replace(regex2, '-');

return str

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

  let vowelsRegex = /^[aeoui]/i
  if(vowelsRegex.test(str.charAt(0)))  return str = str + 'way';

  let consonantRegex = /\b[^eaoui]+/g
  const matchArr = str.match(consonantRegex);
  if(matchArr.length >0){
     const beginSentence = str.replace(matchArr.join(''), "");
     str = beginSentence + matchArr.join('') + 'ay'
     
     return str;
  }
  else{
      return str = str + 'ay'
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
     let regex = new RegExp(before, 'gi');
     let isMatching = str.match(regex);
     if(isMatching.join('').charAt(0) === isMatching.join('').charAt(0).toUpperCase()){
         let finalAfter = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
         
         return  str =  str.replace(isMatching.join(''), finalAfter);       
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
   let finalArr = []
    for(let i =  0; i < str.length; i++){
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
       str[i] === 'T' ? finalArr.push(['T', 'A']) : str[i] === 'A' ? finalArr.push(['A', 'T']) : null;
       str[i] === 'C' ? finalArr.push(['C', 'G']) : str[i] === 'G' ? finalArr.push(['G', 'C']) : null;
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

 let alphabet = 'abcdefghijklmnopqrstuvwxyz'
 let index = alphabet.indexOf(str.charAt(0));
 let lastIndex = alphabet.indexOf(str.charAt(str.length));
 let finalAlphabet =  alphabet.slice(index, lastIndex -1);


if(str === alphabet){
    return undefined
}
 

 for(let i = 0; i < str.length; i++){
    if(str.charAt(i) !== finalAlphabet.charAt(i)){
       return str = finalAlphabet.charAt(i)
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

let allArguments = Array.from(arguments)
let firstArg = allArguments.shift();
let secondsArg = []

allArguments.forEach(element =>  {
    element.filter(val => {
        if(!firstArg.includes(val)){
            secondsArg.push(val)
        }
    })
})

arr = firstArg.concat(secondsArg);


return arr


}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])


//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
 str.includes('& ') ? str = str.replace(/&/g, '&amp; ') : str = str;
 str.includes('<') ? str = str.replace(/</g, '&lt;') : str = str;
 str.includes('>') ? str = str.replace(/>/g, '&gt;') : str = str;
 str.includes('"') ? str = str.replace(/"/g, "&quot;") : str = str;
 str.includes("'") ? str = str.replace(/'/g, "&apos;") : str = str;



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

if(num === 2 || num === 1)return 1;
let fiboNumber  = [1,1]
for(let i = 2; i < num; i++ ){
     let value = fiboNumber[i-2] + fiboNumber[i-1];
     fiboNumber.push(value);
}

let el = fiboNumber.filter(el => el % 2 !== 0 && el <= num).reduce((a, b) =>{
   return a + b
},0)

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






let checkPrime = (num)=>{
  if(num === 2 ) return true
  let start = 2;
  let final = Math.ceil(Math.sqrt(num));
  while(start <= final){
      if(num % start === 0) return 0;
      start++  
  }


  return num > 1

}


function sumPrimes(num) {

if( num === 1) return 1;
let numbersArr = []
for(let i  = 0; i <= num; i++){
   if(checkPrime(i)){
       numbersArr.push(i)
   }
}

return numbersArr.reduce((a,b)=> a+b, 0)

}

sumPrimes(10);
console.log('////////////////////')
sumPrimes(30);

