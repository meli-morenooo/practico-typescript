import { Person } from './person';

export class Student extends Person {
    private career: string;

    constructor(name: string, lastName: string, age: number, career: string) {
        super(name, lastName, age);
        this.career = career;
    }

    public getNameCareer(): string {
        return this.career;
    }
}