<?php

include 'config.php';

session_start();

if (isset($_POST['submit'])) {

    $email = mysqli_real_escape_string($conn, $_POST['usermail']);
    $pass = md5($_POST['password']);
    $cpass = md5($_POST['cpassword']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $date = date("Y/m/d");

    $select = " SELECT * FROM user_form WHERE username = '$username' && email = '$email' && password = '$pass' && date = $date";

    $result = mysqli_query($conn, $select);

    if (mysqli_num_rows($result) > 0) {
        $error[] = 'User already exists';
    }else{
        if ($pass != $cpass) {
            $error[] = 'Password not matched!';
        } else {
            $image = $_FILES['image']['tmp_name'];
            $imageContent = addslashes(file_get_contents($image));

            $insert = "INSERT INTO user_form(username, email, password, date, img) VALUES('$username', '$email', '$pass', '$date', '$imageContent')";

            if (mysqli_query($conn, $insert)) {
                header('location: login_form.php');
            } else {
                $error[] = 'Error uploading data: ' . mysqli_error($conn);
            }
        }
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

    <form action="" method="post" enctype="multipart/form-data">
        <h3>Register</h3>
    
        <?php
        if(isset($error)){
            foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span>';
            }
        }
        ?>
        <p class="title">Username</p>
        <input type="username" name="username" placeholder="Username" class="box" required>
        <p class="title">Email</p>
        <input type="email" name="usermail" placeholder="Enter your email" class="box" required>
        <p class="title">Password</p>
        <input type="password" name="password" placeholder="Enter your password" class="box" required>
        <p class="title">Confirm Password</p>
        <input type="password" name="cpassword" placeholder="Confirm your password" class="box" required>
        <label for="image">Choose Image:</label>
        <input type="file" name="image" id="image" accept="image/*">

        <input type="submit" value="Register" class="form-btn" name="submit">
        <p class="preg">Already have an account? <a href="login_form.php">Log In Now!</a></p>
    </form>
    </div>
</div>
</body>
</html>