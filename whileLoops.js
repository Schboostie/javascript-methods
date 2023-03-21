//Easy example

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}



//next example

let num = 0;
let sum = 0;

while (num < 10) {
  num++;

  if (num % 2 === 0) {
    continue;
  }

  sum += num;

  if (sum > 20) {
    break;
  }
}

console.log(sum); // Output: 16
/*In the above example, we start by defining two variables: num is set to 0, and sum is set to 0. 

We then use a while loop to repeatedly execute a block of code as long as the value of num is less than 10.

Inside the loop, we first increment the value of num using the ++ operator.


//using a while loop to find a sum

let i = 0;
let sum = 0;
while (i < 5 || sum < 20) {
  console.log(`i is ${i}, sum is ${sum}`);
  sum += i;
  i++;
}
console.log(`Final value of sum is ${sum}`);




We then check if num is even using the modulus operator % and the if statement. 

If num is even, we use the continue statement to skip to the next iteration of the loop, ignoring the remaining code inside the loop.

If num is odd, we add its value to sum using the += operator. We then check if the value of sum is greater than 20 using another if statement. 

If sum is greater than 20, we use the break statement to exit the loop immediately.

Finally, we print out the value of sum using console.log(). 

In this case, the output is 16, which is the sum of the odd numbers between 1 and 9 inclusive that do not cause the sum to exceed 20.
*/


const secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let guess = parseInt(prompt("Guess a number between 1 and 100")); // Prompt the user to guess the number

let attempts = 1;
while (guess !== secretNumber && attempts < 10) {
  if (guess > secretNumber) {
    guess = parseInt(prompt("Too high, try again"));
  } else {
    guess = parseInt(prompt("Too low, try again"));
  }
  attempts++;
}

if (guess === secretNumber) {
  console.log("Congratulations, you guessed the number in " + attempts + " attempts!");
} else {
  console.log("Sorry, you didn't guess the number. The secret number was " + secretNumber);
}


/*In the above example, we first generate a random number between 1 and 100 using the Math.random() and Math.floor() functions.

We then prompt the user to guess the number using the prompt() function and convert the user's input to an integer using the parseInt() function.

Next, we use a while loop to repeatedly prompt the user to guess the number until they either guess the correct number or they have made 10 attempts.

Inside the loop, we check if the user's guess is too high or too low compared to the secret number, and we prompt the user to guess again accordingly. 

We also keep track of the number of attempts using the attempts variable.

After the while loop finishes executing, we use an if statement to check if the user has guessed the correct number or not. 

If they have, we print out a congratulatory message that includes the number of attempts it took the user to guess the number.

If they haven't guessed the correct number, we print out a message that reveals the secret number.*/


let i = 0;
let sum = 0;
while (i < 10) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum)


/*In the above example, we use a while loop to iterate over the numbers from 0 to 9. Inside the loop, we use an if statement to check if the current number (i) is even using the modulo operator (%). If i is even, we add it to a variable called sum using the += operator.

After each iteration of the loop, we increment the value of i by 1 using the ++ operator. This process continues until the condition i < 10 evaluates to false.

Finally, we print out the value of sum using console.log(). In this example, the while loop computes the sum of all even numbers between 0 and 9 (inclusive), which is 20.


*/





