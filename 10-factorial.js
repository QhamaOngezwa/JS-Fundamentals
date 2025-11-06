// factorial(0) = 1                ← base case
// factorial(n) = n * factorial(n - 1)   ← recursive case
let number = parseInt(process.argv[2]);
function factorial(x) {
  if (isNaN(x)) {
    return 1;
  }
  if (x === 0 || x === 1) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(number));
