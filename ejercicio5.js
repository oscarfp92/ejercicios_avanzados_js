/* Crea una función llamada rollDice() que reciba como parámetro el número de caras que queramos que tenga el dado que deberá simular el código dentro de la función. Que la función use el parámetro para simular una tirada de dado y retornar el resultado. */

function rollDice (min, max) {
  return Math.floor (Math.random() * (max - min + 1) + min);
}

console.log (rollDice (1,6));