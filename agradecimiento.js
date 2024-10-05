// JavaScript to add some animation effects

// Animation for the social media icons
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Animation for the button hover
const button = document.querySelector('.button');
button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-5px)';
    button.style.transition = 'transform 0.3s';
});
button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
});
