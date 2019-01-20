// const add = require('./utils/subtract')
// const subtract = require('./utils/subtract')
// const multiply = require('./utils/multiply')
// const divide = require('./utils/divide')

const add = require('@bit/ytakkar.math.utils.add')
const subtract = require('@bit/ytakkar.math.utils.subtract')
const multiply = require('@bit/ytakkar.math.utils.multiply')
const divide = require('@bit/ytakkar.math.utils.divide')

const NUM1 = 20
const NUM2 = 10

console.log(
  multiply(divide(add(NUM1, NUM2), subtract(NUM1, NUM2)), NUM2)
)