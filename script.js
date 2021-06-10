let button = document.querySelector('#criar-tarefa')
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');

function adicionarTarefa(){
let li = document.createElement('li')

lista.appendChild(li)
li.innerText = input.value
input.value = ''
li.addEventListener('click', alterarCorDeFundo)
}

button.addEventListener('click', adicionarTarefa)


function alterarCorDeFundo(event){
    let tarefa = event.target
    tarefa.style.backgroundColor = 'rgb(128,128,128)'
}








