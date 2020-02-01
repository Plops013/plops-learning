//Ex 1
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
 };

 console.log("O Usuario mora em " + endereco.cidade + " / " + endereco.uf + " no bairro " + endereco.bairro + ', na rua "' + endereco.rua + '" com nº ' + endereco.numero);

 //Ex 2
 function pares(x, y) {
  while (x <= y){
    (x%2 == 0) ? console.log(x) : '';
    x++;
  }
 }

 pares(32, 42);

 //Ex 3
 function temHabilidade(skills) {
  return (skills.indexOf("Javascript", 0) != -1) ? true : false;
 }
 var skills = ["Javascript", "ReactJS", "React Native"];
 console.log(temHabilidade(skills)); // true ou false

 //Ex 4
 function experiencia(anos) {
  (anos > 0 && anos <= 1)? console.log("Iniciante"):
  (anos > 1 && anos <= 3)? console.log("Intermediario"):
  (anos > 3 && anos <= 6)? console.log("Avançado"):
  (anos >= 7)? console.log("Jedi Master"): '';
 }
 var anosEstudo = 12;
 experiencia(anosEstudo);
 // De 0-1 ano: Iniciante
 // De 1-3 anos: Intermediário
 // De 3-6 anos: Avançado
 // De 7 acima: Jedi Master
 
 //Ex 5
 var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

function habilidadeUsusario(){
  for(user of usuarios){
    text = user.habilidades.join(', ');
    console.log(user.nome + " possui as habilidades: " + text);
  }
}

habilidadeUsusario();

//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
