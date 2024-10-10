# Strung Along
## Overview
Strung Along is a game where players are challenged to enter strings that satisfy progressively more complex rules. The game checks if the player's input meets the current level's requirements (e.g., being a palindrome, having a minimum length, or containing a number). As players succeed, they move up to the next level, which introduces a new rule. The game is designed to help learners practice modular JavaScript by splitting rules into separate files using the import and export statements.

This project is a practical exercise in organizing code into JavaScript modules, allowing for cleaner, more scalable code that can easily be extended by adding new rules and levels.

## Features
Levels that progressively add new validation rules for strings.
Modular code design using JavaScript import and export.
Easy to extend by adding new rules in separate modules.
A simple, user-friendly web interface with instant feedback on user input.
How the Game Works
**Level 1:** Enter a string that is a palindrome (reads the same forward and backward).
**Level 2:** The string must be a palindrome and have a minimum length of 5 characters.
**Level 3:** The string must be a palindrome, have at least 5 characters, and contain a number.
**Further Levels:** You can add more rules as additional levels by creating new rule modules.
## Getting Started
### Prerequisites
You will need a basic understanding of JavaScript, specifically how to use ES6 modules (import and export), as well as how HTML, CSS, and JavaScript work together in a web environment.

### Folder Structure
```
/string-master
    ├── index.html          // The main HTML file
    ├── style.css           // The CSS file for styling
    ├── main.js             // Main JavaScript file for game logic
    └── rules               // Folder containing modular rules
        ├── palindrome.js   // Palindrome rule
        ├── minLength.js    // Minimum length rule
        └── containsNumber.js // Contains number rule
```
### Installation
Clone the repository:

```
git clone https://github.com/your-username/string-master.git
```
Navigate into the project folder:

```
cd string-master
```
Open index.html in your web browser:

You can simply double-click on the index.html file or open it using a live server tool like the VSCode Live Server extension.
## Code Structure and Modular Design
The game is designed to modularize rules using the import and export features of ES6 JavaScript modules. Each rule is isolated in its own file, making it easy to add, modify, or remove rules without affecting other parts of the code.

### Key Files:
**main.js:**

This is the main game logic file. It imports various rules from the rules folder and applies them level by level as the user progresses.



**Example of importing a rule:**

```
import { isPalindrome } from './rules/palindrome.js';
```
**rules/:**

Contains separate files for each rule, exported as functions to be used in the main game logic. This modular approach allows each rule to be maintained independently of others.

**Example of a rule file (palindrome.js):**

```
export function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
```
## Extending the Game
### To add new levels or rules:

Create a new rule module in the rules/ folder, such as allLowercase.js:

```
export function allLowercase(str) {
    return str === str.toLowerCase();
}
```
Import the new rule into main.js and add it to the game logic at the appropriate level:

```
import { allLowercase } from './rules/allLowercase.js';

if (level === 4) {
    if (isPalindrome(str) && minLength(str, 5) && containsNumber(str) && allLowercase(str)) {
        level++;
        return "Level 4 passed! Your string is a palindrome, has at least 5 characters, contains a number, and is all lowercase.";
    } else {
        return "Level 4 failed! Make sure your string meets all the criteria.";
    }
}
```

## Why Modularize?
Using import and export allows the game's rules to be divided into separate modules, which offers several advantages:

**Maintainability:** Each rule can be developed, tested, and debugged separately, reducing complexity.
**Reusability:** Rules can easily be reused in other parts of the game or in other projects.
**Scalability:** The game can be expanded by simply adding new rule modules without altering the existing codebase.

By using ES6 modules, we practice good coding habits that scale well in larger projects. Each function or rule can be isolated in its own file, reducing the chance of conflicts and making the game more modular and extendable.

## Contributing
Feel free to fork this repository and contribute by:

Adding new validation rules or levels.
Improving the user interface.
Extending the functionality (e.g., adding dynamic difficulty levels or more game features).
## License
This project is licensed under the MIT License. See the LICENSE file for more details.