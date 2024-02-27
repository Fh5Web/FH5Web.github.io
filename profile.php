<?php
include 'php/config.php';

session_start();

$columnsel_query = "SELECT * FROM user_form WHERE username = '{$_SESSION["username"]}' AND email = '{$_SESSION["usermail"]}' AND password = '{$_SESSION["password"]}'";
$result = mysqli_query($conn, $columnsel_query);

$imagecol = "SELECT * FROM images WHERE username = '{$_SESSION["username"]}'";

if (isset($_FILES['image'])) {
  $file_name = $_FILES['image']['name'];
  $tempname = $_FILES['image']['tmp_name'];
  $folder = 'php/banner/'.$file_name;

  $bannercol = "UPDATE images SET banner = '$file_name' WHERE username = '{$_SESSION["username"]}'";
}

if ($result) {
    $columnsel = mysqli_fetch_assoc($result);

    if ($columnsel) {
        $date = $columnsel['Date'];
    } else {
        $date = "No date found";
    }
}
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
        <div class="col-12 banner">
            <form class="bannerform" action="" method="post" enctype="multipart/form-data">
                <label id="file-input-label" for="file-input">Change Banner</label>
                <input type="file" id="file-input" name="image">
                <label id="submit-label" for="submit-input"><img src="https://img.icons8.com/material-outlined/24/upload--v1.png"></label>
                <input type="submit" id="submit-input" class="form-btn" name="submit">
            </form>
            <?php
                  $res = mysqli_query($conn, $imagecol);
                  while ($row = mysqli_fetch_assoc($res)) {
              ?>
            <img class="bannerimg" src="php/banner/<?php echo $row['banner']?>">
            <?php
                  }
              ?>
        </div>
        <div class="row col-4 profilediv">
          <h1>Profile</h1>
          <div class="col-4 profileicon">
            <div class="profileimgbr">
              <?php
                  $res = mysqli_query($conn, $imagecol);
                  while ($row = mysqli_fetch_assoc($res)) {
              ?>
              <img class="profileimg" src="php/image/<?php echo $row['file']?>">
              <?php
                  }
              ?>
            </div>
          </div>
          <div class="col-8 profiledata">
            <p class="title">USERNAME</p>
            <div class="datadiv"><?php echo $_SESSION["username"]; ?></div>
            <p class="title">EMAIL</p>
            <div class="datadiv"><?php echo $_SESSION["usermail"]; ?></div>
            <p class="title">DATE JOINED</p>
            <div class="datadiv"><?php echo $date ?></div>
            <p class="title">PASSWORD</p>
            <a class="acpass"><img class="keyicon" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Key-icon.png"> Change Password</a>
          </div>
        </div>
        <div class="row col-8 favscont">
          <h1>Favouries</h1>
          <div class="row">
            <div class="carfavhold col-3">
                  <img class="carfav" src="img/All/74.jpg">
            </div>
            <div class="carfavhold col-3">
                  <img class="carfav" src="img/All/74.jpg">
            </div>
            <div class="carfavhold col-3">
                  <img class="carfav" src="img/All/74.jpg">
            </div>
            <div class="carfavhold col-3">
                  <img class="carfav" src="img/All/74.jpg">
            </div>
            <div class="carfavhold col-3">
                  <img class="carfav" src="img/All/74.jpg">
            </div>
            <div class="carfavhold col-3">
                  <img class="carfav" src="img/All/74.jpg">
            </div>
            <div class="carfavhold col-3">
                  <img class="carfav" src="img/All/74.jpg">
            </div>
            <div class="carfavhold col-3">
                  <img class="carfav" src="img/All/74.jpg">
            </div>
          </div>
        </div>
    </div>
  </div>






  <footer>
  </footer>

  <script src="js/bootstrap.min.js"></script>
  <script src="script.js"></script>
</body>

</html>