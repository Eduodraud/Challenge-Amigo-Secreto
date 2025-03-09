//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let numero;

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nome = input.value.trim();
    
    if (nome == '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }
    
    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h3', amigos);
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>O amigo sorteado foi: ${amigoSorteado}</li>`;
    
    let lista = document.querySelector('#listaAmigos');
    lista.style.display = 'none'; 
    
    console.log('Amigo sorteado foi: ' + amigoSorteado);
}

function limparLista() {
    amigos = [];
    atualizarLista();
    document.querySelector('#resultado').innerHTML = ''; 
    document.querySelector('#listaAmigos').style.display = 'block'; 
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
    lista.style.display = 'block';
}

function limparCampo() {
    document.querySelector('input').value = '';
}


console.log(numero);


console.log(amigos);
