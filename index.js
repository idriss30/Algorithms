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

diffArray([40, 2, 3, 20], [1, 40, 3, 4, 20]);
diffArray([4, 3, 7], [1,2])