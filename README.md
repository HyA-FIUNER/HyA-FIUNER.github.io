# Hitología y Anatomía

Hola a todos, bienvenidos a la página de histología y Anatomía.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## ¿Como colaboro?

Para realizar un aporte a este proyecto, ud puede hacerlo en principio de 2 maneras, segun la magnitud de los mismos:
- Cambios sencillos o más simples
- Cambios más complejos

### Cambios simples

Para esto ud puede entrar al archivo que desea modificar y usar la opción *Edit this file*, una vez terminado debe oprimir *commit changes* y esperar confirmación (en caso de no tener acceso).

### Cambios más complejos

Para estos cambios vamos necesitar algunos requerimientos previos:

- [Node.js](https://nodejs.org/en/download/) version 18.0 o superior:
  - Al instalar Node.js, se recomienda marcar todas las casillas de verificación relacionadas con las dependencias.
- [Git](https://git-scm.com/downloads) Cualquier versión (Se recomienda la última).

Para saber que version tenemos instalada, usaremos los siguientes comandos en la terminal o cmd:

```
$ node -v
$ git -v
```

### Cambios de forma local

Una vez cumplidos estos requisitos, vamos a clonar el repositorio en nuestra máquina:

```
$ git clone https://github.com/HyA-FIUNER/HyA-FIUNER.github.io.git
```

Luego, abrimos la carpeta con el editor de texto de preferencia, para ver reflejados los cambios en el proyecto debemos hacer push (empujar) estos cambios:

```
$ git add .
$ git commit -m "Mensaje que resume los cambios hechos"
$ git push
```

### En caso de querer visualizar los cambios en tiempo real

Para esto debemos ingresar los siguientes comandos en una terminal:

```
$ npx docusaurus start
```
Esto abrirá la página web en su navegador predeterminado.

#### Posibles problemas

En caso de ser la primera vez que clona el repositorio, puede reportar algunos problemas de dependencias, ud necesita instalarlas, puede hacerlo de la siguiente manera:
```
$ npm install
```
