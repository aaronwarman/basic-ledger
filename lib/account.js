var LineItem = require('./line-item');

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
  var summer = function(acc, item) {
    return acc + parseFloat(item.amount);
  };
  return this.lineItems.reduce(summer, 0.00);
};

module.exports = Account;
