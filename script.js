
const links = document.querySelectorAll(".tab-link");
const contents = document.querySelectorAll(".tab-content");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        // Reset active classes
        links.forEach(l => l.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // Set active
        link.classList.add("active");
        document.getElementById(link.dataset.tab).classList.add("active");
        // Update page title
        const sectionName = link.textContent.trim();
        document.title = sectionName;
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

