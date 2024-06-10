window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.projectsNavbarLinks');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            links[index].style.color = 'blue';
            links[index].style.textDecoration = 'underline';
        } else {
            links[index].style.color = '#000'; // Set default color
            links[index].style.textDecoration = 'none'; // Remove underline
        }
    });
});
