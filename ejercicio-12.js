var Person = /** @class */ (function () {
    function Person(firstName, lastName, cuil) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cuil = cuil;
    }
    return Person;
}());
// Ejemplo de uso
var person1 = new Person("Melisa", "Moreno", "123456789");
var person2 = new Person("Ismael", "Fernandez", null);
console.log(person1);
console.log(person2);
