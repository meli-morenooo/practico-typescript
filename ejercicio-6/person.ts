export class Person {
    public name: string;
    private lastName: string;
    protected age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    public getFullName(): string {
        return `${this.name} ${this.lastName}`;
    }
}