"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.name, " ").concat(this.lastName);
    };
    return Person;
}());
exports.Person = Person;
