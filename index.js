
function get_value(){
    var value = document.getElementById("question").value;
    console.log(value);
    document.getElementById("quest").innerHTML = "Sua dúvida é: " + value;
}

const botao = document.getElementById('first_butt');
const minhaDiv = document.getElementById('resp1');

botao.addEventListener('click', function() {
    minhaDiv.style.display = 'block';
});

const botao2 = document.getElementById('second_butt');
const minhaDiv2 = document.getElementById('resp2');

botao2.addEventListener('click', function() {
    minhaDiv2.style.display = 'block';
});
second_butt

function escolherOpcao() {
    // Recebe as opções do usuário
    var opcoes = document.getElementById("esc").value;
    
    // Separa as opções por vírgula e armazena em um array
    var opcoesArray = opcoes.split(",");
    
    // Seleciona aleatoriamente um índice do array
    var indice = Math.floor(Math.random() * opcoesArray.length);
    
    // Retorna a opção selecionada
    document.getElementById("result").innerHTML = "A opção escolhida foi: " + opcoesArray[indice];
    return opcoesArray[indice];
}

function remove_value(){
    document.getElementById("question").value = "";
    document.getElementById("quest").innerHTML = "";
    document.getElementById("esc").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("resp1").style.display = "none";
    document.getElementById("resp2").style.display = "none";
}