function verificarNome() {
    var nome = document.getElementById("nome").value;
    if (/\d/.test(nome)) {
        alert("Por favor, digite um nome válido sem números.");
    } else {
        verificarIdade();
    }
}

function verificarIdade() {
    var idade = parseInt(document.getElementById("data_nascimento").value);
    var fase;

    if (idade <= 11) {
        fase = "Criança";
    } else if (idade <= 20) {
        fase = "Adolescente";
    } else if (idade <= 65) {
        fase = "Adulto";
    } else {
        fase = "Idoso";
    }

    document.getElementById("resultado").innerHTML ="Você é um(a): " + fase;
}
