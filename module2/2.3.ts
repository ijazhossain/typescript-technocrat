{
    // genetic type

    type GenericArray<T> = Array<T>;

    // const rollNumber: number[] = [1, 2, 3, 4];
    // const rollNumber: Array<number> = [1, 2, 3, 4];

    const rollNumber: GenericArray<number> = [1, 2, 3, 4];
    // const mentors: string[] = ['Mr.X', 'Mr.Y'];
    // const mentors: Array<string> = ['Mr.X', 'Mr.Y'];
    const mentors: GenericArray<string> = ['Mr.X', 'Mr.Y'];

    // const booleanArray: boolean[] = [true, false]
    // const booleanArray: Array<boolean> = [true, false]
    const booleanArray: GenericArray<boolean> = [true, false];

    const user1: GenericArray<{
        name: string,
        age: number
    }> = [
            {
                name: "Ijaz",
                age: 35
            },
            {
                name: "Mizan",
                age: 55
            }
        ];

    interface User {
        name: string,
        age: number
    }


    const user: GenericArray<User> = [
        {
            name: "Ijaz",
            age: 35
        },
        {
            name: "Mizan",
            age: 55
        }
    ];

    //generic tuple
    type GenericTuple<X, Y> = [X, Y]
    const manush: GenericTuple<string, string> = ['mr. x', 'mrs. x']

    const UserWithID: GenericTuple<number, { name: string; email: string }> = [
        1234,
        { name: "persian", email: "a@gmail.com" },
    ];
    // 
}
