
/**
 * 
 * @param {Array<String>} deck Ejemplo: ['2C','3H',9C']
 * @returns {string} Ejemplo: '2C'
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}
