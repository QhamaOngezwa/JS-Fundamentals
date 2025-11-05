// if (isNaN(process.argv[2])) {
//   console.log("Not a number");
// } else {
//   let number = parseInt(process.argv[2]);
//   while (number > 0) {
//     console.log("C is fun");
//   }
//   number--;
// }
let number = process.argv[2];
if (isNaN(number) || number <= 0) {
  console.log("Missing number of occurrences");
} else {
  console.log("C is fun\n".repeat(number).trim());
}
