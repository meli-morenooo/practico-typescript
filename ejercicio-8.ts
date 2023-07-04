function getArray<T>(array: T[]): T[] {
    return [...array];
}

// Ejemplo de uso
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = getArray(originalArray);

console.log(copiedArray);
