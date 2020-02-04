function hltv() {
  return fetch('https://www.personalshoes.com.br/sapato/');
}

var astralis = hltv().then(data => data.json());

console.log(astralis);