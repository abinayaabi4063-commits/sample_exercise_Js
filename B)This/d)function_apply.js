function introduce(city, age) {
  console.log(this.name + " from " + city + ", age " + age);
}
const user = { name: "Abinaya" };
introduce.apply(user, ["Chennai", 21]); 
// this = user, arguments = ["Chennai", 25] array ah anuppuvom