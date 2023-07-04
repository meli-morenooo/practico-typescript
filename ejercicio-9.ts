interface IFullName {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Persona implements IFullName {
    constructor(public firstName: string, public lastName: string) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Estudiante implements IFullName {
    constructor(public firstName: string, public lastName: string) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Trabajador implements IFullName {
    constructor(public firstName: string, public lastName: string) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const trabajador: IFullName = new Trabajador('Melisa', 'Moreno');
console.log(trabajador.getFullName());
