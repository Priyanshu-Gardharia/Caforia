<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Caforia</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #2c1810 0%, #4a2c1a 50%, #6b3d2a 100%);
            color: #fefcf9;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Coffee background elements */
        .coffee-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }

        .coffee-cup {
            position: absolute;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(139, 69, 19, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            top: 10%;
            right: 5%;
            animation: float 6s ease-in-out infinite;
        }

        .coffee-beans {
            position: absolute;
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(101, 67, 33, 0.08) 0%, transparent 70%);
            border-radius: 50%;
            bottom: 15%;
            left: 8%;
            animation: float 8s ease-in-out infinite reverse;
        }

        .coffee-leaf {
            position: absolute;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(34, 139, 34, 0.06) 0%, transparent 70%);
            border-radius: 50%;
            top: 60%;
            left: 15%;
            animation: float 7s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        header {
            background: rgba(44, 24, 16, 0.95);
            backdrop-filter: blur(10px);
            color: #fefcf9;
            padding: 1rem 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 10;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .nav-container h1 {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: #d7a2a2;
            letter-spacing: 3px;
        }

        .back-link {
            color: #d7a2a2;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            border: 1px solid transparent;
            background: rgba(255, 255, 255, 0.1);
        }

        .back-link:hover {
            color: #fefcf9;
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        .main-content {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: calc(100vh - 100px);
            padding: 2rem;
        }

        .login-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 500px;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .login-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #d7a2a2, #b8860b, #d7a2a2);
            border-radius: 20px 20px 0 0;
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            color: #d7a2a2;
            margin-bottom: 0.5rem;
            letter-spacing: 4px;
        }

        .subtitle {
            text-align: center;
            color: #fefcf9;
            font-size: 1.1rem;
            margin-bottom: 2rem;
            font-family: 'Lora', serif;
            font-style: italic;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #d7a2a2;
            font-weight: 500;
            font-size: 0.9rem;
        }

        .form-group input {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 2px solid rgba(215, 162, 162, 0.3);
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            color: #fefcf9;
            font-size: 1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .form-group input:focus {
            outline: none;
            border-color: #d7a2a2;
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 0 20px rgba(215, 162, 162, 0.3);
        }

        .form-group input::placeholder {
            color: rgba(254, 252, 249, 0.6);
        }

        .login-btn {
            width: 100%;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #d7a2a2 0%, #b8860b 100%);
            color: #2c1810;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(215, 162, 162, 0.3);
            margin-bottom: 1.5rem;
        }

        .login-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(215, 162, 162, 0.4);
            background: linear-gradient(135deg, #e6b8b8 0%, #c8960b 100%);
        }

        .login-btn:active {
            transform: translateY(-1px);
        }

        .demo-info {
            background: rgba(215, 162, 162, 0.1);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid rgba(215, 162, 162, 0.2);
            margin-bottom: 1.5rem;
        }

        .demo-info h4 {
            color: #d7a2a2;
            margin-bottom: 1rem;
            font-size: 1rem;
        }

        .demo-info p {
            color: #fefcf9;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .demo-credentials {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.8rem;
            border-radius: 8px;
            font-family: monospace;
            font-size: 0.85rem;
            color: #d7a2a2;
            border: 1px solid rgba(215, 162, 162, 0.3);
        }

        .signup-link {
            text-align: center;
            color: #fefcf9;
            margin-bottom: 1.5rem;
        }

        .signup-link a {
            color: #d7a2a2;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .signup-link a:hover {
            color: #fefcf9;
        }

        .message {
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
            text-align: center;
            font-weight: 500;
        }

        .success-message {
            background: rgba(76, 175, 80, 0.2);
            border: 1px solid rgba(76, 175, 80, 0.4);
            color: #4CAF50;
        }

        .error-message {
            background: rgba(244, 67, 54, 0.2);
            border: 1px solid rgba(244, 67, 54, 0.4);
            color: #f44336;
        }

        .info-message {
            background: rgba(33, 150, 243, 0.2);
            border: 1px solid rgba(33, 150, 243, 0.4);
            color: #2196F3;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .login-container {
                padding: 2rem;
                margin: 1rem;
            }

            .nav-container {
                padding: 0 1rem;
            }

            .nav-container h1 {
                font-size: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .login-container {
                padding: 1.5rem;
            }

            .logo {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Coffee background elements -->
    <div class="coffee-bg">
        <div class="coffee-cup"></div>
        <div class="coffee-beans"></div>
        <div class="coffee-leaf"></div>
    </div>

    <header>
        <div class="nav-container">
            <h1>C A F O R I A</h1>
            <a href="index.html" class="back-link">← Back to Home</a>
        </div>
    </header>

    <main class="main-content">
        <div class="login-container">
            <div class="logo">CAFORIA</div>
            <div class="subtitle">Welcome Back to The Art of Coffee</div>
            
            <?php
            session_start();
            
            // Process login form
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $email = trim($_POST['email']);
                $password = $_POST['password'];
                
                $errors = [];
                
                // Validation
                if (empty($email)) $errors[] = "Email is required";
                if (empty($password)) $errors[] = "Password is required";
                
                if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $errors[] = "Invalid email format";
                }
                
                // If no errors, check credentials
                if (empty($errors)) {
                    $usersFile = 'users/users.json';
                    
                    if (file_exists($usersFile)) {
                        $users = json_decode(file_get_contents($usersFile), true) ?: [];
                        
                        $user = null;
                        foreach ($users as $u) {
                            if ($u['email'] === $email && password_verify($password, $u['password'])) {
                                $user = $u;
                                break;
                            }
                        }
                        
                        if ($user) {
                            // Check if admin
                            $isAdmin = ($email === 'priyanshugardharia@gmail.com');
                            
                            // Store user data in session
                            $_SESSION['userData'] = [
                                'name' => $user['firstName'] . ' ' . $user['lastName'],
                                'email' => $user['email'],
                                'phone' => $user['phone'],
                                'isLoggedIn' => true,
                                'isAdmin' => $isAdmin,
                                'membershipLevel' => $user['membershipLevel'],
                                'favoriteDrink' => $user['favoriteDrink']
                            ];
                            
                            // Store in localStorage equivalent (for JavaScript compatibility)
                            echo '<script>
                                localStorage.setItem("userData", JSON.stringify(' . json_encode($_SESSION['userData']) . '));
                            </script>';
                            
                            echo '<div class="message success-message">✅ Login successful! Redirecting...</div>';
                            
                            // Redirect based on user role
                            if ($isAdmin) {
                                echo '<script>setTimeout(() => { window.location.href = "dashboard.html"; }, 1500);</script>';
                            } else {
                                echo '<script>setTimeout(() => { window.location.href = "index.html"; }, 1500);</script>';
                            }
                        } else {
                            $errors[] = "Invalid email or password";
                        }
                    } else {
                        $errors[] = "No users registered yet. Please sign up first.";
                    }
                }
                
                // Display errors
                if (!empty($errors)) {
                    echo '<div class="message error-message">❌ ' . implode('<br>', $errors) . '</div>';
                }
            }
            ?>
            
            <form method="POST" action="">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>">
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password">
                </div>
                
                <button type="submit" class="login-btn">Sign In</button>
            </form>
            
            <div class="demo-info">
                <h4>💡 Demo Account Available</h4>
                <p>You can test the system with these demo credentials:</p>
                <div class="demo-credentials">
                    Email: demo@cafforia.com<br>
                    Password: demo123
                </div>
            </div>
            
            <div class="signup-link">
                Don't have an account? <a href="register.php">Sign up here</a>
            </div>
        </div>
    </main>
</body>
</html>
