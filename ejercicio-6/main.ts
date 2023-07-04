import { Person } from './person';
import { Student } from './student';

let person = new Person("Melisa", "Moreno", 30);
console.log(person.getFullName()); // salida: Melisa Moreno

let student = new Student("Ludmila", "Moreno", 18, "Diseñadora");
console.log(student.getFullName()); // salida: Ludmila Moreno
console.log(student.getNameCareer()); // salidas: Diseñadora