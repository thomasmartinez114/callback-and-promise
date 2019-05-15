var result = undefined;

function add(a, b, sum) {
    sum = a + b;
}

// simulate a server API call
setTimeout(() => add(2, 3, result), 1000);

console.log(`Synchronous result: ${result}`);
console.log(`Running some code right here`);

function addWithCallBack(a, b, callback) {
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

function addWithPromise(y, z) {
    const total = y + z;
    return total
}


var promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(addWithPromise(20, 30)), 20);
});

promise.then(
    result => console.log(`Promise total amount is: ${result}`),
    error => console.log(error)
);

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(addWithPromise(0, 30)), 0);
})

promise1.then(
    result => console.log(`Promise (2nd) total amount is: ${result}`),
    error => console.log(error)
)