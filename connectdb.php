<?php 
    // connect to the database
    $db = mysqli_connect('localhost', 'root', '', 'jerseyshop');
    // Check connection
    if (!$db) {
    echo("Connection failed: " . mysqli_connect_error());
    }
    #echo "Connected successfully";

?>