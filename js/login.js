// Obtener los elementos del formulario
const errorUser = document.getElementById('user-error');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailInputError = document.getElementById('email-error');
const passwordInputError = document.getElementById('password-error');
const loginButton = document.getElementById('login');

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
]

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
  }

  if (isEmptyString(password)) {
    passwordInputError.innerText = 'Contraseña requerida';
    passwordInputError.classList.remove('invisible');
    error = true;
  }


  if (!error) {
    emailInputError.classList.add('invisible');
    passwordInputError.classList.add('invisible');
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      errorUser.innerHTML = "Email o contraseña incorrecta"
      errorUser.classList.remove('invisible');
      error = true;
    } else {
      localStorage.setItem('logged-user', JSON.stringify(user));
    }
  }

  // Si se superan las validaciones, se puede proceder con el inicio de sesión
  // Aquí puedes agregar tu lógica para el inicio de sesión, como enviar los datos al servidor, etc.

  // Ejemplo de redirección a una página después del inicio de sesión exitoso
  if (!error) window.location.href = '../index.html';
});