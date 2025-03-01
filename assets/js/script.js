
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.bouton_menu');
    const mobileMenu = document.getElementById('menu_mobile');

    menuButton.addEventListener('click', () => {
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'flex';
        }
    });

    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.style.display = 'none';
        }
    });
});
