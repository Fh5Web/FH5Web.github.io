<?php 
session_start();

if(isset($_SESSION['username'])) {

include "config.php";

if (isset($_POST['op']) && isset($_POST['np'])
    && isset($_POST['cnp'])) {
    
    if(empty($op)){
      header("Location: changepass.php?error=Old Password is required");
	  exit();
    }else if(empty($np)){
      header("Location: changepass.php?error=New Password is required");
	  exit();
    }else if($np !== $cnp){
      header("Location: changepass.php?error=The confirmation password  does not match");
	  exit();
    }else {
    	$op = md5($op);
    	$np = md5($np);
        $username = $_SESSION['username'];

        $sql = "SELECT password
                FROM user_form WHERE 
                username='$username' AND password='$op'";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) === 1){
        	
        	$sql_2 = "UPDATE users
        	          SET password='$np'
        	          WHERE username='$username'";
        	mysqli_query($conn, $sql_2);
        	header("Location: changepass.php?success=Your password has been changed successfully");
	        exit();

        }else {
        	header("Location: changepass.php?error=Incorrect password");
	        exit();
        }

    }

}else{
	header("Location: changepass.php");
	exit();
}

}else{
     header("Location: login_form.php");
     exit();
}