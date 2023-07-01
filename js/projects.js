import { projects } from '../mocks/projects-data.js'
import { replaceAll, formatDate, filterObjects } from '../utils/common.js'
import { isValidDate } from '../utils/validators.js'

const projectsSearch = document.getElementById('projects-search');
const cardContainer = document.getElementById('project-container');

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

  const templateElem = document.createElement('div');
  templateElem.innerHTML = cardHTML;

  const userDiv = templateElem.querySelector('.user');
  if (userDiv) {
    userDiv.parentElement.removeChild(userDiv);
  }

  const inscriptionButton = document.createElement('div');
  inscriptionButton.innerHTML = '<button class="inscription-button">Inscribirse</button>';

  const cardFooter = templateElem.querySelector('.card-footer');
  if (cardFooter) {
    cardFooter.classList.add('centered');
    cardFooter.appendChild(inscriptionButton);
  }

  return templateElem;
};


/**
 * Carga la plantilla de tarjeta y genera las tarjetas con los datos proporcionados.
 * Reemplaza todas las tarjetas existentes en el contenedor de tarjetas.
 * @param {Array} [projects=[]] - Lista de proyectos para generar las tarjetas.
 */
const loadCardTemplate = async (projects = []) => {
  // Cargar el contenido del archivo card-template.html
  const response = await fetch('../templates/card-template.html');
  const templateHtml = await response.text();

  // Eliminar los hijos existentes del contenedor de tarjetas
  cardContainer.innerHTML = '';

  // Generar y agregar las tarjetas para cada dato en la lista de noticias
  projects.forEach((cardData) => {
    const cardElement = generateCardElement(templateHtml, cardData);
    cardContainer.appendChild(cardElement);
  });
};

// Cargar la plantilla y generar las tarjetas
loadCardTemplate(projects);

projectsSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  const filteredProjects = filterObjects(projects, criteria, ['id', 'title', 'description']);
  loadCardTemplate(filteredProjects);
});

