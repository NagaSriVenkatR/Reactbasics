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
const {address,...rest}=person;
console.log(rest);
document.getElementById("demo").innerHTML= `${JSON.stringify(rest)}`
// Using the Rest Operator: Create a new object personWithoutAddress that contains all properties from person except the address property.