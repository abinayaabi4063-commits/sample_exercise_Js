let name = "  abinaya varun ";
let result = name
  .trim()           // "abinaya ravi"
  .toUpperCase()    // "ABINAYA RAVI"
  .replace(" ", "_"); // "ABINAYA_RAVI"
console.log(result); // ABINAYA_RAVI