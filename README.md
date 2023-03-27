# -NodeJS-Certification--Capitulo-5

##  Closure Scope
En la carpeta labs-1 hay un archivo llamado app.js que contiene lo siguiente:

``` javascript
'use strict'
const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
console.log(sayHiTo('Dave')) // imprime 'Hello Dave'
console.log(sayHiTo('Annie')) // imprime 'Hello Annie'
console.log(sayByeTo('Dave')) // imprime 'Goodbye Dave'
```
Implemente la función prefixer.
Cuando esté listo, abra una terminal, navegue hasta la carpeta labs-1 y ejecute el programa con:
node app.js
Este programa no se ejecutará correctamente hasta que se complete la implementación.
Cuando se implemente correctamente, la salida debería ser la siguiente:
``` bash
Hello Dave
Hello Annie
Goobye Dave
```
## Prototypal Inheritance
El directorio labs-2 contiene un archivo app.js con el siguiente código:

``` javascript
const assert = require('assert')
// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method
const felix = null //TODO replace null with instantiation of a cat
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss
// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)
assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')
```

Se solicita implementar una forma de crear una cadena de prototipos de "leopard" -> "lynx" -> "cat". El prototipo "leopard" debe tener SOLO un método "hiss", el prototipo "lynx" debe tener SOLO un método "purr" y el prototipo "cat" debe tener SOLO un método "meow". También se debe instanciar un gato llamado "felix". Luego se deben llamar los métodos "meow", "purr" y "hiss" en el objeto "felix" y se deben imprimir los mensajes "Felix the cat: meow", "Felix the cat: prrr" y "Felix the cat: hsss", respectivamente. Finalmente, hay pruebas para verificar que los prototipos tengan la cantidad correcta de métodos y que sean del tipo correcto. Si se completan correctamente, se imprimirá "prototype checks passed!" en la consola.
