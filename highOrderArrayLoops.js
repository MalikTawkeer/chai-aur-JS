//forof loop

// on arrays
const arr = [1,2,3,4]
for( const n1 of arr){
    // console.log(n1)
}

//on string
const str = 'malik tawkeer'
for(const s1 of str){
    // console.log(s1)
}


//maps

const map = new Map()

map.set(1, 'a')
map.set(2, 'b')
map.set(3, 'c')

// console.log(map)
//looping
for(const [key, value] of map){
    console.log(key, ":-",value )
}


//******************************FORIN
// forof over objects
const myObj = {
    name: 'malik',
    address: 'ringath',
    age: 23
}

for (const key in myObj) {
    console.log(myObj[key])
}

