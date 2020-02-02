const inputElement = document.getElementById('user');
const listElement = document.querySelector("#app ul");

//Função pegar array do git 
function quemSigo(username) {
  return fetch(`https://api.github.com/users/${username}/following`);
}

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

  var user = inputElement.value;

  try {
    const sigoReq = await quemSigo(user);
    const sigoArray = await sigoReq.json();
    const segueReq = await quemSegue(user);
    const segueArray = await segueReq.json();
    listElement.innerHTML = "";
    var safados = [];
    var beleza = [];
    for (sigo of sigoArray) {
      for (var i = 0; i < segueArray.length; i++) {
        if (sigo.login === segueArray[i].login) {
          beleza.push(sigo);

          //var itemElement = document.createElement('li');
          //var okText = document.createTextNode(sigo.login);
          //itemElement.appendChild(okText);
          //listElement.appendChild(itemElement);

          break;
        } else if (i == segueArray.length - 1) {

          safados.push(sigo);

          var itemElement = document.createElement('li');
          var alert = document.createElement('span');
          alert.setAttribute('id', 'safado');

          var safadoSpan = document.createTextNode(" Não te segue");
          alert.appendChild(safadoSpan);

          var safadoText = document.createTextNode(sigo.login);

          itemElement.appendChild(safadoText);
          itemElement.appendChild(alert);
          listElement.appendChild(itemElement);

        }
      }
    }
    if (safados.length === 0) {
      var itemElement = document.createElement('li');
      var surpresaText = document.createTextNode("Ou você não segue ninguem, ou todo mundo te segue de volta :D");
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