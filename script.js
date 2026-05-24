document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggles '.nav-active' on or off the list menu structure
            nav.classList.toggle('nav-active');

            // Optionally, transform our 3 burger lines into an 'X' close indicator
            burger.classList.toggle('toggle');
        });
    }
});