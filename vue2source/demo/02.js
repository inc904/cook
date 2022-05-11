var car = {
  brand: 'BMW',
  price: 3000
}

Object.defineProperty(car, 'price', {
  get: function () {
    return this.price
  },
  set: function (newVal) {
    this.price = newVal
  }
})

car.price = 200
console.log(car.price)
console.log(car.brand)
