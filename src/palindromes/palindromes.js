const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let middle = Math.floor(sentence.length / 2);
  const compareStack = new Stack();
  for (let char = 0; char < middle; char++) {
    compareStack.push(sentence[char]);
  }
  middle += sentence.length % 2 === 0 ? 0 : 1;
  for (let char = middle; char < sentence.length; char++) {
    const popped = compareStack.pop();
    if (sentence[char] !== popped) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;
