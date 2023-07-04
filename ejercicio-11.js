var variableNull = null;
var variableUndefined = undefined;
function verificarVariables() {
    if (variableNull === variableUndefined) {
        console.log("Ambas variables son iguales");
    }
    else {
        console.log("Las variables no son iguales");
    }
    if (variableNull !== null && variableUndefined !== undefined) {
        console.log("Ambas variables están definidas");
    }
    else {
        console.log("Al menos una de las variables no está definida");
    }
}
verificarVariables();
