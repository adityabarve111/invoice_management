<?php
session_start();
include_once '../../model/php/connection.php';

// Check if customerId is set in the session
if (!isset($_SESSION['customerId'])) {
    error_log('customerId session variable is missing');
    echo json_encode(['error' => 'customerId session variable is missing']);
    exit();
}

$customerId = $_SESSION['customerId'];

// Debug: Log the customerId
error_log("Customer ID from session: " . $customerId);

$sql = "SELECT * FROM customer_data WHERE CUSTOMERID = '$customerId'";
$result = $conn->query($sql);

// Debug: Check if the query was successful
if ($result === false) {
    error_log("Error: " . $conn->error);
    echo json_encode(['error' => 'Database query failed']);
    exit();
}

$customer = $result->fetch_assoc();

// Debug: Log the fetched customer data
error_log("Customer Data: " . json_encode($customer));

$conn->close();

header('Content-Type: application/json');
echo json_encode($customer);
?>
