// DOM Elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const rememberMeCheckbox = document.getElementById('rememberMe');
const loginBtn = document.querySelector('.login-btn');
const notification = document.getElementById('notification');

// Password toggle functionality
togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle eye icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Input validation with real-time feedback
emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    const inputWrapper = this.parentElement;
    
    if (email && !validateEmail(email)) {
        inputWrapper.style.borderColor = '#f44336';
        this.style.borderColor = '#f44336';
    } else {
        inputWrapper.style.borderColor = '';
        this.style.borderColor = '';
    }
});

passwordInput.addEventListener('input', function() {
    const password = this.value;
    const inputWrapper = this.parentElement;
    
    if (password && !validatePassword(password)) {
        inputWrapper.style.borderColor = '#f44336';
        this.style.borderColor = '#f44336';
    } else {
        inputWrapper.style.borderColor = '';
        this.style.borderColor = '';
    }
});

// Form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;
    
    // Validation
    if (!email) {
        showNotification('Please enter your email address', 'error');
        emailInput.focus();
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        emailInput.focus();
        return;
    }
    
    if (!password) {
        showNotification('Please enter your password', 'error');
        passwordInput.focus();
        return;
    }
    
    if (!validatePassword(password)) {
        showNotification('Password must be at least 6 characters long', 'error');
        passwordInput.focus();
        return;
    }
    
    // Show loading state
    loginBtn.classList.add('loading');
    loginBtn.disabled = true;
    
    // Simulate login process
    setTimeout(() => {
        // Reset loading state
        loginBtn.classList.remove('loading');
        loginBtn.disabled = false;
        
        // Demo login logic (replace with actual authentication)
        if (email === 'demo@example.com' && password === 'password123') {
            showNotification('Login successful! Welcome back!', 'success');
            
            // Save remember me preference
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
                localStorage.setItem('userEmail', email);
            }
            
            // Redirect or perform post-login actions
            setTimeout(() => {
                showNotification('Redirecting to dashboard...', 'info');
                // window.location.href = 'dashboard.html';
            }, 1500);
        } else {
            showNotification('Invalid email or password. Try demo@example.com / password123', 'error');
        }
    }, 2000);
});

// Social login buttons
document.querySelector('.google-btn').addEventListener('click', function() {
    showNotification('Google login integration would go here', 'info');
});

document.querySelector('.facebook-btn').addEventListener('click', function() {
    showNotification('Facebook login integration would go here', 'info');
});

// Forgot password link
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    showNotification('Password reset functionality would go here', 'info');
});

// Sign up link
document.querySelector('.signup-link a').addEventListener('click', function(e) {
    e.preventDefault();
    showNotification('Sign up page would go here', 'info');
});

// Load saved email if remember me was checked
window.addEventListener('load', function() {
    if (localStorage.getItem('rememberMe') === 'true') {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            emailInput.value = savedEmail;
            rememberMeCheckbox.checked = true;
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Enter key to submit form
    if (e.key === 'Enter' && (emailInput === document.activeElement || passwordInput === document.activeElement)) {
        loginForm.dispatchEvent(new Event('submit'));
    }
    
    // Escape key to clear form
    if (e.key === 'Escape') {
        emailInput.value = '';
        passwordInput.value = '';
        emailInput.focus();
    }
});

// Add smooth focus transitions
const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add ripple effect to buttons
document.querySelectorAll('.login-btn, .social-btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Console welcome message
console.log('%c🔐 Login Page Demo', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cDemo credentials:', 'color: #333; font-size: 14px;');
console.log('%cEmail: demo@example.com', 'color: #666; font-size: 12px;');
console.log('%cPassword: password123', 'color: #666; font-size: 12px;');