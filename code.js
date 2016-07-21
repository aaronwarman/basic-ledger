var Account = require('./lib/account');

var myAccount = new Account('Aaron');
console.log(myAccount.balance());

myAccount.register(1200.00, 'opening deposit');
console.log(myAccount.balance());

myAccount.register(-200.00, 'for food');
console.log(myAccount.balance());

myAccount.register(60.00, 'sold something');
console.log(myAccount.balance());

myAccount.lineItems.map(function(item) {
  console.log(item.toString());
});
