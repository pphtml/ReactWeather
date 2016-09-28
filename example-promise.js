function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a != 'number' || typeof b != 'number') {
      reject("both parameters are not numbers");
    } else {
      resolve(a + b);
    }
  });
}

addPromise(2, null).
  then(result =>
    console.log('promise success', result)
  , err =>
    console.log('promise error', err));
