document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            document.getElementById("sidebar").style.width = "250px"; // Set to the new maximum width
            document.getElementById("overlay").classList.add("active");
        });
    }

    const closeSidebar = document.getElementById('closeSidebar');
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("overlay").classList.remove("active");
        });
    }

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("overlay").classList.remove("active");
        });
    }

    const buttonLink = document.querySelector('.sidebar button.button-link');
    if (buttonLink) {
        buttonLink.addEventListener('click', function() {
            window.location.href = "index.html";
        });
    }

    function scrollToSection(index) {
        sessionStorage.setItem('scrollToSection', index);
        window.location.href = 'service.html';
    }

    window.addEventListener('load', function() {
        const index = sessionStorage.getItem('scrollToSection');
        if (index !== null) {
            sessionStorage.removeItem('scrollToSection');
            const cards = document.querySelectorAll('.card');
            if (cards[index]) {
                window.scrollTo({
                    top: cards[index].offsetTop + (index * window.innerHeight / 1.5),
                    behavior: 'smooth'
                });
            }
        }
    });

    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    // Add any mobile-specific JavaScript here
});