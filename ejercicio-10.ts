interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function castToPerson(obj: any): Person | null {
    if (
        typeof obj === "object" &&
        typeof obj.firstName === "string" &&
        typeof obj.lastName === "string" &&
        typeof obj.age === "number"
    ) {
        return {
            firstName: obj.firstName,
            lastName: obj.lastName,
            age: obj.age,
        };
    } else {
        return null;
    }
}

// Ejemplo de uso
const personData = {
    firstName: "Melisa",
    lastName: "Moreno",
    age: 30,
};

const person = castToPerson(personData);

console.log(person);
