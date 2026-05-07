const user = {
  name: "Abinaya"
};
function greet() {
  console.log("Hello " + this.name);
}
let greetUser = greet.bind(user); // this = user nu fix pannitu new function
greetUser(); // Hello Abinaya