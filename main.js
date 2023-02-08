// 1

// function factorial (a){
//     if (a==1)
//     {
//         return 1
//     }
//     return a*factorial(a-1)
// }
// console.log(factorial(5))





// 2

// function factorial (a){
//     if (a<=1)
//     {
//         return 1
//     }
//     return a*factorial(a-2)
// }
// console.log(factorial(9))




// 3

// function sum (a){
//     if (a==1)
    
//         return 1
    
//     return a+sum(a-1)
// }
// console.log(sum(5))




// 4

// function length (a,cnt=0){
//     if (a[cnt]==undefined)
//     return cnt;
//     return length (a,cnt+1)
// }
// console.log(length('ilhom'))




// 5

// function addNum(a1, a2){
// return function (b1, b2){
// return function(c1, c2){
// return (a1*b1*c1)+(a2*b2*c2)
// }
// }
// }
// console.log(addNum(1,2)(1,1)(1,3))






// 6

// function redundant (a)
// {
//     return function ()
//     {
//         return a
//     }
// }
// let f1=redundant('apple')
// console.log(f1('apple'))





// 7

// function adds (a){
//     return function (b){
//         return a+b
//     }
// }
// let f1=adds(4)
// console.log(f1(5))




// 8

// function suffixes(a)
// {
//     return function (b)
//     {
//         return b.concat(a)
//     }

// }
// let sufix=suffixes("ly")
// console.log(sufix("hopless"))





// 9

// function Fib (n)
// {
//     if (n==0)
//     {
//         return 0
//     }
//     if (n==1)
//     {
//         return 1
//     }
//     return Fib(n-2)+Fib(n-1)
// }
// console.log (Fib(8))





// 10

// function sumPolygon (a){
//     return (a-2)*180
// }
// console.log(sumPolygon(3))





// 11

// function addition (a,b){
//     return a+b
// }
// console.log(addition(3,5))





// 12

// function reverseCapitalize (text){
//     return text.toUpperCase().split('').reverse().join('');
// }
// console.log(reverseCapitalize('ilhom'))




// 13

// function arg(...a){
//     return arguments.length
// }
// console.log(arg('foo'))




// 14

// function convert (a){
//     return a*60;
// }
// console.log(convert(3))




// 15

// function convert (a){
//     return a*365;
// }
// console.log(convert(20))




// 16

// function circuitPower (a,b){
//     return a*b;
// }
// console.log(circuitPower(230,10))





// 17

// function isEvenOrOdd (a){
//     return a%2==0 ? 'even' : 'odd'
// }
// console.log(isEvenOrOdd(150))



// 18

// function highLow (n){
//     n=n.split(' ');
//     return Math.max(...n)+' '+Math.min(...n)
// }
// console.log(highLow('1 2 3 4 5'))



// 19

// function calculator (a,b,c){
//     return b=='+' ? a+c : b=='-' ? a-c : b=='*' ? a*b : a/b
// }
// console.log(calculator(2,'+',5))