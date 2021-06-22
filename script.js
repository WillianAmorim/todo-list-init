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



let tarefas = lista.childNodes
let classeCompleted = document.querySelector('.completed')

function riscarTarefa(event) {
    let eventoClick = event.target
    
    if( eventoClick.classList.contains('completed')){
        eventoClick.classList.remove('completed')
    }else {
        eventoClick.classList.add('completed')    
    }
    
    
}
addEventListener('dblclick', riscarTarefa)

let botaoApagar = document.querySelector('#apaga-tudo')

function apagarTarefas (event) {
    let eventoClick = event.target 
    let elementoLi = document.querySelectorAll('li')
    let listaOrdenada = document.querySelector('#lista-tarefas')
    console.log(elementoLi)

    for(index = 0; index < elementoLi.length; index += 1){
        console.log(elementoLi[index])
        listaOrdenada.removeChild(elementoLi[index])
    }
}
botaoApagar.addEventListener('click', apagarTarefas)

let tarefaConcluida = document.getElementsByClassName('completed')
let botaoRemover = document.querySelector('#remover-finalizados')
function removerTarefasConcluidas (){
    
    let elementoLi = document.querySelectorAll('li')
    let listaOrdenada = document.querySelector('#lista-tarefas')
    
    for(index = 0; index < elementoLi.length; index += 1){
        if(elementoLi[index].classList.contains('completed')){
            listaOrdenada.removeChild(elementoLi[index])
        }        
    }
}

botaoRemover.addEventListener('click', removerTarefasConcluidas)



let botaoRemoverSelecionado = document.querySelector('#remover-selecionado')
function removerSelecionado() {
    
    /* let classeSelected = document.querySelector('.selected') */
    let elementoLi = document.querySelectorAll('li')
    let listaOrdenada = document.querySelector('#lista-tarefas') 
    
    for(index = 0; index < elementoLi.length; index += 1){
        if(elementoLi[index].classList.contains('selected')){
            listaOrdenada.removeChild(elementoLi[index])    
        }
    }                   
}
botaoRemoverSelecionado.addEventListener('click', removerSelecionado)


//FUNÇÃO DO BOTÃO MOVER PRA CIMA
let botaoMoverCima = document.querySelector('#mover-cima')
function moverParaCima () {
    let elementosLi = document.querySelectorAll('li')
    let listaOrdenada = document.querySelector('#lista-tarefas')
    let classSelected = document.getElementsByClassName('selected')[0]
    
    listaOrdenada.insertBefore(classSelected, classSelected.previousSibling)    
}
botaoMoverCima.addEventListener('click', moverParaCima)


//FUNÇÃO DO BOTÃO MOVER PARA BAIXO
/* let botaoMoverBaixo = document.querySelector('#mover-baixo')
function moverParaBaixo () {
    let listaOrdenada = document.querySelector('#lista-tarefas')
    let classSelected = document.getElementsByClassName('selected')[0]
    
    listaOrdenada.insertBefore(classSelected.nextSibling, classSelected)
}

botaoMoverBaixo.addEventListener('click', moverParaBaixo) */



//FUNÇÃO SALVAR TAREFA 
let botaoSalvar = document.querySelector('#salvar-tarefas')

function salvarTarefa () {
    let list = document.querySelector('ol').innerHTML
    // console.log(list)

    localStorage.setItem('tarefas', list)
    
}
botaoSalvar.addEventListener('click', salvarTarefa)

let liTarefas = localStorage.getItem('tarefas')
// console.log(liTarefas)
lista.innerHTML = liTarefas