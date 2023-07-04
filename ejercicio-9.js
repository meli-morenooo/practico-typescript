var Persona = /** @class */ (function () {
    function Persona(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Persona.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Persona;
}());
var Estudiante = /** @class */ (function () {
    function Estudiante(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Estudiante.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Estudiante;
}());
var Trabajador = /** @class */ (function () {
    function Trabajador(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Trabajador.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Trabajador;
}());
var trabajador = new Trabajador('Melisa', 'Moreno');
console.log(trabajador.getFullName());
