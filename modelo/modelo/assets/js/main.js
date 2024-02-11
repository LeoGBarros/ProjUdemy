const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li;
}

function limparInput(){
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criarBtnApagar(li){
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'apagar';

    btnApagar.setAttribute('class','apagar');

    li.appendChild(btnApagar);
}

function criarTarefa(textoInput){
    const li = criarLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limparInput();
    criarBtnApagar(li);
}

btnTarefa.addEventListener('click', function(e){
    if(!inputNovaTarefa.value) return;
    criarTarefa(inputNovaTarefa.value)
    
})

document.addEventListener('click',function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
})

