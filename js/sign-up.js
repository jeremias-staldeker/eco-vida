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

/**
 * Verifica si el valor proporcionado es un string vacío.
 * @param {string} value - Valor a verificar.
 * @returns {boolean} - True si es un string vacío, false en caso contrario.
 */
const isEmptyString = (value) => {
  try {
    return value.trim() === '';
  } catch (error) {
    return false;
  }
};


/**
 * Verifica si el valor proporcionado es un email válido.
 * @param {string} value - Valor a verificar.
 * @returns {boolean} - True si es un email válido, false en caso contrario.
 */
const isValidEmail = (value) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  } catch (error) {
    return false;
  }
};

/**
 * Verifica si el valor proporcionado es un número de teléfono válido.
 * @param {string} value - Valor a verificar.
 * @returns {boolean} - True si es un número de teléfono válido, false en caso contrario.
 */
const isValidPhone = (value) => {
  try {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(value);
  } catch (error) {
    return false;
  }
};

const users = [
  {
    "id": "1",
    "name": "Administrador",
    "phone": "123456789",
    "email": "admin@example.com",
    "password": "admin123",
    "creationDate": "2023-06-30T12:00:00Z",
    "role": {
      "id": 1,
      "name": "admin"
    }
  },
  {
    "id": "2",
    "name": "Pablo Fernandez",
    "phone": "987654321",
    "email": "user@example.com",
    "password": "user123",
    "creationDate": "2023-06-30T12:00:00Z",
    "role": {
      "id": 2,
      "name": "usuario"
    }
  }
];

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
  }

  if (isEmptyString(phone)) {
    phoneInputError.innerText = 'Teléfono es requerido';
    phoneInputError.classList.remove('invisible');
    error = true;
  } else if (isValidPhone(phone)) {
    phoneInputError.innerText = 'Formato de teléfono invalido';
    phoneInputError.classList.remove('invisible');
    error = true;
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
  }

  if (isEmptyString(password)) {
    passwordInputError.innerText = 'Contraseña requerida';
    passwordInputError.classList.remove('invisible');
    error = true;
  }

  if (isEmptyString(confirmPassword)) {
    confirmPasswordInputError.innerText = 'Confirmar Contraseña requerida';
    confirmPasswordInputError.classList.remove('invisible');
    error = true;
  }

  if (confirmPassword !== password) {
    confirmPasswordInputError.innerText = 'Las contraseñas no coinciden';
    confirmPasswordInputError.classList.remove('invisible');
    error = true;
  }


  if (!error) {
    nameInputError.classList.add('invisible');
    phoneInputError.classList.add('invisible');
    emailInputError.classList.add('invisible');
    passwordInputError.classList.add('invisible');
    confirmPasswordInputError.classList.add('invisible');

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
    localStorage.setItem('logged-user', JSON.stringify(newUser));
  }
  if (!error) window.location.href = '../index.html';
});