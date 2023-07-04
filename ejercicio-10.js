function castToPerson(obj) {
    if (typeof obj === "object" &&
        typeof obj.firstName === "string" &&
        typeof obj.lastName === "string" &&
        typeof obj.age === "number") {
        return {
            firstName: obj.firstName,
            lastName: obj.lastName,
            age: obj.age,
        };
    }
    else {
        return null;
    }
}
// Ejemplo de uso
var personData = {
    firstName: "Melisa",
    lastName: "Moreno",
    age: 30,
};
var person = castToPerson(personData);
console.log(person);
