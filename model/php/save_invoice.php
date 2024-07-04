<?php
session_start();
include_once("../../model/php/connection.php");

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Ensure all necessary data is available
    if (!isset($_SESSION['shopId'])) {
        die('Missing session data. Please try again.');
    }

    // Generate invoice ID
    $invoiceId = uniqid('INV-');
    // Retrieve and sanitize form data
    $customerId = $_SESSION['customerId'];
    $shopId = $_SESSION['shopId'];

    // Check if productId and quantity arrays are set
    if (isset($_POST['productId']) && isset($_POST['quantity'])) {
        $productIds = $_POST['productId']; // This is an array of product IDs
        $quantities = $_POST['quantity']; // This is an array of quantities
    } else {
        die('Missing product data. Please try again.');
    }

    // Validate and sanitize other fields if necessary
    $totalAmount = isset($_POST['totalAmount']) ? $_POST['totalAmount'] : 0;
    $paymentStatus = isset($_POST['paymentStatus']) ? $_POST['paymentStatus'] : '';

    // Calculate total amount and check product quantities
    $totalAmount = 0;
    $products = [];
    foreach ($productIds as $index => $productId) {
        $quantity = $quantities[$index];
        $sql = "SELECT NAME, PRICE, QUANTITY FROM product WHERE PRODUCTID = '$productId'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if ($quantity > $row['QUANTITY']) {
                echo "Error: Quantity for product {$row['NAME']} (ID: $productId) exceeds available stock.";
                exit();
            }
            $totalAmount += $row['PRICE'] * $quantity;
            $products[] = [
                'PRODUCTID' => $productId,
                'NAME' => $row['NAME'],
                'PRICE' => $row['PRICE'],
                'quantity' => $quantity
            ];
        }
    }

    // Insert invoice data into the invoice table
    $sql = "INSERT INTO invoice (INVOICEID, CUSTOMERID, SHOPID, TOTALAMOUNT, PAYMENTSTATUS) VALUES ('$invoiceId', '$customerId', '$shopId', '$totalAmount', '$paymentStatus')";

    if ($conn->query($sql) === TRUE) {
        // Insert products related to the invoice
        foreach ($products as $product) {
            $sqlProduct = "INSERT INTO invoice_products (INVOICEID, PRODUCTID, QUANTITY) VALUES ('$invoiceId', '{$product['PRODUCTID']}', '{$product['quantity']}')";
            $conn->query($sqlProduct);

            // Update product quantity in the product table
            $sqlUpdate = "UPDATE product SET QUANTITY = QUANTITY - {$product['quantity']} WHERE PRODUCTID = '{$product['PRODUCTID']}'";
            $conn->query($sqlUpdate);
        }

        // Output success message or redirect to invoice view page
        echo "Invoice generated successfully";

    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
