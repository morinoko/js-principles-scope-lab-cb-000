// Note: var should never be used to declare variables, because of it's weird
// scoping issues (it is NOT block scoped)
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  // NOT a good idea to declare a variable like this, because
  // it ends up in global scope
  bestCustomer = 'not bob';
}
