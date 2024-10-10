// 6. Mirar que numero es mayor entre 3 numeros 
function findMax(a, b, c) {
    // Comparamos los números y devolvemos el mayor
    if (a >= b && a >= c) {
        return `El mayor es a ${a}`;
    } else if (b >= a && b >= c) {
        return `El mayor es b ${b}`;
    } else {
        return `El mayor es c ${c}`;
    }
}
let a = 10;
let b = 11;
let c = 11;
console.log(findMax(a, b, c))


// 7. Ejercicio tienda
/**
 * Calcula el descuento y el valor final de una compra según la cantidad de docenas.
 * 
 * @param {number} docenas - Cantidad de docenas que se van a comprar.
 * @returns {object} Objeto con la información del descuento, valor de la compra, valor del descuento y valor final.
 */
function calculateDiscount(docenas) {
    // Precio de cada docena
    const precioDocena = 60000;
    let descuento = 0;

    if (docenas >= 10) {
        descuento = 0.20;
    } else if (docenas >= 5) {
        descuento = 0.15;
    } else if (docenas > 1) {
        descuento = 0.10;
    }

    // Calculamos el valor de la compra
    const valorCompra = docenas * precioDocena;

    // Calculamos el valor del descuento
    const valorDescuento = valorCompra * descuento;

    // Calculamos el valor final
    const valorFinal = valorCompra - valorDescuento;

    return {
        descuento: descuento * 100 + "%",
        valorCompra: valorCompra,
        valorDescuento: valorDescuento,
        valorFinal: valorFinal
    };
}
const docenas = 15;
const resultado = calculateDiscount(docenas);

console.log(`Para ${docenas} docenas, el descuento es: ${resultado.descuento}`);
console.log(`Valor de la compra: $${resultado.valorCompra}`);
console.log(`Valor del descuento: $${resultado.valorDescuento}`);
console.log(`Valor final: $${resultado.valorFinal}`);