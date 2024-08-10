// Creating a new promise
let promise = new Promise((resolve,reject) => {
  let success = true;
  if(success){
    resolve('Operation successeded');
  }else{
    reject("Operation failed");
  }
});
//consuming a promise
promise
 .then((result)=>{
   console.log(result);
  })
  .catch((error)=>{
    console.error(error);
  })
document.getElementById("demo").innerHTML = promise;