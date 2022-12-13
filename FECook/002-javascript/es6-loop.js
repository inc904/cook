let ages = [32, 23, 17, 10]
let person = { name: 'Jack', gender: 'male' }
// for in 遍历

for (k in ages) {
  console.log(k, ages[k])
}

for (v of ages) {
  console.log(v)
}

for (k in person) {
  console.log(k, person[k])
}

// for(v of person){
//   console.log(v)
// }

function test() {
  // ## TAG   filter
  // 不改变原数组 生成新的数组， 并返回

  let res1 = ages.filter(item => item > 19)
  console.log({ ages, res1 })

  // ## TAG forEach  单纯的循环每个数据
  let res2 = ages.forEach(item => item + 1)
  console.log({ ages, res2 })
  console.log(ages)

  // for 循环
  for (let i = 0; i < ages.length; i++) {
    console.log('s', ages[i])
    ages[i] += 1
    console.log('e', ages[i])
  }
  // map 循环 改变原数组
  ages.map(item => item + 1)

  // some  every  统计是否满足某个条件

  // reduce reduceRight 依次处理数组中的每个值
}

const person2 = {
  name: 'Leonardo'
}

person2.name = 'Jack'
console.log(person2)
