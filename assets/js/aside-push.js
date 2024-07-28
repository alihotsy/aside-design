
document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu__btn');
    const layoutDiv = document.querySelector('.layout');

    menuBtn.addEventListener('click', () => {
        layoutDiv.classList.toggle('push');
    });
    
});