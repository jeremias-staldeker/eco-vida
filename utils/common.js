/**
 * Lee y devuelve el contenido de un archivo JSON almacenado en el almacenamiento local del navegador.
 * @param {string} key - Clave del objeto JSON en el almacenamiento local.
 * @returns {Object} Contenido del archivo JSON.
 */
export const readJSONFile = (key) => {
  const content = localStorage.getItem(key);
  return JSON.parse(content);
};

/**
 * Guarda un objeto como contenido de un archivo JSON en el almacenamiento local del navegador.
 * @param {string} key - Clave del objeto JSON en el almacenamiento local.
 * @param {Object} data - Objeto a guardar en el archivo JSON.
 */
export const saveJSONFile = (key, data) => {
  const content = JSON.stringify(data, null, 2);
  localStorage.setItem(key, content);
};

/**
 * Inserta un nuevo objeto en un archivo JSON almacenado en el almacenamiento local del navegador.
 * @param {string} key - Clave del objeto JSON en el almacenamiento local.
 * @param {Object} newObject - Nuevo objeto a insertar.
 */
export const insertObject = (key, newObject) => {
  const data = readJSONFile(key) || [];
  data.push(newObject);
  saveJSONFile(key, data);
};

/**
 * Actualiza un objeto existente en un archivo JSON almacenado en el almacenamiento local del navegador.
 * @param {string} key - Clave del objeto JSON en el almacenamiento local.
 * @param {number} objectId - ID del objeto a actualizar.
 * @param {Object} updatedObject - Objeto actualizado.
 */
export const updateObject = (key, objectId, updatedObject) => {
  const data = readJSONFile(key) || [];
  const index = data.findIndex(obj => obj.id === objectId);
  if (index !== -1) {
    data[index] = updatedObject;
    saveJSONFile(key, data);
  }
};


/**
 * Elimina un objeto de un archivo JSON almacenado en el almacenamiento local del navegador según su ID.
 * @param {string} key - Clave del objeto JSON en el almacenamiento local.
 * @param {number|string} objectId - ID del objeto a eliminar.
 */
export const deleteObject = (key, objectId) => {
  const data = readJSONFile(key) || [];
  const index = data.findIndex(obj => obj.id === objectId);
  if (index !== -1) {
    data.splice(index, 1);
    saveJSONFile(key, data);
  }
};

/**
 * Capitaliza la primera letra de una cadena.
 * @param {string} str - La cadena a capitalizar.
 * @returns {string} La cadena con la primera letra capitalizada.
 */
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


/**
 * Convierte una fecha en un string con el formato "NombreDia, Dia de NombreMes".
 * @param {Date} date - La fecha a convertir.
 * @returns {string} El string con el formato deseado.
 */
export const formatDate = (date) => {
  try {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('es-ES', options);

    const words = formattedDate.split(' ');
    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || index === words.length - 1) {
        return capitalizeFirstLetter(word);
      }
      return word;
    });

    return capitalizedWords.join(' ');
  } catch (error) {
    return null;
  }
};

/**
 * Reemplaza todas las ocurrencias de una subcadena en una cadena dada.
 * @param {string} str - La cadena en la que se realizará el reemplazo.
 * @param {string} search - La subcadena que se desea reemplazar.
 * @param {string} replacement - La subcadena de reemplazo.
 * @returns {string} La cadena resultante después de realizar todos los reemplazos.
 */
export const replaceAll = (str, search, replacement) => {
  //Esta función simula el comportamiento del método `replaceAll` en versiones de ECMAScript
  //anteriores a ES2021, que no incluían dicho método. 
  return str.split(search).join(replacement);
};

/**
 * A través de un accesor en formato string se obtiene el atributo del objeto.
 * Retorna "undefined" si no se puede obtener el valor.
 * Ej: part3[0].name
 * @param {*} object
 * @param {String} accesor
 * @returns
 */
export const getObjectAttribute = (object, accesor) => {
  try {
    let cleanedAccesor = accesor.replace(/\[(\w+)\]/g, '.$1');
    cleanedAccesor = cleanedAccesor.replace(/^\./, '');
    const acc = cleanedAccesor.split('.');
    let obj = JSON.parse(JSON.stringify(object));

    if (acc.size === 0) {
      return undefined;
    }

    acc.forEach((key) => {
      obj = obj[key];
    });

    return obj;
  } catch (error) {
    return undefined;
  }
};

/**
 * Verifica si una cadena de texto incluye de forma insensible a mayúsculas o minúsculas
 * una subcadena dada.
 * @param {string} str - Cadena de texto en la que se realizará la búsqueda.
 * @param {string} substring - Subcadena que se buscará en la cadena de texto.
 * @returns {boolean} - Devuelve true si la cadena de texto incluye la subcadena de forma insensible,
 *                      de lo contrario devuelve false.
 */
export const includesIgnoreCase = (str, substring) => {
  return str.toString().toLowerCase().includes(substring.toLowerCase());
};

/**
 * Filtra un array de objetos en base a un valor de filtro y campos de búsqueda específicos.
 * Si no se especifican campos de búsqueda, se realizará la búsqueda en todos los atributos del objeto.
 * @param {Array} objects - Array de objetos que se filtrarán.
 * @param {string} filterValue - Valor de filtro utilizado para realizar la búsqueda.
 * @param {Array} [searchableFields] - Campos de los objetos en los que se realizará la búsqueda. Si no se especifica, se realizará la búsqueda en todos los atributos del objeto.
 * @returns {Array} - Array filtrado de objetos que coinciden con el valor de filtro.
 */
export const filterObjects = (objects, filterValue, searchableFields) => {
  if (filterValue.length > 0) {
    return objects.filter((obj) => {
      if (!searchableFields) {
        // Búsqueda en todos los atributos del objeto
        return Object.values(obj).some((value) =>
          includesIgnoreCase(value, filterValue)
        );
      } else {
        // Búsqueda en los campos de búsqueda específicos
        return searchableFields.some((field) => {
          const objValue = getObjectAttribute(obj, field);
          return includesIgnoreCase(objValue, filterValue);
        }
        );
      }
    });
  } else {
    return objects;
  }
};



