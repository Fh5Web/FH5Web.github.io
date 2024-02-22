<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylephp.css">
</head>
<body>
<div class="form-container">

<form action="" method="post">
    <h3 class="title">login now</h3>
    
    <?php
     if(isset($error)){
        foreach($error as $error){
           echo '<span class="error-msg">'.$error.'</span>';
        }
     }
    ?>
    <input type="email" name="usermail" placeholder="enter your email" class="box" required>
    <input type="password" name="password" placeholder="enter your password" class="box" required>
    <input type="submit" value="login now" class="form-btn" name="submit">
    <p>don't have an account? <a href="register_form.php">register now!</a></p>
</form>

</div>
</body>
</html>