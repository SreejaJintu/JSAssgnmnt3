
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
a promise is a returned object to which you attach callbacks
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step



The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.
Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor. 
When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
•	resolve(value) — if the job is finished successfully, with result value.
•	reject(error) — if an error has occurred, error is the error object.
Promise Object Properties
A JavaScript Promise object can be:
•	Pending
•	Fulfilled
•	Rejected
The Promise object supports two properties: state and result.
While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.
Promise Syntax
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
Consumers: then, catch
A Promise object serves as a link between the executor (the “producing code” )the consuming functions , which will receive the result or error. Consuming functions can be registered  using the methods .then and .catch.
then
The most important, fundamental one is .then.
The syntax is:
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
The first argument of .then is a function that runs when the promise is resolved and receives the result.
The second argument of .then is a function that runs when the promise is rejected and receives the error.
catch
If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:
