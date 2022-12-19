//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function get_values(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        console.log(Object.values(person3)[i])
    }
}

get_values()


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;



// Person( (printInfo) => {
//     console.log(`Name: ${this.name} \nAge${this.age}`)

//     return "Returned Value"
// } )
// Use an arrow to create the printInfo method
    this.printInfo = () => {
        return (`Name: ${this.name} \nAge: ${this.age}`)

        
    }

    this.addAge = (increment = 1) => {
        return this.age += increment;
    }
}
    

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
let person1 = new Person('Ulises', 24)
let person2 = new Person('Sandra', 27)

console.log(person1.printInfo())
console.log(person1.addAge())
console.log(person2.printInfo())
console.log(person2.addAge(3))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let greaterThan10 = (string) => {
    return new Promise( (resolve, reject) => {
        if(string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

greaterThan10('Extravagant')
.then( (result) => {
    console.log('Big word')
})
.catch( (error) => {
    console.log('Small word')
})