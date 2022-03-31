"use strict"
const obj1 = {}
Object.defineProperty(obj1, 'property1', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: false,
  
})

// obj1.property1 = 99

console.log(obj1.property1)