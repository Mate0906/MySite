// Az eseménykezelő függvény, amely figyeli a görgetést
window.addEventListener('scroll', function() {
    const scrollText = document.querySelector('.scroll-text');
    const boxPosition = scrollText.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Ha a box a képernyőn látható, akkor hozzáadjuk a 'visible' osztályt
    if (boxPosition < screenHeight && boxPosition > 0) {
        scrollText.classList.add('visible');
    }
});
