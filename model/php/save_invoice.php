<?php
session_start();
include_once '../../model/php/connection.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ******************************************************************************************************************************************
   $custid = $_POST['customerId'];
   $gstNo = $_POST['customerGstNo'];
   $customerPhone = $_POST['customerPhone'];
   $custidLower = strtolower($custid);
   $gstNoLower = strtolower($gstNo);
   $customerPhoneLower = strtolower($customerPhone);

   // Extract first 2 letters of the name
   $customerIdPart = strtolower(substr($custidLower, 0, 4));

   // Extract first 3 characters of the GST number
   $gstPart = substr($gstNoLower, 0, 3);
   $customerPhonepart = substr($customerPhoneLower, 0, 4);

   // Generate a random 4-digit number
   $randomNumber = rand(1000, 9999);

   // Combine parts to form the USERID
   $invoiceId = $customerIdPart . $gstPart . $randomNumber . $customerPhonepart;
// ******************************************************************************************************************************************
    // Retrieve and sanitize form data
    $customerId = $_POST['customerId'];
    $shopId = $_POST['shopId'];
    $productIds = $_POST['productId'];
    $quantities = $_POST['quantity'];
    $totalAmount = $_POST['totalAmount'];
    $paymentStatus = $_POST['paymentStatus'];

    // Insert invoice data into the invoice table
    $sql = "INSERT INTO invoice (INVOICEID, CUSTOMERID, SHOPID, TOTALAMOUNT, PAYMENTSTATUS) VALUES ('$invoiceId', '$customerId', '$shopId', '$totalAmount', '$paymentStatus')";

    if ($conn->query($sql) === TRUE) {
        foreach ($productIds as $index => $productId) {
            $quantity = $quantities[$index];
            // Check product quantity
            $sqlCheck = "SELECT QUANTITY FROM product WHERE PRODUCTID = '$productId' AND SHOPID = '$shopId'";
            $result = $conn->query($sqlCheck);
            $row = $result->fetch_assoc();
            if ($quantity > $row['QUANTITY']) {
                echo "Error: Quantity for product $productId exceeds available stock.";
                exit();
            }

            // Insert products related to the invoice
            $sqlProduct = "INSERT INTO invoice_products (INVOICEID, PRODUCTID, QUANTITY) VALUES ('$invoiceId', '$productId', '$quantity')";
            $conn->query($sqlProduct);
            
            // Update product quantity in stock
            $newQuantity = $row['QUANTITY'] - $quantity;
            $sqlUpdate = "UPDATE product SET QUANTITY = '$newQuantity' WHERE PRODUCTID = '$productId' AND SHOPID = '$shopId'";
            $conn->query($sqlUpdate);
        }
        echo "<script>alert('Invoice generated successfully')</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
