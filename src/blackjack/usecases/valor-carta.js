
/**
 *  Obtiene el valor de una carta
 * @param {String} carta valor de la carta
 * @returns 
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}