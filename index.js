// Console log a welcome message with instructions to mad libs
console.log("Welcome")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me an adjective")
let adjective2 = prompt("Give me another adjective")
let pluralnoun = prompt("Give me a Plural noun")
let verb = prompt("Give me a verb")


// Create an array that stores the values the user entered
let newarray = []
newarray.Push(adjective)
newarray.Push(adjective2)
newarray.Push(pluralnoun)
newarray.Push(verb)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitiv
console.log("In a small " + newarray[0] + " school in the bronx there was a problem with to many " + newarray[2] + "these" + newarray[1] + "loved to" + newarray[2] +" which caused Mr P so many headaches. however no one wanted to remove them because they were" + newarray[3] + "so they stayed there forever")







