import { users } from '../mocks/users-data.js'
import { saveJSONFile } from '../utils/common.js';
import { isEmptyString, isValidEmail, isValidPhone } from '../utils/validators.js';


// Obtener los elementos del formulario
const nameInput = document.getElementById('name');
const nameInputError = document.getElementById('name-error');
const phoneInput = document.getElementById('phone');
const phoneInputError = document.getElementById('phone-error');
const emailInput = document.getElementById('email');
const emailInputError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const passwordInputError = document.getElementById('password-error');
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordInputError = document.getElementById('confirm-password-error');
const signUpButton = document.getElementById('sign-up-button');

// Agregar un evento al botón
signUpButton.addEventListener('click', () => {
  // Obtener los valores de los campos de entrada
  let error = false;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  // Realizar las validaciones

  if (isEmptyString(name)) {
    nameInputError.innerText = 'Nombre Completo es requerido';
    nameInputError.classList.remove('invisible');
    error = true;
  } else {
    nameInputError.classList.add('invisible');
  }

  if (isEmptyString(phone)) {
    phoneInputError.innerText = 'Teléfono es requerido';
    phoneInputError.classList.remove('invisible');
    error = true;
  } else if (isValidPhone(phone)) {
    phoneInputError.innerText = 'Formato de teléfono invalido';
    phoneInputError.classList.remove('invisible');
    error = true;
  } else {
    phoneInputError.classList.add('invisible');
  }

  if (isEmptyString(email)) {
    emailInputError.innerText = 'Email es requerido';
    emailInputError.classList.remove('invisible');
    error = true;
  } else if (!isValidEmail(email)) {
    emailInputError.innerText = 'Formato de email invalido';
    emailInputError.classList.remove('invisible');
    error = true;
  } else {
    const existingEmail = users.find((u) => u.email === email);
    if (existingEmail) {
      error = true;
      emailInputError.innerText = 'El email ingresado ya se encuentra en uso';
      emailInputError.classList.remove('invisible');
    }
    emailInputError.classList.add('invisible');
  }

  if (isEmptyString(password)) {
    passwordInputError.innerText = 'Contraseña requerida';
    passwordInputError.classList.remove('invisible');
    error = true;
  } else {
    passwordInputError.classList.add('invisible');
  }

  if (isEmptyString(confirmPassword)) {
    confirmPasswordInputError.innerText = 'Confirmar Contraseña requerida';
    confirmPasswordInputError.classList.remove('invisible');
    error = true;
  } else {
    confirmPasswordInputError.classList.add('invisible');
  }

  if (confirmPassword !== password) {
    confirmPasswordInputError.innerText = 'Las contraseñas no coinciden';
    confirmPasswordInputError.classList.remove('invisible');
    error = true;
  } else {
    confirmPasswordInputError.classList.add('invisible');
  }


  if (!error) {
    const newUser = {
      id: Math.random() * new Date().getTime(),
      name,
      phone,
      email,
      password,
      creationDate: new Date().toISOString(),
      role: {
        id: 2,
        name: 'usuario'
      }
    };
    users.push(newUser);
    saveJSONFile('logged-user', JSON.stringify(newUser));
  }
  if (!error) {
    alert('Registro Exitoso!')
    window.location.href = '../index.html';
  }
});