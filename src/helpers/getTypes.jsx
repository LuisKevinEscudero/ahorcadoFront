import React from 'react';

const getTypes = ({ types }) => {
  const typeImages = [];

  if (typeof types === 'string' || (Array.isArray(types) && types.length > 0)) {
    // Verificar si se puede hacer un split por coma
    const typeArray = Array.isArray(types) ? types.map(type => type.trim()) : types.split(',').map(type => type.trim());

    // Construir la ruta de la imagen para cada tipo
    typeArray.forEach(type => {
      const lowerCaseType = type.toLowerCase();
      const imagePath = `../imgs/${lowerCaseType}.png`;
      typeImages.push(imagePath);
    });
  }

  return typeImages;
};

export default getTypes;
