/**
 * Verifica si el valor proporcionado es un número válido.
 * @param {any} value - Valor a verificar.
 * @returns {boolean} - True si es un número válido, false en caso contrario.
 */
const isValidNumber = (value) => {
    try {
        const number = Number(value);
        return !isNaN(number);
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
 * Verifica si el valor proporcionado es un objeto vacío.
 * @param {object} value - Valor a verificar.
 * @returns {boolean} - True si es un objeto vacío, false en caso contrario.
 */
const isEmptyObject = (value) => {
    try {
        return Object.keys(value).length === 0;
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

/**
* Verifica si el valor proporcionado es una fecha válida.
* @param {string} value - Valor a verificar.
* @returns {boolean} - True si es una fecha válida, false en caso contrario.
*/
const isValidDate = (value) => {
    try {
        const date = new Date(value);
        return !isNaN(date);
    } catch (error) {
        return false;
    }
};

/**
* Verifica si el valor proporcionado cumple con un mínimo de caracteres.
* @param {string} value - Valor a verificar.
* @param {number} minLength - Longitud mínima requerida.
* @returns {boolean} - True si cumple con la longitud mínima, false en caso contrario.
*/
const hasMinLength = (value, minLength) => {
    try {
        return value.length >= minLength;
    } catch (error) {
        return false;
    }
};

/**
 * Verifica si el valor proporcionado cumple con un máximo de caracteres.
 * @param {string} value - Valor a verificar.
 * @param {number} maxLength - Longitud máxima permitida.
 * @returns {boolean} - True si cumple con la longitud máxima, false en caso contrario.
 */
const hasMaxLength = (value, maxLength) => {
    try {
        return value.length <= maxLength;
    } catch (error) {
        return false;
    }
};



module.exports = {
    isValidNumber,
    isValidEmail,
    isEmptyString,
    isEmptyObject,
    isValidPhone,
    isValidDate,
    hasMinLength,
    hasMaxLength
};
