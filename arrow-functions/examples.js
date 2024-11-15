// let add = function(x, y){
//     return x+y;
// };

// // traditional anonymous function

// console.log(add(1,2));

// let add2 = (x, y) => x + y;

// console.log(add2(2, 4));

// let subtract = (x, y) => {return x - y};

// console.log(subtract(6, 2));

const arr = [1,6,2,3,5,7,8];

// let callback = (x) => x%2 == 0;

// const even = arr.filter(function(x){returnx%2 == 0});
// const even = arr.filter(callback);

// const even = arr.filter((x) => x%2 == 0);
// console.log(even);

// const mystery = () => {console.log(7)};

// mystery();

const mystery2 = arr.map( x => {
    if (x % 2 == 0)
        return 23;
    else
        return x;
});

console.log(mystery2);


