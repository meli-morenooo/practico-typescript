enum Prioridad {
    Alta,
    Media,
    Baja,
}

function obtenerMensajePrioridad(prioridad: Prioridad): string {
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

const prioridadUsuario: Prioridad = Prioridad.Alta;
const mensaje: string = obtenerMensajePrioridad(prioridadUsuario);

console.log(mensaje);
