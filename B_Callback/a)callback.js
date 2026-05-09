function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // work mudicha apram call pannu
}
greet("Abi", function() {
  console.log("Done");
});
// Output: Hello Abi -> Done