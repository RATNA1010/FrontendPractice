// Functions

console.log("value of a is: ", a); //Hoisting - accessing variables top of declaration will result "undefined" instead of error because of hoisting

var a = 10;
var b = "Ratan";
var arr = [1, 2, 3, 4, 5];

// console.log("value of a is: ", a);
// console.log("value of b is: ", b);
// console.log("value of arr is: ", arr);


//ES5 - let, const are function/local/block scoped  
function myFunction() {
    var i = 11;
    console.log("value of a is: ", a); //10
    console.log("value of b is: ", b); //Ratan
    console.log("value of arr is: ", arr); //[1, 2, 3, 4, 5]
    console.log("value of i is: ", i); // 11
}
myFunction();
// console.log("value of i is: ", i); // we can't access the i variable outside function because it is function scoped variable 

//const(immutable - can't change the value after assigned)
// const str = "Ratan";

// str = "Goviind"; //cant,t change const value

// console.log(str);

for(let i = 0; i < 5; i++){
    console.log(i);
}

//console.log(i); // can't access i since it is block scoped

function myExample(user, city){

    console.log(arguments)
    console.log("Name is: ", user);
    console.log("City is: ", city);
}
myExample("Ratan", "HYD");


