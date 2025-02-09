const account_id = 144553
let account_email="kritika@gmail.com";
var account_pass="12345"
account_city="jaipur"
// account_id=2 not allowed
account_email="kritika.com"
account_pass=2345
account_city="bengaluru"
console.log(account_email)
console.log(account_pass)
console.log(account_city)
console.log(account_id);
let account_state
console.table([account_email,account_id,account_pass,account_city, account_state])

/*
prefer not to use var
b/c of issue in block scope and functional scope
*/
