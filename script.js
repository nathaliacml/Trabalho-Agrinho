/*script para animação Scroll*/
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
    
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
        console.log('nakckn')
    }, 200 ));
}
/*Fim do script para animação Scroll*/

/*Scroll de link interno*/
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item =>  {
    item.addEventListener('click', scrollToIdOnClick);
})

/*função para fazer a referência ao href e ao item*/
function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

/*função para o clique*/
function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
}

/*função para scroll suave*/
function scrollToPosition(to){
    window.scroll({
    top: to,
    behavior: "smooth",
    });
}
/*Fim do script para animação Scroll*/
/*função do botão = voltar ao topo*/
var btn = document.querySelector("#voltar-topo");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
