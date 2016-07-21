var Account = function(name, lineItems) {
  this.name = name;
  this.lineItems = lineItems || [];
  return this;
};

Account.prototype.register = function(lineItem) {
  var newLineItems = this.lineItems.reduce(function(acc, lineItem) {
    return acc + lineItem;
  }, []);
  return new Account(this.name, newLineItems);
};

var LineItem = function(amount, label) {
  this.amount = amount;
  this.label = label;
};

var myAccount = new Account('Aaron');
console.log(myAccount.lineItems.length);
myAccount.lineItems.push(new LineItem(200.00, 'for food'));
console.log(myAccount.lineItems.length);
