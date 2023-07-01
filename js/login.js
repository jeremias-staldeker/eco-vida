import { users } from '../mocks/users-data.js'
import { saveJSONFile } from '../utils/common.js';
import { isEmptyString, isValidEmail } from '../utils/validators.js';

// Obtener los elementos del formulario
const errorUser = document.getElementById('user-error');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailInputError = document.getElementById('email-error');
const passwordInputError = document.getElementById('password-error');
const loginButton = document.getElementById('login-button');

// Agregar un evento al botón de inicio de sesión
loginButton.addEventListener('click', () => {
  errorUser.classList.add('invisible');

  // Obtener los valores de los campos de entrada
  let error = false;
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  // Realizar las validaciones
  if (isEmptyString(email)) {
    emailInputError.innerText = 'Email es requerido';
    emailInputError.classList.remove('invisible');
    error = true;
  } else if (!isValidEmail(email)) {
    emailInputError.classList.remove('invisible');
    emailInputError.innerText = 'Formato de email invalido';
    error = true;
  } else {
    emailInputError.classList.add('invisible');
  }

  if (isEmptyString(password)) {
    passwordInputError.innerText = 'Contraseña requerida';
    passwordInputError.classList.remove('invisible');
    error = true;
  } else {
    passwordInputError.classList.add('invisible');
  }


  if (!error) {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      errorUser.innerHTML = "Email o contraseña incorrecta"
      errorUser.classList.remove('invisible');
      error = true;
    } else {
      saveJSONFile('logged-user', user);
    }
  }

  // Si se superan las validaciones, se puede proceder con el inicio de sesión
  // Aquí puedes agregar tu lógica para el inicio de sesión, como enviar los datos al servidor, etc.

  // Ejemplo de redirección a una página después del inicio de sesión exitoso
  if (!error) window.location.href = '../index.html';
});