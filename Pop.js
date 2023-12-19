function exibirPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Função para fechar a janela pop-up
function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

// Evento DOMContentLoaded para chamar a função ao iniciar a página
document.addEventListener('DOMContentLoaded', function() {
    exibirPopup();
});