const user = {
  name: "Abinaya",
  sayNameNormal: function() {
    console.log("Normal: " + this.name); // this = user object
  },
  sayNameArrow: () => {
    console.log("Arrow: " + this.name); // this = window, not user
  }
}
user.sayNameNormal(); // Normal: Abinaya
user.sayNameArrow();  // Arrow: undefined
