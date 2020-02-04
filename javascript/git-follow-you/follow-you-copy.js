const inputElement = document.getElementById('user');
const listElement = document.querySelector("#app ul");

//Função pegar array de quem o usuario segue 
function quemSigo(username) {
  return fetch(`https://api.github.com/users/${username}/following`);
}

//Função pegar array de quem segue o usuario
function quemSegue(username) {
  return fetch(`https://api.github.com/users/${username}/followers`);
}

//ainda nao acabado
async function verificaCombinacao() {
  listElement.innerHTML = "";

  loading = document.createElement('li');
  loadingText = document.createTextNode("carregando...");
  loading.appendChild(loadingText);
  listElement.appendChild(loading);

  const user = inputElement.value;

  try {
    const sigoArray = await quemSigo(user).then(data => data.json());
    const segueArray = await quemSegue(user).then(data => data.json());

    listElement.innerHTML = "";

    for (sigo of sigoArray) {
      for (let i = 0; i < segueArray.length; i++) {

        if (sigo.login === segueArray[i].login) {
          break;

        } else if (i == segueArray.length - 1) {

          const itemElement = document.createElement('li');
          const alert = document.createElement('span');
          alert.setAttribute('id', 'safado');
          const safadoSpan = document.createTextNode(" Não te segue");
          alert.appendChild(safadoSpan);
          let safadoText = document.createTextNode(sigo.login);

          itemElement.appendChild(safadoText);
          itemElement.appendChild(alert);
          listElement.appendChild(itemElement);
        }
      }
    }
    if (safados.length === 0) {
      const itemElement = document.createElement('li');
      const surpresaText = document.createTextNode("Ou você não segue ninguem, ou todo mundo te segue de volta :D");
      itemElement.appendChild(surpresaText);
      listElement.appendChild(itemElement);
    }
  } catch (error) {
    erroItem = document.createElement('li');
    erroText = document.createTextNode("Usuario nao encontrado");
    erroItem.appendChild(erroText);
    listElement.appendChild(erroItem);
  }
}