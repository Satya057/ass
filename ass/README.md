# L0 - Understanding Global and Function Execution Context

This project demonstrates the difference between the global execution context and a function execution context in JavaScript.

## Problem Statement

You are tasked with creating two functions, one in the global execution context and another inside a function context. In this problem, you need to:

1.  Define a global variable `age`.
2.  Create a function `displayAge` that prints the value of the `age` variable.
3.  Call the `displayAge` function to show how the global execution context works.
4.  Additionally, create another function `changeAge` that updates the global `age` variable within the function, and print the value of `age` after updating it.

## Files

-   `index.html`: The main HTML file to be opened in the browser.
-   `index.js`: The JavaScript file containing the logic.

## How to Run

1.  Open the `index.html` file in your web browser.
2.  Open the browser's developer console (usually by pressing F12 or Ctrl+Shift+I / Cmd+Option+I).
3.  You will see the output of the JavaScript code in the console.

## Expected Output in Console

```
--- Demonstrating Execution Contexts ---
The current age is: 25
Age has been updated to: 30
The current age is: 30
--- End of Demonstration ---
``` 