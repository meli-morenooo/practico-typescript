var Prioridad;
(function (Prioridad) {
    Prioridad[Prioridad["Alta"] = 0] = "Alta";
    Prioridad[Prioridad["Media"] = 1] = "Media";
    Prioridad[Prioridad["Baja"] = 2] = "Baja";
})(Prioridad || (Prioridad = {}));
function obtenerMensajePrioridad(prioridad) {
    switch (prioridad) {
        case Prioridad.Alta:
            return "La prioridad es Alta";
        case Prioridad.Media:
            return "La prioridad es Media";
        case Prioridad.Baja:
            return "La prioridad es Baja";
        default:
            return "La prioridad es desconocida";
    }
}
var prioridadUsuario = Prioridad.Alta;
var mensaje = obtenerMensajePrioridad(prioridadUsuario);
console.log(mensaje);
