const fs = require('fs');

/**
 * Lee y devuelve el contenido de un archivo JSON.
 * @param {string} filePath - Ruta al archivo JSON.
 * @returns {Object} Contenido del archivo JSON.
 */
const readJSONFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
};

/**
 * Guarda un objeto como contenido de un archivo JSON.
 * @param {string} filePath - Ruta al archivo JSON.
 * @param {Object} data - Objeto a guardar en el archivo JSON.
 */
const saveJSONFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

/**
 * Inserta un nuevo objeto en un archivo JSON.
 * @param {string} filePath - Ruta al archivo JSON.
 * @param {Object} newObject - Nuevo objeto a insertar.
 */
const insertObject = (filePath, newObject) => {
  const data = readJSONFile(filePath);
  data.push(newObject);
  saveJSONFile(filePath, data);
};

/**
 * Actualiza un objeto existente en un archivo JSON.
 * @param {string} filePath - Ruta al archivo JSON.
 * @param {number} objectId - ID del objeto a actualizar.
 * @param {Object} updatedObject - Objeto actualizado.
 */
const updateObject = (filePath, objectId, updatedObject) => {
  const data = readJSONFile(filePath);
  const index = data.findIndex(obj => obj.id === objectId);
  if (index !== -1) {
    data[index] = updatedObject;
    saveJSONFile(filePath, data);
  }
};

/**
 * Elimina un objeto de un archivo JSON según su ID.
 * @param {string} filePath - Ruta del archivo JSON.
 * @param {number|string} objectId - ID del objeto a eliminar.
 */
 const deleteObject = (filePath, objectId) => {
    const data = readJSONFile(filePath);
    const index = data.findIndex(obj => obj.id === objectId);
    if (index !== -1) {
      data.splice(index, 1);
      saveJSONFile(filePath, data);
    }
}

module.exports = {
    readJSONFile,
    saveJSONFile,
    insertObject,
    updateObject,
    deleteObject
  }