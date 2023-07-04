"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var student_1 = require("./student");
var person = new person_1.Person("Melisa", "Moreno", 30);
console.log(person.getFullName()); // salida: Melisa Moreno
var student = new student_1.Student("Ludmila", "Moreno", 18, "Diseñadora");
console.log(student.getFullName()); // salida: Ludmila Moreno
console.log(student.getNameCareer()); // salidas: Diseñadora
