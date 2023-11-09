/* 
Typescript basic types
*/
// String
let firstName: string = "abdul";
// Number
let roll: number = 123;
// Boolean
let isAdmin: boolean = false;
// undefined
let x: undefined = undefined;
// null
let y: null = null;

let d: number;
d = 234;

// Array

let friends: string[] = ['abid', 'siam', 'habib'];
let rollList: number[] = [1, 2, 3];
rollList.push(23);

// tuple=>array=>order=>type of value
let coordinates: [number, number] = [1, 5];
let ageName: [number, string, boolean] = [50, 'Mr Bean', true];
ageName[0] = 56;