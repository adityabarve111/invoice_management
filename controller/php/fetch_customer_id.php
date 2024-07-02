<?php
session_start();
include_once '../../model/php/connection.php';
if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
    header("Location: ../../view/html/login.html");
    exit();
}

$shopId = $_SESSION['shopId'];
$sql = "SELECT * FROM customer_data WHERE SHOPID = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $shopId);
$stmt->execute();
$result = $stmt->get_result();

$customers = array();
while ($row = $result->fetch_assoc()) {
    $customers[] = $row;
    $_SESSION['customerId'] = $row['CUSTOMERID'];
}

$stmt->close();
$conn->close();

header('Content-Type: application/json');
echo json_encode($customers);
?>
