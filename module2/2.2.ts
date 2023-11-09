{
    // interface

    // object
    type User1 = {
        name: string;
        age: number;
    };
    interface User2 {
        name: string;
        age: number;
    }
    // To Extends by type
    type UserWithRole1 = User1 & { role: string }
    // to extend by interface
    interface UserWithRole2 extends User2 {
        role: string;
    }
    /*  const user1: User1 = {
         name: "Persian",
         age: 100
     } */
    /* const user1: User2 = {
        name: "Persian",
        age: 100
    } */
    /* const user1: UserWithRole1 = {
        name: "Persian",
        age: 100,
        role: "manager"
    } */
    const user1: UserWithRole2 = {
        name: "Persian",
        age: 100,
        role: "manager"
    }

    // js --> object , array-> object function -> object

    // array

    type Roll1 = number[];
    /*  const rollNumber: Roll1 = [1, 2, 3] */

    interface Roll2 {
        [index: number]: number
    }
    const rollNumber: Roll2 = [1, 2, 3]

    // Function
    type Add1 = (num1: number, num2: number) => number
    /* const add:Add1=(num1,num2)=>{
        return num1+num2
    } */
    interface Add2 {
        (num1: number, num2: number): number
    }
    const add: Add2 = (num1, num2) => {
        return num1 + num2
    }
    // 
}