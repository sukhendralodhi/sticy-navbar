window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    header.classList.toggle('bg-white', window.scrollY > 0);
    nav.classList.toggle('text-black', window.scrollY > 0);
})