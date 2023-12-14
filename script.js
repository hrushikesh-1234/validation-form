function validateForm(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const errors = [];

    // Used for Full Name
    if (fullName.length < 5) {
        errors.push('Name must be at least 5 characters');
    }

    // Used to type Email
    if (!email.includes('@')) {
        errors.push('Enter a valid email address');
    }

    // Used for Phone Number
    if (phone.length !== 10 || phone === '1234567890' || phone === '0123456789') {
        errors.push('Enter a valid 10-digit phone number');
    }

    // Used for uploding Password
    if (password.length < 8 || password === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        errors.push('Password must be at least 8 characters and not be a common password or your name');
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        errors.push('Passwords do not match');
    }

    // Display error messages
    displayErrors(errors);
}
//above declaired function used here toget error message when any one of the condition is false
function displayErrors(errors) {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    if (errors.length > 0) {
        errors.forEach(error => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error;
            errorMessages.appendChild(errorMessage);
        });
    }
}