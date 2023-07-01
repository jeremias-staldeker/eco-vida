import { isEmptyString, isValidEmail, isValidPhone } from '../utils/validators.js';

// Obtener los elementos del formulario
const nameInput = document.getElementById('name');
const nameInputError = document.getElementById('name-error');
const phoneInput = document.getElementById('phone');
const phoneInputError = document.getElementById('phone-error');
const emailInput = document.getElementById('email');
const emailInputError = document.getElementById('email-error');
const messageInput = document.getElementById('message');
const messageInputError = document.getElementById('message-error');
const sendMessage = document.getElementById('send-message');

// Agregar un evento al botón
sendMessage.addEventListener('click', () => {
  // Obtener los valores de los campos de entrada
  let error = false;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();
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
    emailInputError.classList.add('invisible');
  }

  if (isEmptyString(message)) {
    messageInputError.innerText = 'Mensaje requerido';
    messageInputError.classList.remove('invisible');
    error = true;
  } else {
    messageInputError.classList.add('invisible');
  }

  if (!error) {
    nameInputError.classList.add('invisible');
    phoneInputError.classList.add('invisible');
    emailInputError.classList.add('invisible');
    messageInputError.classList.add('invisible');

    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Mensaje Enviado con Exito');
  }
});