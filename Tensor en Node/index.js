const express = require('express')
const app = express()
const tf = require('@tensorflow/tfjs');
const port = 3000


/* // Crear un tensor unidimensional (vector)
const tensor1d = tf.tensor1d([1, 2, 3]);
//console.log(tensor1d)

// Crear un tensor bidimensional (matriz)
const tensor2d = tf.tensor2d([[1, 2], [3, 4], [5, 6]]);
//console.log(tensor2d)


tensor1d.print();
tensor2d.print(); */

console.log('principio', tf.memory().numTensors)

let keeper, chaser, seeker, beater;

tf.tidy(() => {
  keeper = tf.tensor([1,2,3])
  chaser = tf.tensor([1,2,3])
  seeker = tf.tensor([1,2,3])
  beater = tf.tensor([1,2,3])

  console.log('dentro de tidy', tf.memory().numTensors)

  tf.keep(keeper)
  return chaser
})

console.log('afuera de tidy', tf.memory().numTensors)

keeper.dispose()
chaser.dispose()

console.log('fin', tf.memory().numTensors)







app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });