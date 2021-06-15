let button = document.querySelector('#criar-tarefa')
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');


let selecionaCor = document.createElement('class')

function alterarCorDeFundo(event){
    let tarefa = event.target
    let classeSelected = document.querySelector('.selected')
    if(classeSelected != null){
        classeSelected.classList.remove('selected')
    }
    tarefa.classList.add('selected')
    
    
}

function adicionarTarefa(){
let li = document.createElement('li')

lista.appendChild(li)
li.innerText = input.value
input.value = ''
li.addEventListener('click', alterarCorDeFundo)
}

button.addEventListener('click', adicionarTarefa)

/* function mudarCor () {
    if (li = 'click'){
        li = document.getElementsByTagName('li').classList.add('selected')
    }
}
 */




