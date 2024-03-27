<?php

include 'config.php';

session_start();

if (isset($_POST['submit'])) {
    $email = mysqli_real_escape_string($conn, $_POST['usermail']);
    $pass = md5($_POST['password']);
    $cpass = md5($_POST['cpassword']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $date = date("Y/m/d");


    $file_name = $_FILES['image']['name'];
    $tempname = $_FILES['image']['tmp_name'];
    $folder = 'image/'.$file_name;

    $query = mysqli_query($conn, "INSERT INTO images (file, username) VALUES ('$file_name', '$username')");

    if (move_uploaded_file($tempname, $folder)) {

    }

    $select = " SELECT * FROM user_form WHERE username = '$username' && email = '$email' && password = '$pass' && date = $date";

    $result = mysqli_query($conn, $select);

    if (mysqli_num_rows($result) > 0) {
        $error[] = 'User already exists';
    }else{
        if ($pass != $cpass) {
            $error[] = 'Password not matched!';
        } else {
            $insert = "INSERT INTO user_form(username, email, password, date) VALUES('$username', '$email', '$pass', '$date')";

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
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="style.css">
    
    <title>FH5 Web</title>
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

        <label id="file-input-label" for="input">Set Profile Icon</label>
        <input id="input" type="file" name="image" onchange="showImage()">
        <img id="img" src="" alt="">

        <input type="submit" value="Register" class="form-btn" name="submit">
        <p class="preg">Already have an account? <a href="login_form.php">Log In Now!</a></p>
    </form>
    </div>
</div>
<script src="../js/bootstrap.min.js"></script>
<script src="script.js"></script>
</body>
</html>