<?php
session_start();
include_once '../../model/php/connection.php';
if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
    header("Location: ../../view/html/login.html");
    exit();
}

$shopId = $_SESSION['shopId'];
$sql = "SELECT * FROM product WHERE SHOPID = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $shopId);
$stmt->execute();
$result = $stmt->get_result();

$products = array();
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

$stmt->close();
$conn->close();
//var_dump($products);    // for debugging
header('Content-Type: application/json');
echo json_encode($products);

?>
