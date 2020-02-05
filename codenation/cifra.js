const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let data = "mzk raax omz geq m oaybgfqd. ymzk pa. fqp zqxeaz";
let numero_casas = 12;

const sha1 = require('js-sha1');

const decifra = (palavra, casas) => {
  let decifrado = [];
  for (letra of palavra) {
    const index = abc.indexOf(letra) - casas;
    if (letra === '.' || letra === " ") {
      decifrado.push(letra);
    } else if (index < 0) {
      decifrado.push(abc[26 + index]);
    } else {
      decifrado.push(abc[index]);
    }
  }
  return decifrado.join("");
}

function recifra(palavra, casas){
  return sha1(decifra(palavra, casas));
}

console.log(recifra(data, numero_casas));
console.log(decifra(data, numero_casas));

module.exports = {decifra, recifra};