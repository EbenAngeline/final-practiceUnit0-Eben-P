//Module : Stringing characters together
//Skill : Concatenating strings to form a complete message
//pseudo code :
//1. Declare a variable to hold the user's name and assign it a value.
//2. Declare a constant variable to hold the greeting message and assign it a value.
//3. Concatenate the greeting message and the user's name to create a full greeting message.
//4. Output the full greeting message to the console.       

let userName = "Alice";
const greeting = "Hello, " ;
let fullGreeting = greeting + userName;
console.log(fullGreeting); // Expected Output: Hello, Alice


//Module : Control Structures and  logic
//Skill : Using if-else statements to make decisions based on conditions
//pseudo code : 
//1. Declare a variable to hold the user's age and assign it a value.
//2. Use an if-else statement to check if the user's age is greater than or equal to 18.
//3. If the condition is true, output a message indicating that the user is an adult.
//4. If the condition is false, output a message indicating that the user is a minor.       

//Module : Building Arrays
//Skill : Creating an arrays to store a list of items.

//pseudo code :
//1. Declare an empty array to hold a list of tasks.
//2. Use the push method to add several tasks to the array.
//3. Output the contents of the array to the console.       
let userAge = 30;if (userAge >= 18) {
    console.log("You are an adult.");
} else {    console.log("You are a minor.");
}
 let taskList = []; //Array initialization
 taskList.push("Buy groceries"); //Adding an item to the array
    taskList.push("walk the dog");
    taskList.push("Read a book");
console.log(taskList); // Expected Output: ["Buy groceries", "walk the dog", "Read a book"]  

    //Module : using Arrays
//Skill : Accessing and displaying elements from  an array 
//pseudo code : task array created previously,
//  access the first task in the list using its index and log first task to the console.

let firstTask = taskList[0]; // Array element access by index
console.log("Your first task is: " + firstTask); // Expected Output: "Your first task is:   Buy groceries"

//Module : Working with Loops
//Skill : Using a for loop to iterate through an array and display its contents
//pseudo code :
//1. Use a for loop to iterate through the task list array.
//2. Inside the loop, log each task to the console with a bullet point for better readability.

console.log("Your tasks for today:");
for (let i = 0; i < taskList.length; i++) {
    console.log("- " + taskList[i]); // Expected Output: List of tasks with bullet points
    // Output:
    // Your tasks for today:
    // - Buy groceries
    // - walk the dog
    // - Read a book    
}

//Module : Combining Concepts
//Skill : Using a loop to create personlized messages for each element in an array
//pseudo code :
//1. Declare an array of names.
//2. Use a for loop to iterate through the array of names.
//3. Inside the loop, concatenate a personalized greeting message for each name and log it to the console.  
let names = ["Sudhan", "Eben", "Alan"];
for (let j = 0; j < names.length; j++) {
    let personlizedGreeting = "Hello, " + names[j] + "!  Hope you're having a great day!"; // String concatenation within a loop
    console.log(personlizedGreeting); // Expected Output: Personalized greetings for each name

    // Output:
    // Hello, Sudhan! Hope you're having a great day!
    // Hello, Eben! Hope you're having a great day!
    // Hello, Alan! Hope you're having a great day!
}   
