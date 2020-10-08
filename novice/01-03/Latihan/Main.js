var hit1, hit2;

hit1 = window.prompt("Masukin bilangan bulat pertama", "Ok bos");
hit2 = window.prompt("Masukin bilangan bulat pertama", "Ok bos");

if (parseInt(hit1, 10)> parseInt(hit2, 10)){

    console.log("lebih gede dari "+ hit1+" and "+ hit2+" and " + hit1+ ".");
   }
else
  if(parseInt(hit2, 10) > parseInt(hit1, 10)) 
  {
  console.log("lebih gede daari"+ hit1+"and "+ hit2+ " is "+ hit2+ ".");
  }                  
else
  {
   console.log("Nilai "+ hit1+ " and "+hit2+ " sama dengan.");
  }