document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    function validatePassword(password) {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isValidLength = password.length >= minLength;

        return isValidLength && hasUppercase && hasSpecialChar;
    }

    form.addEventListener('submit', function(event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert('Passwords do not match.');
            return;
        }

        if (!validatePassword(password.value)) {
            event.preventDefault();
            alert('Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.');
        }
    });
});
