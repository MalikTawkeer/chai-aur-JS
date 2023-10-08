//constructor/ singleton
const user = new Object()

user.name = 'malik'
user.email = 'asd'

// console.log(user)

const regUser = {
    username:{
        fname: 'malik'
    }
}

// console.log(regUser.username.fname)

//merging two objects in js

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    10: 'x',
    12: 'y'
}

// const ob3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)




// object  de-structuring 

const course = {
    coursename: 'html-basics',
    price: 999,
    courseInstructor: 'malik'
}

const {coursename, b, c} = course
console.log(coursename)