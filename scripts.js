// Sidebar
const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar_toggler');
const logo = document.getElementById("logo");
const line = document.getElementById("line");
const images = ['Images/LogoClose.PNG', 'Images/LogoOpen.PNG'];
const lineColor = ["black", "white"];
let currentIndex = 0;

// Toggling the Sidebar
sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    logo.src = images[currentIndex];
    line.style.borderColor = lineColor[currentIndex];
});


// Closing the Sidebar on clicking Outside and on the Sidebar-Links
window.addEventListener('click', (e) => {
    if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar_toggler') {
        sidebar.classList.remove('show');
        logo.src = "Images/LogoClose.PNG";
        line.style.borderColor = "black";
        currentIndex = 0;
    }
});

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

document.getElementById("game").onclick = function() {
    window.location.href = "textRPG.html";
};
