// While Loop Debugging code of itsmoon003@github

let text = "";
let i = 0;
while (i < 5) {
  if (i == 3) {
    i++;
    continue;
  } else {
    text += i + "\n";
    i++;
  }
}
console.log(text);
