const inputElement = document.getElementById("user");
const listElement = document.querySelector("#app ul");

function quemSigo(username) {
  return fetch(`https://api.github.com/users/${username}/following`);
}
function quemSegue(username) {
  return fetch(`https://api.github.com/users/${username}/followers`);
}

function printaLista(value, safado) {
  const item = document.createElement("li");
  let texto = document.createTextNode(value);
  item.appendChild(texto);

  if (safado) {
    const span = document.createElement("span");
    const spanText = document.createTextNode(" não te segue");
    span.setAttribute("id", "safado");
    span.appendChild(spanText);
    item.appendChild(span);
  }

  listElement.appendChild(item);
}

const limparLista = () => {
  listElement.innerHTML = "";
};

async function verificaCombinacao() {
  const user = inputElement.value;
  limparLista();

  printaLista("carregando..");

  try {
    const sigoArray = await quemSigo(user).then(data => data.json());
    const segueArray = await quemSegue(user).then(data => data.json());

    limparLista();
    let safados = false;

    for (sigo of sigoArray) {
      for (let i = 0; i < segueArray.length; i++) {
        if (sigo.login === segueArray[i].login) {
          break;
        } else if (i == segueArray.length - 1) {
          safados = true;
          printaLista(sigo.login, true);
        }
      }
    }
    if (!safados) {
      printaLista(
        "Ou você não segue ninguem, ou todo mundo te segue de volta :D"
      );
    }
  } catch (error) {
    printaLista(error);
  }
}
