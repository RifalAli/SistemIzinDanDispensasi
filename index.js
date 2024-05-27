const hamburgerMenu = document.getElementById('hamburger-menu');
const moreMenu = document.getElementById('more-menu');

let isWide = false;

function toggleMenu() {
    if (isWide) {
        moreMenu.style.display = 'block';
    }else {
        moreMenu.style.display = 'none';
    }

    isWide = !isWide;
}