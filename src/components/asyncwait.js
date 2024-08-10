async function myDisplay() {
  let myPromise = new Promise(function(resolve){
    setTimeout(function(){
      resolve("Welcome to Ebrain");
    },5000);
  });
  document.getElementById("demo").innerHTML = await myPromise; 
}
myDisplay();

function fetchData() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let success = true;
      if(success){
        resolve("Operation Successfull");
      }else{
        reject("Operation Fail!");
      }
    },2000);
  })
}
async function getData() {
  try {
    let data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();