process.stdout.write('hello from spinner2.js... \rheyyy\n');
let spinnerAnimated = ["|", "/", "-", "\\", "\n"]
let delay = 0;
for (let char of spinnerAnimated) {
setTimeout(() => {
  process.stdout.write(char + '\r');
}, delay);
delay += 200;
};