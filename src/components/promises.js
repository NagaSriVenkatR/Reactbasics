// Creating a new promise
function simulatedAPI() {
  return promise = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random()*(11-1)+1);
    setTimeout(() => {
      if (random <= 5) {
        resolve("Opertion success : " + random);
      } else {
        reject("Operation fails");
      }
      
    }, 1000);
  })
}
async function simulateAPI() {
  try {
    let result = await simulatedAPI();
    console.log("succes:",result);
  } catch (error) {
    console.error('failed:',error);
  }
 }
 simulateAPI();
// simulatedAPI()
//    .then((result) => {
//      console.log(result);
//      document.getElementById("demo").innerHTML = promise;
//    })
//    .catch((error) => {
//      console.error(error);
//      document.getElementById("demo").innerHTML = promise;
//    });
 
// let promise = new Promise((resolve,reject) => {
//   let success = Math.random()
//   if(success <= 10){
//     resolve('Operation successeded' + success);
//   }else{
//     reject("Operation failed");
//   }
// });
// //consuming a promise
