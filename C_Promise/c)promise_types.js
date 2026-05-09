let p1 = Promise.resolve("User");
let p2 = Promise.resolve("Posts");
Promise.all([p1, p2])
  .then(results => console.log(results)); // ["User", "Posts"]
  // Oru promise fail aana, overall fail aagidum