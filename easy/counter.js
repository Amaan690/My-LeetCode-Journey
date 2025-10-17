/**
 * @param {number} n
 * @return {Function} counter
 */

//  question 2 counter 

/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"
 */

//  sollution  


var createcounter = function (n) {
    return function () {
        return n++;
    };
};

// 2. Humne 'n=10' dekar ek naya counter 'myCounter' banaya
// 'myCounter' ab woh function hai jo n=10 ko yaad rakhta hai
const myCounter = createcounter(10);

// 3. Ab hum 'myCounter' ko call karenge aur result ko console mein print karenge
console.log(myCounter()); // Output: 10
console.log(myCounter()); // Output: 11
console.log(myCounter()); // Output: 12

// Example 2 ke liye (n = -2)
console.log("--- Doosra Counter ---");
const anotherCounter = createcounter(-2);
console.log(anotherCounter()); // Output: -2
console.log(anotherCounter()); // Output: -1
console.log(anotherCounter()); // Output: 0

