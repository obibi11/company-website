import { db } from './firebase-config.js';
import { ref, set, push, onValue } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

// Function to navigate between pages
function navigateTo(page) {
    window.location.href = page;
}

// Event listeners for navigation buttons
document.getElementById('home-btn')?.addEventListener('click', () => navigateTo('index.html'));
document.getElementById('about-btn')?.addEventListener('click', () => navigateTo('about.html'));
document.getElementById('portfolio-btn')?.addEventListener('click', () => navigateTo('portfolio.html'));
document.getElementById('contact-btn')?.addEventListener('click', () => navigateTo('contact.html'));

// Contact form submission
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const messagesRef = ref(db, 'messages');
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
        name: name,
        email: email,
        message: message
    });

    alert('Your message has been sent successfully!');
    document.getElementById('contact-form').reset();
});

// Load projects on the portfolio page
function loadProjects() {
    const projectsRef = ref(db, 'projects');
    onValue(projectsRef, (snapshot) => {
        const projects = snapshot.val();
        const portfolioCards = document.querySelector('.portfolio-cards');
        portfolioCards.innerHTML = '';

        for (const id in projects) {
            const project = projects[id];
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <button onclick="navigateTo('portfolio.html')">Details</button>
            `;
            portfolioCards.appendChild(card);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('portfolio.html')) {
        loadProjects();
    }
});
