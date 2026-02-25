const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const sideMenu = document.getElementById('sideMenu');

// Open side menu
menuOpen.addEventListener('click', () => {
    sideMenu.style.width = "250px";
    sideMenu.style.borderLeft = "3px solid #ffcc00";
});

// Close side menu
menuClose.addEventListener('click', () => {
    sideMenu.style.width = "0";
    sideMenu.style.borderLeft = "0px";
});

// Close menu if a link is clicked
document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.style.width = "0";
    });
});
