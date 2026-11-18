# Task 2 — Calculator

## What this project does
This is a basic calculator that performs addition, subtraction, multiplication and division. It also has Clear, Backspace, decimal input and keyboard support.

## Files
- `index.html` — calculator display and buttons.
- `style.css` — calculator layout and button styling.
- `script.js` — reads button input and calculates the result.

## Main JavaScript ideas
1. `expression` stores the calculation as text.
2. `dataset.value` reads the value assigned to each button.
3. `addEventListener()` detects button and keyboard input.
4. `slice(0, -1)` removes the last character for Backspace.
5. `calculate()` checks the expression and displays the result.

## How to run
Open `index.html` in a browser.

## Simple explanation to give the interviewer
"I built a simple calculator with HTML, CSS and JavaScript. HTML creates the display and buttons. CSS arranges the buttons in a grid. JavaScript stores the entered expression and performs the calculation. I also added clear, backspace and keyboard support."

## Important note about this beginner version
The calculator uses JavaScript's `Function()` to evaluate the arithmetic expression after checking that it contains only digits, decimal points, brackets, spaces and basic arithmetic operators. This is suitable as a small learning demo, not as a production calculator. A production version should use a dedicated expression parser.

## Viva / interview questions and answers

**Q1. Which technologies did you use?**  
I used HTML for structure, CSS for design and JavaScript for calculator logic.

**Q2. Which operations does it perform?**  
Addition, subtraction, multiplication and division.

**Q3. What is a variable?**  
A variable is a named place used to store a value. Here, `expression` stores the calculation.

**Q4. What is an event listener?**  
It waits for an event, such as a button click or key press, and then runs a function.

**Q5. What is `dataset.value`?**  
It reads a custom `data-value` attribute from an HTML element.

**Q6. How does the Clear button work?**  
It sets the expression and display to an empty value.

**Q7. How does Backspace work?**  
It uses `slice(0, -1)` to remove the last character.

**Q8. What is the purpose of `try...catch`?**  
It handles errors so an invalid calculation does not stop the whole script.

**Q9. What does `Number.isFinite()` check?**  
It checks that the result is a normal finite number, not Infinity or NaN.

**Q10. How did you add keyboard support?**  
I used the `keydown` event and checked which key the user pressed.

**Q11. What is CSS Grid?**  
CSS Grid is a layout system that arranges elements in rows and columns.

**Q12. What would you improve in a future version?**  
I would add a safer expression parser, calculation history and better input validation.
