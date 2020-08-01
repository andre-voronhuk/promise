var container = document.querySelector('#app');
var result = document.createElement('h2');
container.appendChild(result);

function verificar() {
    //quando o botao for clicado,prepara os parametros para verificacao
    var idade = document.getElementById('idade');
    var idade = idade.value;

    verificarIdade(idade).then(function () {
        result.textContent = 'Maior de 18';

    }).catch(function () {
        result.textContent = 'Menor de 18';

    });
}

function verificarIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            resolve();
        } else {
            reject();
        }
    })

}