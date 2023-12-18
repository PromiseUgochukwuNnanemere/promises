//Create a script which has two methods that return promises - One of the promises should get reolved after 6 seconds timeout and the other one after 3 seconds timeout. Call the promise in such a way that the second promise is invoked after the first promise is resolved. 
//The answer by IBM

function firstPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('First promise resolved');
      }, 6000);
    });
  }
  
  function secondPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Second promise resolved');
      }, 3000);
    });
  }
  
  firstPromise()
    .then((result) => {
      console.log(result);
      return secondPromise();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

    
  