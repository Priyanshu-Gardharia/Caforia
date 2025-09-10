// DOM Elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.querySelector('.btn-primary');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Utility functions
function showError(element, message) {
    element.textContent = message;
    element.parentElement.querySelector('.form-input').classList.add('error');
}

function clearError(element) {
    element.textContent = '';
    element.parentElement.querySelector('.form-input').classList.remove('error');
}

// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function showInlineError(message, isEmailError = true) {
    if (isEmailError) {
        showError(emailError, message);
    } else {
        showError(passwordError, message);
    }
}

// Input validation with real-time feedback
emailInput.addEventListener('input', function() {
    clearError(emailError);
});

passwordInput.addEventListener('input', function() {
    clearError(passwordError);
});

// Form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearError(emailError);
    clearError(passwordError);
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    let hasErrors = false;
    
    // Validation
    if (!email) {
        showInlineError('Please enter your email address', true);
        hasErrors = true;
    } else if (!validateEmail(email)) {
        showInlineError('Please enter a valid email address', true);
        hasErrors = true;
    }
    
    if (!password) {
        showInlineError('Please enter your password', false);
        hasErrors = true;
    } else if (!validatePassword(password)) {
        showInlineError('Password must be at least 6 characters long', false);
        hasErrors = true;
    }
    
    if (hasErrors) {
        return;
    }
    
    // Show loading state
    loginBtn.disabled = true;
    loginBtn.querySelector('.btn-text').style.display = 'none';
    loginBtn.querySelector('.btn-loading').style.display = 'inline';
    
    // Simulate login process
    setTimeout(() => {
        // Reset loading state
        loginBtn.disabled = false;
        loginBtn.querySelector('.btn-text').style.display = 'inline';
        loginBtn.querySelector('.btn-loading').style.display = 'none';
        
        // Demo login logic (replace with actual authentication)
        if (email === 'customer@impulse.com' && password === 'password123') {
            // Successful login - redirect to account dashboard
            window.location.href = '#account-dashboard';
            // In a real application, this would redirect to the actual dashboard
        } else {
            // Show error for invalid credentials
            showInlineError('Incorrect email or password', true);
            showInlineError('Incorrect email or password', false);
        }
    }, 1500);
});

// Forgot password link
document.querySelector('.forgot-password-link').addEventListener('click', function(e) {
    e.preventDefault();
    // In a real application, this would redirect to password reset page
    window.location.href = '#forgot-password';
});

// Create account link
document.querySelector('.create-account-link').addEventListener('click', function(e) {
    e.preventDefault();
    // In a real application, this would redirect to registration page
    window.location.href = '#create-account';
});

// Console welcome message for demo
console.log('%c☕ Impulse Coffees - Login Demo', 'color: #8B4513; font-size: 18px; font-weight: bold;');
console.log('%cDemo credentials:', 'color: #333; font-size: 14px;');
console.log('%cEmail: customer@impulse.com', 'color: #666; font-size: 12px;');
console.log('%cPassword: password123', 'color: #666; font-size: 12px;');