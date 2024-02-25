<?php

include 'php/config.php';

if (isset($_POST['submit'])) {
    // Check if a file was selected
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {

        $image = $_FILES['image']['tmp_name'];
        $imageContent = addslashes(file_get_contents($image));

        // Insert image data into the database
        $query = "INSERT INTO user_form (img) VALUES ('$imageContent')";

        $conn->close();
    } else {
        echo "Please select a valid image file.";
    }
}
?>