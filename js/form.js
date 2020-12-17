'use strict';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const errorMessages = document.querySelectorAll('.error-message');

const inputAndTextarea = [...inputs, textarea];

const isEmpty = input => input.value === '';

const validateEmail = emailInput => {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(emailInput.value).toLowerCase());
};

const generateError = input => {
  if (isEmpty(input)) {
    input.classList.add('error');
    input.nextElementSibling.textContent = "Can't be empty";
  } else if (input.type === 'email' && !validateEmail(input)) {
    input.classList.add('error');
    input.nextElementSibling.textContent = 'Please use a valid email address';
  }
};

const removeError = input => {
  input.classList.remove('error');
  input.nextElementSibling.textContent = '';
};

form.addEventListener('submit', e => {
  inputAndTextarea.forEach(input => generateError(input));
  for (let i = 0; i < inputAndTextarea.length; i++) {
    if (inputAndTextarea[i].classList.contains('error')) {
      e.preventDefault();
      return;
    }
  }
});

inputAndTextarea.forEach(input => {
  input.addEventListener('focus', () => removeError(input));
});
