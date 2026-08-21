const accountId=144553
let accountEmail="king@gmail.com"
var accountPassword="123456"
accountCity="Jaipur"//generally not allowed
let accountState; // undefined
// accountId=2   // not allowed

/*
Prefer not to use var because 
of issue of block scope and functional scope
*/
accountEmail="hc@gmail.com"
accountPassword="222222"
accountCity="Ludhiana"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
