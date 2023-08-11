var a = 10;

// console.log(a);

// console.log("Hello :", this);

function addition(a, b){
    return a+b;
}
// console.log(addition(4, 62));

const user = {
    name: "Ratan",
    id: 101,
    city: "HYD"
}

function printNumbers() {

    console.log(user.city)
    const arr = [1, 2, 3, 4];
    // arr.push(a);
    // arr.push(b);
    // arr.push(c);

    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
    }
}
printNumbers(user);


function addition(a, b){
    return a+b;
}

const result = addition(111234, 567845);

// console.log(result);


//Arrow function 
 arrowAddition = (a, b) => a+b

//  console.log(arrowAddition(87654, 45345));


var arr = [1, 2, 3, 4, 5,"Ratna"];
// console.log(typeof arr[5]);

const result1 = arr.map((value,index) => {
    
    console.log(value + 2,index)
    return value;
  
})

console.log(result1);




 








