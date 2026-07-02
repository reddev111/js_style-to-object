'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objects = sourceString
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((pair) => pair.split(':').map((s) => s.trim()));

  return Object.fromEntries(objects);
}

module.exports = convertToObject;
