function Mouse() {
    const links = document.getElementsByClassName("dropdown-item");
    
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function () {
            this.classList.add('active'); // 'this' se refere ao elemento específico que acionou o evento
            console.log('active');
        });

        links[i].addEventListener('mouseout', function () {
            this.classList.remove('active'); // 'this' se refere ao elemento específico que acionou o evento
        });
    }
}

// Chama a função quando a página é carregada
window.onload = Mouse;
