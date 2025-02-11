function myfun(){
    console.log("k")
    console.log("r")
    console.log("i")
    console.log("t")
    console.log("i")
    console.log("k")
    console.log("a")
}
//myfun();

// function addTwoNum(num1,num2){
//     console.log(num1+num2) 
// }

function addTwoNum(num1,num2){
    const result=num1+num2
    return result
}
//const result=addTwoNum(3,5)
const result=addTwoNum(4,6)
//console.log("Result ",result);
addTwoNum("3",4)


function loginUserMessage(username){
    if(username===undefined){
        console.log(" please enter a username ")
        return
    }
        return `${username} just logged in!`
    }
    
//console.log(loginUserMessage("kritika"))
//console.log(loginUserMessage()) //undefined just logged in


//give default value

function loginUserMessage(username="kritika"){
    if(username===undefined){
        console.log(" please enter a username ")
        return
    }
        return `${username} just logged in!`
    }
    
// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){   //rest operator
    return num1
}
//console.log(calculateCartPrice(200,300,400,500))    //val1=200 val2=300 num1=[400,500]

const user={
    username:"Kritika",
    price:"999"
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

//Direct  object passed in a function
handleObject({
    username:"Hitesh",
    price:"1200"
})

//Array in function
const myNewArray=[200,300,400,500]
function returnArray(myArr){
    return myArr[0]
}
//console.log(returnArray(myNewArray))
console.log(returnArray([200,400,700]))