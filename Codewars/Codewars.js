function makeNegative(num) {
   return num > 0 ? -num : num
}
// console.log(makeNegative(43));//-43

function positiveSum(arr) {
   return arr.filter(num => num > 0).reduce((acc, cur) => acc + cur)
}
// console.log(positiveSum([1,-2,3,4,5]));//13

function solution(str) {
   let res = ''
   for (let i = str.length - 1; i >= 0; i--) {
      res += str[i]
   }
   return res
}
// console.log(solution('world'));//'world'  =>  'dlrow'

function boolToWord(bool) {
   return bool ? 'Yes' : 'No'
}
// console.log(boolToWord(false))
// very simple, given a number (integer / decimal /
// both depending on the language), find its opposite (additive inverse).

function opposite(number) {
   return number ? -number : number
}
//   console.log(opposite(1));

function squareSum(numbers) {
   return numbers.map(num => num * num).reduce((acc, curr) => acc + curr)
}
//   console.log(squareSum([0, 3, 4, 5]));

function repeatStr(n, s) {
   return s.repeat(n)
}
// console.log(repeatStr(3, '*'))//"***"

const summation = num => {
   let res = 0
   for (let i = 0; i <= num; i++) {
      res += i
   }
   return res
}
// console.log(summation(8));

const noSpace = x => {
   return x.replaceAll(' ', '')
}
// console.log(noSpace('dwq dqwd dqwd'));

const findSmallestInt = args => {
   return Math.min(...args)
}
//  console.log(findSmallestInt([78, 56, 232, 12, 8]))
// if (operation === '+') {
//    return value1 + value2
// } else if (operation === '-') {
//    return value1 - value2
// } else if (operation === '/') {
//    return value1 / value2
// } else if (operation === '*') {
//    return value1 * value2
// }

function basicOp(operation, value1, value2) {
   const operator = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '/': (a, b) => a / b,
      '*': (a, b) => a * b
   }

   if (operator.hasOwnProperty(operation)) {
      return operator[operation](value1, value2)
   } else {
      return 'error'
   }
}

// console.log(basicOp("+", 4, 7));//11, "4 + 7 = 11"

function getCount(str) {
   return str.split('').filter(c => 'aeiouAEIOU'.includes(c)).length
}
// console.log(getCount('abracadabra')) //5

// 1.Disemvowel Trolls

function disemvowel(str) {
   let res = ''
   let vowels = ['a', 'o', 'u', 'e', 'i', 'A', 'O', 'U', 'E', 'I']

   for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
         res += str[i]
      }
   }
   return res
}
// console.log(disemvowel('kMxCjts Nxt tXT'))

// 2. Square Every Digit

function squareDigits(num) {
   let res = 0
   let stringed = num.toString()
   let splited = stringed.split('')
   let mapped = splited.map(num => num ** 2)

   return parseInt(mapped.join(''), 10)

// return +num.toString().split('').map(i => i*i).join('');
}
// console.log(squareDigits(9414))


// 3 Highest and Lowest
function highAndLow(numbers) {
   let numArray = numbers.split(' ').map(Number)
   let max = Math.max(...numArray)
   let min = Math.min(...numArray)
   return `${max} ${min}`
}
// console.log(highAndLow('1 2 3'))
  

// 4 Descending Order

function descendingOrder(n) {
return parseInt(n.toString().split('').sort((a,b) => b - a).map(Number).join(''))
}
// console.log(descendingOrder(123456789))
  
// 5 Get the Middle Character

function getMiddle(s) {
   const length = s.length //4
   const midleIndex = Math.floor(length / 2) //2
   if (length % 2 === 0) {
      return s.substring(midleIndex - 1, midleIndex + 1)
   } else {
      return s.charAt(midleIndex)
   }
}
// console.log(getMiddle('test'));//es

// 6 List Filtering

function filter_list(l) {
   return l.filter((item) =>typeof item == 'number')
}
// console.log(filter_list([1, 2, 'a', 'b']))
  

// 7 Mumbling

function accum(s) {
   let res = ''
   for (let i = 0; i < s.length; i++) {
      res += s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
      if (i !== s.length - 1) {
         res += '-'
      }
   }
   return res

// return s.split('').map((c,i) => (c.toUpperCase() + c.toUpperCase().repeat(i))).join('-')
}
// console.log(accum('abc'))


// 8 You're a square!

let isSquare = n => {
   if (Math.sqrt(n) !== Math.floor(Math.sqrt(n))) {
      return false
   }
   return true
}
// console.log(isSquare(26))

// 9 Isograms

function isIsogram(str) {
   let splited = str.split('')
   let count = 0
   let res = []

   for (let i = 0; i < splited.length; i++) {
      let charLower = splited[i].toLowerCase()
      if (!res.includes(charLower)) {
         res.push(charLower)
      } else {
         count += 1
      }
   }
   return count > 0 ? false : true
}
// console.log(isIsogram('mosejfhwqdO'))//false
  

// 10 Exes and Ohs

function XO(str) {
   str = str.toLowerCase()
   let splited = str.split('')
   console.log(splited)
   let resX = 0
   let resY = 0

   for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
         resX += 1
      } else if (str[i] === 'o') {
         resY += 1
      }
   }
   return resX === resY ? true : false

//    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
// console.log(XO('xxooo'))



