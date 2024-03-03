// manageData.jsx
const sendDataToServer = async (gameData) => {
    try {
        const response = await fetch('http://localhost:8080/gameData/saveData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gameData)
        });

        if (!response.ok) {
            throw new Error('Error al enviar los datos al servidor');
        }

        return { success: true, message: 'Datos enviados correctamente' };
    } catch (error) {
        console.error('Hubo un error al enviar los datos:', error);
        return { success: false, message: 'Error al enviar los datos al servidor' };
    }
};

export { sendDataToServer };
