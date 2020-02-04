const inputElement = document.getElementById("user");
const listElement = document.querySelector("#app ul");

function quemSigo(username) {
  return fetch(`https://api.github.com/users/${username}/following`);
}
function quemMeSegue(username) {
  return fetch(`https://api.github.com/users/${username}/followers`);
}
function printarLista(value, safado) {
  const item = document.createElement("li");
  let texto = document.createTextNode(value);
  item.appendChild(texto);

  if (safado) {
    const span = document.createElement("span");
    const spanText = document.createTextNode(safado);
    span.setAttribute("id", "safado");
    span.appendChild(spanText);
    item.appendChild(span);
  }

  listElement.appendChild(item);
}
function limparLista() {
  listElement.innerHTML = "";
};

async function verificaCombinacao() {
  const user = inputElement.value;
  
  limparLista();
  printarLista("carregando..");

  try {
    const sigoArray = await quemSigo(user).then(data => data.json());
    const segueArray = await quemMeSegue(user).then(data => data.json());

    limparLista();
    let safados = false;

    for (sigo of sigoArray) {
      for (let i = 0; i < segueArray.length; i++) {
        if (sigo.login === segueArray[i].login) {
          break;
        } else if (i == segueArray.length - 1) {
          safados = true;
          printarLista(sigo.login, " não te segue");
        }
      }
    }
    if (!safados) {
      printarLista(
        "Ou você não segue ninguem, ou todo mundo te segue de volta :D"
      );
    }
  } catch (error) {
    printarLista("", "O imbecil não existe");
  }
}
