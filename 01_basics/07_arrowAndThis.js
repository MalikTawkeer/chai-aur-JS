// this 

const user = {
    username: 'sabamalik',

    usermessage: function(){
        console.log(`hello, ${this.username}`);
        console.log(this)

    }
}

user.usermessage()
// console.log(this);

//arrow functions

const add = (n1, n2) => {
    console.log(n1+n2)
}

add(1,2)