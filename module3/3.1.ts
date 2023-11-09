/* class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
} */
class Animal {
    // parameter properties
    constructor(public name: string, public species: string, public sound: string) { }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("German Shepard", "Dog", "Woo Woo");
const cat = new Animal("Persian", "Cat", "MeWoo MeWoo");
dog.makeSound()
cat.makeSound()