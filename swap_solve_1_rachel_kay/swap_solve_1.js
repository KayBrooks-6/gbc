for (let i = 1; i <= 10; i++) {
  let checkValue = i ^ 2;
  console.log(`Checking number: ${i}`);
  if (i === 5) {
    console.log("Target reached. Ending the loop early.");
    break;
  }
}
