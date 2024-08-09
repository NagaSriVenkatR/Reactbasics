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
// const updatePerson ={
//   age: 29,
// }
const updatedPerson = { ...person, age: 29 };
document.getElementById("person").innerHTML= `${JSON.stringify(updatedPerson)}`;
console.log(updatedPerson);
// 1.Using the Spread Operator: Create a new object updatedPerson that includes all the properties of person but with a modified age property set to 29 and an additional property isActive set to true.