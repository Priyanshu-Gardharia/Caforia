<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Caforia</title>
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

        .register-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 600px;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .register-container::before {
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

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
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

        .form-group input,
        .form-group select {
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

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #d7a2a2;
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 0 20px rgba(215, 162, 162, 0.3);
        }

        .form-group input::placeholder {
            color: rgba(254, 252, 249, 0.6);
        }

        .register-btn {
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

        .register-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(215, 162, 162, 0.4);
            background: linear-gradient(135deg, #e6b8b8 0%, #c8960b 100%);
        }

        .register-btn:active {
            transform: translateY(-1px);
        }

        .login-link {
            text-align: center;
            color: #fefcf9;
            margin-bottom: 1.5rem;
        }

        .login-link a {
            color: #d7a2a2;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .login-link a:hover {
            color: #fefcf9;
        }

        .password-requirements {
            background: rgba(215, 162, 162, 0.1);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid rgba(215, 162, 162, 0.2);
        }

        .password-requirements h4 {
            color: #d7a2a2;
            margin-bottom: 1rem;
            font-size: 1rem;
        }

        .password-requirements ul {
            list-style: none;
            padding-left: 0;
        }

        .password-requirements li {
            color: #fefcf9;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            padding-left: 1.5rem;
            position: relative;
        }

        .password-requirements li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #d7a2a2;
            font-weight: bold;
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
            .register-container {
                padding: 2rem;
                margin: 1rem;
            }

            .form-row {
                grid-template-columns: 1fr;
            }

            .nav-container {
                padding: 0 1rem;
            }

            .nav-container h1 {
                font-size: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .register-container {
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
        <div class="register-container">
            <div class="logo">CAFORIA</div>
            <div class="subtitle">Join The Art of Coffee</div>
            
            <?php
            // Process form submission
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $firstName = trim($_POST['firstName']);
                $lastName = trim($_POST['lastName']);
                $email = trim($_POST['email']);
                $phone = trim($_POST['phone']);
                $password = $_POST['password'];
                $confirmPassword = $_POST['confirmPassword'];
                $membershipLevel = $_POST['membershipLevel'];
                $favoriteDrink = $_POST['favoriteDrink'];
                
                $errors = [];
                
                // Validation
                if (empty($firstName)) $errors[] = "First name is required";
                if (empty($lastName)) $errors[] = "Last name is required";
                if (empty($email)) $errors[] = "Email is required";
                if (empty($phone)) $errors[] = "Phone number is required";
                if (empty($password)) $errors[] = "Password is required";
                if (empty($confirmPassword)) $errors[] = "Password confirmation is required";
                
                if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $errors[] = "Invalid email format";
                }
                
                if (strlen($password) < 8) {
                    $errors[] = "Password must be at least 8 characters long";
                }
                
                if (!preg_match("/[A-Z]/", $password)) {
                    $errors[] = "Password must contain at least one uppercase letter";
                }
                
                if (!preg_match("/[a-z]/", $password)) {
                    $errors[] = "Password must contain at least one lowercase letter";
                }
                
                if (!preg_match("/[0-9]/", $password)) {
                    $errors[] = "Password must contain at least one number";
                }
                
                if ($password !== $confirmPassword) {
                    $errors[] = "Passwords do not match";
                }
                
                // If no errors, save to file
                if (empty($errors)) {
                    $userData = [
                        'firstName' => $firstName,
                        'lastName' => $lastName,
                        'email' => $email,
                        'phone' => $phone,
                        'password' => password_hash($password, PASSWORD_DEFAULT),
                        'membershipLevel' => $membershipLevel,
                        'favoriteDrink' => $favoriteDrink,
                        'registrationDate' => date('Y-m-d H:i:s'),
                        'isAdmin' => ($email === 'priyanshugardharia@gmail.com') ? true : false
                    ];
                    
                    // Create users directory if it doesn't exist
                    if (!is_dir('users')) {
                        mkdir('users', 0755, true);
                    }
                    
                    // Save user data to individual file
                    $userFile = 'users/' . preg_replace('/[^a-zA-Z0-9]/', '_', $email) . '.json';
                    if (file_put_contents($userFile, json_encode($userData, JSON_PRETTY_PRINT))) {
                        // Also append to main users file
                        $usersFile = 'users/users.json';
                        $allUsers = [];
                        if (file_exists($usersFile)) {
                            $allUsers = json_decode(file_get_contents($usersFile), true) ?: [];
                        }
                        $allUsers[] = $userData;
                        file_put_contents($usersFile, json_encode($allUsers, JSON_PRETTY_PRINT));
                        
                        echo '<div class="message success-message">✅ Registration successful! Your account has been created.</div>';
                        echo '<div class="message info-message">📧 You can now login with your email and password.</div>';
                    } else {
                        echo '<div class="message error-message">❌ Error saving registration data. Please try again.</div>';
                    }
                } else {
                    echo '<div class="message error-message">❌ ' . implode('<br>', $errors) . '</div>';
                }
            }
            ?>
            
            <form method="POST" action="">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required placeholder="Enter first name" value="<?php echo isset($_POST['firstName']) ? htmlspecialchars($_POST['firstName']) : ''; ?>">
                    </div>
                    
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required placeholder="Enter last name" value="<?php echo isset($_POST['lastName']) ? htmlspecialchars($_POST['lastName']) : ''; ?>">
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>">
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" value="<?php echo isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : ''; ?>">
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="membershipLevel">Membership Level</label>
                        <select id="membershipLevel" name="membershipLevel" required>
                            <option value="">Select level</option>
                            <option value="Bronze" <?php echo (isset($_POST['membershipLevel']) && $_POST['membershipLevel'] === 'Bronze') ? 'selected' : ''; ?>>Bronze</option>
                            <option value="Silver" <?php echo (isset($_POST['membershipLevel']) && $_POST['membershipLevel'] === 'Silver') ? 'selected' : ''; ?>>Silver</option>
                            <option value="Gold" <?php echo (isset($_POST['membershipLevel']) && $_POST['membershipLevel'] === 'Gold') ? 'selected' : ''; ?>>Gold</option>
                            <option value="Platinum" <?php echo (isset($_POST['membershipLevel']) && $_POST['membershipLevel'] === 'Platinum') ? 'selected' : ''; ?>>Platinum</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="favoriteDrink">Favorite Drink</label>
                        <select id="favoriteDrink" name="favoriteDrink" required>
                            <option value="">Select drink</option>
                            <option value="Espresso" <?php echo (isset($_POST['favoriteDrink']) && $_POST['favoriteDrink'] === 'Espresso') ? 'selected' : ''; ?>>Espresso</option>
                            <option value="Cappuccino" <?php echo (isset($_POST['favoriteDrink']) && $_POST['favoriteDrink'] === 'Cappuccino') ? 'selected' : ''; ?>>Cappuccino</option>
                            <option value="Latte" <?php echo (isset($_POST['favoriteDrink']) && $_POST['favoriteDrink'] === 'Latte') ? 'selected' : ''; ?>>Latte</option>
                            <option value="Americano" <?php echo (isset($_POST['favoriteDrink']) && $_POST['favoriteDrink'] === 'Americano') ? 'selected' : ''; ?>>Americano</option>
                            <option value="Mocha" <?php echo (isset($_POST['favoriteDrink']) && $_POST['favoriteDrink'] === 'Mocha') ? 'selected' : ''; ?>>Mocha</option>
                            <option value="Cold Brew" <?php echo (isset($_POST['favoriteDrink']) && $_POST['favoriteDrink']) ? 'selected' : ''; ?>>Cold Brew</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Create a password">
                </div>
                
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm your password">
                </div>
                
                <button type="submit" class="register-btn">Create Account</button>
            </form>
            
            <div class="login-link">
                Already have an account? <a href="login.html">Sign in here</a>
            </div>
            
            <div class="password-requirements">
                <h4>Password Requirements:</h4>
                <ul>
                    <li>At least 8 characters long</li>
                    <li>Contains at least one uppercase letter</li>
                    <li>Contains at least one lowercase letter</li>
                    <li>Contains at least one number</li>
                </ul>
            </div>
        </div>
    </main>
</body>
</html>
