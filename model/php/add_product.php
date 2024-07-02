<?php
session_start();
include_once '../../model/php/connection.php';
if(isset($_POST['submit'])){
    // ******************************************************************************************************************************************
    //generate product id preg_replace('/\s+/', '', $nameLower);
    $name = $_POST['productName'];
    $type = $_POST['productType'];
    $nameLower = preg_replace('/\s+/', '',strtolower($name));
    $typeLower = preg_replace('/\s+/', '',strtolower($type));
    // $nametrim = trim($nameLower);
    // $typetrim = trim($typeLower);

    // Extract first 2 letters of the name
    $namePart = strtolower(substr($nameLower, 0, 4));

    // Extract first 3 characters of the GST number
    $typePart = substr($typeLower, 0, 4);

    // Generate a random 4-digit number
    $randomNumber = rand(1000, 9999);

    // Combine parts to form the USERID
    $productId = $namePart . $typePart . $randomNumber;
// ******************************************************************************************************************************************
    $productname = $_POST['productName'];
    $producttype = $_POST['productType'];
    $dateofmanufacture = $_POST['dateOfManufacture'];
    $dateofexpiry = $_POST['dateOfExpiry'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $shopid = $_SESSION['shopId'];
    $sql = "INSERT INTO product (NAME, TYPE, DATEOFMANUFACTURE, DATEOFEXPIRY, PRODUCTID, QUANTITY, PRICE, DESCRIPTION, SHOPID) VALUES ('$productname', '$producttype', '$dateofmanufacture', '$dateofexpiry', '$productId', '$quantity', '$price', '$description', '$shopid')";
    $execute_query = mysqli_query($conn, $sql);
    if($execute_query){
        echo "<script>
        alert('Product added successfully');
        window.location.href='../../view/html/index.html';
        </script>";
    }
    else{
        echo "<script>
        alert('Error adding Product');
        window.location.href='../../model/php/add_product.php';
        </script>";
    }
       
}
?>