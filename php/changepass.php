<?php
session_start();

if(isset($_SESSION['username'])) {

?>

<!doctype html>
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
    <form action="change-p.php" method="post">
        <h3>Change Password</h3>
    
        <?php
        if(isset($error)){
            foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span>';
            }
        }
        ?>

        <p class="title">Old Password</p>
        <input type="password" name="op" placeholder="Enter old password" class="box" required>

        <p class="title">New Password</p>
        <input type="password" name="np" placeholder="Enter new password" class="box" required>

        <p class="title">Confirm New Password</p>
        <input type="password" name="cnp" placeholder="Confirm new password" class="box" required>

        <input type="submit" value="Change" class="form-btn" name="submit">
        <p class="preg">Don't want to change your password? <a href="login_form.php">Log In</a></p>
    </form>
    </div>
</div>

    <script src="js/bootstrap.min.js"></script>
    <script src="script.js"></script>
</body>

</html>

<?php
}else{
    header("location: login_form.php");
    exit();
}
?>
