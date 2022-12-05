//gurwaljin
let n = 5;
let output = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (col <= row) {
      output += col + " ";
    }
  }
  output += "\n";
  debugger;
}
console.log(output);

//gurwaljin

for (let row = 1; row >= n; row--) {
  for (let col = 1; col >= n; col--) {
    if (col >= row) {
      output += col + " ";
    }
  }
  output += "\n";
  debugger;
}
console.log(output);
