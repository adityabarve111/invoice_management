<?php
    // Connect to the database
    include_once "../../model/php/connection.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   // ******************************************************************************************************************************************
   $name = $_POST['shopName'];
   $gstNo = $_POST['gstNo'];
   $ownerName = $_POST['ownerName'];
   $nameLower = strtolower($name);
   $gstNoLower = strtolower($gstNo);
   $ownerLower = strtolower($ownerName);

   // Extract first 2 letters of the name
   $namePart = strtolower(substr($nameLower, 0, 4));

   // Extract first 3 characters of the GST number
   $gstPart = substr($gstNoLower, 0, 3);
   $ownerpart = substr($ownerLower, 0, 4);

   // Generate a random 4-digit number
   $randomNumber = rand(1000, 9999);

   // Combine parts to form the USERID
   $shopId = $namePart . $gstPart . $randomNumber . $ownerpart;
//    $shopIdLower.strtolower($shopId);
// ******************************************************************************************************************************************

    $shopName = $_POST['shopName'];
    $phoneNumber = $_POST['phoneNumber'];
    $address = $_POST['address'];
    $ownerName = $_POST['ownerName'];
    $gstNo = $_POST['gstNo'];
    $password = $_POST['password'];

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $sql1 = "INSERT INTO shop_owner_data (SHOPNAME, SHOPID, OWNERNAME, GSTNO, ADDRESS, PHONENO) VALUES('$shopName', '$shopId', '$ownerName', '$gstNo', '$address', '$phoneNumber')";
    $execute_query1 = mysqli_query($conn,$sql1);
    
    if($execute_query1){
        echo "<script>
        window.alert('User registered');
        </script>";
            $sql2 = "INSERT INTO shop_owner_credentials (SHOPNAME, SHOPID, PASSWORD) VALUES('$shopName', '$shopId', '$hashedPassword')";
            $execute_query2 = mysqli_query($conn,$sql2);
        
            if ($execute_query2) {
                // Second query executed successfully
                echo "Both queries executed successfully.";
            } else {
                // Error executing the second query
                echo "Error executing second query: " . mysqli_error($conn);
            }
    }
    else {
        echo "<script> alert('Error Occoured');</script>";
    }

    // Close connection
$conn->close();
} else {
    header('Location: signup.php');
    exit();
}
?>
