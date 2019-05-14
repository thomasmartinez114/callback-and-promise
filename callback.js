var result = undefined;

function add(a, b, sum){
    sum = a + b;
}

// simulate a server API call
setTimeout(() => add(2, 3, result), 1000);

console.log(`Synchronous result: ${result}`);
console.log(`Running some code right here`);

function addWithCallBack(a, b, callback){
    const sum = a + b;
    callback(sum);
}

function printResult(value) {
    console.log("Callback result", value);
}

// in Asynchronous - setTimeouts will run after the rest of code runs
setTimeout(() => addWithCallBack(5, 7, printResult), 0);
setTimeout(() => addWithCallBack(2, 3, printResult), 0);

console.log("Running some more code");


// Promises

function addWithPromise (c, d,){
const total = c + d;
return total

}


let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(addWithPromise(20, 30)), 10);
    
  });
  // resolve settimeout addwithPromises 5 +7 // 13 wait none
  // settimeout resolve addwithpromsies 5 + 7 //13 
  // resolve runs the first function in .then
  promise.then(
    result => console.log(`Promise successful here is the total ${result}`), 
    error => console.log(error) 
  );

  let promise1 = new Promise(function(resolve, reject){
    setTimeout(() => resolve(addWithPromise(30, 30)), 0);
  })

  promise1.then(
      result => console.log(`Promise successful here is the total ${result}`), 
      error => console.log(error)
  )