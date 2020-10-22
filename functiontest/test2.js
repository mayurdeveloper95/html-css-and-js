/*  define whether a positive whole number is even or odd:
 Zero is even.
 One is odd.
For any other number N, its evenness is the same as N –2.
Define a recursive function isEven corresponding to this description. The function should accept a
single parameter (a positive, whole number) and return a Boolean.
*/



function isEven(n) {
    if (n == 0) {
        return true;
    } else {
        return (n % 2 == 0) ? console.log("even") ||true : console.log("odd") || false;
    }
}
let key=isEven(2);
console.log(key);
