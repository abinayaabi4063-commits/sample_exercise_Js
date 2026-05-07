const checkResult = state => party => `${party} wins in ${state}`;      //    state fix    party pass
let tnResult = checkResult("Tamil Nadu");  // state = Tamil Nadu nu fix pannitu
console.log(tnResult("TVK"));   // DMK wins in Tamil Nadu
console.log(tnResult("DMK"));  // ADMK wins in Tamil Nadu
