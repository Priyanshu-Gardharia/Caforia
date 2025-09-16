# 🚀 PHP-Based Registration System for Caforia

## 📋 Overview
This is a complete PHP-based registration and login system that stores user data in JSON files and integrates seamlessly with your existing Caforia coffee website.

## ✨ Features

### 🔐 **Registration System (`register.php`)**
- **User Registration**: Complete signup form with validation
- **Data Storage**: Saves user data to JSON files in `users/` directory
- **Admin Detection**: Automatically detects admin users (priyanshugardharia@gmail.com)
- **Enhanced Fields**: Includes membership level and favorite drink preferences
- **Password Security**: Uses PHP's `password_hash()` for secure password storage
- **Form Validation**: Comprehensive client and server-side validation
- **Error Handling**: User-friendly error messages and success confirmations

### 🔑 **Login System (`login.php`)**
- **Secure Authentication**: Verifies passwords using `password_verify()`
- **Session Management**: PHP sessions for server-side user management
- **Role-Based Access**: Redirects admin users to dashboard, regular users to home
- **JavaScript Compatibility**: Stores user data in localStorage for frontend compatibility
- **Demo Account**: Includes demo credentials for testing

### 🚀 **Demo Login (`demo-login.php`)**
- **Quick Access**: One-click demo login for testing
- **No Credentials**: Instant access without entering email/password
- **Seamless Integration**: Works with existing dashboard and home pages

## 🛠️ **Technical Implementation**

### **File Structure**
```
├── register.php          # User registration form
├── login.php            # User login system
├── demo-login.php       # Quick demo access
├── users/               # User data directory
│   ├── users.json       # Main users database
│   └── [email].json     # Individual user files
└── dashboard.html       # Admin dashboard (existing)
```

### **Data Storage**
- **Individual Files**: Each user gets a separate JSON file
- **Main Database**: All users stored in `users/users.json`
- **Secure Passwords**: Hashed using PHP's built-in functions
- **Session Management**: PHP sessions for server-side authentication

### **Security Features**
- **Password Hashing**: Uses `PASSWORD_DEFAULT` algorithm
- **Input Validation**: Server-side validation for all form inputs
- **SQL Injection Protection**: No database queries (JSON file storage)
- **XSS Protection**: `htmlspecialchars()` for output sanitization

## 🚀 **How to Use**

### **1. Setup Requirements**
- **Web Server**: Apache/Nginx with PHP support
- **PHP Version**: 7.4+ (for modern password hashing)
- **File Permissions**: Ensure `users/` directory is writable

### **2. User Registration**
1. Navigate to `register.php`
2. Fill out the registration form:
   - **Personal Info**: First name, last name, email, phone
   - **Preferences**: Membership level, favorite drink
   - **Security**: Password (with requirements)
3. Submit form
4. User data is saved to JSON files
5. Success message displayed

### **3. User Login**
1. Navigate to `login.php`
2. Enter registered email and password
3. System validates credentials
4. **Admin Users**: Redirected to `dashboard.html`
5. **Regular Users**: Redirected to `index.html`

### **4. Demo Access**
1. Navigate to `demo-login.php`
2. Click "Login as Demo User"
3. Instant access with demo credentials
4. Redirected to home page

## 🔧 **Configuration**

### **Admin Email Setup**
The system automatically detects admin users based on email:
```php
$isAdmin = ($email === 'priyanshugardharia@gmail.com') ? true : false;
```

### **File Permissions**
```bash
# Create users directory
mkdir users
chmod 755 users

# Ensure PHP can write to directory
chown www-data:www-data users  # For Apache
```

### **Customization**
- **Colors**: Modify CSS variables in each PHP file
- **Fields**: Add/remove form fields in `register.php`
- **Validation**: Adjust validation rules in PHP code
- **Redirects**: Change destination URLs after login

## 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Large buttons and form elements
- **Modern UI**: Glassmorphism design with coffee theme
- **Accessibility**: Proper labels and form structure

## 🔄 **Integration with Existing System**

### **Dashboard Compatibility**
- Works with existing `dashboard.html`
- User data stored in localStorage for JavaScript access
- Admin detection for dashboard access control

### **Session Management**
- PHP sessions for server-side authentication
- localStorage for frontend JavaScript compatibility
- Seamless transition between PHP and HTML pages

## 🧪 **Testing**

### **Test Accounts**
1. **Demo User**: `demo@cafforia.com` / `demo123`
2. **Admin User**: Register with `priyanshugardharia@gmail.com`
3. **Regular User**: Register with any other email

### **Test Scenarios**
- ✅ User registration with valid data
- ✅ User registration with invalid data (validation)
- ✅ User login with correct credentials
- ✅ User login with incorrect credentials
- ✅ Admin user access to dashboard
- ✅ Regular user access to home page
- ✅ Demo user quick access

## 🚨 **Troubleshooting**

### **Common Issues**
1. **File Permissions**: Ensure `users/` directory is writable
2. **PHP Version**: Check PHP version (7.4+ required)
3. **Session Issues**: Verify session configuration
4. **Redirect Problems**: Check file paths and URLs

### **Debug Mode**
Add error reporting to PHP files:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## 🔒 **Security Considerations**
- **HTTPS**: Use HTTPS in production
- **File Permissions**: Restrict access to `users/` directory
- **Input Validation**: All inputs are validated server-side
- **Password Policy**: Enforce strong password requirements
- **Session Security**: Configure secure session settings

## 📈 **Future Enhancements**
- **Email Verification**: Send confirmation emails
- **Password Reset**: Forgot password functionality
- **User Profiles**: Edit profile information
- **Activity Logging**: Track user actions
- **Backup System**: Automated data backups

## 🎯 **Quick Start**
1. Upload all PHP files to your web server
2. Ensure PHP is enabled and configured
3. Create `users/` directory with proper permissions
4. Test registration and login functionality
5. Integrate with existing dashboard system

---

**🎉 Your PHP-based registration system is ready to use!**
The system seamlessly integrates with your existing Caforia website while providing secure, scalable user management.
