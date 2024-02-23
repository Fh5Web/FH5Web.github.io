<?php 

include 'php/config.php';

session_start();

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="profile.css">
    <link rel="stylesheet" href="footer/footer.css">
    <link rel="stylesheet" href="header/header.css">
    <link rel="stylesheet" href="loader/loader.css">
    <link rel="icon" href="https://i.redd.it/6o3morbndos81.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css">

    <script src="https://kit.fontawesome.com/6dd17b7bf7.js" crossorigin="anonymous"></script>
    
    <title>FH5 Web</title>
</head>

<body>
  <div class="topnav" id="myTopnav">
  </div>
  
  <div class="loadwind" id="loader">
  </div>

  <div class="container-fluid">
    <div class="row holderrr">
        <div class="col-12 banner">BANNER</div>
        <div class="row col-3 profilediv">
            <div class="col-3">Profile</div>
            <div class="col-9"><?php echo $_SESSION["username"]; ?></div>
        </div>
        <div class="row col-9 favscont">

        </div>
    </div>
  </div>






  <footer>
  </footer>

  <script src="js/bootstrap.min.js"></script>
  <script src="script.js"></script>
</body>

</html>