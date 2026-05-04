function add(a) {           // muthalla a ah vaangu
  return function(b) {      // apram b ah vaangu
    return a + b;           // rendayum add pannu
  }
}
let add5 = add(5);          // a = 5 nu fix pannitu
console.log(add5(10));      // b = 10 kuduthu call pannu -> 15
console.log(add(5)(10));    // direct ah kooda call pannalam -> 15