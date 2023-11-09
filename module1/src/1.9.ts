{// type alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }
    const student1: Student = {
        name: 'Mir',
        age: 35,
        gender: 'male',
        contactNo: '017000000',
        address: 'dhk',

    }
    const student2: Student = {
        name: 'Mira',
        age: 45,
        gender: 'male',
        contactNo: '01700000000',
        address: 'ctg',

    }
    // type alias for string
    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'Presian'

    // type alias for function

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2
}