let button = document.querySelector('#criar-tarefa')
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');

function criarLista(){
let li = document.createElement('li')

lista.appendChild(li)
li.innerText = input.value
input.value = ''
}

button.addEventListener('click', criarLista)


