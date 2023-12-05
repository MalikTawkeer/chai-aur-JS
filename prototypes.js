function malOf5(n){
    return n*5
}

const s = malOf5.power = 2

//magic-> inject prototypes into objects

function createUser(username, score){
    this.username = username,
    this.score = score
}
//createing prorotypes
createUser.prototype.increment = function(){
    this.score ++;
}

const u1 = new createUser('ma', 2)
const u2 = new createUser('ma', 4)
u1.increment()
u2.increment()
console.log(u1);
console.log(u2);
