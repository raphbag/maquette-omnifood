document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.bouton_menu');
    const menuIcon = document.getElementById('menu');
    const mobileMenu = document.getElementById('menu_mobile');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
        if (mobileMenu.classList.contains('show')) {
            menuIcon.name = 'close-outline';
        } else {
            menuIcon.name = 'menu-outline';
        }
    });

    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('show');
            menuIcon.name = 'menu-outline';
        }
    });
});

const yearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;