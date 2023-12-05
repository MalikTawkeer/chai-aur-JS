const nums = [1,2,3,4,5]

const myNums = nums.filter( (num) => {
    return num > 3
} )

// console.log(myNums)

//same thing using forEach loop

const myArrs = []
nums.forEach( (num) => {
    if(num > 1){
        myArrs.push(num)
    }
} )

// console.log(myArrs)


//apply filter on books 

const books = [
    {title: 'DS', genre: 'cs', publish: 2021, edition: 3},
    {title: 'AI', genre: 'cs', publish: 2023, edition: 2},
    {title: 'ML', genre: 'cs', publish: 2023, edition: 2},
    {title: 'CPP', genre: 'cs', publish: 1990, edition: 8},
]


//get those books who are published in 2023

const myBooks = books.filter( (book) => book.publish === 2023 )

// console.log(myBooks);


//maps

//add 10 to each element present in the numbers array
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = numbers.map( (n) => numbers.push( n + 10) )

// console.log(numbers)


//*same using forEach
// const ns = []
// numbers.forEach( (n) => {
//     ns.push(n + 10)
// })

// console.log(ns)



//map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers
    .map( (num) => num * 10 )
    .map( (num) => num + 1 )
    .filter( (num) => num >50 )

console.log(newNumbers)
                            