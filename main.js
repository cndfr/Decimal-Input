let input = document.querySelector('.input');
let display = document.querySelector('.display');

display.value = '0.00';
display.addEventListener('focus', (event) => {
  input.focus();
  // display.classList.add('special-focus');
});

// input.addEventListener('blur', (event) => {
//   display.classList.remove('special-focus');
// });

input.oninput = function() {
  let updInput = '';
  for (let i = 0; i < input.value.length; i++) {
    if (input.value % 1 === 0 || i <= input.value.indexOf('.') + 2) {
      updInput += input.value[i];
    }
  }
  input.value = updInput;
  display.value = Number(input.value).toFixed(2);
}
