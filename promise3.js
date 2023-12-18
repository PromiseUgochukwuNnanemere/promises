// Change the code to call the promises sequentially and see how the output changes.
// By AI

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
  
  async function callPromises() {
    const result1 = await firstPromise();
    console.log(result1);
    const result2 = await secondPromise();
    console.log(result2);
  }
  
  callPromises().catch((error) => {
    console.error(error);
  });
  