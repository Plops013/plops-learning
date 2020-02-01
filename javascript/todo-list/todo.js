var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
  'Fazer Café',
  'Fazer Almoço',
  'Comer Pão'
];

console.log(listElement);
function renderTodos(){
  listElement.innerHTML = "";
  console.log(listElement);
  for(todo of todos){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
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