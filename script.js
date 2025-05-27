// Simple contact form handler (no backend, just a demo)
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar navigation logic
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    function showSection(sectionId) {
        sections.forEach(sec => {
            if (sec.id === sectionId) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
    // Show About by default
    showSection('about');

    // Contact form logic (production: send email via EmailJS)
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // EmailJS integration
            emailjs.init('2146uoIbVpY5QvxBo'); // Using your EmailJS public key
            emailjs.send('service_szyc81u', 'template_e6poqii', {
                from_name: form.name.value,
                from_email: form.email.value,
                message: form.message.value
            }).then(function(response) {
                formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                form.reset();
            }, function(error) {
                formMessage.textContent = 'Sorry, there was an error sending your message. Please email me directly.';
            });
        });
    }
});
