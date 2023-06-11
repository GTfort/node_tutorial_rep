const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./pathFolder/content/first.txt', 'utf8')
const second = readFileSync('./pathFolder/content/subContent/second.txt', 'utf8')
console.log(first)
console.log(second)



//use {flag : "a"} to append. !!!!!!