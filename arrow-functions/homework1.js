// let add = (x, y) => x+y;
// console.log(add(1,1));

// let trueorfalse = (x) => {
//     if (x%2 == 0)
//         return true;
//     else
//         return false;
// };
// console.log(trueorfalse(3));

// let arr = [3,5,4,6,7,1,8];



// let arr2 = [];

// arr.forEach((x) => arr2.push(x*x));
// console.log(arr2);

// let arr3 = [];

// arr.forEach((x) => {if(x%2==0)arr3.push(x)});

// console.log(arr3);

// let factorial = (x) => {let sum = 1;
//     for(let y = 1; y <= x; y++){
//         sum=sum*y;
// }
// console.log(sum);
// };

// factorial(5);


// let arr4 = arr.sort((a,b) => a - b);
// console.log(arr4);

// let word = "chessssehc";

// let palindrome = (word) => {let end = word.length - 1;
//     let start = 0;
//     while(end > start){
// if (word[end] !== word[start])
//     return false;
// end--;
// start++;
// }
// return true;
// };

// console.log(palindrome(word));

// let num = (arr) => {
//     let max = arr[0];
//     for(let t = 0; t < arr.length; t++){
//     if(arr[t] > max)
//         max = arr[t];
// }
// console.log(max);
// };

// num(arr);

// let tempconvert = (x) => {
//     console.log((x-32)*5/9);
// };

// tempconvert(90);

// let arr = ['what', 'how', 'are', 'you', 'so', 'fdsalsdfsd'];
// console.log(arr.reduce((a,b) => a+=b.length,0))