/**
 * @param {string} s
 * @return {boolean}
 */

// Logic:
// Declare a character stack S
// Traverse the string expression
// if the current character is an opening bracket ( or { or [, then push to stack
// if the current character is a closing bracket ) or } or ], then pop from stack and if the popped character is the matching starting bracket then fine
// At the end of the traversal, if there is some opening bracket left in stack then the string is “not balanced”. Hence, return false.

 const isValid = str => {
   if (str.length <= 1) return false;

   let matchingOpenBracket, char
   let stack = [];

   let openingBrackets = ['[', '(', '{'];
   let closingBrackets = [']', ')', '}'];

   for (let i = 0; i < str.length; i++) {
     char = str[i];

     if (closingBrackets.indexOf(char) > -1) {
       matchingOpenBracket = openingBrackets[closingBrackets.indexOf(char)]
       if (stack.length == 0 || (stack.pop() != matchingOpenBracket)) {
         return false;
       }
     } else {
       stack.push(char);
     }
   }

   return (stack.length == 0);
 }
