// Task 1: Variables and Data Types

// Declare a variable to store the employee's name
let employeeName = "John Doe";

// Declare a constant to store the employee's ID
const employeeID = 12345;

// Declare a variable to indicate if the employee is active
var isActive = true;

// Log the values and types to the console
console.log("Employee Name: " + employeeName);
console.log("Type of employeeName: " + typeof employeeName);

console.log("Employee ID: " + employeeID);
console.log("Type of employeeID: " + typeof employeeID);

console.log("Is Active: " + isActive);
console.log("Type of isActive: " + typeof isActive);


// Task 2: Product Inventory Management

// Step 1: Create an array of products
let products = ['Laptop', 'Smartphone', 'Headphones'];

// Step 2: Create an object for product details
const productDetails = {
    name: 'Laptop',
    price: 999.99,
    inStock: true
};

// Step 3: Log the array and the object to the console
console.log(products);
console.log(productDetails);

// Task 3: Financial Calculations

// Step 1: Declare a variable for account balance
let accountBalance = 1000; // Initial balance

// Step 2: Use assignment operators for various transactions

// Add a deposit of $500
accountBalance += 500;
console.log('After deposit, balance is: $' + accountBalance);

// Subtract a withdrawal of $200
accountBalance -= 200;
console.log('After withdrawal, balance is: $' + accountBalance);

// Multiply the balance by 1.05 to add 5% interest
accountBalance *= 1.05;
console.log('After adding interest, balance is: $' + accountBalance);

// Divide the balance by 2 for some reason (e.g., splitting)
accountBalance /= 2;
console.log('After splitting, balance is: $' + accountBalance);

// Apply modulus operation to get the remainder when divided by 300
accountBalance %= 300;
console.log('Remainder when balance is divided by 300: $' + accountBalance);

// Task 4: Employee Performance Evaluation

// Step 1: Declare variables for employee scores
let employeeScore1 = 85;
let employeeScore2 = 90;

// Step 2: Use comparison operators to compare the scores and log the results

// Is employeeScore1 greater than employeeScore2?
console.log('employeeScore1 > employeeScore2: ', employeeScore1 > employeeScore2);

// Is employeeScore1 less than employeeScore2?
console.log('employeeScore1 < employeeScore2: ', employeeScore1 < employeeScore2);

// Is employeeScore1 greater than or equal to employeeScore2?
console.log('employeeScore1 >= employeeScore2: ', employeeScore1 >= employeeScore2);

// Is employeeScore1 less than or equal to employeeScore2?
console.log('employeeScore1 <= employeeScore2: ', employeeScore1 <= employeeScore2);

// Are employeeScore1 and employeeScore2 equal?
console.log('employeeScore1 === employeeScore2: ', employeeScore1 === employeeScore2);

// Are employeeScore1 and employeeScore2 not equal?
console.log('employeeScore1 !== employeeScore2: ', employeeScore1 !== employeeScore2);





// Task 5: Access Control System

// Step 1: Declare variables for access control
let hasKeyCard = true;
let hasPermission = false;

// Step 2: Combine these variables using logical operators

// Can access if the user has both the key card and permission
let canAccessBoth = hasKeyCard && hasPermission;
console.log('Can access with both key card and permission: ', canAccessBoth);

// Can access if the user has either the key card or permission
let canAccessEither = hasKeyCard || hasPermission;
console.log('Can access with either key card or permission: ', canAccessEither);

// Step 3: Use the ! operator to reverse a boolean value

// Check what happens if the user does NOT have a key card
let noKeyCard = !hasKeyCard;
console.log('User does NOT have a key card: ', noKeyCard);

// Check what happens if the user does NOT have permission
let noPermission = !hasPermission;
console.log('User does NOT have permission: ', noPermission);





