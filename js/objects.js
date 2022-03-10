// [] 을 변환
// let arr = [];
//
// const result1 = arr.valueOf()
// console.log('valueof', result1)
//
// const result2 = arr.toString()
// console.log('string', result2)
//
// const result3 = Number(arr)
// console.log('number', result3)

// 빈 string을 숫자로
// const cf = ''
// console.log('cf number', Number(cf))

// {}을 변환
// let obj = {}
//
// let result1 = obj.valueOf()
// console.log('valueof', result1)
// // let result2 = obj.toString()
//
// let result2 = String(obj)
// console.log('string', result2)
//
// let result3 = Number(obj)
// console.log('number', result3)
// // console.log('' + {})

let a = ''
let b = {}
console.log('1st')
console.log('a valueOf', a.valueOf())
console.log('b valueOf', b.valueOf())
console.log('2nd')
console.log('b toString', b.toString())
console.log('\'\' + \'[object Object]\' : ', a + b)
console.log('-----------')

a = '12'
b = {}
console.log('1st')
console.log('a valueOf', a.valueOf())
console.log('b valueOf', b.valueOf())
console.log('2nd')
console.log('a toString', b.toString())
console.log('\'\' + \'[object Object]\' : ', a + b)