"use strict";
{ /* Destructuring */
    var user = {
        id: 345,
        name: {
            firstName: 'Mezba',
            middleName: 'Persian',
            lastName: 'Haque',
        },
        contactNo: '01711000000',
        address: 'ctg'
    };
    var contactNo = user.contactNo, midName = user.name.middleName;
    // array destructuring
    var myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
}
