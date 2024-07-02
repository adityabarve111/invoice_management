<?php
$conn = mysqli_connect("localhost","root","","invoice_mgmt");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//echo "Connected successfully";

// Now you can perform database operations using $conn object
// Example: $result = $conn->query("SELECT * FROM table_name");


?>
