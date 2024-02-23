<?php

include 'config.php';

session_start();

if (isset($_POST['submit'])) {

    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = md5($_POST['password']);

    $select = " SELECT * FROM user_form WHERE username = '$username' && password = '$pass'";

    $result = mysqli_query($conn, $select);

    if (mysqli_num_rows($result) > 0) {
        $_SESSION["username"] = $username;
        header("location:../profile.php");
    }else{
        $error[] = "Incorrect username or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="bg">
    <div class="form-container">

    <form action="" method="post">
        <h3>Login</h3>
    
        <?php
        if(isset($error)){
            foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span>';
            }
        }
        ?>
        <p class="title">Username</p>
        <input type="username" name="username" placeholder="Username" class="box" required>
        <p class="title">Password</p>
        <input type="password" name="password" placeholder="Enter your password" class="box" required>
        <input type="submit" value="Login" class="form-btn" name="submit">
        <p class="preg">Don't have an account? <a href="register_form.php">Register Now!</a></p>
    </form>
    </div>
</div>
</body>
</html>