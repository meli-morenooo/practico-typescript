class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public cuil: string | null
    ) {}
}

// Ejemplo de uso
const person1 = new Person("Melisa", "Moreno", "123456789");
const person2 = new Person("Ismael", "Fernandez", null);

console.log(person1);
console.log(person2);
