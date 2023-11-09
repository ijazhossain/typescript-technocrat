{/* Destructuring */
    const user = {
        id: 345,
        name: {
            firstName: 'Mezba',
            middleName: 'Persian',
            lastName: 'Haque',
        },
        contactNo: '01711000000',
        address: 'ctg'
    }
    const {
        contactNo,
        name: { middleName: midName },
    } = user;
    // array destructuring
    const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    const [, , bestFriend, ...rest] = myFriends;

}

