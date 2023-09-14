// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// 1.Automatically
// 2.Using var
// 3.Using let
// 4.Using const


state = "Bihar"           //This is Automatically decleared variable 
                          //[Note: This is not practice use varible]  



let UserName = "Vivek"
UserName = "Kumar"

// The let keyword was introduced in ES6 (2015)
// Variables defined with let cannot be Redeclared
// Variables defined with let must be Declared before use
// Variables defined with let have Block Scope {}
// We can change the value of let variable 
   

const AccountID = 2105

// The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// A const variable cannot be reassigned or its immutable
// Example
const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error


// const variables must be assigned a value when they are declared
// Correct
const KI = 3.14159265359;
// Incorrect
// const kI;
// PI = 3.14159265359;

// Always declare a variable with const when you know that the value should not be changed.




var accountPassword = "29302"   // Var is generally not in used because its not suuport scope {} 


console.log([UserName,AccountID,state,accountPassword,PI,KI])
console.table([UserName,AccountID,state,accountPassword,PI,KI])






