{/* Problem 1:
Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number. */

    const getLengthOrSquare = (input: string | number) => {
        if (typeof input === "string") {
            return input.length
        }
        if (typeof input === "number") {
            return input * input;
        }
    }
    // const result = getLengthOrSquare(5)
    // console.log(result);




    /* Problem 2:
    
    Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors. */
    interface Address {
        city: string;
        street: string;
    }
    interface Person {
        address?: Address;
        phone?: string;
    }
    const getAddressCity = (person: Person): string | undefined => {
        return person?.address?.city;
    }
    /* const result2 = getAddressCity({
        address: {
            city: " dk",
            street: "BailyRoad"
        },

    })
    console.log(result2); */




    /* Problem 3:

Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat." */
    class Cat {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
    }

    const isCat = (animal: object): string => {

        if (animal instanceof Cat) {
            return "yes, it's a cat.";
        } else {
            return "no, it's not a cat."
        }
    }
    /* const cat = new Cat("mr.cat", "cat");
    console.log(isCat(cat)); */



    /* Problem 4:

You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions. */

    const findTotal = (mixedData: (string | number)[]) => {
        let total: number = 0;
        for (let i = 0; i < mixedData.length; i++) {
            const element = mixedData[i];
            if (typeof element === "number") {
                total += element as number;
            }

        }
        return total;
    }
    /* const result4 = findTotal([1, 'two', 3, 'four', 5]) as number;
    console.log(result4); */





    /* Problem 5:

Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types. */
    interface Car {
        make: string;
        model: string;
        year: number;
    }
    interface Driver {
        name: string;
        licenseNumber: number | string;
    }

    type CarDriver = Car & Driver;

    const getCombined = (car: Car, driver: Driver): CarDriver => {
        const carDriver: CarDriver = {
            ...car,
            ...driver
        }
        return carDriver;
    }
    /* const result5 = getCombined({ make: "chuby", model: "wwe123", year: 1991 }, { name: 'rre', licenseNumber: "345dde" })
    console.log(result5); */




    /* Problem 6:
    
    Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message. */

    const checkAndGetSum = (input: unknown) => {
        if (Array.isArray(input)) {
            let sum = 0;
            for (const element of input) {
                sum = sum + element;
            }
            console.log(sum);
            return;
        }
    }





    /* Problem 7:
    
    Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results. */

    const findFirstOccurrence = <T>(array: T[], value: T): number => {
        if (array.includes(value)) {
            const indexOfOccurrence = array.indexOf(value);
            return indexOfOccurrence;
        } else {
            return -1;
        }
    }
    /* const numbers: number[] = [1, 2, 3, 4, 5, 2];

    const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

    const targetNumber = 2;

    const targetString = "cherry";

    const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

    const indexInStrings = findFirstOccurrence(strings, targetString);

    console.log(indexInNumbers); //output:  1

    console.log(indexInStrings); */








    /* Problem 8:
 
Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost. */

    interface Product {
        name: string;
        price: number;
        quantity: number;
    }
    const calculateTotalCost = (products: Product[]): number => {
        let totalCost: number = 0;
        for (const product of products) {
            totalCost += product.price * product.quantity as number;
        }
        return totalCost;
    }
    /* const cart: Product[] = [
        { name: 'Product 1', price: 10, quantity: 2 },
        { name: 'Product 2', price: 15, quantity: 1 },
        { name: 'Product 3', price: 20, quantity: 3 }
    ];

    const totalCost = calculateTotalCost(cart);
    console.log(`Total cost of the items in the shopping cart: $${totalCost}`); */
    //
}