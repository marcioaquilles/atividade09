// Questão 1
function calcularTabuada() {
    let tab, i;
    tab = document.getElementById('disp').value;
    let text = "";
    if (tab == '') {
        alert('Campo vazio informe um número para continuar')
    } else {
        for (i = 0; i <= 10; i++) {
            text += `${tab} x ${i} = ${tab * i}` + '<br>'
            document.getElementById('resp1').innerHTML = text;
        }
    }

}

document.getElementById('tabuada').addEventListener('click', calcularTabuada)

//Questão 2

function listarNumeros() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    let text = "";
    // for (let i = num1; i < num2; i++) {
    //     // lista = i + "<br>";
    //     // alert(i)
    //     // console.log(i)
    //     document.getElementById('listar').innerHTML = i;
    // }
    let c = num1
    do {
        text += `${c}` + ' '
        document.getElementById('listar').innerText = text
        c++
    } while (c <= num2)

}

//Questão 3
const items = []

function addArray() { //Função para adicionar elementos a lista

    let item = document.getElementById('showItem').value;
    items.push(item)
    document.getElementById('showItem').value = ''
}

function showList() { //Função exibe os valores adicionados
    if (items.length == '') {
        alert('Não existem items a serem exibidos, lista vazia.')
    } else {
        document.getElementById('showLista').innerText = items
        questao3()
    }

}

function clearList() { //Função limpa a lista
    items.splice(0, items.length);
    // document.getElementById('showLista').innerText = items
    document.location.reload(true);
}

function questao3() {
    document.getElementById('showLista').style.fontSize = '18px';
    document.getElementById('showLista').style.background = 'black';
    document.getElementById('showLista').style.color = 'white';
    document.getElementById('showLista').style.padding = '3px';
}

document.querySelector('[data-js="add"]').addEventListener('click', addArray)
document.querySelector('[data-js="show"]').addEventListener('click', showList)
document.querySelector('[data-js="clear"]').addEventListener('click', clearList)


//Questão 4

function sortear() {

    const megaSena = []
    let numero = 1

    while (numero <= 6) {

        let numeroAleatorio = Math.round(Math.random() * 100)
        let achou = false

        if (numeroAleatorio !== 0 && numeroAleatorio <= 60) {

            for (let pos = 0; pos < megaSena.length; pos++) {

                if (megaSena[pos] == numeroAleatorio) {
                    achou = true
                    break
                }
            }

            if (achou == false) {
                megaSena.push(numeroAleatorio)
                numero++
            }
        }

    }

    document.getElementById('loteria').innerText = megaSena

}

document.getElementById('sorteio').addEventListener('click', sortear);


// Questão 5

const homens = []
const mulheres = []

function adicionar() {
    let select = document.getElementById("sexo");
    let option = select.options[select.selectedIndex].value

    if (option == "M") {
        let listaH = document.getElementById('nome').value;
        homens.push(listaH);
        document.getElementById('nome').value = '';
    } else {
        let listaM = document.getElementById('nome').value;
        mulheres.push(listaM);
        document.getElementById('nome').value = '';
    }

}

function mostrar() {
    if (homens && mulheres.length == '') {
        alert('Não existem items a serem exibidos, listas vazias.')
    } else {
        document.getElementById('showMan').innerText = homens
        document.getElementById('showWoman').innerText = mulheres
    }
}

function limpar() {
    homens.splice(0, homens.length);
    mulheres.splice(0, mulheres.length);
    document.location.reload(true);
}

//Desafio

itens = ['Pedra', 'Papel', 'Tesoura']
pc = Math.trunc(Math.random() * 3)

function escolha() {
    let pedra = document.querySelector('[data-js="pedra"]').value
    let papel = document.querySelector('[data-js="papel"]').value
    let tesoura = document.querySelector('[data-js="tesoura"]').value
}
let jogador = escolha()
console.log(jogador)