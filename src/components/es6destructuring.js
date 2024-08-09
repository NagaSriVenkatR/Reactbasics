// let arr = ["Venkat","Rentala"];
// let [firstname,surname] = arr;
// alert(firstname);
// alert(surname);
// document.getElementById("demo1").innerHTML = firstname +" "+surname;
// let person = {
//   Firstname : "Venkat",
//   Surname : "Rentala",
//   Qualification: "Bachelor Of Technology"
// };
// let {Firstname,Surname}=person;
// document.getElementById("demo").innerHTML = Firstname + " " + Surname;
// let fruits = ["Banna","Apple","PineApple","Pomogranate","Musombi"];
// document.getElementById("fruits").innerHTML = fruits;
// let [,,fruit3,fruit1] = fruits;
// document.getElementById("fruit").innerHTML = fruit3 + " , " + fruit1;
const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  hobbies: ["reading", "hiking", "photography"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  }
}
let{name,age,hobbies:[,hiking],address:{city}}=person;

document.getElementById("name").innerHTML="Name:"+" "+name;
document.getElementById("age").innerHTML="Age:"+" "+age;
document.getElementById("hiking").innerHTML = "Hobbies:"+" "+hiking;
document.getElementById("city").innerHTML="City:"+" "+city;
console.log('get name , age, hiking and city out of this object');
console.log('john doe')
console.log(30)
console.log(person.hobbies);