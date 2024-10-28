document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector('.card__input');
    const errorIcon = document.querySelector('.error__icon');
    const errorNotice = document.querySelector('.error__notice');
    const submitButton = document.querySelector('.submit');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errorIcon.classList.add('show');
            errorNotice.classList.add('show');
        } else {
            errorIcon.classList.remove('show');
            errorNotice.classList.remove('show');
            console.log("Email submitted:", email);
        }
    });

    emailInput.addEventListener('input', function() {
        errorIcon.classList.remove('show');
        errorNotice.classList.remove('show');
    });

    const toggleButton = document.querySelector('.grimm__toggle');
    const socialMenu = document.querySelector('.social__menu');

    toggleButton.addEventListener('click', function() {
        socialMenu.classList.toggle('show'); 

        if (socialMenu.classList.contains('show')) {
            toggleButton.classList.remove('pulsing');
        } else {
            toggleButton.classList.add('pulsing'); 
        }
    });

    toggleButton.classList.add('pulsing');
});
