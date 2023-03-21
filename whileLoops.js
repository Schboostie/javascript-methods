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

We then check if num is even using the modulus operator % and the if statement. 

If num is even, we use the continue statement to skip to the next iteration of the loop, ignoring the remaining code inside the loop.

If num is odd, we add its value to sum using the += operator. We then check if the value of sum is greater than 20 using another if statement. 

If sum is greater than 20, we use the break statement to exit the loop immediately.

Finally, we print out the value of sum using console.log(). 

In this case, the output is 16, which is the sum of the odd numbers between 1 and 9 inclusive that do not cause the sum to exceed 20.
*/




