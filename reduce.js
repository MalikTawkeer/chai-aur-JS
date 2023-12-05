const nums = [1,2,3,4]

// const total = nums.reduce( (acc, currVal) => {
//     console.log(acc)
//     return acc + currVal
// }, 0 )

//same using arrow funtion

const total = nums.reduce( (acc, currVal) => acc + currVal, 0 )
// console.log(total)


//real life scnerio
//calculate total price in the cart
const shoppingCart = [
    {
        itemName: 'mi laptop',
        price: 30000
    },
    {
        itemName: 'table lamp',
        price: 200
    },
    {
        itemName: 'dslr camera',
        price: 10000
    },
    {
        itemName: 'laptop stand',
        price: 500
    }
]

const totalPrice = shoppingCart.reduce( (acc, item ) => acc + item.price, 0 )

console.log(totalPrice);