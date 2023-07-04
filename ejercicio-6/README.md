# Proyecto TypeScript: Clases, Módulos, Accesibilidad y Herencias

Este proyecto implementa el concepto de Clases, Módulos, Accesibilidad y Herencias en TypeScript. El proyecto consta de dos clases principales, `Person` y `Student`. `Student` es una subclase de `Person`.

## Clases

- `Person`: Esta clase tiene tres propiedades: `name` (pública), `lastName` (privada) y `age` (protegida). Además, tiene un método `getFullName` que devuelve el nombre completo de la persona.
- `Student`: Esta clase es una subclase de `Person`. Tiene una propiedad adicional llamada `career` (privada) y un método adicional `getNameCareer` que devuelve el nombre de la carrera del estudiante.

## Cómo instalar

1. Asegúrate de tener instalado Node.js y npm en tu sistema. Si no los tienes, puedes descargarlos desde el [sitio web oficial de Node.js](https://nodejs.org/).

2. Clona este repositorio a tu sistema local.

3. Navega a la carpeta del proyecto en la terminal y ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

## Cómo compilar y ejecutar

1. Compila el proyecto ejecutando el siguiente comando en la terminal:

```bash
npm run build
```

2. Ejecuta el archivo JavaScript principal con el siguiente comando:

```bash
node main.js
```

Esto mostrará el nombre completo y la carrera del estudiante.
