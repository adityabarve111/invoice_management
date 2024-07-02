<?php
include_once '../../model/php/connection.php';
$customerId = $_GET['customerId'];

$sql = "SELECT * FROM customer_data WHERE CUSTOMERID = '$customerId'";
$result = $conn->query($sql);

$customer = $result->fetch_assoc();

$conn->close();

header('Content-Type: application/json');
echo json_encode($customer);
?>
