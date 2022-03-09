const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 11) {
  console.log(chorus);
  repeat++
}
  console.log("Until the sun comes up!");
//--------
const chorus2 = "Let's dance!";
let repeat2 = 0;
while (repeat2 < 10) {
  if (repeat2 === 5) {
    console.log("*change key");
  }
  console.log(chorus);
  repeat2++;
}
console.log("Until the sun comes up!");
