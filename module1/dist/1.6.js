"use strict";
/* Learning Function */
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add(2, 2);
// arrow function
var addArrow = function (num1, num2) { return num1 + num2; };
// object --> function --> method
var poorUser = {
    name: 'Ijaz',
    balance: 0,
    addBalance: function (balance) {
        return "My new balance is ".concat(this.balance + balance);
    }
};
// callback function
var arr = [1, 4, 10];
var newArray = arr.map(function (ele) { return ele * ele; });
