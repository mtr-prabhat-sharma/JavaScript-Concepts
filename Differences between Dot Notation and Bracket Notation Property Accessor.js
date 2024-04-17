/**
 Dot Notation only allows static keys while Bracket Notation accepts dynamic keys.
  Static key here means that the key is typed directly, while Dynamic key here means 
  that the key is evaluated from an expression.
 */

  let obj = {name:'Jhon', age:21, PIN: 123456};

  let res = obj.PIN;
  console.log(res); //123456
  
  let myKey2 = "PIN";
  let res3 = obj.myKey2;
  console.log(res3); //undefined
  let res33 = obj[myKey2];
  console.log(res33);//123456
  