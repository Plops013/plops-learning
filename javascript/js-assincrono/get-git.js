var inputElement = document.querySelector("#app input#user");
var buttonElement = document.querySelector("#app button#git-search");
var listElement = document.querySelector('#app ul#repos');

console.log(listElement);

function showLoading(){
  listElement.innerHTML = '';
  loading = document.createElement('li');
  loadingText = document.createTextNode("carregando...");
  loading.appendChild(loadingText);
  listElement.appendChild(loading);

  getRepos();

}

function getRepos() {
  user = inputElement.value;

  axios.get('https://api.github.com/users/' + user + '/repos').then((response) => {

    repos = response.data;
    listElement.innerHTML = '';

    for (repo of repos) {

      itemElement = document.createElement('li');
      textItem = document.createTextNode("Repositório: " + repo.name + " | Link : " + repo.html_url);
      itemElement.appendChild(textItem);
      listElement.appendChild(itemElement);
      console.log(repo.name);
      console.log(repo.html_url);

    }
  }).catch((err) => {
    listElement.innerHTML = '';
    error = document.createElement('li');
    (err.response.status === 404)?
    errorText = document.createTextNode("Erro 404 Usuário não encontrado!"):
    errorText = document.createTextNode(err.response.data);
    error.appendChild(errorText);
    listElement.appendChild(error);

  });

}
