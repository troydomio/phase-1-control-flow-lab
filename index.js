function scuberGreetingForFeet(feet){
  let rideLength;
  if(feet <= 400){rideLength = 'This one is on me!';}
   else if(feet >= 2000 && feet < 2500){rideLength = 'I will gladly take your thirty bucks.'} 
   else if (feet > 2500) rideLength = 'No can do.'
   return rideLength;
}
  
 

function ternaryCheckCity(city){
  let vacation =  (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return vacation;
}

function switchOnCharmFromTip(tip){
 let tipMessage;
 if (tip === 'generous'){tipMessage= 'Thank you so much.'}
 else if (tip === 'not as generous'){tipMessage = 'Thank you.'}
 else (tipMessage = "Bye.")
 return tipMessage;
}