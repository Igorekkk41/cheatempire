"use strict"

/* --------------------------BURGER------------------------------------------------ */
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
    
    iconMenu.addEventListener("click", function (e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
/* ----------прокрутка при клике---------------------------------------------------------------- */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top; //учитывается высота шапки, при переходе в нужный раздел страницы


            //! при переходе в нужный раздел в бургере, отключается сам бургер.
            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');  
                menuBody.classList.remove('_active');
            }


            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth" //маленькая скорость
            });
            e.preventDefault(); //ссылки не работают при переходе вроде
        }
    }
}

/* --------------tabs------------------------------------------------------------ */
const tabsTitle = document.querySelectorAll('.catalog-bar__item');
const tabsContent = document.querySelectorAll('.catalog-content__block');

tabsTitle.forEach(item => item.addEventListener('click', event => {

    const tabsTitleTarget = event.target.getAttribute('data-tab');
    tabsTitle.forEach(element => element.classList.remove('active-tab'));
    tabsContent.forEach(element => element.classList.add('hidden'));

    item.classList.add('active-tab'); 
    document.getElementById(tabsTitleTarget).classList.remove('hidden');

}));

document.querySelector('[data-tab="tab-eft"]').classList.add('active-tab');
document.querySelector('#tab-eft').classList.remove('hidden');

/* --------visual effect------------------------------------------------------------------ */
const parallaxImage = document.querySelector('.main__page__military-img');  
    document.addEventListener('mousemove', (e) => {
        const xPosition = e.clientX / window.innerWidth;
        const xOffset = -100 + xPosition * 100; // Регулируйте этот коэффициент для более сильного или слабого эффекта
            
        parallaxImage.style.transform = `translateX(${xOffset}px)`;
});

/* -------------------------------------------------------------------------- */
