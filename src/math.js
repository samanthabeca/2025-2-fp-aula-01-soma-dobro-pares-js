/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    return numeros
        .filter( n => n % 2 === 0 )
        .map( n => n * 2 )
        .reduce( ( sum, n ) => sum + n, 0); //Retorna a soma realizada de forma funcional
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    let somaDobroPares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) { // Verifica se o número é par
            somaDobroPares += numeros[i] * 2; // Soma o dobro do número par e o acumula na variável somaDobroPares
        }
    }
    return somaDobroPares; //Retorna o soma realizada de forma estruturada
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
