let score = '23'

//number
let scoreInNumber = Number(score)

// console.log(typeof scoreInNumber)
// console.log(typeof score)

//boolean
let bool = 0

let booleanVal = Boolean(bool)
// console.log(booleanVal);


// string

let n = 123

let nInstring = String(n)
// console.log(typeof(nInstring))


//**************************** stack and heap

//primitive datatypes are stored into stack
// non-primitive (referenced) are stored into heap

let myName = 'malik';

mName = myName

mName = 'abc'

console.log(myName)

// heap

 obj1 = {
    name: 'malik'
}

let obj2 = obj1

obj2.name = "Sasd"

// console.log(obj1)


