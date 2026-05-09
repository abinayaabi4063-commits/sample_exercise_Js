let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data loaded"); // success
  } else {
    reject("Error occurred"); // fail
  }
});
myPromise
  .then(result => console.log(result)) // success vantha
  .catch(err => console.log(err))      // error vantha
  .finally(() => console.log("Done")); // always run