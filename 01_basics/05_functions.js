function loginUserMessage(username) {
    if (!username) {
        console.log('Enter username')
    }
    return `${username}, just logged in`
}

// console.log(loginUserMessage('saba'))

//use of rest operator

function calCartPrice(...price) {
    let res;
    for (i = 0; i < price.length; i++) {
        res += price[i];
    }
    return res;
}

// console.log(calCartPrice(12,8));

//passing object to funtion
const usr = {
    name: 'malik',
    price: 200
}

function handleObj(anyobject) {
    console.log(`username is ${anyobject.name} nd price is ${anyobject.price}`)
}

// handleObj(usr)

//passing obj directly
// handleObj({
//     name: 'malik',
//     price: 300
// })



//passing array to funtion and rerturn second indexed element
const myArr = [10,20,30]
function returnSecondElement(getArray){
    return getArray[1]
}

console.log(returnSecondElement(myArr))
