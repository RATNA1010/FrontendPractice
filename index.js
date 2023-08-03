//Objects

//Object literals

var Employee = {
    fName: "Ratan",
    lName: "babu",
    id : 101,
    city: "Hyderabad",
    dept: function(){
        console.log("i am function inside object");
    },
    car: {
        company: "Audi",
        model: "A6",
        colour: "White"
    }
}

// console.log(Object.keys(Employee));

  

// console.log(Employee.car.colour);

// console.log(Employee.car["model"]);
// console.log(Employee.fName);
// console.log(Employee.city);

// console.log(Employee.id);

Employee.gender = "Male";
// console.log(Employee);

// console.log(Employee.dept());

var {fName, lName, city, id} = Employee;

console.log(fName, city, gender = "male");

//Object constructor function

function Person(user, city){
    this.name = user;
    this.city = city;
    this.email = user+"@abc.com";
}

var emp_1 = new Person("Ratan", "HYD");

var emp_2 = new Person("Yash", "BLR");

// var clg_2 = new College("University", "Sambala", 6);

// console.log(emp_1);

// console.log("person details: ", emp_2);

var User = {
    fName: "test",
    age: 30,
    city: "hyd"

}

let a = "fName";

// console.log(User.a)
// console.log(User["fName"])

var Example = [{
    name: "test1",
    id:10,
    age: 21
},
{
    name: "test2",
    id: 11,
    age: 22
},
{
    name: "test3",
    id: 12,
    age: 22
}]

console.log(Example);

var result = Example.filter(function(value){
    return value.age == 22;
  });

console.log(result)