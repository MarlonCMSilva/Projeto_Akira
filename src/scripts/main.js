document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');


    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;


    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){ 
            ocultaElementosDoHeader();
        }else{
            exibeElementosDoHeader();
        }
    })


    
    for(let i = 0; i< buttons.length;i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo =   botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('about__list--is-active')
            removeBotaoAtivo();
            botao.target.classList.add('about__tabs__button--is-active');

        })
    }
})


function ocultaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}


function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i< buttons.length;i++){
        buttons[i].classList.remove('about__tabs__button--is-active')
    }
}
    

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('about__list--is-active')
    }
}
