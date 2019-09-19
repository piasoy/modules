var russianDoll = require('./russianDoll.js')

let newObj = russianDoll
let count = 0
function loop(obj){
    //print Big Doll
    if (count === 0){ 
        console.log(russianDoll.value)
        count++
    }

    //make the child the new object
    newObj = newObj.child 
    //console.log the child.value
    console.log(newObj.value) 
   
    //exit function there are no more child objects
    if (!newObj.child){return}
   
    //otherwise call function again with new object
    loop(newObj)
    
}

loop(russianDoll);