"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    var age = 18;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    var isAdult = age >= 18 ? 'adult' : 'not adult';
    // console.log({ isAdult });
    //nullish coalescing operator
    // null / undefined ---> decision making
    var isAuthenticated = null;
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    var result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1: result1 }, { result2: result2 });
    var user = {
        name: "Persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentAddress: "ctg town",
        },
    };
    var permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent Address";
    console.log({ permanentAddress: permanentAddress });
}
