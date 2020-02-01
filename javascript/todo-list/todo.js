var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


console.log(listElement);
function renderTodos(){
  listElement.innerHTML = "";
  console.log(listElement);
  for(todo of todos){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

    var linkText = document.createTextNode('Excluir')
    
    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
  console.log(listElement);
}

renderTodos();

function addTodo(){
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

function deleteTodo(pos){
  todos.splice(pos, 1); //splice remove itens do array baseado na posição
  renderTodos();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
  /*
  Minha versão sem delete,

function adicionarItem(){
  var novoTodo = document.createElement('li');
  var btnExcluir = document.createElement('a');
  btnExcluir.setAttribute('href','#');
  //btnExcluir.textContent("Excluir");
  textoExcluir= document.createTextNode("Excluir");
  btnExcluir.appendChild(textoExcluir);
  textoTodo = document.createTextNode(inputElement.value);
  console.log(textoTodo);
  console.log(btnExcluir);
  novoTodo.appendChild(textoTodo);
  novoTodo.appendChild(btnExcluir);
  listElement.appendChild(novoTodo);
}
*/