const person = {
    firstName: "Sally",
    lastName: "Evans",
    age: 27,
    occupation: "Sales Assistant",
    married: false,
homeOwner: false,
hobbies: ["tennis", "gardening", "bungee jumping",],
marketingOp () {
    if (this.homeOwner == false && this.age> 25) {
        return "Send mortgage offer email"
        }
    }
}


console.log (person.occupation)
console.log (person ["firstName"])

const pet = {
   petName: "Bindy",
   typeOfPet: "Dog",
   ageOfPet: "10",
   colour: "Black",
   petFeatures: "Smelly when wet",
}
console.log ("I am happy to be a dog")



person.homeowner = "true"
console.log (person)
pet.colour = "Pink"
console.log (pet)

console.log(person.marketingOp())