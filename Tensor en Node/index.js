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

//Ejercicio pagina 56 --------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------

//Ejercicio pagina 63 --------------------------------------------------------------------
const users = ['Gant', 'Todd', 'Jed', 'Justin']
const bands = [
 'Nirvana',
 'Nine Inch Nails',
 'Backstreet Boys',
 'N Sync',
 'Night Club',
 'Apashe',
 'STP'
]
const features = [
 'Grunge',
 'Rock',
 'Industrial',
 'Boy Band',
 'Dance',
 'Techno'
]
// User votes
const user_votes = tf.tensor([
 [10, 9, 1, 1, 8, 7, 8],
 [6, 8, 2, 2, 0, 10, 0],
 [0, 2, 10, 9, 3, 7, 0],
 [7, 4, 2, 3, 6, 5, 5]
])
// Music Styles
const band_feats = tf.tensor([
 [1, 1, 0, 0, 0, 0],
 [1, 0, 1, 0, 0, 0],
 [0, 0, 0, 1, 1, 0],
 [0, 0, 0, 1, 0, 0],
 [0, 0, 1, 0, 0, 1],
 [0, 0, 1, 0, 0, 1],
 [1, 1, 0, 0, 0, 0]
])

// User's favorite styles
const user_feats = tf.matMul(user_votes, band_feats)
// Print the answers
user_feats.print()

// Let's make them pretty
const top_user_features = tf.topk(user_feats, features.length)
// Back to JavaScript
const top_genres = top_user_features.indices.arraySync()
// print the results
users.map((u, i) => {
 const rankedCategories = top_genres[i].map(v => features[v])
 console.log(u, rankedCategories)
})











app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });