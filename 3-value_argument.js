const countArgs = process.argv.length - 2;
if (countArgs === 0) {
  console.log("No argument");
} else {
  console.log(process.argv[2]);
}
