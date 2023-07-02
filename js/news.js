import { news } from '../mocks/news-data.js'
import { replaceAll, formatDate, filterObjects } from '../utils/common.js'
import { isValidDate } from '../utils/validators.js'

const newsSearch = document.getElementById('news-search');
const cardContainer = document.getElementById('news-container')

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

  return templateElem.firstElementChild;;
};

/**
 * Carga la plantilla de tarjeta y genera las tarjetas con los datos proporcionados.
 * Reemplaza todas las tarjetas existentes en el contenedor de tarjetas.
 * @param {Array} [news=[]] - Lista de noticias para generar las tarjetas.
 */
 const loadCardTemplate = async (news = []) => {
  // Cargar el contenido del archivo card-template.html
  const response = await fetch('../templates/card-template.html');
  const templateHtml = await response.text();

  // Eliminar los hijos existentes del contenedor de tarjetas
  cardContainer.innerHTML = '';

  // Generar y agregar las tarjetas para cada dato en la lista de noticias
  news.forEach((cardData) => {
    const cardElement = generateCardElement(templateHtml, cardData);
    cardContainer.appendChild(cardElement);
  });
};

// Cargar la plantilla y generar las tarjetas
loadCardTemplate(news);

newsSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  const filteredNews = filterObjects(news, criteria, ['id', 'title', 'description', 'author']);
  loadCardTemplate(filteredNews);
});

