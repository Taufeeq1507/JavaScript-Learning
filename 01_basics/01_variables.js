const accountId = 14453
let accountEmail = "taufeeq@google.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"
let accountState

// accountId = 2  //not allowed
accountEmail = "mt@google.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
also do not decalre variable without using key words like in the case of accountCity

so the accepted and most correct way of declaring variable is to use keywords let and const
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// if we only declare a variable in javascript and do not assign any value then js consider that variable 'undefined'