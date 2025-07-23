// Function to validate login
function validateLogin(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var email = document.getElementById('signinEmail').value;
    var password = document.getElementById('signinPassword').value;

    // Hardcoded credentials for testing 
    var validEmail = "test@example.com";
    var validPassword = "password123";

    // Check if the entered credentials match the valid ones
    if (email === validEmail && password === validPassword) {
        // Redirect to the portfolio page if credentials are correct
        window.location.href = "portfolio/homepage.html";
    } else {
        alert("Invalid email or password! Please try again.");
    }
}

// Function for guest login - no credentials needed
function guestLogin() {
    // Redirect to portfolio page for guest users
    window.location.href = "portfolio/homepage.html";
}

// Select the dark mode icon
const darkModeIcon = document.getElementById('darkMode-icon');

// Check if the user has previously set the dark mode preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.remove('bx-moon');
    darkModeIcon.classList.add('bx-sun');
}

// Toggle dark mode when the icon is clicked
darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change the icon based on the mode
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
        
        // Save the user's preference in localStorage
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeIcon.classList.remove('bx-sun');
        darkModeIcon.classList.add('bx-moon');
        
        // Remove the user's preference in localStorage
        localStorage.setItem('darkMode', 'disabled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper
    const swiper = new Swiper('.testimonial-content', {
        loop: true, // Loop the slides
        slidesPerView: 1, // Number of slides visible at once
        spaceBetween: 30, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Autoplay delay (in ms)
        },
    });
});

particlesJS('particles-js', {
    particles: {
        number: { value: 100 },
        color: { value: '#ffffff' },
        shape: { type: 'triangle' },
        size: { value: 3 },
        move: { enable: true, speed: 6 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: 'repulse' }
        }
    }
});

