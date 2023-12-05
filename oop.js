// ***************************object literal
// const user = {
//     username: 'malik',
//     password: 1234,
//     getUsername: function(){
//         console.log(this.username);
//     }
// }
// user.getUsername()
// console.log(user);
// console.log(this);

/************************Constructor Function***************/
function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log('hello');
    }
    return this
    
}

const u1 = new User('malik', 2, true)
const u2 = new User('sb', 20, false)
console.log(u2.greeting());