const numeros = require('./numeros.js')
const Logger = require('logplease')
const logger = Logger.create('utils')
const numsArr = [2, 3, 101, 201, 202, 100]

numsArr.forEach((num) => {
  numeros.esParFunction(num) ? logger.info(`${num}: El número es par`) : logger.error(`${num}: El número no es par`)
})