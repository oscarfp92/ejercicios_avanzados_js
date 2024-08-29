/* Crea una función llamada rollDice() que reciba como parámetro el número de caras que queramos que tenga el dado que deberá simular el código dentro de la función. Que la función use el parámetro para simular una tirada de dado y retornar el resultado. */

rollDice = num => {
  return Math.floor (Math.random() * (num + 1));
}

console.log (rollDice(6));