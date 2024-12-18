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


// Function to update the favicon based on the current color scheme
function updateFavicon() {
    const favicon = document.getElementById('favicon');
    
    // Check the current color scheme (light or dark)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If dark mode, set the dark mode favicon
      favicon.href = 'Images/favconDark.PNG';
    } else {
      // If light mode, set the light mode favicon
      favicon.href = 'Images/favconLight.PNG';
    }
  }
  
  // Call the function to set the favicon when the page loads
  updateFavicon();
  
  // Listen for changes in the color scheme and update the favicon accordingly
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
  