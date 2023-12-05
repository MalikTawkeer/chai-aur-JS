//create promise

// const promiseOne = new Promise((resolved, rejected)=>{
//     setTimeout(()=>{
//         console.log('async task is compeldted');
//         resolved()
//     }, 1000)
// })

// //consume promise

// promiseOne.then(()=>{
//     console.log('consumed');
// })

// //way 2

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('resolved');
//         resolve()
//     }, 1000)
// })

// .then(()=>{
//     console.log('async task 2');
// })

// //passing data from resolve to then

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username: 'malik', email: 'malik@gmail.com'})
//     }, 1000);
// })
// .then((user)=>{
//     console.log(user);
// })

//way 4

// const promiseFour = new Promise(function (resolve, reject) {
//   const err = true;
//   if (!err) {
//     resolve({ username: "malik", age: 26 });
//   } else {
//     reject("ERROR: something went wrong");
//   }
// });
// promiseFour.then(function(user){
//     return user.username
// })
// .then(username=>{
//     console.log(username);
// })

// .catch(err=>{
//     console.log(err);
// })

// .finally(()=>{
//     console.log('either promise is resolved or rejected');
// })

// async function consumePromiseFour() {
//   try {
//     const res = await promiseFour;
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }

// consumePromiseFour()



// async await

// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const  data = await response.json()
//     console.log(data);

// }
// getAllUsers()


// same using promises
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>{
    return response.json()
})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})