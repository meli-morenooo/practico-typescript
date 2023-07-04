// 1) Enumere y explique cada uno de los tipos básicos de TypeScript.
// - number: Representa valores numéricos, ya sean enteros o decimales.
// - string: Representa valores de texto o cadenas de caracteres.
// - boolean: Representa valores booleanos, es decir, true o false.
// - null: Representa un valor nulo intencionalmente asignado a una variable.
// - undefined: Representa un valor indefinido cuando una variable no tiene asignado ningún valor.
// - symbol: Representa valores únicos y generalmente se utiliza como identificadores únicos para 
//           propiedades de objetos.
// - object: Representa cualquier objeto no primitivo. También se utiliza como tipo para valores 
//           como arreglos, funciones y objetos literales.


// 2) Explique las diferencias entre los tipos especiales null y undefined
// - null es un valor asignado intencionalmente a una variable para indicar que no tiene ningún valor
//   o es nulo. Es un valor primitivo que representa la ausencia intencional de un objeto o valor.
// - undefined indica que una variable no tiene asignado ningún valor. Se utiliza cuando una variable 
//   ha sido declarada pero aún no se le ha asignado ningún valor. También puede ser el valor de retorno
//   de una función que no devuelve explícitamente un valor.
// En resumen, null se utiliza para indicar la ausencia intencional de valor, mientras que undefined se
// utiliza para indicar la falta de asignación de valor.


// 3) Explique porque razones no es aconsejable utilizar el tipo any
// No es aconsejable utilizar el tipo any en TypeScript porque anula el beneficio de tener un sistema
// de tipos estáticos y fuertes. El tipo any permite asignar cualquier valor a una variable sin 
// restricciones de tipo. Esto significa que no se realizan verificaciones de tipo en tiempo de 
// compilación y se pierde la seguridad y confiabilidad que brinda TypeScript.
// Al utilizar el tipo any, se pierde la capacidad de aprovechar las características de TypeScript, 
// como la detección temprana de errores y la autocompletado de código. Además, la falta de restricciones
// de tipo puede llevar a errores difíciles de depurar y problemas en tiempo de ejecución.
// Es recomendable utilizar los tipos más específicos disponibles en TypeScript para obtener los beneficios
// de un sistema de tipos sólido y mejorar la legibilidad y mantenibilidad del código.


// 4) Explique las diferencias entre el modo normal y el modo estricto
// El modo normal y el modo estricto se refieren a la configuración del compilador de TypeScript.
// Modo normal: En el modo normal, el compilador de TypeScript es más permisivo en cuanto a las reglas 
// de tipo y las conversiones implícitas. Esto puede resultar en comportamientos no deseados o errores 
// silenciosos en el código.
// Modo estricto: El modo estricto, por otro lado, activa una serie de reglas más estrictas en el 
// compilador de TypeScript. Esto ayuda a prevenir errores comunes y a mejorar la seguridad y calidad
// del código. En el modo estricto, se aplican reglas adicionales, como la necesidad de declarar 
// explícitamente el tipo de retorno de las funciones, la prohibición de asignar valores null o undefined
// a variables no opcionales, y el uso de comprobaciones estrictas de igualdad (===) en lugar de 
// igualdad débil (==).
// El modo estricto es recomendado para proyectos de TypeScript, ya que ayuda a detectar y prevenir
// errores comunes, mejora la legibilidad y mantenibilidad del código, y promueve prácticas de
// desarrollo más sólidas.