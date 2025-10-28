const avanca = document.querySelectorAll ('.bnt-proximo' )
console.log(avanca)

avanca.forEach(button=> {
     button.addEventListener('click', function(){ 
        const atual = document.querySelector('.ativo')
        const proixmoPasso = 'passo-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativo')
        document.querElementById(proximoPasso).classList.add('ativo')
    })
})