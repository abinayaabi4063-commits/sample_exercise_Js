function wait(ms) {
  return new Promise(res => setTimeout(() => res("Done"), ms));
}
async function run() { // async = function promise return pannum
  console.log("Start");
  let result = await wait(2000); // await = wait pannu, but block pannathu
  console.log(result); // 2 sec apram print aagum
  console.log("End");
}
run();