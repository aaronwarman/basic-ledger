var Account = function(name, lineItems) {
  this.name = name;
  this.lineItems = [];
  return this;
};

Account.prototype.register = function(amount, label) {
  var item = new LineItem(amount, label);
  this.lineItems.push(item);
  return item;
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

LineItem.prototype.toString = function() {
  return [this.amount, ": -",  this.label].join();
};

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
