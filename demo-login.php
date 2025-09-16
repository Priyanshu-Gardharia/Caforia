<?php
session_start();

// Demo user credentials
$demoEmail = 'demo@cafforia.com';
$demoPassword = 'demo123';

// Check if demo login is requested
if (isset($_POST['demo_login'])) {
    // Store demo user data in session
    $_SESSION['userData'] = [
        'name' => 'Demo User',
        'email' => $demoEmail,
        'phone' => '+1 (555) 123-4567',
        'isLoggedIn' => true,
        'isAdmin' => false,
        'membershipLevel' => 'Gold',
        'favoriteDrink' => 'Cappuccino'
    ];
    
    // Store in localStorage equivalent (for JavaScript compatibility)
    echo '<script>
        localStorage.setItem("userData", JSON.stringify(' . json_encode($_SESSION['userData']) . '));
        window.location.href = "index.html";
    </script>';
    exit;
}

// Check if user is already logged in
if (isset($_SESSION['userData']) && $_SESSION['userData']['isLoggedIn']) {
    $userData = $_SESSION['userData'];
    
    if ($userData['isAdmin']) {
        header('Location: dashboard.html');
    } else {
        header('Location: index.html');
    }
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Login - Caforia</title>
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
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }

        .demo-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 500px;
            width: 100%;
            text-align: center;
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #d7a2a2;
            margin-bottom: 1rem;
            letter-spacing: 4px;
        }

        .subtitle {
            color: #fefcf9;
            font-size: 1.1rem;
            margin-bottom: 2rem;
            font-family: 'Lora', serif;
            font-style: italic;
        }

        .demo-info {
            background: rgba(215, 162, 162, 0.1);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid rgba(215, 162, 162, 0.2);
            margin-bottom: 2rem;
        }

        .demo-info h4 {
            color: #d7a2a2;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .demo-credentials {
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem;
            border-radius: 8px;
            font-family: monospace;
            font-size: 0.9rem;
            color: #d7a2a2;
            border: 1px solid rgba(215, 162, 162, 0.3);
            margin-bottom: 1rem;
        }

        .demo-btn {
            background: linear-gradient(135deg, #d7a2a2 0%, #b8860b 100%);
            color: #2c1810;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(215, 162, 162, 0.3);
            padding: 1rem 2rem;
            margin-bottom: 1.5rem;
            width: 100%;
        }

        .demo-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(215, 162, 162, 0.4);
            background: linear-gradient(135deg, #e6b8b8 0%, #c8960b 100%);
        }

        .links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .link {
            color: #d7a2a2;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            border: 1px solid transparent;
            background: rgba(255, 255, 255, 0.1);
        }

        .link:hover {
            color: #fefcf9;
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        @media (max-width: 480px) {
            .demo-container {
                padding: 2rem;
            }

            .logo {
                font-size: 2rem;
            }

            .links {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="demo-container">
        <div class="logo">CAFORIA</div>
        <div class="subtitle">Quick Demo Access</div>
        
        <div class="demo-info">
            <h4>🚀 Demo Account</h4>
            <p>Experience the system with pre-configured demo credentials:</p>
            <div class="demo-credentials">
                Email: demo@cafforia.com<br>
                Password: demo123
            </div>
        </div>
        
        <form method="POST" action="">
            <button type="submit" name="demo_login" class="demo-btn">🚀 Login as Demo User</button>
        </form>
        
        <div class="links">
            <a href="register.php" class="link">📝 Create Account</a>
            <a href="login.php" class="link">🔐 Full Login</a>
            <a href="index.html" class="link">🏠 Go Home</a>
        </div>
    </div>
</body>
</html>
