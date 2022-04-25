class Point {
  age = 18
  static _name = 'Jack'
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  static say() {
    console.log(`${this._name} hello`)
    // console.log(`${age} hello`)
  }
  toString() {
    console.log(this.age)
    return `(${this.x}, ${this.y})`
  }
}

let p = new Point(1, 2)
console.log(p)
p.x = 3
console.log(p.x)
console.log(Point.name)
Point.say()
p.toString()
console.log(p.age)
