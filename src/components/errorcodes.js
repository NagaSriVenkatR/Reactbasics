fetch("https://api.example.com/data")
.then(response => {
  if(response.ok){
    return response.json()
  }else{
    switch (response.status){
      case 400:
        console.error("Bad Request");
        break;
      case 401:
        console.error("Unautorized");
        break;
      case 403:
        console.error("Forbidden");
        break;
      case 404:
        console.error("Not found");
        break;
      case 500:
        console.error("Internal Server Error");
        break;
      default:
        console.error("UnExpected Error : ",response.status);
    }
    throw new Error("Network response not ok");
  }
})
.then((data)=>{
  console.log("Data Recieved :",data);
})
.catch(error =>{
  console.error('There was a problem with fetch operation :',data);
});
