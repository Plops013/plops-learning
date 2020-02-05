const fs = require('fs');
const {decifra , recifra} = require('./cifra');

function pegarJson() {
  const resposta = JSON.parse(fs.readFileSync('./answer.json', "utf-8"));
  return resposta;
}

const {numero_casas, cifrado} = pegarJson();

const decifrado = decifra(cifrado, numero_casas);
const resumo_criptografico = recifra(cifrado, numero_casas);

const novoJson = JSON.stringify({
  ...pegarJson(),
  decifrado,
  resumo_criptografico,
})

fs.writeFileSync("./answer.json", novoJson);


