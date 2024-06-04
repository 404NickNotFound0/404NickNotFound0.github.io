document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Add hover effect to menu items
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.style.backgroundColor = '#666';
        });
        item.addEventListener('mouseleave', function() {
            item.style.backgroundColor = '';
        });

        item.addEventListener('click', function(e) {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Add hover effect to sections
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            section.style.backgroundColor = '#f1f1f1';
        });

        section.addEventListener('mouseleave', function() {
            section.style.backgroundColor = '#fff';
        });
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.backgroundColor = '#f7f7f7';
        });

        card.addEventListener('mouseleave', function() {
            card.style.backgroundColor = '#fff';
        });
    });

    // Add click effect to sections
    sections.forEach(section => {
        section.addEventListener('click', function() {
            section.style.transform = 'scale(1.02)';
            setTimeout(() => {
                section.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add click effect to cards
    cards.forEach(card => {
        card.addEventListener('click', function() {
            card.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
            }, 200);
        });
    });

    // Add click effect to images
    const images = document.querySelectorAll('.card img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            img.style.transform = 'scale(2)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 3000);
        });
    });
});
