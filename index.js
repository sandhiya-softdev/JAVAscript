// var is a Global Scope
// var a=10;
// var b=30;
// console.log(a+b); 
2.{
    console.log(a);
}
// a is not defined
// That means we didnot give declation value


3.{
    var a=10;
}
console.log(a);

// it will work because this is global scope

4.
var a=10;
var a=20;
var a=30;
console.log(a);
// it will result will be 30.


// this is let is block scope
1.
let a=10;
console.log(a);

2.
{
    let a=10;
}
console.log(a);
// result a is not defined.
3.
let a=10;
   a=20;
   console.log(a);
//    result will be 20
 
4.
let a=10;
let a=10;
console.log(a);
// this is work because we can't use redeclartion




// this is const
1.
const a=10;
console.log(a);




