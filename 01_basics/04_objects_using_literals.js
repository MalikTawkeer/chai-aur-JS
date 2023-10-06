// literal objects

const user = {
    name: 'malik',
    age: 12,
    email: 'malik@saba.com',
    'full name': 'maliksana'

}

console.log(user.email) // not good approach to access
console.log(user['full name']) // good approach

// changing values 


// Object.freeze(user)
// user.age = 23
// console.log(user)

//adding functions
user.greeting = function(){
    console.log('jds')
}

user.greet2 = function(){
    console.log(`hello, ${this.name}`)
}
console.log(user.greeting())
console.log(user.greet2())