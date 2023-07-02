import { projects } from '../mocks/projects-data.js'
import { replaceAll, formatDate, filterObjects, readJSONFile } from '../utils/common.js'
import { isEmptyObject, isValidDate } from '../utils/validators.js'

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

  // Crear un elemento contenedor temporal para la tarjeta
  const templateElem = document.createElement('div');
  templateElem.innerHTML = cardHTML;

  // Eliminar el div con la clase "user"
  const userDiv = templateElem.querySelector('.user');
  if (userDiv) {
    userDiv.parentElement.removeChild(userDiv);
  }

  // Crear el botón de inscripción
  const inscriptionButton = document.createElement('button');
  inscriptionButton.classList.add('inscription-button');
  inscriptionButton.textContent = 'Inscribirse';
  inscriptionButton.addEventListener('click', (e) => {
    const loggedUser = readJSONFile('logged-user');
    if(loggedUser && !isEmptyObject(loggedUser)) {
      const cardElement = e.target.closest('.card');
      cardElement.classList.add('registered');
    } else {
      window.location.href = 'login.html';
    }
  });

  // Crear el botón de cancelar inscripción
  const cancelInscriptionButton = document.createElement('button');
  cancelInscriptionButton.classList.add('cancelar-inscripcion-button');
  cancelInscriptionButton.textContent = 'Cancelar Inscripción';
  cancelInscriptionButton.addEventListener('click', (e) => {
    const cardElement = e.target.closest('.card');
    cardElement.classList.remove('registered');
  });

  // Agregar los botones al footer de la tarjeta
  const cardFooter = templateElem.querySelector('.card-footer');
  if (cardFooter) {
    cardFooter.classList.add('centered');
    cardFooter.appendChild(inscriptionButton);
    cardFooter.appendChild(cancelInscriptionButton);
  }

  // Devolver el primer elemento hijo del contenedor temporal
  return templateElem.firstElementChild;
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

