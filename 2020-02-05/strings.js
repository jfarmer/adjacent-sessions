let input = 'hello, world';
let whoKnows = input.substring(2, 4);

// ... 4 <= i <= 12
// ... 4 <= i <  12

// 0 <= i <= 0
// 0 <= i < 0

// 'or'       ---> 'ol'
// ['o', 'r'] --->
// 'o, wor'   ---> 'oll' ---> ERROR!
//

console.log(whoKnows);
