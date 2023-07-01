import { news } from '../mocks/news-data.js'
import { replaceAll, formatDate } from '../utils/common.js'
import { isValidDate } from '../utils/validators.js'
/**
 * Genera un elemento de tarjeta HTML a partir de una plantilla y datos proporcionados.
 * @param {string} template - La plantilla de la tarjeta en formato HTML.
 * @param {Object} data - Los datos que se utilizarán para llenar la plantilla de la tarjeta.
 * @returns {HTMLElement} El elemento de tarjeta HTML generado.
 */
const generateCardElement = (template, data) => {
  let cardHTML = template;

  // Reemplazar los marcadores de posición con los datos correspondientes
  for (const key in data) {
    const placeholder = `{{${key}}}`;
    let value = data[key];
    if (isValidDate(value)) {
      value = formatDate(new Date(value));
    }
    cardHTML = replaceAll(cardHTML, placeholder, value);
  }

  // Crear un elemento contenedor temporal para la tarjeta
  const templateElem = document.createElement('div');
  templateElem.innerHTML = cardHTML;

  return templateElem;
};

/**
 * Carga la plantilla de tarjeta y genera las tarjetas con los datos proporcionados.
 * Inserta las tarjetas generadas en el contenedor de tarjetas.
 */
const loadCardTemplate = async () => {
  // Cargar el contenido del archivo card-template.html
  const response = await fetch('../templates/card-template.html');
  const templateHtml = await response.text();

  const projectContainer = document.getElementById('project-container');

  // Generar y agregar las tarjetas para cada dato en la lista de noticias
  news.forEach((cardData) => {
    const cardElement = generateCardElement(templateHtml, cardData);
    projectContainer.appendChild(cardElement);
  });
};

// Cargar la plantilla y generar las tarjetas
loadCardTemplate();
