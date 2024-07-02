<?php
include '../../model/php/connection.php';
session_start();
if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
    // User is not logged in, redirect to login.html
    header("Location: ../../view/html/login.html");
    exit();
}
// ******************************************************************************************************************************************
    $name = $_POST['customerName'];
    $gstNo = $_POST['gstNo'];

    // Extract first 2 letters of the name
    $namePart = preg_replace('/\s+/', '',strtolower(substr($name, 0, 2)));

    // Extract first 3 characters of the GST number
    $gstPart = preg_replace('/\s+/', '',substr($gstNo, 0, 3));

    // Generate a random 4-digit number
    $randomNumber = rand(1000, 9999);

    // Combine parts to form the USERID
    $userId = $namePart . $gstPart . $randomNumber;
// ******************************************************************************************************************************************
    $username = $_POST['customerName'];
    $phoneno = $_POST['phoneNumber'];
    $address = $_POST['address'];
    $gstno = $_POST['gstNo'];
    $shopId = $_SESSION['shopId'];
    

    $sql = "INSERT INTO customer_data (NAME, CUSTOMERID, ADDRESS, PHONENO, GSTNO, SHOPID) VALUES('$username', '$userId', '$address', '$phoneno', '$gstno', '$shopId' )";
    $execute_query = mysqli_query($conn,$sql);
    if($execute_query){
        echo "<script>
        window.alert('User registered');
        window.location='../../view/html/index.html';
        </script>";
    }
    else {
        echo "<script> alert('Error Occoured');</script>";
    }
    // Close connection
$conn->close();

// else{
//     echo "<script>
//         window.alert('Login First');
//         window.location='../../view/html/login.html';
//         </script>";
// }
include_once("../../view/html/index.html");
?>

