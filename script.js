// Below are the variables that are needed for the program.
let integer = 0

// The script below will connect my button to a certain function.
document.getElementById('button1').addEventListener('click', posNeg)

// Now we need to write out what our function does.
function posNeg () {
  integer = document.getElementById('text1').value
  integer = parseInt(integer)
  // Next, we'll check to see if the integer is LESS than 0. We will use an if statement and an else statement, as this program should determine what is negative and what isn't, two factors.
  if (integer < 0) {
    document.getElementById('results').innerHTML = 'Your number is negative!'
  } else {
    document.getElementById('results').innerHTML = 'Your number is positive!'
  }
}
