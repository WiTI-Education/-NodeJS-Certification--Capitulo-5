const assert = require('assert')

// TODO: 
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
const leopard = {
    hiss: () =>  "hsss"
}
Object.defineProperty(leopard, "hiss", {
  writable: false,
  configurable: false
});
// lynx prototype must have ONLY a purr method}
lynx = Object.create(leopard, {
    purr: {
        value: () => "prrr",
        writable: false,
        configurable: false
    }
});
// cat prototype must have ONLY a meow method
cat = Object.create(lynx, {
    meow: {
        value: () => "meow",
        writable: false,
        configurable: false
    }
});

const felix = Object.create(cat, {});
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
