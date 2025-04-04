const hamburgerIcon = document.getElementById('hamburger-icon');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const navbar = document.querySelector('.navbar');

hamburgerIcon.addEventListener('click', () => {
    sideMenu.style.right = '0';
    navbar.classList.add('hidden');
    document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.right = '-100%';
    navbar.classList.remove('hidden');
    document.body.classList.remove('menu-open');
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
  
    // Ha a görgetési pozíció nagyobb, mint 50px (beállítható), hozzáadjuk a 'scrolled' osztályt
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });