const Stack = require("../lib/stack");

const match = (expression) => {
  const stack = new Stack();
  for (let char = 0; char < expression.length; char++) {
    if (expression[char] === "(") {
      stack.push("(");
    } else {
      if (expression[char] === ")") {
        if (stack.top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.top;
};

module.exports = match;
