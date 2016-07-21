
var Account = function(name, lineItems) {
  this.name = name;
  this.lineItems = [];
  return this;
};

Account.prototype.register = function(amount, label) {
  this.lineItems.push({ amount: amount, label: label});
};

Account.prototype.balance = function() {
  return this.lineItems.reduce(function(acc, item) {
    return acc + parseFloat(item.amount);
  }, 0.00);
};

var LineItem = function(amount, label) {
  this.amount = amount;
  this.label = label;
};

var myAccount = new Account('Aaron');

myAccount.register(1200.00, 'opening deposit');

myAccount.register(-200.00, 'for food');

myAccount.register(60.00, 'sold something');

myAccount.lineItems.map(function(item) {
  console.log("%s - '%s'", item.amount, item.label);
});
