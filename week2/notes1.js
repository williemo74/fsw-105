// Conditionals

// Booleans - true / false

if(true){
    console.log("It is true!")
} else {
    console.log("It is false!")
}

if(false){
    console.log("It is false!")
}
if(2 === 2){
    console.log("TWO IS EQUAL TO TWO")
} else {
    console.log("TWO IS NOT EQUAL TO TWO")
}

if(2 === 4){
    console.log("TWO IS EQUAL TO FOUR")
} else if(2 === 5){
    console.log("TWO IS EQUAL TO FIVE")
} else if(2 === 2){
    console.log("TWO IS EQUAL TO TWO")
} else if(2 === 3){
    console.log("TWO IS EQUAL TO THREE")
} else {
    console.log("I DONT KNOW WHAT IS GOING ON")
}

// Comparison Operator ( === )
    // > greater, < less, >=, <=, == loosely "dont use", === strictly, != loosely not "dont use", !== strictly not,

// Truthy and Falsey
    // Falsey
        // 0
        // ""
        // null
        // undefined
        // false
        // NaN
    //
if(""){
    console.log("it is truthy")
} else {
    console.log("it is falsey")
}

// Logic Operators
    // && - and
    // || - or
    // ! - not

if(2 === 2 && 2 === 3){
    console.log("it's working!")
} else{
    console.log("it's not working!")
}

// Order of Operations
    // + - * / (())

// Switch Statement

var color = "blue"

switch(color){
    case "red":
        console.log("the color is red")
    case "blue":
        console.log("the color is blue")
        break //stops switch
    
    case "yellow":
        console.log("the color is yellow")
        break
    default:
        console.log("the color is not red , blue, or yellow")
}
