
  // let age = 50;
  // let result = (age > 60) ? "Senior Citizen" :"General Citizen" ;
  // console.log(result);
  // document.getElementById("demo").innerHTML = result;
  

  let age = [10 ,20 , 50 ,6,60 ,80 ];
  for(let i = 0 ; i<age.length;i++){
    let ticket = age[i] <= 12 ? `${age[i]} Children can pay $9 `: age[i] <= 59  ? `${age[i]} Adults can pay $10` : age[i]>=60 ? `${age[i]} Senior Citizens can pay $8` : "false";
    console.log(ticket);
    document.getElementById("demo").innerHTML = ticket;
  }
  function name(params) {
    
  }
 


