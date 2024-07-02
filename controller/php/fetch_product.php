<?php
session_start();
//$shopId = $_GET['shopId'];
if (isset($_SESSION['shopId'])) {
    $shopId = $_SESSION['shopId'];


include_once '../../model/php/connection.php';

$sql = "SELECT * FROM product WHERE SHOPID = '$shopId'";
$result = $conn->query($sql);

$products = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($products);
}else {
    echo json_encode([]);
}
?>
