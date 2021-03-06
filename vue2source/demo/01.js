
var book = {
  _year: 2004,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (newYear) {
    if (newYear > 2004) {
      this._year = newYear
      this.edition += newYear - 2004
    }
  }
})

book.year = 2005
console.log(book.edition) // 2
console.log(book._year) //2005
console.log(book)
