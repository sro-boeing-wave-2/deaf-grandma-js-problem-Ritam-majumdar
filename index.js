/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
print('What do you want to say to Grandma!!');
let countbye = 0;
while (countbye < 2) {
  const userinput = prompt();
  if (userinput === 'BYE') {
    countbye += 1;
    print('NO, NOT SINCE '.concat(getRandomValue(1930, 1950)));
  } else if (isUppercase(userinput)) {
    print('NO, NOT SINCE '.concat(getRandomValue(1930, 1950)));
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
