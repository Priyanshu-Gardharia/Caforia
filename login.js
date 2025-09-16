// Add notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #f44336 0%, #da190b 100%)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)';
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    // Hide previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Check for demo credentials
    if (email === 'demo@cafforia.com' && password === 'demo123') {
        // Store user data in localStorage
        const userData = {
            name: 'Demo User',
            email: email,
            phone: '+1 (555) 123-4567',
            isLoggedIn: true,
            isAdmin: false
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        
        showNotification('Demo login successful! Redirecting to home...', 'success');
        
        // Redirect to home page after 1 second
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Show success message
            showNotification('Login successful! Redirecting...', 'success');
            
            // Store user data
            const userData = {
                name: email.split('@')[0], // Use part before @ as name
                email: email,
                isLoggedIn: true,
                isAdmin: email === 'priyanshugardharia@gmail.com' // Check if admin
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Redirect based on user role
            setTimeout(() => {
                const redirect = localStorage.getItem('redirectAfterLogin');
                if (redirect) {
                    localStorage.removeItem('redirectAfterLogin');
                    window.location.href = redirect;
                } else if (userData.isAdmin) {
                    // Admin goes to dashboard
                    window.location.href = 'dashboard.html';
                } else {
                    // Regular users go to home page
                    window.location.href = 'index.html';
                }
            }, 1000);
        } else {
            showNotification('Invalid email or password. Please try again.', 'error');
        }
    }
});