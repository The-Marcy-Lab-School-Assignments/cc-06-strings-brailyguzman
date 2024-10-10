//write your code here

const reverseString = (str) => {
  const indexLength = str.length - 1;
  let reversed = '';

  for (let i = indexLength; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

const reverseZigZagString = (str) => {
  const indexLength = str.length - 1;
  let reversed = '';

  for (let i = indexLength; i >= 0; i -= 2) {
    reversed += str[i].toLowerCase() + str[i - 1].toUpperCase();
  }

  return reversed;
};

// TESTS
// console.log(reverseString('Braily')); // Passed
// console.log(reverseZigZagString('Braily')); // Passed
